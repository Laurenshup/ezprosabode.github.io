var doc = document;

function text() {
    var string = doc.getElementById("get_text").value;
    
    doc.getElementById("output").innerHTML = string;
}

document.getElementById("get_text")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
});