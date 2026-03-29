/* =============================================
   PROVENANCE — Scripts
   ============================================= */

(function () {
    'use strict';

    // ---- Sticky nav with background swap ----
    const nav = document.getElementById('nav');
    const hero = document.getElementById('hero');

    function onScroll() {
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---- Mobile menu ----
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.getElementById('mobile-close');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    function openMenu() {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', openMenu);
    mobileClose.addEventListener('click', closeMenu);
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // ---- Scroll-reveal (IntersectionObserver) ----
    var reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: just show everything
        reveals.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    // ---- Smooth scroll for anchor links (fallback for older browsers) ----
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                var offset = nav.offsetHeight + 8;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    // ---- Contact form (prevent default, show confirmation) ----
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = document.getElementById('contact-submit');
            btn.textContent = 'Inquiry Sent';
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'default';
            form.reset();
            setTimeout(function () {
                btn.textContent = 'Send Inquiry';
                btn.disabled = false;
                btn.style.opacity = '';
                btn.style.cursor = '';
            }, 3000);
        });
    }

    // ---- Services Row Hover — debounced image crossfade ----
    const serviceRows = document.querySelectorAll('.service-row');
    const serviceImages = document.querySelectorAll('.services__image');
    let imageTimer = null;

    if (serviceRows.length > 0 && serviceImages.length > 0) {
        serviceRows.forEach((row, index) => {
            const activateRow = () => {
                // Immediately update row highlights
                serviceRows.forEach(el => el.classList.remove('active'));
                row.classList.add('active');

                // Debounce image swap so rapid mouse moves don't flash
                clearTimeout(imageTimer);
                imageTimer = setTimeout(() => {
                    serviceImages.forEach(el => el.classList.remove('active'));
                    if (serviceImages[index]) {
                        serviceImages[index].classList.add('active');
                    }
                }, 150);
            };

            row.addEventListener('mouseenter', activateRow);
            row.addEventListener('click', activateRow);
        });
    }
})();
