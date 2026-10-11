// Main JavaScript for Bootstrap Book Landing Page

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Sticky & Scroll State
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-lg');
      navbar.style.background = 'rgba(15, 23, 42, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    } else {
      navbar.classList.remove('shadow-lg');
      navbar.style.background = 'transparent';
      navbar.style.backdropFilter = 'none';
    }
  });

  // 2. Smooth Scroll for Nav Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if opened
          const navbarToggler = document.querySelector('.navbar-toggler');
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
          }
        }
      }
    });
  });

  // 3. Download Sample Action
  const downloadBtns = document.querySelectorAll('.platform-btn, .btn-download-action');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Cảm ơn bạn! Bản đọc thử 3 chương đầu (PDF) của cuốn sách đang được tải về máy của bạn.');
    });
  });

  // 4. Newsletter Form Submit
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput.value) {
        alert(`Chúc mừng! Email [${emailInput.value}] đã được đăng ký nhận bản tin sách và ưu đãi thành công.`);
        emailInput.value = '';
      }
    });
  }
});
