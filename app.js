document.addEventListener("DOMContentLoaded", () =>{
    var tekst = document.getElementById("text");
    var btn = document.getElementById("btn");

    btn.addEventListener("click", ()=>{
        if (tekst !== null && tekst.value === ""){
            alert("No wpisz cokolwiek kurwa");
        }
        else{
            window.open("ankieta/ankieta.html", "_parent");
        }

    })

});