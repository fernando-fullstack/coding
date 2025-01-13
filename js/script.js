document.addEventListener("DOMContentLoaded", function() {
    // Ambil semua link navigasi
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Tambahkan event listener untuk setiap link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Mencegah link default behavior

            // Ambil ID dari target yang ingin dicapai
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Scroll ke target section
            targetSection.scrollIntoView({
                behavior: 'smooth'  // Menambahkan efek smooth scroll
            });
        });
    });
});