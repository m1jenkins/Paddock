/* =============================================
   PROVENANCE — Scripts
   ============================================= */

(function () {
    'use strict';

    var nav = document.getElementById('nav');
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');
    var mobileClose = document.getElementById('mobile-close');

    function onScroll() {
        if (!nav) return;
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    if (nav) {
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function openMenu() {
        if (!mobileMenu) return;
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
        if (mobileClose) mobileClose.focus();
    }

    function closeMenu() {
        if (!mobileMenu) return;
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        if (hamburger) {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.focus();
        }
    }

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', openMenu);
        if (mobileClose) mobileClose.addEventListener('click', closeMenu);
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
                closeMenu();
            }
        });
    }

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
        reveals.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var id = this.getAttribute('href');
            if (!id || id === '#') return;
            var target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            var offset = nav ? nav.offsetHeight + 8 : 0;
            var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
        });
    });

    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = document.getElementById('contact-submit');
            var scriptURL = 'https://script.google.com/macros/s/AKfycbzd4i7cn8vj9O8j2dhvQVdEk6ltNPweToX-oppo_N6tlzykdl7MsT77ii_cYYTDbCK6wA/exec';

            if (btn) {
                btn.textContent = 'Sending…';
                btn.disabled = true;
            }

            fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form),
                mode: 'no-cors'
            })
                .then(function () {
                    window.location.href = 'success.html';
                })
                .catch(function (error) {
                    console.error('Error!', error.message);
                    if (btn) {
                        btn.textContent = 'Failed. Try again.';
                        btn.disabled = false;
                    }
                });
        });
    }
})();
