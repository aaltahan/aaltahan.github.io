function myFunction(){
    document.getElementById("text").style.fontSize = "24px" ;
    alert("Hello, world!");
}

function styleFunction(){
    if(document.getElementById("FancyShmancy").checked){
       document.getElementById("text").style.fontWeight = "bold";
       document.getElementById("text").style.color = "blue";
       document.getElementById("text").style.textDecorationLine = "underline";
    } else {
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.color = "black";
        document.getElementById("text").style.textDecorationLine = "none";
    }
}

function moo(){
    var textBox = document.getElementById("text");
    var input = document.getElementById("text").value;
    
    var parts = input.split(".");
    input = parts.join("-Moo");

    textBox.value = input.toUpperCase();
}