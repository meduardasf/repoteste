function sayHello (name){
    alert("Hello " + name)
}

function changeText() {
    if(document.getElementById("oi").innerHTML == "Greeting"){
        document.getElementById("oi").innerHTML = "Hello"
    } else {
        document.getElementById("oi").innerHTML = "Greeting"
    }
}