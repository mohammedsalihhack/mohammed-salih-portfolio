function openCertificate(id) {
    document.getElementById(id).classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeCertificate(id) {
    document.getElementById(id).classList.remove("show");
    document.body.style.overflow = "auto";
}

window.addEventListener("click", function(event) {
    document.querySelectorAll(".certificate-modal").forEach(function(modal) {
        if (event.target === modal) {
            modal.classList.remove("show");
            document.body.style.overflow = "auto";
        }
    });
});
