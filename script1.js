document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS with your User ID
  (function() {
    emailjs.init("qGMq7m7MRqvV8LWHh"); // Replace with your EmailJS User ID
  })();

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('a ').forEach(link => {
    link.addEventListener('click', function(e) => {
      e.preventDefault();
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });

  // Navigation hover effect
  const navItems = document.querySelectorAll('.nav-link');
  const hoverIndicator = document.querySelector('.nav-hover-indicator');

  navItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      const linkRect = e.target.getBoundingClientRect();
      const navRect = document.querySelector('.navbar').getBoundingClientRect();
      
      hoverIndicator.style.width = `${linkRect.width}px`;
      hoverIndicator.style.left = `${linkRect.left - navRect.left}px`;
      hoverIndicator.style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
      hoverIndicator.style.opacity = '0';
    });
  });

  // Custom cursor
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 100);
  });

  // Cursor hover effects
  const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-card, .certification-card, .social-icon, .tech-tag');
  
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      cursorFollower.style.transform = 'scale(0.5)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursorFollower.style.transform = 'scale(1)';
    });
  });

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-progress');
  
  function animateSkillBars() {
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
  }

  // Intersection Observer for animations
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        if (entry.target.classList.contains('skills-grid')) {
          animateSkillBars();
        }
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1
  });

  document.querySelectorAll('.section, .skill-card, .project-card, .timeline-item, .certification-card').forEach(el => {
    observer.observe(el);
  });

  // Form submission with EmailJS
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      
      // Change button to loading state
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      
      // Send email using EmailJS
      emailjs.sendForm('service_6sjf68a', 'template_1lrsbc5', contactForm)
        .then(() => {
          // Success message
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          submitBtn.style.backgroundColor = '#4BB543';
          
          // Reset form
          contactForm.reset();
          
          // Revert button after 3 seconds
          setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.style.backgroundColor = '';
            submitBtn.disabled = false;
          }, 3000);
        }, (error) => {
          // Error message
          submitBtn.innerHTML = '<i class="fas fa-times"></i> Error!';
          submitBtn.style.backgroundColor = '#ff3333';
          
          console.error('Failed to send message. Error:', error);
          
          // Revert button after 3 seconds
          setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.style.backgroundColor = '';
            submitBtn.disabled = false;
          }, 3000);
        });
    });
  }

  // Role text animation
  const roleTexts = document.querySelectorAll('.role-text');
  let currentRole = 0;

  function rotateRoles() {
    roleTexts.forEach((text, index) => {
      text.style.opacity = index === currentRole ? '1' : '0';
      text.style.transform = index === currentRole ? 'translateY(0)' : (index < currentRole ? 'translateY(-20px)' : 'translateY(20px)');
    });
    currentRole = (currentRole + 1) % roleTexts.length;
  }

  // Start the animation
  rotateRoles();
  setInterval(rotateRoles, 3000);

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Enhanced background animation - move shapes on mouse move
  document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
      const speedX = (index + 1) * 0.1;
      const speedY = (index + 1) * 0.1;
      
      shape.style.transform = `translate(${mouseX * 50 * speedX}px, ${mouseY * 50 * speedY}px)`;
    });
  });
});// Enhanced background animation - move shapes on mouse move // Custom cursor
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 100);
  });

  // Cursor hover effects
  const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-card, .certification-card, .social-icon, .tech-tag');
  
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      cursorFollower.style.transform = 'scale(0.5)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursorFollower.style.transform = 'scale(1)';
    });
  }); const navItems = document.querySelectorAll('.nav-link');
  const hoverIndicator = document.querySelector('.nav-hover-indicator');

  navItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      const linkRect = e.target.getBoundingClientRect();
      const navRect = document.querySelector('.navbar').getBoundingClientRect();
      
      hoverIndicator.style.width = `${linkRect.width}px`;
      hoverIndicator.style.left = `${linkRect.left - navRect.left}px`;
      hoverIndicator.style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
      hoverIndicator.style.opacity = '0';
    });
  });
