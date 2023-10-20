var tr = document.getElementsByTagName("tr"),
    myForm = document.getElementById('form'),
    table = document.getElementsByTagName('table')[0],
    arr = [];

function chng() {
    for (var x = 0; x < tr.length; x++) {
        if (x === 25 || x === 0) {
            continue;
        }
        for (var u = 1; u <= 7; u++) {
            if (tr[x].getElementsByTagName("td")[u].innerHTML === '<input type="checkbox" onchange="chng();"><span class="checkmark"></span>') {
                tr[x].getElementsByTagName("td")[u].style.backgroundColor = "#f7fff4";
            } else {
                if (tr[x].getElementsByTagName("td")[u].getElementsByTagName('input')[0].checked === true) {
                    tr[x].getElementsByTagName("td")[u].getElementsByTagName('input')[0].setAttribute("checked", "true");
                    tr[x].getElementsByTagName("td")[u].style.backgroundColor = "#b213e6";
                } else {
                    tr[x].getElementsByTagName("td")[u].getElementsByTagName('input')[0].removeAttribute("checked");
                    tr[x].getElementsByTagName("td")[u].style.backgroundColor = "#ff7c7c";
                }
            }
        }
    }
}


function loop() {
    "use strict";

    for (let z = 0; z < tr.length; z++) {
        if (z === 25 || z === 0) {
            continue;
        }
        for (let i = 1; i <= 7; i++) {
            tr[z].getElementsByTagName("td")[i].ondblclick = function () {
                var msg = prompt("Enter a name please");
                if (msg === "" || msg === null) {
                    tr[z].getElementsByTagName("td")[i].innerHTML = '<input type="checkbox" onchange="chng();"><span class="checkmark"></span>';
                } else {
                    tr[z].getElementsByTagName("td")[i].innerHTML = '<input type="checkbox" onchange="chng();"><span class="checkmark"></span>' + msg;
                }
                chng();
            };
        }
    }
    chng();
}

if (localStorage.data === undefined) {
    localStorage.data = document.body.getElementsByTagName("table")[0].innerHTML;
    loop();
} else {
    document.body.getElementsByTagName("table")[0].innerHTML = localStorage.data;
    loop();
}

var fix = document.getElementsByTagName("tr")[0],
    fix2 = document.getElementsByTagName("tr")[25];

document.body.onscroll = function () {
    "use strict";

    if (document.documentElement.scrollTop >= 41) {
        fix.style.position = "fixed";
        fix2.style.position = "relative";
        fix.style.top = "0";
        fix.style.zIndex = "1";
        for (let i = 0; i <= 7; i++) {
            fix.getElementsByTagName('th')[i].style = 'width:141px';
        }
        if (document.documentElement.scrollTop >= 810) {
            fix2.style.position = "fixed";
            fix.style.position = "relative";
            fix2.style.top = "0";
            fix2.style.zIndex = "2";
            for (let i = 0; i <= 7; i++) {
                fix2.getElementsByTagName('th')[i].style = 'width:141px';
            }
        }
    } else {
        fix.style.position = "relative";
        fix2.style.position = "relative";
    }
};

window.onload = function () {
    "use strict";
    fix2.style.position = "relative";
    fix.style.position = "relative";
};

function add() {

    arr = [];

    if (document.getElementById('Saturday').checked === true) {
        arr.push(6);
    }
    if (document.getElementById('Sunday').checked === true) {
        arr.push(7);
    }
    if (document.getElementById('Monday').checked === true) {
        arr.push(1);
    }
    if (document.getElementById('Tuesday').checked === true) {
        arr.push(2);
    }
    if (document.getElementById('Wednesday').checked === true) {
        arr.push(3);
    }
    if (document.getElementById('Thursday').checked === true) {
        arr.push(4);
    }
    if (document.getElementById('Friday').checked === true) {
        arr.push(5);
    }

    var time = myForm.getElementsByClassName('time')[0].value,
        name = myForm.getElementsByClassName('name')[0].value,
        t;
    if (myForm.getElementsByClassName('dayNight')[0].value === "AM") {
        t = 1;
    } else if (myForm.getElementsByClassName('dayNight')[0].value === "PM") {
        t = 26;
    }

    var c = t;
    for (c; c < tr.length; c++) {
        if (myForm.getElementsByClassName('dayNight')[0].value === "AM") {
            if (c === 25) {
                break;
            }
        } else if (myForm.getElementsByClassName('dayNight')[0].value === "PM") {
            if (c === 50) {
                break;
            }
        }
        if (tr[c].getElementsByTagName('td')[0].innerHTML === time) {
            arr.forEach(function (ele) {
                tr[c].getElementsByTagName('td')[ele].innerHTML = '<input type="checkbox" onchange="chng();"><span class="checkmark"></span>' + name;
            });
        }
    }
    chng();
}

function save() {
    'use strict';
    localStorage.data = document.body.getElementsByTagName("table")[0].innerHTML;
    loop();
}

document.onkeydown = function (e) {
    if (e.ctrlKey && e.which == 83) {
        save();
        alert("The data was saved correctly");
        return false;
    }
};