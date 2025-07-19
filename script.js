<<<<<<< SEARCH
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form validation for registration
        const registerForm = document.querySelector('.register-form');
        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                if (!this.checkValidity()) {
                    e.preventDefault();
                    alert('Silakan lengkapi semua field yang wajib diisi');
                }
            });
        }
    });
    </script>
=======
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scrolling for navigation links with offset for fixed header
        document.querySelectorAll('nav a').forEach(anchor => {
            ⬤