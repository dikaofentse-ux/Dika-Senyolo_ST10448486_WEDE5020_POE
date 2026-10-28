document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      const open = navLinks.classList.toggle("show");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });
  }

  // Accessible FAQ accordion
  document.querySelectorAll(".faq-question").forEach(function (question) {
    question.setAttribute("tabindex", "0");
    question.setAttribute("role", "button");
    question.setAttribute("aria-expanded", "false");
    function toggleAnswer() {
      const item = question.closest(".faq-item");
      if (!item) return;
      const isOpen = item.classList.toggle("active");
      question.setAttribute("aria-expanded", String(isOpen));
      const icon = question.querySelector("span");
      if (icon) icon.textContent = isOpen ? "−" : "+";
    }
    question.addEventListener("click", toggleAnswer);
    question.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); toggleAnswer(); }
    });
  });

  // Product catalogue search and category filters
  const searchInput = document.getElementById("searchInput");
  const productGrid = document.getElementById("productGrid");
  let selectedCategory = "all";
  function filterProducts() {
    if (!productGrid) return;
    const term = searchInput ? searchInput.value.trim().toLowerCase() : "";
    productGrid.querySelectorAll(".product-card").forEach(function (card) {
      const category = (card.dataset.category || "").toLowerCase();
      const name = (card.dataset.name || card.textContent).toLowerCase();
      card.hidden = !((selectedCategory === "all" || category === selectedCategory) && (name.includes(term) || card.textContent.toLowerCase().includes(term)));
    });
    const empty = document.getElementById("noProductsFound");
    const anyVisible = Array.from(productGrid.querySelectorAll(".product-card")).some(card => !card.hidden);
    if (empty) empty.hidden = anyVisible;
  }
  if (searchInput) searchInput.addEventListener("input", filterProducts);
  document.querySelectorAll(".category-btn[data-category]").forEach(function (button) {
    button.addEventListener("click", function () {
      selectedCategory = button.dataset.category || "all";
      document.querySelectorAll(".category-btn[data-category]").forEach(b => b.classList.toggle("active", b === button));
      filterProducts();
    });
  });

  // Image lightbox for product and gallery images
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Expanded image");
  lightbox.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close image">×</button><img alt=""><p class="lightbox-caption"></p>';
  document.body.appendChild(lightbox);
  const lightboxImage = lightbox.querySelector("img");
  function closeLightbox() { lightbox.classList.remove("open"); document.body.classList.remove("lightbox-open"); }
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });
  document.querySelectorAll(".product-image img, .gallery img, .image-gallery img").forEach(function (img) {
    img.tabIndex = 0;
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      lightboxImage.src = img.currentSrc || img.src;
      lightboxImage.alt = img.alt || "Expanded farm image";
      lightbox.querySelector(".lightbox-caption").textContent = img.alt || "";
      lightbox.classList.add("open");
      document.body.classList.add("lightbox-open");
      lightbox.querySelector(".lightbox-close").focus();
    });
    img.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); img.click(); }
    });
  });

  function showStatus(element, message, isError) {
    if (!element) return;
    element.textContent = message;
    element.classList.toggle("error", Boolean(isError));
    element.classList.toggle("success", !isError);
  }
  function validateText(input, min, label) {
    const value = input.value.trim();
    if (value.length < min) { input.setCustomValidity(label + " must contain at least " + min + " characters."); return false; }
    input.setCustomValidity("");
    return true;
  }

  // Contact form: validate, then prepare an email in the visitor's email application.
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const reason = document.getElementById("reason");
      const message = document.getElementById("message");
      const status = document.getElementById("contactStatus");
      validateText(name, 3, "Full name");
      validateText(message, 10, "Message");
      if (!contactForm.reportValidity()) { showStatus(status, "Please correct the highlighted fields and try again.", true); return; }
      const body = "Full name: " + name.value.trim() + "\nEmail: " + email.value.trim() + "\nPhone: " + phone.value.trim() + "\nMessage type: " + reason.value + "\n\nMessage:\n" + message.value.trim();
      showStatus(status, "Your email application should open with your message. Please send the email to complete the process.", false);
      window.location.href = "mailto:info@greenharvest.co.za?subject=" + encodeURIComponent("Green-Harvest: " + reason.value) + "&body=" + encodeURIComponent(body);
    });
  }

  // Enquiry form: provide a relevant indicative response and prepare an email.
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    const dateInput = document.getElementById("enqDate");
    if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("enqName");
      const email = document.getElementById("enqEmail");
      const phone = document.getElementById("enqPhone");
      const type = document.getElementById("enqType");
      const product = document.getElementById("enqProduct");
      const quantity = document.getElementById("enqQuantity");
      const date = document.getElementById("enqDate");
      const message = document.getElementById("enqMessage");
      const status = document.getElementById("enquiryStatus");
      validateText(name, 3, "Full name");
      validateText(message, 10, "Additional details");
      if (!enquiryForm.reportValidity()) { showStatus(status, "Please correct the highlighted fields and try again.", true); return; }
      const responses = {
        "Product availability": "Thank you. We will need to confirm current stock and pricing before your order can be finalised.",
        "Bulk or business order": "Thank you for your bulk-order enquiry. The farm will need to confirm quantities, pricing and delivery arrangements.",
        "Delivery": "Thank you. Delivery availability and any applicable charges must be confirmed by the farm.",
        "Volunteering": "Thank you for your interest in volunteering. The farm will need to confirm current opportunities and dates.",
        "Sponsorship": "Thank you for your sponsorship enquiry. The farm will follow up to discuss possible arrangements."
      };
      showStatus(status, responses[type.value] || "Thank you. Your enquiry details are ready to email.", false);
      const body = "Name: " + name.value.trim() + "\nEmail: " + email.value.trim() + "\nPhone: " + phone.value.trim() + "\nEnquiry type: " + type.value + "\nProduct/service: " + product.value.trim() + "\nEstimated quantity: " + quantity.value + "\nPreferred date: " + date.value + "\n\nDetails:\n" + message.value.trim();
      window.location.href = "mailto:info@greenharvest.co.za?subject=" + encodeURIComponent("Green-Harvest Enquiry: " + type.value) + "&body=" + encodeURIComponent(body);
    });
  }
});