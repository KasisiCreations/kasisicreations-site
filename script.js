document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("quoteModal");
    const closeModal = modal.querySelector(".close");
    const form = document.getElementById("quoteForm");

    // Show modal when "Get Quote" button is clicked
    document.querySelectorAll(".get-quote-btn").forEach(button => {
        button.addEventListener("click", () => {
            modal.classList.add("show");
        });
    });

    // Close modal when "X" is clicked
    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Close modal when clicking outside the form
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });

    // Submit form and send WhatsApp message
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const jobTitle = document.getElementById("jobTitle").value;
        const jobDescription = document.getElementById("jobDescription").value;
        const colorTheme = document.getElementById("colorTheme").value;
        const graphicsProvided = document.getElementById("graphicsProvided").value;
        const additionalInfo = document.getElementById("additionalInfo").value;

        const message = `Hello, I am requesting a quote for the following:
        *Job Title*: ${jobTitle}
        *Job Description*: ${jobDescription}
        *Color/Theme*: ${colorTheme}
        *Graphics Provided*: ${graphicsProvided}
        *Additional Info*: ${additionalInfo}`;

        const whatsappLink = `https://wa.me/254725278245?text=${encodeURIComponent(message)}`; // Replace with your WhatsApp number

        // Open WhatsApp and close the modal
        window.open(whatsappLink, "_blank");
        modal.classList.remove("show");
        form.reset();
    });
});
