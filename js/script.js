document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})

function navbar() {
    document.getElementById("navul2").style.display = 'none';
    document.getElementById("cancel").style.display = 'none';
    document.getElementById("btn2").style.display = 'flex';
}

function menu() {
    location.reload()
}