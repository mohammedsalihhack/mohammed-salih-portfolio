function openCertificate(id) {
    const modal = document.getElementById(id);

    if (!modal) {
        console.error("Certificate modal not found:", id);
        return;
    }

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeCertificate(id) {
    const modal = document.getElementById(id);

    if (!modal) {
        return;
    }

    modal.classList.remove("show");
    document.body.style.overflow = "";
}

// Close when clicking outside the certificate content
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("certificate-modal")) {
        event.target.classList.remove("show");
        document.body.style.overflow = "";
    }
});

// Close with Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        document.querySelectorAll(".certificate-modal.show")
            .forEach(function (modal) {
                modal.classList.remove("show");
            });

        document.body.style.overflow = "";
    }
});
