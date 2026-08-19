/**
* Template Name: Vesperr
* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  const currentLang = document.documentElement.lang && document.documentElement.lang.toLowerCase().startsWith("en") ? "en" : "vi";

  const siteConfig = {
    footerLogo: "assets/img/Logo NHV.png",
    fallbackFooterLogo: "assets/img/Logo NHV.png",
    salesContacts: [
      {
        name: "Ms. Tâm",
        phone: "0902 883 458",
        email: "sale1@nhanvietvn.com"
      },
      {
        name: "Ms. Uyên",
        phone: "0379 575 535",
        email: "sale5@nhanvietvn.com"
      },
      {
        name: "Ms. Linh",
        phone: "0866 631 440",
        email: "sale3@nhanvietvn.com"
      }
    ],
    hotlineLabel: "Hotline: 0902 883 458",
    generalEmail: "sale5@nhanvietvn.com",
    zaloContacts: [
      {
        name: "Ms. Tâm",
        role: "Kinh doanh 1",
        url: "https://zalo.me/0902883458"
      },
      {
        name: "Ms. Uyên",
        role: "Kinh doanh 2",
        url: "https://zalo.me/0379575535"
      },
      {
        name: "Ms. Linh",
        role: "Kinh doanh 3",
        url: "https://zalo.me/0866631440"
      }
    ],
    hotline: {
      label: "0902 883 458",
      note: "Hotline hỗ trợ",
      url: "tel:0902883458"
    }
  };

  function renderFooterContact() {
    document.querySelectorAll(".js-footer-contact").forEach((container) => {
      const labels = currentLang === "en"
        ? {
            heading: "Contact",
            sales: "Sales Department"
          }
        : {
            heading: "Liên hệ",
            sales: "Phòng kinh doanh"
          };
      container.innerHTML = `
        <h4>${labels.heading}</h4>
        <div class="footer-contact">
          <p><strong>${labels.sales}</strong></p>
          ${siteConfig.salesContacts.map((item) => `
            <p>${item.name}: ${item.phone}</p>
            <p>${item.email}</p>
          `).join("")}
          <p>${siteConfig.hotlineLabel}</p>
        </div>
      `;
    });
  }

  function renderFooterExtraContact() {
    document.querySelectorAll(".js-footer-extra-contact").forEach((container) => {
      const labels = currentLang === "en"
        ? {
            warranty: "Warranty Department"
          }
        : {
            warranty: "Phòng Bảo Hành"
          };
        //  <p>Ms. Nga: 0933 513 194</p> này để dòng 98 
      container.innerHTML = `
        <div class="footer-extra-contact">
          <strong>${labels.warranty}</strong>
         
          <p>Ms. Phong:
          support@nhanvietvn.com</p>
          <p>Ms. Toàn:
          support1@nhanvietvn.com</p>
        </div>
      `;
    });
  }

  function renderFooterLogo() {
    document.querySelectorAll(".js-footer-logo").forEach((logo) => {
      logo.onerror = () => {
        logo.src = siteConfig.fallbackFooterLogo;
      };
      logo.src = siteConfig.footerLogo;
    });
  }

  function renderZaloMenu() {
    document.querySelectorAll(".js-zalo-menu").forEach((menu) => {
      menu.innerHTML = `
        ${siteConfig.zaloContacts.map((item) => `
          <a href="${item.url}" target="_blank" rel="noopener">${item.name}<span>${item.role}</span></a>
        `).join("")}
        <a href="${siteConfig.hotline.url}" class="floating-zalo-hotline">${siteConfig.hotline.label}<span>${siteConfig.hotline.note}</span></a>
      `;
    });
  }

  renderFooterContact();
  renderFooterExtraContact();
  renderFooterLogo();
  renderZaloMenu();

  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (!selectHeader || (!selectHeader.classList.contains("scroll-up-sticky") && !selectHeader.classList.contains("sticky-top") && !selectHeader.classList.contains("fixed-top"))) {
      return;
    }
    window.scrollY > 100 ? selectBody.classList.add("scrolled") : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToggle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToggle();
      }
    });
  });

  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  const scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  const zaloToggle = document.querySelector(".floating-zalo-toggle");
  const zaloWrap = document.querySelector(".floating-zalo-wrap");

  if (zaloToggle && zaloWrap) {
    zaloToggle.addEventListener("click", (event) => {
      event.preventDefault();
      zaloWrap.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
      if (!zaloWrap.contains(event.target)) {
        zaloWrap.classList.remove("active");
      }
    });
  }

  function aosInit() {
    if (typeof AOS === "undefined") return;
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }

  window.addEventListener("load", aosInit);

  if (typeof GLightbox !== "undefined") {
    GLightbox({
      selector: ".glightbox"
    });
  }

  if (typeof PureCounter !== "undefined") {
    new PureCounter();
  }

  function initSwiper() {
    if (typeof Swiper === "undefined") return;
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      const configElement = swiperElement.querySelector(".swiper-config");
      if (!configElement) return;
      const config = JSON.parse(configElement.innerHTML.trim());
      new Swiper(swiperElement, config);
    });
  }

  window.addEventListener("load", initSwiper);

  document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
    if (typeof imagesLoaded === "undefined" || typeof Isotope === "undefined") return;

    const layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    const filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    const sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), () => {
      initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
        itemSelector: ".isotope-item",
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll(".isotope-filters li").forEach((filters) => {
      filters.addEventListener("click", function() {
        isotopeItem.querySelector(".isotope-filters .filter-active").classList.remove("filter-active");
        this.classList.add("filter-active");
        initIsotope.arrange({
          filter: this.getAttribute("data-filter")
        });
        aosInit();
      }, false);
    });
  });

  window.addEventListener("load", function() {
    if (window.location.hash && document.querySelector(window.location.hash)) {
      setTimeout(() => {
        const section = document.querySelector(window.location.hash);
        const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop, 10),
          behavior: "smooth"
        });
      }, 100);
    }
  });

  const navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll(".navmenu a.active").forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }

  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  const productCategories = [
    {
      id: "pc",
      name: "PC",
      nameEn: "PC",
      icon: "bi-pc-display-horizontal",
      path: "assets/img/sanpham/",
      summary: "Nhóm máy tính PC phục vụ văn phòng, doanh nghiệp và các nhu cầu triển khai thực tế.",
      summaryEn: "Desktop PC products for offices, businesses and practical deployment needs.",
      images: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "PC/AIO P440.PNG",
        "PC/p500mw.PNG",
        "PC/p500Sf.PNG"
      ]
    },
    {
      id: "man-hinh",
      name: "Màn hình PC",
      nameEn: "PC Monitors",
      icon: "bi-pc-display",
      path: "assets/img/sanpham/",
      summary: "Danh mục màn hình PC phục vụ làm việc, hiển thị và vận hành tại văn phòng.",
      summaryEn: "PC monitor products for work, display needs and office operations.",
      images: ["pc1.jpg", "pc2.jpg", "pc3.jpg"]
    },
    {
      id: "may-in",
      name: "Máy in, photocopy",
      nameEn: "Printers and Photocopiers",
      icon: "bi-printer",
      path: "assets/img/sanpham/",
      summary: "Nhóm máy in và photocopy phục vụ in ấn, sao chụp và vận hành văn phòng.",
      summaryEn: "Printers and photocopiers for printing, copying and office operations.",
      images: ["in1.jpg", "in2.jpg", "in3.jpg", "in4.jpg"]
    },
    {
      id: "laptop",
      name: "Laptop",
      nameEn: "Laptops",
      icon: "bi-laptop",
      path: "assets/img/sanpham/",
      summary: "Danh mục laptop cho nhu cầu làm việc linh hoạt, di chuyển và sử dụng doanh nghiệp.",
      summaryEn: "Laptop products for flexible work, mobility and enterprise use.",
      images: [
        "lp1.jpg",
        "lp2.jpg",
        "lp3.jpg",
        "lap/Expert book B1.PNG",
        "lap/Expert book B3.PNG",
        "lap/Expert book b5.PNG",
        "lap/Expert book p1.PNG",
        "lap/Expert book p3.PNG",
        "lap/Expert book pm1503.PNG",
        "lap/Expert book ultra.PNG",
        "DELL 15 DC15250.png"
      ]
    },
    {
      id: "cham-cong",
      name: "Máy chấm công",
      nameEn: "Time Attendance Devices",
      icon: "bi-calendar-check",
      path: "assets/img/sanpham/",
      summary: "Nhóm máy chấm công hỗ trợ quản lý thời gian làm việc và kiểm soát nhân sự.",
      summaryEn: "Time attendance devices for working time management and personnel control.",
      images: ["mcc1.jpg", "mcc2.jpg", "mcc3.jpg", "mcc4.jpg"]
    },
    {
      id: "goi-dich-vu",
      name: "Gói dịch vụ",
      nameEn: "Service Packages",
      icon: "bi-file-person",
      path: "assets/img/",
      summary: "Nhóm hình ảnh minh họa cho các gói dịch vụ đang được Nhân Việt cung cấp.",
      summaryEn: "Reference images for service packages provided by NHAN VIET ENGINEERING TM DV CO LTD.",
      images: ["Tangtuoithosv.png"]
    },
    {
      id: "nas",
      name: "NAS",
      nameEn: "NAS",
      icon: "bi-device-ssd",
      path: "assets/img/sanpham/",
      summary: "Giải pháp lưu trữ NAS phục vụ sao lưu, chia sẻ dữ liệu và quản trị nội bộ.",
      summaryEn: "NAS storage solutions for backup, data sharing and internal management.",
      images: ["nas.jpg", "nas1.jpg", "nas2.jpg"]
    },
    {
      id: "switch-mang",
      name: "Switch mạng",
      nameEn: "Network Switches",
      icon: "bi-hdd-network",
      path: "assets/img/sanpham/",
      summary: "Nhóm switch mạng phục vụ kết nối, mở rộng hệ thống và triển khai hạ tầng doanh nghiệp.",
      summaryEn: "Network switches for connectivity, system expansion and enterprise infrastructure deployment.",
      images: [
        "SW/cisco-catalyst-network-switch-cisco-systems-port-ethernet-switch-cisco-4875402aee173029d1787116cab7bb1c.png",
        "SW/cisco-catalyst-network-switch-gigabit-ethernet-small-form-factor-pluggable-transceiver-stackable-switch-switch-bc36227d38d06285442fda9f259668a8.png",
        "SW/cisco-meraki-network-switch-gigabit-ethernet-stackable-switch-power-over-ethernet-cloud-computing-ce2f26b6b43a76d0c17f26c662cf47b4.png",
        "SW/network-switch-ethernet-hub-router-computer-network-computer-icons-others-d7849b4365f605feacaa50cdc6074ee9.png",
        "SW/network-switch-gigabit-ethernet-cisco-catalyst-port-cisco-systems-switch-a54933eba28a46d1c80d5b4356050a9a.png"
      ]
    }
  ];

  let currentCategory = null;
  let currentImageIndex = 0;

  function initProductGallery() {
    const panel = document.getElementById("productExplorerPanel");
    const containerEl = document.getElementById("productCategoriesContainer");
    const modal = document.getElementById("productModal");
    const closeBtn = document.querySelector(".product-close");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const openModalBtn = document.getElementById("productOpenModalBtn");
    const inlineHero = document.getElementById("productInlineHero");

    if (!panel || !containerEl || !modal || !closeBtn || !prevBtn || !nextBtn || !openModalBtn || !inlineHero) return;

    generateCategoryButtons(containerEl);

    panel.hidden = false;
    selectCategory(productCategories[0]);

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });

    prevBtn.addEventListener("click", () => {
      if (!currentCategory) return;
      currentImageIndex = (currentImageIndex - 1 + currentCategory.images.length) % currentCategory.images.length;
      displayImage();
    });

    nextBtn.addEventListener("click", () => {
      if (!currentCategory) return;
      currentImageIndex = (currentImageIndex + 1) % currentCategory.images.length;
      displayImage();
    });

    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("show")) return;
      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "Escape") closeBtn.click();
    });

    openModalBtn.addEventListener("click", () => {
      if (!currentCategory) return;
      openProductGallery(currentCategory);
    });

    inlineHero.addEventListener("click", () => {
      if (!currentCategory) return;
      openProductGallery(currentCategory);
    });
  }

  function generateCategoryButtons(container) {
    container.innerHTML = "";
    productCategories.forEach((category) => {
      const btn = document.createElement("button");
      btn.className = "product-category-btn";
      btn.type = "button";
      btn.dataset.categoryId = category.id;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", "false");
      btn.innerHTML = `
        <span class="product-category-btn-text">
          <i class="bi ${category.icon}"></i>
          <span>${getProductName(category)}</span>
        </span>
      `;
      btn.addEventListener("click", () => selectCategory(category));
      container.appendChild(btn);
    });
  }

  function selectCategory(category) {
    currentCategory = category;
    currentImageIndex = 0;
    updateCategoryButtonState();
    renderInlineProductView();
  }

  function updateCategoryButtonState() {
    document.querySelectorAll(".product-category-btn").forEach((button) => {
      const isActive = currentCategory && button.dataset.categoryId === currentCategory.id;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
  }

  function renderInlineProductView() {
    const inlineTitle = document.getElementById("productInlineTitle");
    const inlineSummary = document.getElementById("productInlineSummary");
    const inlineHero = document.getElementById("productInlineHero");
    const inlineHeroImage = document.getElementById("productInlineHeroImage");
    const inlineCounter = document.getElementById("productInlineCounter");
    const inlineHint = document.getElementById("productInlineHint");
    const thumbContainer = document.getElementById("productInlineThumbs");
    const openModalBtn = document.getElementById("productOpenModalBtn");

    if (!inlineTitle || !inlineSummary || !inlineHero || !inlineHeroImage || !inlineCounter || !inlineHint || !thumbContainer || !openModalBtn) return;

    if (!currentCategory || currentCategory.images.length === 0) {
      inlineTitle.textContent = currentLang === "en" ? "No category selected" : "Chưa chọn danh mục";
      inlineSummary.textContent = currentLang === "en" ? "Choose a product group on the left to view images." : "Chọn một nhóm sản phẩm ở bên trái để xem hình ảnh.";
      inlineHeroImage.src = "";
      inlineHeroImage.alt = "";
      inlineHero.disabled = true;
      openModalBtn.disabled = true;
      inlineCounter.textContent = "0 / 0";
      inlineHint.textContent = currentLang === "en" ? "Choose a category to view product images." : "Chọn danh mục để xem hình ảnh sản phẩm.";
      thumbContainer.innerHTML = "";
      return;
    }

    inlineTitle.textContent = getProductName(currentCategory);
    inlineSummary.textContent = getProductSummary(currentCategory);
    inlineHero.disabled = false;
    openModalBtn.disabled = false;

    const imageName = currentCategory.images[currentImageIndex];
    const imagePath = currentCategory.path + imageName;
    inlineHeroImage.src = imagePath;
    inlineHeroImage.alt = `${getProductName(currentCategory)} ${currentImageIndex + 1}`;
    inlineCounter.textContent = `${currentImageIndex + 1} / ${currentCategory.images.length}`;
    inlineHint.textContent = currentLang === "en" ? "Click the large image or the button above to view the full gallery." : "Bấm vào ảnh lớn hoặc nút bên trên để xem gallery đầy đủ.";

    thumbContainer.innerHTML = "";
    currentCategory.images.forEach((image, index) => {
      const thumbBtn = document.createElement("button");
      thumbBtn.type = "button";
      thumbBtn.className = `product-thumb-btn${index === currentImageIndex ? " active" : ""}`;
      thumbBtn.innerHTML = `<img src="${currentCategory.path + image}" alt="${getProductName(currentCategory)} ${index + 1}">`;
      thumbBtn.addEventListener("click", () => {
        currentImageIndex = index;
        renderInlineProductView();
      });
      thumbContainer.appendChild(thumbBtn);
    });
  }

  function openProductGallery(category) {
    currentCategory = category;
    const modal = document.getElementById("productModal");
    modal.classList.add("show");
    displayImage();
  }

  function displayImage() {
    const gallery = document.getElementById("productGallery");
    const counter = document.getElementById("imageCounter");
    const categoryTitle = document.getElementById("productCategoryTitle");

    if (!currentCategory) {
      gallery.innerHTML = `<p style="color: #666; padding: 20px;">${currentLang === "en" ? "No category selected" : "Không có danh mục được chọn"}</p>`;
      counter.textContent = "0 / 0";
      return;
    }

    categoryTitle.textContent = getProductName(currentCategory);

    if (currentCategory.images.length === 0) {
      gallery.innerHTML = `<p style="color: #666; padding: 20px;">${currentLang === "en" ? "No images in this category" : "Không có ảnh trong danh mục này"}</p>`;
      counter.textContent = "0 / 0";
      return;
    }

    const imageName = currentCategory.images[currentImageIndex];
    const imagePath = currentCategory.path + imageName;
    gallery.innerHTML = `<img src="${imagePath}" alt="${getProductName(currentCategory)} ${currentImageIndex + 1}">`;
    counter.textContent = `${currentImageIndex + 1} / ${currentCategory.images.length}`;
  }

  function getProductName(category) {
    return currentLang === "en" && category.nameEn ? category.nameEn : category.name;
  }

  function getProductSummary(category) {
    return currentLang === "en" && category.summaryEn ? category.summaryEn : category.summary;
  }

  window.addEventListener("load", initProductGallery);
})();
