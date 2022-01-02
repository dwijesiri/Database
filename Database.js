document.getElementById("shed").style.display = "block";
// Variables for code
var edit = document.getElementById("edit");
var evt;
var editd = document.getElementById("delete");
var box = document.getElementById('box');
var btn = document.getElementById('btn');
var mod = document.getElementById('text');
var back = document.getElementById('sp');
var sub = document.getElementById('sub');
var out = document.getElementById('out');
var exit = document.getElementById("ex");
var inp = document.getElementById("bar");
var search = document.getElementById("sir");
var mem = [];
var count = localStorage.getItem("cnt");
var dat = [];
var fun1;
var lock;
var paswon;
var secret = document.getElementById("lock");
var lev = 1;
var dis = document.getElementById("cov");
var conf = 0;

document.getElementById("int").addEventListener("keyup",function () {
    if (this.value.match(/[<>]/)) {
        this.value = this.value.replace(/[<>]*/g,"");
        window.alert("Invalid Character");
    }
});

document.getElementById("tex").addEventListener("keyup",function () {
    if (this.value.match(/[<>]/)) {
        this.value = this.value.replace(/[<>]*/g,"");
        window.alert("Invalid Character");
    }
});

var colgo = 1;

window.addEventListener("resize", function() {
    var wid = window.innerWidth;
    var hei = window.innerHeight;
    if(wid < 150 && colgo == 1) {
        window.alert("Larger Screen Required.");
        colgo = 0;
    } else if (hei < 170 && colgo == 1) {
        window.alert("Larger Screen Required.")
        colgo = 0;
    } else if (wid > 1500 && colgo == 1) {
        window.alert("Smaller Screen Required.")
        colgo = 0;
    } else if (hei > 1500 && colgo == 1) {
        window.alert("Smaller Screen Required.")
        colgo = 0;
    } else {
        colgo = 1;
    }
});


// Load() loads local storage items 
// lock is for a password and data contains innerHTML for the output element

edit.addEventListener("click", function() {
    conf = 1;
    document.getElementById("tex").value = document.querySelectorAll(".head")[kurxe].textContent.slice(1,document.querySelectorAll(".head")[kurxe].textContent.length);
    document.getElementById("int").value = document.querySelectorAll(".body")[kurxe].textContent;
    box.style.display="none";
    mod.style.display="block";
    document.getElementById("editor").style.display = "none";
    document.body.style.backgroundColor = "rgb(50,50,50)";
    document.querySelector(".i").addEventListener('click', egg);
    document.querySelector(".i").textContent = "Edit";
});

function egg() {
    box.style.display="flex";
    mod.style.display="none";
    conf = 0;
    document.body.removeEventListener('click',egg);

};

document.getElementById("chg").addEventListener("click",function() {
    localStorage.removeItem("lock");
    window.location.reload(true);
})

search.addEventListener("click", function() {
    if(lev == 1) {
        inp.style.display = "block";
        lev = 2;
        dis.style.height = "calc(100vh - 40px)";
    } else {
        inp.style.display = "none";
        lev = 1;
        dis.style.height = "calc(100vh - 4px)";
    }
})

var load = function() {
    fun1 = localStorage.getItem('data');
    lock = localStorage.getItem("lock");

    // Sets and Checks the Local Storage Data and Lock Entries

    if (count == null) {
        localStorage.setItem('cnt',parseInt("0"));
    }
    if( fun1 == null) {
        localStorage.setItem('data',"");
    }
    if (lock != null){
        funct();
    }
    if(lock == null){
        function set() {
            box.style.display = "none";
            document.getElementById("password").textContent = "New Password";
            document.body.style.backgroundColor = "black";
            document.getElementById("pass").style.display = "block";

        }
        set();
        paswon = function(event) {
            if(event.keyCode === 13) {
            var sunk = document.getElementById("pa").value;
            localStorage.setItem("lock",sunk);
            box.style.display = "flex";
            document.getElementById("pass").style.display = "none";
            out.innerHTML = localStorage.getItem('data');
            }
        };
        document.getElementById("pa").addEventListener("keyup",paswon);
    }
}

// Loads diary entries

var funct = function() {
        document.getElementById("pa").removeEventListener("keyup",paswon);
        box.style.display = "none";
        document.body.style.backgroundColor = "black";
        document.getElementById("pass").style.display = "block";
        document.getElementById("password").textContent = "Password";

    function passw(event){
    if (event.keyCode === 13) {
        if( document.getElementById("pa").value == localStorage.getItem("lock")) {
            document.getElementById("pass").style.display = "none";
            box.style.display = "flex";
            out.innerHTML = localStorage.getItem('data');
        }
    }
    }
    document.getElementById("pa").addEventListener("keyup",passw);
}

