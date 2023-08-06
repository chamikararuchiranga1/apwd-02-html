console.log("run---------");

function clickMe() {
    console.log("CLicked");
}

function mouseOver() {
    console.log("Mouse Over");
}

function mouseOut() {
    console.log("Mouse Out");
}

function load() {
    console.log("Load page..")
}

function onChange() {
    console.log("print type...")
}

function onKeyPress() {
    console.log("key press..")
}

function onKeyUp() {
    console.log("key Up..")
}

function onKeyDown() {
    console.log("key Down..")
}

// ===============================================

function submit() {
    const text = document.getElementById("input-1").value
    console.log(text)
}

function onChangeText() {
    const text = document.getElementById("input-1").value
    console.log(text)
}

function onButtonChange () {
    document.getElementById("btn-1").style.width = '145px';
    document.getElementById("btn-1").style.backgroundColor = '#e30404';
}

function onButtonChangeOut () {
    document.getElementById("btn-1").style.width = '150px';
    document.getElementById("btn-1").style.backgroundColor = 'red';
}


