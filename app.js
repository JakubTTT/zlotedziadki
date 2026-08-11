document.addEventListener("DOMContentLoaded", () => {
    var tekst = document.getElementById("text");
    var btn = document.getElementById("btn");
    var btnn = document.getElementById("btnn");

    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); 

            if (tekst && tekst.value.trim() === "") {
                alert("No wpisz cokolwiek kurwa");
            } else {
                window.location.href = "ankieta/ankieta.html"; 
            }
        });
    } else {
        console.error("Nie znaleziono elementu o id='btn'");
    }

    if (btnn) {
        btnn.addEventListener("click", (e) => {
            e.preventDefault(); 
            window.location.href = "generator_undercwelbln/generator_undercwelbln.html";   
        });
    } else {
        console.error("Nie znaleziono elementu o id='btnn'");
    }
}); 