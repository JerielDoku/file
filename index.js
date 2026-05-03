 lucide.createIcons();

       
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('mainNav');
            window.scrollY > 80 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
        });

        function toggleMenu() {
            const overlay = document.getElementById('mobileOverlay');
            overlay.classList.toggle('active');
            document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : 'auto';
        }

        function toggleAccordion() {
            const content = document.getElementById('accContent');
            const icon = document.getElementById('accIcon');
            content.classList.toggle('active');
            icon.setAttribute('data-lucide', content.classList.contains('active') ? 'chevron-up' : 'chevron-down');
            lucide.createIcons();
        }
        const industries = ["Healthcare", "Manufacturing", "Education", "Logistics", "Real Estate"];
        let i = 0;
        setInterval(() => {
            const el = document.getElementById('spin-text');
            el.style.opacity = 0;
            setTimeout(() => {
                i = (i + 1) % industries.length;
                el.textContent = industries[i];
                el.style.opacity = 1;
            }, 500);
        }, 3000);