/**
* Template Name: Vesperr
* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Product Gallery Modal - Category System
   */
  
  // Product categories configuration - Easy to update!
  // Add or modify categories here
  const productCategories = [
    {
      id: 'PC',
      name: 'PC',
      icon: 'bi-pc-display-horizontal',
      path: 'assets/img/sanpham/',
      images: ['1.png', '2.png', '3.png','4.png', '5.png']
	},
	{
      id: 'manhinh',
      name: 'Màn hình PC',
      icon: 'bi-pc-display',
      path: 'assets/img/sanpham/',
      images: ['pc1.jpg','pc2.jpg','pc3.jpg']
    },
    // Add more categories like this:
    {
      id: 'mayin,pt',
      name: 'Máy in,photocopy',
      icon: 'bi-printer',
      path: 'assets/img/sanpham/',
      images: ['in1.jpg', 'in2.jpg', 'in3.jpg','in4.jpg']
    },
    {
      id: 'laptop',
      name: 'Laptop',
      icon: 'bi-laptop',
      path: 'assets/img/sanpham/',
      images: ['lp1.jpg', 'lp2.jpg', 'lp3.jpg']
    },
	{
      id: 'mcc',
      name: 'Máy chấm công',
      icon: 'bi-calendar-check',
      path: 'assets/img/sanpham/',
      images: ['mcc1.jpg', 'mcc2.jpg', 'mcc3.jpg','mcc4.jpg']
	},
	{
      id: 'Gói Dịch vụ',
      name: 'Gói Dịch vụ',
      icon: 'bi-file-person',
      path: 'assets/img/',
      images: ['dichvu.jpg']
	},  
	{
      id: 'nas',
      name: 'NAS',
      icon: 'bi-device-ssd',
      path: 'assets/img/sanpham/',
      images: ['nas.jpg', 'nas1.jpg', 'nas2.jpg']
	},	
  ];

  let currentCategory = null;
  let currentImageIndex = 0;

  function initProductGallery() {
    const containerEl = document.getElementById('productCategoriesContainer');
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.product-close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!containerEl || !modal) return;

    // Generate category buttons
    generateCategoryButtons(containerEl);

    // Close modal
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('show');
      }
    });

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
      if (!currentCategory) return;
      currentImageIndex = (currentImageIndex - 1 + currentCategory.images.length) % currentCategory.images.length;
      displayImage();
    });

    nextBtn.addEventListener('click', () => {
      if (!currentCategory) return;
      currentImageIndex = (currentImageIndex + 1) % currentCategory.images.length;
      displayImage();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (modal.classList.contains('show')) {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'Escape') closeBtn.click();
      }
    });
  }

  function generateCategoryButtons(container) {
    container.innerHTML = '';

    productCategories.forEach(category => {
      const btn = document.createElement('button');
      btn.className = 'product-category-btn';
      btn.innerHTML = `<i class="bi ${category.icon}"></i> ${category.name}`;
      btn.addEventListener('click', () => openProductGallery(category));
      container.appendChild(btn);
    });
  }

  function openProductGallery(category) {
    currentCategory = category;
    currentImageIndex = 0;
    const modal = document.getElementById('productModal');
    modal.classList.add('show');
    displayImage();
  }

  function displayImage() {
    const gallery = document.getElementById('productGallery');
    const counter = document.getElementById('imageCounter');
    const categoryTitle = document.getElementById('productCategoryTitle');

    if (!currentCategory) {
      gallery.innerHTML = '<p style="color: #666; padding: 20px;">Không có danh mục được chọn</p>';
      counter.textContent = '0 / 0';
      return;
    }

    categoryTitle.textContent = currentCategory.name;

    if (currentCategory.images.length === 0) {
      gallery.innerHTML = '<p style="color: #666; padding: 20px;">Không có ảnh trong danh mục này</p>';
      counter.textContent = '0 / 0';
      return;
    }

    const imageName = currentCategory.images[currentImageIndex];
    const imagePath = currentCategory.path + imageName;
    const imageHTML = `<img src="${imagePath}" alt="${currentCategory.name} ${currentImageIndex + 1}" onerror="this.src='assets/img/placeholder.png'">`;
    gallery.innerHTML = imageHTML;
    counter.textContent = `${currentImageIndex + 1} / ${currentCategory.images.length}`;
  }

  // Initialize product gallery when page loads
  window.addEventListener('load', initProductGallery);

})();