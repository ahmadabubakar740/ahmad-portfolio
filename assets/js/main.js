/**
 * ABUBAKAR AHMAD - PROFESSIONAL PORTFOLIO
 * Interactive JavaScript Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const cvModal = document.getElementById('cvModal');
  const cvFrame = document.getElementById('cvFrame');
  const toastNotice = document.getElementById('toastNotice');

  // ----------------------------------------------------
  // 1. Mobile Navigation Toggle
  // ----------------------------------------------------
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      if (icon) {
        if (isOpen) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          const icon = navToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      });
    });
  }

  // ----------------------------------------------------
  // 2. Navbar Background on Scroll
  // ----------------------------------------------------
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ----------------------------------------------------
  // 3. ScrollSpy (Active Navigation Link on Scroll)
  // ----------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  
  function updateScrollSpy() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateScrollSpy);
  updateScrollSpy();

  // ----------------------------------------------------
  // 4. CV Modal Viewer Functions (Global accessible)
  // ----------------------------------------------------
  window.openCvModal = function(pdfUrl = 'cv.pdf') {
    if (!cvModal) return;
    
    // Set iframe/object src
    if (cvFrame) {
      cvFrame.src = pdfUrl;
    }
    
    cvModal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  window.closeCvModal = function() {
    if (!cvModal) return;
    cvModal.classList.remove('open');
    document.body.style.overflow = ''; // Unlock scroll
    if (cvFrame) {
      cvFrame.src = ''; // Clear source when closed
    }
  };

  // Close modal when clicking outside content
  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        window.closeCvModal();
      }
    });
  }

  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal && cvModal.classList.contains('open')) {
      window.closeCvModal();
    }
  });

  // ----------------------------------------------------
  // 5. Copy Email to Clipboard with Toast Notice
  // ----------------------------------------------------
  window.copyEmailToClipboard = function(email = 'ahmadabubakar740@gmail.com') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => showToast('Email copied to clipboard: ' + email))
        .catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }
  };

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Email copied to clipboard: ' + text);
    } catch (err) {
      window.prompt('Copy email manually:', text);
    }
    document.body.removeChild(textArea);
  }

  function showToast(message) {
    if (!toastNotice) return;
    const msgSpan = toastNotice.querySelector('.toast-message');
    if (msgSpan) {
      msgSpan.textContent = message;
    }
    toastNotice.classList.add('show');
    
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4000);
  }

  // ----------------------------------------------------
  // 6. Smooth Scroll for all internal anchors
  // ----------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 70;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ----------------------------------------------------
  // 7. Interactive Numbers Counter (Subtle Reveal)
  // ----------------------------------------------------
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  function runCounters() {
    if (animated) return;
    
    const triggerBottom = window.innerHeight * 0.85;
    const firstCounter = counters[0];
    
    if (firstCounter && firstCounter.getBoundingClientRect().top < triggerBottom) {
      animated = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1200; // ms
        const step = target / (duration / 16);
        let current = 0;

        const updateNumber = () => {
          current += step;
          if (current < target) {
            counter.innerText = Math.ceil(current);
            requestAnimationFrame(updateNumber);
          } else {
            counter.innerText = target;
          }
        };

        updateNumber();
      });
    }
  }

  window.addEventListener('scroll', runCounters);
  runCounters();
});
