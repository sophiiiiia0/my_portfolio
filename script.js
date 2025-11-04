// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function() {
    // Replace with your EmailJS public key
    emailjs.init("CzQA8ybzPjA8aYbRy");
});

// Skills Data
const skillsData = [
    {
        name: "HTML",
        image: "images/html-logo.webp"
    },
    {
        name: "CSS",
        image: "images/css-logo.webp"
    },
    {
        name: "JavaScript",
        image: "images/javascript-logo.webp"
    },
    {
        name:"3Ds Max",
        image:"images/3dsmax.webp"
    },
    {
        name:"autocad",
        image:"images/autocadlogo.png"
    },
    {
        name:"photoshop",
        image:"images/Photoshop-Logo.png"
    },
    {
      name:"Python",
      image:"images/python logo.webp"
    },
    {
      name:"Git",
      image:"images/github logo.png"
    }
];
// === Display Skills ===
const skillsContainer = document.getElementById("skills-container");

// Projects Data

if (skillsContainer) {
  skillsData.forEach(skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");

    skillCard.innerHTML = `
      <img src="${skill.image}" alt="${skill.name}">
      <p>${skill.name}</p>
    `;

    skillsContainer.appendChild(skillCard);
  });
}
const projectsData = [
    {
        title: "",
        image: "",
        description: "",
        tags: [""],
        links: {
            github: "https://github.com",
            demo: "https://demo-link.com"
        }
    }
    // Add more projects as needed
];
//TESTIMONIALS DATA 
const testimonialsData = [
  {
    name: "Jane Smith",
    role: "Client",
    photo: "images/testimony-headshot.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
  // Add more testimonials as needed
];

// Display Testimonials 
const testimonialsContainer = document.getElementById("testimonials-container");

if (testimonialsContainer) {
  testimonialsData.forEach(testimonial => {
    const card = document.createElement("div");
    card.classList.add("testimonial-card");

    card.innerHTML = `
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-user">
        <img src="${testimonial.photo}" alt="${testimonial.name}">
        <div class="user-info">
          <h3>${testimonial.name}</h3>
          <p>${testimonial.role}</p>
        </div>
      </div>
    `;

    testimonialsContainer.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#buttons button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Initialize phone input
const phoneInput = document.querySelector("#phone");
if (phoneInput) {
    window.intlTelInput(phoneInput, {
        preferredCountries: ["us", "gb"],
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    });
}
document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      // Initialize flags
      if (!el.dataset.animatedDown) el.dataset.animatedDown = "false";
      if (!el.dataset.animatedUp) el.dataset.animatedUp = "false";

      const scrollingDown = window.scrollY > lastScrollY;
      const scrollingUp = window.scrollY < lastScrollY;

      // ✅ If element is visible on load or scroll
      if (entry.isIntersecting) {
        // --- Always animate if visible and not yet animated ---
        if ((scrollingDown && el.dataset.animatedDown === "false") ||
            (scrollingUp && el.dataset.animatedUp === "false") ||
            (window.scrollY === 0 && el.dataset.animatedDown === "false")) {

          el.classList.add("show");
          el.dataset.animatedDown = "true";
          el.dataset.animatedUp = "true";

          // Stagger animations for skills and projects
          if (el.classList.contains("skills-section")) {
            el.querySelectorAll(".skill-card").forEach((card, i) => {
              setTimeout(() => card.classList.add("show"), i * 150);
            });
          }
          if (el.classList.contains("projects-section")) {
            el.querySelectorAll(".project-card").forEach((card, i) => {
              setTimeout(() => card.classList.add("show"), i * 150);
            });
          }
        }
      }
    });
    lastScrollY = window.scrollY;
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  });

  // Observe elements
  const elementsToAnimate = document.querySelectorAll(
    "header, .hero-section, .skills-section, .projects-section, .testimonial-text, .contact-container, .title"
  );

  elementsToAnimate.forEach(el => {
    // Hide only elements below the fold
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.add("hidden");
    } else {
      el.classList.add("show");
      // Trigger animations immediately for visible sections
      if (el.classList.contains("skills-section")) {
        el.querySelectorAll(".skill-card").forEach((card, i) => {
          setTimeout(() => card.classList.add("show"), i * 150);
        });
      }
      if (el.classList.contains("projects-section")) {
        el.querySelectorAll(".project-card").forEach((card, i) => {
          setTimeout(() => card.classList.add("show"), i * 150);
        });
      }
    }
    observer.observe(el);
  });
  // ✅ Only hide cards initially if they're below the viewport
  document.querySelectorAll(".skill-card, .project-card").forEach(el => {
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.add("hidden");
    }
  });
});

<<<<<<< HEAD
// Form validation and submission will be added later
=======
// Form validation and submission will be added later
>>>>>>> 57e8abb67dfe27e0def26016075bce0d4c91c285
