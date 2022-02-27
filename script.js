
let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Invalid Input!");
    }
}   

function deleteLast(){
    var remove = outputScreen.value;
    remove = remove.slice(0,-1);
    outputScreen.value = remove;
}

function clrscr(){
    outputScreen.value = "";
}

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener('change', () =>{
    //change theme of calculator

    var lbl = document.querySelector(".label");
    lbl.classList.toggle("darklabel");

    var container = document.querySelector(".container");
    container.classList.toggle("darkContainer");

    var calci = document.querySelector(".calculator");
    calci.classList.toggle("darkCalculator");

    var inputd = document.querySelector(".output-screen");
    inputd.classList.toggle("darkInput");

    var xyz = document.querySelector(".a");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".b");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".c");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".d");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".e");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".f");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".g");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".h");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".i");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".j");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".k");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".l");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".m");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".n");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".o");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".p");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".q");
    xyz.classList.toggle("darkButtons");
    var xyz = document.querySelector(".r");
    xyz.classList.toggle("darkButtons");

    var eq = document.querySelector("#equal");
    eq.classList.toggle("equaldark");


});
