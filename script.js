(function () {
  'use strict';

  // Subtle one-shot typing animation for hero command (respects reduced motion)
  var typedEl = document.getElementById('typed-cmd');
  var prefersReduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typedEl && !prefersReduced) {
    var fullCmd = typedEl.getAttribute('data-cmd') || typedEl.textContent;
    typedEl.textContent = '';
    var i = 0;
    var timer = window.setInterval(function () {
      i += 1;
      typedEl.textContent = fullCmd.slice(0, i);
      if (i >= fullCmd.length) {
        window.clearInterval(timer);
      }
    }, 34);
  }

  // Mobile navigation drawer
  var navToggle = document.getElementById('nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  function setMenuOpen(open) {
    if (!navToggle || !mobileNav) return;
    mobileNav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute(
      'aria-label',
      open ? 'Close navigation menu' : 'Open navigation menu'
    );
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!isOpen);
    });

    mobileNav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setMenuOpen(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        setMenuOpen(false);
        navToggle.focus();
      }
    });
  }

  // Scroll-spy active link in command bar
  var cmdLinks = Array.prototype.slice.call(document.querySelectorAll('.cmd-link'));
  var trackedTargets = [
    { id: '#intro', el: document.getElementById('intro') },
    { id: '#skills', el: document.getElementById('approach') },
    { id: '#experience', el: document.getElementById('experience') },
    { id: '#research', el: document.getElementById('research') },
    { id: '#credentials', el: document.getElementById('credentials') },
    { id: '#contact', el: document.getElementById('contact') }
  ].filter(function (item) {
    return Boolean(item.el);
  });

  function setActiveLink(href) {
    cmdLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('href') === href);
    });
  }

  if ('IntersectionObserver' in window && trackedTargets.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var match = trackedTargets.find(function (t) {
            return t.el === entry.target;
          });
          if (match) setActiveLink(match.id);
        });
      },
      { rootMargin: '-32% 0px -56% 0px' }
    );

    trackedTargets.forEach(function (item) {
      observer.observe(item.el);
    });

    window.addEventListener(
      'scroll',
      function () {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
          setActiveLink('#contact');
        }
      },
      { passive: true }
    );
  }

  // Copy email button
  var copyBtn = document.getElementById('copy-email-btn');
  var copyStatus = document.getElementById('copy-status');

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var value = copyBtn.getAttribute('data-copy');
      if (!value) return;

      function onCopied() {
        copyBtn.textContent = '[COPIED]';
        if (copyStatus) copyStatus.textContent = 'Email address copied to clipboard.';
        window.setTimeout(function () {
          copyBtn.textContent = '[COPY]';
          if (copyStatus) copyStatus.textContent = '';
        }, 2000);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(onCopied).catch(function () {});
      } else {
        var temp = document.createElement('textarea');
        temp.value = value;
        temp.setAttribute('readonly', '');
        temp.style.position = 'absolute';
        temp.style.left = '-9999px';
        document.body.appendChild(temp);
        temp.select();
        try {
          document.execCommand('copy');
          onCopied();
        } catch (e) {}
        document.body.removeChild(temp);
      }
    });
  }

  // Footer year
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