load();
// Ed is the editing function to edit entries

var kurxe;

var ed = function(fr){
    kurxe = fr;
    box.style.display="none";	
    document.getElementById("editor").style.display = "block";
    document.getElementById("cancel").addEventListener("click",function() {
        box.style.display = "flex";
        document.getElementById("editor").style.display = "none";
    
    });
    document.body.style.backgroundColor = "black";
    
}

var letgo1;
var letgo2;
var loct;

function resurge(embody) { 
    console.log("ooo");
    var sib = 0;
    localStorage.cnt--;
    count = localStorage.cnt;
    loct = "";
    for(var fly = 0;fly < document.querySelectorAll(".head").length;fly++) {
    if(fly != embody) {
        letgo1 = document.querySelectorAll(".head")[fly].textContent;
        letgo2 = document.querySelectorAll(".body")[fly].textContent;
        rewrite(letgo1,letgo2,sib);
        sib++
    }
    }
    localStorage.data = loct;
    out.innerHTML = localStorage.data;
    loct = "";

}

function rewrite(texter,texty,nug) {
    loct += "<btn onclick='ed(" + nug + ")' class='res'><p class='head'>" + texter + "</p><p class='body'>" + texty + "</p></btn>"

}


// Opens Editor 

btn.addEventListener('click',function() {
    box.style.display="none";
    mod.style.display="block";
    document.body.style.backgroundColor = "rgb(50,50,50)";
    document.querySelector(".i").addEventListener('click', ect);
    document.querySelector(".i").textContent = "New Entry";
    document.getElementById("tex").value = "";
    document.getElementById("int").value = "";

    
});

secret.addEventListener("click",funct);

// Allows user to cancel the process of entering Diary Entries.

function ect() {
    box.style.display="flex";
    mod.style.display="none";
    document.body.removeEventListener('click',ect);

};

var screen;
var sti;
var ev = new Event ("click");

document.getElementById("tex").addEventListener("keyup", function(e) {
        if(e.keyCode === 13) {
            sub.dispatchEvent(ev);
            
        }
});

//Function below creates entries
// sub.addEventListener allows entries to be saved to localStorage and to be saved to "mem" and "dat" variables


sub.addEventListener('click',function() {
    document.querySelector(".i").textContent = "New Entry";
    var text = document.getElementById("tex").value;
    var cont = document.getElementById('int').value;
    cont = cont.replace("\n", "<br>");
    count = localStorage.cnt;
    sti  = "▪" + " " + text;
    box.style.display="flex";
    mod.style.display="none";
    if (count != 500) {
    localStorage.data += ("<btn onclick='ed(" + count + ")' class='res'><p class='head'>" + sti + "</p><p class='body'>" + cont + "</p></btn>");
    out.innerHTML = localStorage.data;
    localStorage.cnt++;
    count = localStorage.cnt;
    }  else if(conf == 1) {
        localStorage.data += ("<btn onclick='ed(" + count + ")' class='res'><p class='head'>" + sti + "</p><p class='body'>" + cont + "</p></btn>");
        out.innerHTML = localStorage.data;
        localStorage.cnt++;
        count = localStorage.cnt;
    } else {
        window.alert("Limit of 5000 Entries Exceeded. Storage Full.");
        localStorage.cnt = 500;
        count = localStorage.cnt;
    }
    if (conf == 1) {
        resurge(kurxe);
        kurxe = 0;
        conf = 0;
    }
    
});

exit.addEventListener('click',function() {
    var check = prompt("Password", "Enter Password To Erase All Entries");
    if (check == localStorage.lock) {
    out.textContent = "";
    localStorage.data = "";
    localStorage.cnt = 0;
    }
});

var comput;
var compute = [];
var sto;
var inht;
var hun;
var abc;
var sear;

inp.addEventListener('keyup',function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        sear = "";
        out.innerHTML = localStorage.getItem("data");
        inht = out.innerHTML;
        for(hun = 0; hun < document.querySelectorAll(".head").length; hun++) {
            abc = document.querySelectorAll(".head")[hun].textContent;
            if (inp.value == "" || inp.value == null){
                out.innerHTML = localStorage.getItem("data");
            } else if (abc.includes(inp.value) == true){
                sear += "<btn class='res'><p class= 'head'>" + document.querySelectorAll(".head")[hun].textContent + "</p><p class='body'>"+document.querySelectorAll(".body")[hun].textContent+"</p></btn>";
            } 
            if (hun == (document.querySelectorAll(".head").length)-1 && inp.value != "") {
                out.innerHTML = sear;
            }
    }
}
});

editd.addEventListener("click", function() {
    resurge(kurxe);
    box.style.display = "flex";
    document.getElementById("editor").style.display = "none";
    conf = 0;
});