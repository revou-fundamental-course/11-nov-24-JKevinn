function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestSelect = document.getElementById('interest');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const interestError = document.getElementById('interest-error');

    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    interestSelect.classList.remove('error');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    interestError.style.display = 'none';

    let isValid = true;

    if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.classList.add('error');
        nameError.textContent = 'Nama wajib diisi.';
        nameError.style.display = 'block';
    }

    if (!emailInput.value.trim()) {
        isValid = false;
        emailInput.classList.add('error');
        emailError.textContent = 'Alamat email wajib diisi.';
        emailError.style.display = 'block';
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            emailInput.classList.add('error');
            emailError.textContent = 'Masukkan email yang valid.';
            emailError.style.display = 'block';
        }
    }

    if (!interestSelect.value) {
        isValid = false;
        interestSelect.classList.add('error');
        interestError.textContent = 'Pilih salah satu minat Anda.';
        interestError.style.display = 'block';
    }

    if (isValid) {
        alert('Form berhasil dikirim!');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        showSlide(currentSlide); // Tampilkan slide pertama
        setInterval(nextSlide, 3000); // Autoslide
    } else {
        console.error("No slides found!");
    }
});