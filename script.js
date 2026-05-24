const coaches = [
  {
    name: "Sarah Lim",
    specialty: "Strength",
    location: "Tiong Bahru",
    vibe: "Patient",
    sessions: ["Home", "Gym", "Outdoor"],
    availability: ["Today", "Evenings", "Weekends"],
    price: 88,
    rating: 4.96,
    reviews: 142,
    fit: 94,
    experience: 7,
    languages: ["English", "Mandarin"],
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80",
    bio: "Beginner-friendly strength coaching, home starts, and confidence-building gym plans.",
    long: "I help nervous beginners and returning gym-goers build a calm, structured strength habit. We start where you are — at home, in a condo gym, or a quiet studio — and progress only when you feel ready. My sessions blend movement coaching, simple programming, and honest progress tracking.",
    tags: ["NASM", "First aid", "Beginner-safe"],
    certifications: ["NASM Certified Personal Trainer", "First Aid + CPR/AED", "TRX Suspension L1"],
    packages: [
      { name: "Single session", price: 88, detail: "60 minutes, any location" },
      { name: "4-session starter", price: 320, detail: "Save S$32 · best for beginners" },
      { name: "Monthly membership", price: 720, detail: "8 sessions + WhatsApp check-ins" }
    ],
    sampleReviews: [
      { author: "Alicia, 31", text: "Sarah came to my condo gym for the first 3 sessions. I went from zero to confident with free weights.", stars: 5 },
      { author: "Daryl, 44", text: "Patient, clear cues, never judgmental. I actually look forward to training now.", stars: 5 }
    ]
  },
  {
    name: "Marcus Tan",
    specialty: "Physio",
    location: "CBD",
    vibe: "Technical",
    sessions: ["Home", "Gym", "Virtual"],
    availability: ["Mornings", "Evenings"],
    price: 120,
    rating: 4.91,
    reviews: 98,
    fit: 90,
    experience: 11,
    languages: ["English"],
    image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=900&q=80",
    bio: "Physio-led strength and mobility coaching for desk workers and returning athletes.",
    long: "I bridge the gap between physiotherapy and personal training. Whether you're recovering from a knee niggle, getting back to running, or just stiff from desk work, I build progressive programmes that respect your body's signals while still pushing meaningful progress.",
    tags: ["Physio", "Rehab", "Posture"],
    certifications: ["Registered Physiotherapist (AHPC)", "FMS Level 2", "Strength & Conditioning Certified"],
    packages: [
      { name: "Assessment + plan", price: 140, detail: "90 min assessment + take-home programme" },
      { name: "6-session rehab arc", price: 660, detail: "Save S$60 · structured return" },
      { name: "Hybrid virtual + in-person", price: 480, detail: "4 sessions, mix online + home" }
    ],
    sampleReviews: [
      { author: "Reuben, 38", text: "Came back from ACL surgery faster than expected. Marcus' programming is sharp.", stars: 5 },
      { author: "Ling, 29", text: "Explained the why behind every drill. Office back pain is gone.", stars: 5 }
    ]
  },
  {
    name: "Priya Nair",
    specialty: "Yoga",
    location: "Tampines",
    vibe: "Calm",
    sessions: ["Home", "Outdoor", "Virtual"],
    availability: ["Today", "Mornings", "Weekends"],
    price: 72,
    rating: 4.98,
    reviews: 186,
    fit: 92,
    experience: 9,
    languages: ["English", "Tamil", "Hindi"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    bio: "Yoga, breathwork, and gentle mobility for stress, flexibility, pregnancy, and seniors.",
    long: "I teach yoga as a calm, sustainable practice — not a performance. My students range from prenatal mums to retired uncles, and I tailor every flow to your body, breath, and goals. Sessions in the East are my home turf, but I travel island-wide.",
    tags: ["Yoga Alliance", "Mindful", "Seniors"],
    certifications: ["RYT-500 Yoga Alliance", "Prenatal Yoga Certified", "Yin Yoga Teacher"],
    packages: [
      { name: "Single flow", price: 72, detail: "60 minutes, your space" },
      { name: "Weekly wellness", price: 260, detail: "4 sessions/month, same time slot" },
      { name: "Senior mobility plan", price: 320, detail: "5 gentle sessions, home visits" }
    ],
    sampleReviews: [
      { author: "Mrs Tan, 62", text: "I can touch my toes again. Priya is so patient with seniors.", stars: 5 },
      { author: "Hafiz, 35", text: "Booked a weekend outdoor flow at Bedok Reservoir. Magical.", stars: 5 }
    ]
  },
  {
    name: "Daniel Koh",
    specialty: "Kids Sports",
    location: "Woodlands",
    vibe: "High energy",
    sessions: ["Outdoor", "Home"],
    availability: ["Weekends", "Evenings"],
    price: 65,
    rating: 4.87,
    reviews: 73,
    fit: 85,
    experience: 6,
    languages: ["English", "Mandarin"],
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80",
    bio: "PE teacher and youth coach for agility, school fitness tests, and sports confidence.",
    long: "I'm a current MOE PE teacher who coaches kids on weekends. From NAPFA prep to building a shy child's confidence on the field, I make sessions playful, structured, and parent-transparent. You get a quick recap after every session.",
    tags: ["PE teacher", "NAPFA", "Kids"],
    certifications: ["MOE Registered PE Teacher", "Youth Sports Trainer (NYSI)", "First Aid + CPR/AED"],
    packages: [
      { name: "Single session", price: 65, detail: "45 min, outdoor or home" },
      { name: "NAPFA 4-week sprint", price: 240, detail: "8 sessions before the test" },
      { name: "Siblings bundle", price: 95, detail: "60 min for 2 kids together" }
    ],
    sampleReviews: [
      { author: "Mrs Sim (parent)", text: "My son passed his 2.4km after 4 weekends. He actually enjoyed the sessions.", stars: 5 },
      { author: "Mr Yeo (parent)", text: "Daniel sends a clear progress note every session. Worth every dollar.", stars: 5 }
    ]
  },
  {
    name: "Nadia Rahman",
    specialty: "Pilates",
    location: "CBD",
    vibe: "Calm",
    sessions: ["Home", "Gym", "Virtual"],
    availability: ["Today", "Mornings"],
    price: 105,
    rating: 4.94,
    reviews: 121,
    fit: 88,
    experience: 8,
    languages: ["English", "Malay"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    bio: "Mat pilates, core control, posture, prenatal strength, and low-impact toning.",
    long: "I teach pilates that's gentle on joints and serious on results. My clients are mostly professionals who sit all day, new mums rebuilding core, and people who want to look long and lean without lifting heavy. Sessions in CBD condos and via Zoom.",
    tags: ["Pilates", "Core", "Posture"],
    certifications: ["STOTT Pilates Mat L1+L2", "Pre & Post Natal Certified", "Barre Above Instructor"],
    packages: [
      { name: "Single mat session", price: 105, detail: "55 min, condo or studio" },
      { name: "Office lunch pack", price: 380, detail: "4 sessions, CBD only, 45 min" },
      { name: "Postnatal recovery arc", price: 580, detail: "6 sessions over 8 weeks" }
    ],
    sampleReviews: [
      { author: "Joanne, 36", text: "Postnatal pilates with Nadia rebuilt my core safely. I felt heard the entire time.", stars: 5 },
      { author: "Wei Ming, 41", text: "Lunchtime sessions in my office condo gym — life changing for my posture.", stars: 5 }
    ]
  },
  {
    name: "Leo Fernandez",
    specialty: "Nutrition",
    location: "Virtual",
    vibe: "Technical",
    sessions: ["Virtual"],
    availability: ["Evenings", "Weekends"],
    price: 58,
    rating: 4.9,
    reviews: 64,
    fit: 82,
    experience: 5,
    languages: ["English", "Spanish"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    bio: "Practical nutrition coaching for busy adults who want structure without extreme dieting.",
    long: "No keto. No juice cleanse. No 1200kcal nonsense. I work with hawker centres, kopitiams, and your real lifestyle. Together we build a flexible eating system you actually maintain — with weekly check-ins and habit tracking in-app.",
    tags: ["Nutrition", "Meal plans", "Habits"],
    certifications: ["Precision Nutrition L1", "ISSN Sports Nutrition Specialist", "BSc Food Science"],
    packages: [
      { name: "30-min consult", price: 58, detail: "Single virtual session" },
      { name: "Habit reset (4 wks)", price: 220, detail: "Weekly calls + WhatsApp support" },
      { name: "12-week transformation", price: 540, detail: "Full plan, weigh-ins, weekly tweaks" }
    ],
    sampleReviews: [
      { author: "Khalid, 33", text: "Lost 8kg eating chicken rice. Leo is a magician with hawker macros.", stars: 5 },
      { author: "Eunice, 28", text: "I stopped fearing food. Best coaching investment I've made.", stars: 5 }
    ]
  },
  {
    name: "Aaron Wee",
    specialty: "Strength",
    location: "Tampines",
    vibe: "High energy",
    sessions: ["Gym", "Outdoor"],
    availability: ["Mornings", "Weekends"],
    price: 95,
    rating: 4.89,
    reviews: 88,
    fit: 87,
    experience: 6,
    languages: ["English", "Mandarin"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    bio: "Power, conditioning, and group bootcamps for people who want to be pushed.",
    long: "I coach hybrid athletes — people who want to look strong AND run a 10k. Expect structured strength + conditioning blocks, honest accountability, and the occasional bootcamp at East Coast Park. Not for the faint-hearted, but always safe.",
    tags: ["S&C", "Bootcamp", "Conditioning"],
    certifications: ["NSCA-CSCS", "CrossFit L2", "Kettlebell Sport L1"],
    packages: [
      { name: "Single session", price: 95, detail: "60 min, gym or park" },
      { name: "Hybrid 8-week", price: 680, detail: "16 sessions of strength + conditioning" },
      { name: "Saturday bootcamp", price: 35, detail: "Drop-in outdoor group session" }
    ],
    sampleReviews: [
      { author: "Shaun, 30", text: "Ran my first sub-50 10k after 8 weeks of Aaron's blocks. Beast.", stars: 5 },
      { author: "Carmen, 27", text: "His Saturday bootcamps are addictive. Found my fitness community.", stars: 4 }
    ]
  },
  {
    name: "Dr. Mei Lin",
    specialty: "Physio",
    location: "Novena",
    vibe: "Patient",
    sessions: ["Gym", "Virtual"],
    availability: ["Mornings", "Today"],
    price: 145,
    rating: 4.97,
    reviews: 156,
    fit: 91,
    experience: 14,
    languages: ["English", "Mandarin", "Cantonese"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    bio: "Senior physiotherapist specialising in elderly mobility, post-op rehab, and balance.",
    long: "After 14 years in hospital rehab settings, I now work one-on-one with clients who deserve more time than a clinic appointment allows. I focus on elderly mobility, falls prevention, post-surgical return-to-life, and chronic pain management.",
    tags: ["Senior care", "Post-op", "Falls prevention"],
    certifications: ["MSc Physiotherapy", "Geriatric Rehab Specialist", "Dry Needling Certified"],
    packages: [
      { name: "Single visit", price: 145, detail: "75 min home or clinic" },
      { name: "Falls prevention plan", price: 700, detail: "5 sessions over 6 weeks" },
      { name: "Post-op rehab arc", price: 1240, detail: "10 sessions, full return-to-life" }
    ],
    sampleReviews: [
      { author: "Daughter of Mr Ong, 78", text: "Dad walks again without his walker. Dr Mei is gold.", stars: 5 },
      { author: "Hui Ying, 52", text: "Chronic shoulder fixed after years of clinics failing me.", stars: 5 }
    ]
  },
  {
    name: "Coach Ruth",
    specialty: "Yoga",
    location: "Tiong Bahru",
    vibe: "High energy",
    sessions: ["Gym", "Outdoor", "Home"],
    availability: ["Evenings", "Weekends"],
    price: 80,
    rating: 4.92,
    reviews: 109,
    fit: 89,
    experience: 7,
    languages: ["English"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    bio: "Power yoga, sweat flows, and rooftop sessions for people who hate slow workouts.",
    long: "If you've ever yawned through a yoga class, try mine. I run heated power flows, vinyasa with weights, and sunset rooftop sessions across the central neighbourhoods. Strong, sweaty, joyful.",
    tags: ["Power yoga", "Vinyasa", "Rooftop"],
    certifications: ["RYT-200", "Power Yoga Certified", "Mobility Specialist"],
    packages: [
      { name: "Single flow", price: 80, detail: "60 min power flow" },
      { name: "Rooftop sunset pack", price: 290, detail: "4 sunset rooftop sessions" },
      { name: "Couples flow", price: 130, detail: "60 min for 2, your space" }
    ],
    sampleReviews: [
      { author: "Mark & Jas", text: "Did her couples flow on our anniversary. So fun. Hooked.", stars: 5 },
      { author: "Lavinia, 32", text: "Finally a yoga class that doesn't bore me. Sweat city.", stars: 5 }
    ]
  },
  {
    name: "Coach Hakim",
    specialty: "Kids Sports",
    location: "Bedok",
    vibe: "Patient",
    sessions: ["Outdoor", "Gym"],
    availability: ["Weekends"],
    price: 55,
    rating: 4.85,
    reviews: 51,
    fit: 84,
    experience: 4,
    languages: ["English", "Malay"],
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80",
    bio: "Football, agility, and confidence coaching for kids 6-14.",
    long: "Ex-NFA youth player turned community coach. I run small-group and 1-1 sessions for football fundamentals, agility, and confidence. My specialty is the shy kid in the corner — by week 3, they're calling for the ball.",
    tags: ["Football", "Agility", "Confidence"],
    certifications: ["FAS Coaching Cert C", "Youth First Aid", "Safeguarding Trained"],
    packages: [
      { name: "Single session", price: 55, detail: "45 min outdoor" },
      { name: "Team of 4 (1hr)", price: 120, detail: "Bring your kid's friends" },
      { name: "6-week confidence arc", price: 300, detail: "Weekly outdoor sessions" }
    ],
    sampleReviews: [
      { author: "Mrs Devi (parent)", text: "My son used to refuse PE. Now he begs me for Saturdays with Coach Hakim.", stars: 5 },
      { author: "Mr Lim (parent)", text: "Patient with kids of all levels. Great communicator.", stars: 5 }
    ]
  },
  {
    name: "Carmen Oh",
    specialty: "Nutrition",
    location: "Virtual",
    vibe: "Calm",
    sessions: ["Virtual"],
    availability: ["Mornings", "Evenings"],
    price: 70,
    rating: 4.95,
    reviews: 89,
    fit: 86,
    experience: 8,
    languages: ["English", "Mandarin"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    bio: "Registered dietitian for women's health, gut, hormones, and sustainable habits.",
    long: "I focus on women navigating hormonal shifts, gut issues, and recovery from disordered eating. My approach is gentle, evidence-based, and culturally aware. Sessions are virtual with structured weekly check-ins.",
    tags: ["RD", "Women's health", "Gut"],
    certifications: ["Registered Dietitian (SNDA)", "Gut Health Specialist", "Intuitive Eating Counselor"],
    packages: [
      { name: "Single consult", price: 70, detail: "45 min virtual" },
      { name: "Hormone reset (6 wks)", price: 360, detail: "6 weekly sessions + tracking" },
      { name: "Gut repair plan", price: 480, detail: "8 weeks, food + supplements" }
    ],
    sampleReviews: [
      { author: "Mei, 39", text: "Finally feel like myself after perimenopause hit. Carmen saved my year.", stars: 5 },
      { author: "Sasha, 26", text: "She helped me heal my relationship with food. Worth every cent.", stars: 5 }
    ]
  },
  {
    name: "Coach Theo",
    specialty: "Pilates",
    location: "Holland Village",
    vibe: "Technical",
    sessions: ["Gym", "Home"],
    availability: ["Today", "Evenings"],
    price: 115,
    rating: 4.93,
    reviews: 78,
    fit: 87,
    experience: 9,
    languages: ["English", "French"],
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80",
    bio: "Reformer-style mat pilates with a biomechanics-first lens. Great for athletes.",
    long: "I came to pilates through ballet and biomechanics. My sessions are precise, intelligent, and surprisingly hard. Many of my clients are runners, climbers, and dancers using pilates to bulletproof their main sport.",
    tags: ["Reformer", "Athletes", "Biomechanics"],
    certifications: ["BASI Pilates Mat + Reformer", "Biomechanics Specialist", "Dance Conditioning Cert"],
    packages: [
      { name: "Single session", price: 115, detail: "60 min, reformer-style mat" },
      { name: "Athlete cross-train", price: 850, detail: "8 sessions, performance focus" },
      { name: "Couples private", price: 180, detail: "60 min for 2, condo gym" }
    ],
    sampleReviews: [
      { author: "Janelle, runner", text: "Knee pain gone, cadence smoother. Theo is technical gold.", stars: 5 },
      { author: "Adrien, climber", text: "Best cross-training I've done. Worth the price.", stars: 5 }
    ]
  }
];

const providerRequests = [
  { client: "Alicia", service: "Beginner strength", time: "Today, 7:00 PM", value: "S$88", status: "Pending" },
  { client: "Mr. Ong", service: "Mobility session", time: "Sat, 9:00 AM", value: "S$120", status: "Pending" },
  { client: "Jia Min", service: "4-session package", time: "Sun, 5:00 PM", value: "S$352", status: "Accepted" }
];

let activeCategory = "all";
let activeSort = "fit";
let selectedCoach = "";
let selectedLoginRole = "user";
let dashboardReady = false;

function initShared() {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  if (header && menuButton) {
    menuButton.addEventListener("click", () => header.classList.toggle("is-open"));
  }

  document.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.openModal));
  });
  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeModals);
  });
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModals();
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModals();
  });

  document.querySelectorAll("[data-show-public]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      showPublic();
    });
  });

  document.querySelectorAll("[data-show-login]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      showLogin(button.dataset.loginRole || "user");
    });
  });

  document.querySelectorAll("[data-show-dashboard]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      showDashboard(localStorage.getItem("trainlyRole") || "user");
    });
  });

  const headerLogout = document.querySelector("#headerLogoutButton");
  if (headerLogout) {
    headerLogout.addEventListener("click", logout);
  }

  document.querySelectorAll(".nav-links a[href^='#']").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = link.getAttribute("href");
      showPublic();
      setTimeout(() => document.querySelector(target)?.scrollIntoView({ behavior: "smooth" }), 80);
    });
  });

  updateAuthHeader();
}

function initHome() {
  if (!document.querySelector(".home-page")) return;

  renderCoaches();

  document.querySelector("#heroSearch").addEventListener("submit", (event) => {
    event.preventDefault();
    activeCategory = document.querySelector("#heroGoal").value;
    document.querySelectorAll(".category-pill").forEach((pill) => {
      pill.classList.toggle("active", pill.dataset.category === activeCategory);
    });
    document.querySelector("#discover").scrollIntoView({ behavior: "smooth" });
    renderCoaches();
  });

  document.querySelectorAll(".category-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      activeCategory = pill.dataset.category;
      document.querySelectorAll(".category-pill").forEach((item) => item.classList.remove("active"));
      pill.classList.add("active");
      renderCoaches();
    });
  });

  ["budgetFilter", "sessionFilter", "vibeFilter", "availabilityFilter"].forEach((id) => {
    document.querySelector(`#${id}`).addEventListener("change", renderCoaches);
  });

  document.querySelector("#resetFilters").addEventListener("click", () => {
    activeCategory = "all";
    activeSort = "fit";
    document.querySelectorAll(".category-pill").forEach((pill) => pill.classList.toggle("active", pill.dataset.category === "all"));
    document.querySelectorAll(".mini-tabs button").forEach((button) => button.classList.toggle("active", button.dataset.sort === "fit"));
    ["budgetFilter", "sessionFilter", "vibeFilter", "availabilityFilter"].forEach((id) => {
      document.querySelector(`#${id}`).value = "all";
    });
    renderCoaches();
  });

  document.querySelectorAll(".mini-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      activeSort = button.dataset.sort;
      document.querySelectorAll(".mini-tabs button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderCoaches();
    });
  });

  document.querySelector("#quizForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const match = findBestMatch({
      specialty: form.get("goal"),
      vibe: form.get("vibe"),
      session: form.get("session"),
      budget: Number(form.get("budget"))
    });
    const result = document.querySelector("#quizResult");
    result.innerHTML = `
      <strong>${match.score}% match: ${match.name}</strong><br>
      ${match.bio}<br>
      <span>S$${match.price}/session · ${match.location} · ${match.sessions.join(", ")}</span>
      <div class="modal-actions"><button class="primary-button" data-book-now="${match.name}" type="button">Book ${match.name.split(" ")[0]}</button></div>
    `;
    result.classList.add("is-visible");
    result.querySelector("[data-book-now]").addEventListener("click", () => {
      closeModals();
      openBooking(match.name);
    });
  });

  document.querySelector("#bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const success = document.querySelector("#bookingSuccess");
    success.textContent = `${form.get("name")}, your ${form.get("plan").toLowerCase()} request with ${selectedCoach || "a Trainly coach"} is ready for confirmation. In the real app, payment would be protected in escrow.`;
    success.classList.add("is-visible");
  });

  initFaq();
  initNewsletter();
  initProviderWizard();
  initChatComposer();
  initStatsCounter();
  initScrollReveal();
}

function initChatComposer() {
  const form = document.querySelector("#chatComposer");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    const text = input.value.trim();
    if (!text) return;
    appendChatBubble(text, true);
    input.value = "";
    setTimeout(() => {
      const replies = [
        "That sounds doable! When were you thinking?",
        "Great — I'd recommend starting with the 4-session package.",
        "Yes, I can come to your condo gym. Which area are you?",
        "Beginners are my favourite. We'll go at your pace."
      ];
      appendChatBubble(replies[Math.floor(Math.random() * replies.length)], false);
    }, 700);
  });
  document.querySelectorAll(".chat-quick button").forEach((button) => {
    button.addEventListener("click", () => {
      appendChatBubble(button.textContent, true);
      setTimeout(() => appendChatBubble("Got it. Let me check my schedule and revert in 5 minutes.", false), 700);
    });
  });
  document.querySelector("#chatBookButton")?.addEventListener("click", () => {
    closeModals();
    openBooking(selectedCoach || "Trainly coach");
  });
}

function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector(".faq-question");
    if (!button) return;
    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function initNewsletter() {
  const form = document.querySelector("#newsletterForm");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".newsletter-status");
    const input = form.querySelector("input");
    if (!input.value.trim()) return;
    if (status) {
      status.textContent = `Thanks! We'll send the best of Trainly to ${input.value.trim()}.`;
      status.classList.add("is-visible");
    }
    input.value = "";
  });
}

function initProviderWizard() {
  const modal = document.querySelector("#providerModal");
  if (!modal) return;
  const steps = modal.querySelectorAll(".wizard-step");
  const dots = modal.querySelectorAll(".wizard-dot");
  let step = 0;

  const setStep = (next) => {
    step = Math.max(0, Math.min(steps.length - 1, next));
    steps.forEach((el, i) => el.classList.toggle("active", i === step));
    dots.forEach((dot, i) => dot.classList.toggle("active", i <= step));
  };

  modal.querySelectorAll("[data-wizard-next]").forEach((button) => {
    button.addEventListener("click", () => setStep(step + 1));
  });
  modal.querySelectorAll("[data-wizard-back]").forEach((button) => {
    button.addEventListener("click", () => setStep(step - 1));
  });
  modal.querySelector("[data-wizard-finish]")?.addEventListener("click", () => {
    closeModals();
    showDashboard("provider");
  });
}

function initStatsCounter() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length || typeof IntersectionObserver === "undefined") return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach((el) => observer.observe(el));
}

function initScrollReveal() {
  if (typeof IntersectionObserver === "undefined") return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function showPublic() {
  document.querySelector("#publicSite")?.classList.remove("is-hidden");
  document.querySelector("#publicFooter")?.classList.remove("is-hidden");
  document.querySelector("#loginScreen")?.classList.add("is-hidden");
  document.querySelector("#dashboardScreen")?.classList.add("is-hidden");
  document.body.classList.remove("dashboard-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  updateAuthHeader();
}

function showLogin(role = "user") {
  selectedLoginRole = role;
  document.querySelector("#publicSite")?.classList.add("is-hidden");
  document.querySelector("#publicFooter")?.classList.add("is-hidden");
  document.querySelector("#dashboardScreen")?.classList.add("is-hidden");
  document.querySelector("#loginScreen")?.classList.remove("is-hidden");
  document.body.classList.remove("dashboard-active");
  setLoginRole(role);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDashboard(role = "user") {
  localStorage.setItem("trainlyRole", role);
  localStorage.setItem("trainlyName", role === "provider" ? "Sarah Lim" : "Cherrelle");
  document.querySelector("#publicSite")?.classList.add("is-hidden");
  document.querySelector("#publicFooter")?.classList.add("is-hidden");
  document.querySelector("#loginScreen")?.classList.add("is-hidden");
  document.querySelector("#dashboardScreen")?.classList.remove("is-hidden");
  document.body.classList.add("dashboard-active");
  updateDashboardHeader(role);
  renderDashboard(role === "provider");
  dashboardReady = true;
  switchDashboardTab("overview");
  updateAuthHeader();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateAuthHeader() {
  const isLoggedIn = Boolean(localStorage.getItem("trainlyRole"));
  document.querySelectorAll(".auth-public").forEach((item) => item.classList.toggle("is-hidden", isLoggedIn));
  document.querySelectorAll(".auth-app").forEach((item) => item.classList.toggle("is-hidden", !isLoggedIn));
}

function logout() {
  localStorage.removeItem("trainlyRole");
  localStorage.removeItem("trainlyName");
  showPublic();
}

function updateDashboardHeader(role) {
  const isProvider = role === "provider";
  const name = localStorage.getItem("trainlyName") || (isProvider ? "Sarah Lim" : "Cherrelle");
  document.querySelector("#roleBadge").textContent = isProvider ? "Service provider" : "User";
  document.querySelector("#dashEyebrow").textContent = isProvider ? "Provider dashboard" : "User dashboard";
  document.querySelector("#dashTitle").textContent = isProvider ? `Welcome back, Coach ${name.split(" ")[0]}` : `Welcome back, ${name}`;
  document.querySelector("#dashIntro").textContent = isProvider
    ? "Manage requests, earnings, calendar, reviews, and profile visibility."
    : "Find coaches, manage sessions, chat before booking, and track progress.";
  document.querySelector("#mainDashAction").textContent = isProvider ? "Boost profile" : "Book a session";
}

function renderCoaches() {
  const grid = document.querySelector("#coachGrid");
  if (!grid) return;
  const filters = {
    budget: document.querySelector("#budgetFilter").value,
    session: document.querySelector("#sessionFilter").value,
    vibe: document.querySelector("#vibeFilter").value,
    availability: document.querySelector("#availabilityFilter").value,
    area: document.querySelector("#heroArea")?.value || "all"
  };

  let list = coaches
    .filter((coach) => activeCategory === "all" || coach.specialty === activeCategory)
    .filter((coach) => filters.area === "all" || coach.location === filters.area)
    .filter((coach) => filters.budget === "all" || coach.price <= Number(filters.budget))
    .filter((coach) => filters.session === "all" || coach.sessions.includes(filters.session))
    .filter((coach) => filters.vibe === "all" || coach.vibe === filters.vibe)
    .filter((coach) => filters.availability === "all" || coach.availability.includes(filters.availability));

  list = list.sort((a, b) => {
    if (activeSort === "price") return a.price - b.price;
    if (activeSort === "rating") return b.rating - a.rating;
    return b.fit - a.fit;
  });

  document.querySelector("#resultCount").textContent = `${list.length} coach${list.length === 1 ? "" : "es"} found`;
  grid.innerHTML = list.length
    ? list.map(coachCard).join("")
    : `<article class="coach-card"><div class="coach-body"><h3>No exact match yet</h3><p>Try fewer filters or use the AI match quiz.</p><button class="primary-button" data-open-modal="quiz">Find my match</button></div></article>`;

  grid.querySelectorAll("[data-book]").forEach((button) => {
    button.addEventListener("click", () => openBooking(button.dataset.book));
  });
  grid.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => openCoachDetail(button.dataset.view));
  });
  grid.querySelectorAll("[data-chat]").forEach((button) => {
    button.addEventListener("click", () => openChat(button.dataset.chat));
  });
  grid.querySelectorAll("[data-save]").forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = button.textContent === "Saved" ? "Save" : "Saved";
    });
  });
  grid.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.openModal));
  });
}

function coachCard(coach) {
  return `
    <article class="coach-card">
      <div class="coach-photo" data-label="${coach.fit}% Trainly fit" style="background-image:url('${coach.image}')"></div>
      <div class="coach-body">
        <div class="coach-row">
          <div>
            <h3>${coach.name}</h3>
            <p>${coach.specialty} · ${coach.location}</p>
          </div>
          <span class="rating">★ ${coach.rating}</span>
        </div>
        <p>${coach.bio}</p>
        <div class="hero-badges">${coach.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="coach-row">
          <strong class="price">S$${coach.price}</strong>
          <span>${coach.reviews} reviews</span>
        </div>
        <div class="coach-actions three">
          <button class="secondary-button" data-view="${coach.name}">View</button>
          <button class="secondary-button" data-chat="${coach.name}">Chat</button>
          <button class="primary-button" data-book="${coach.name}">Book</button>
        </div>
      </div>
    </article>
  `;
}

function findCoach(name) {
  return coaches.find((coach) => coach.name === name);
}

function openCoachDetail(name) {
  const coach = findCoach(name);
  if (!coach) return;
  selectedCoach = coach.name;
  const body = document.querySelector("#coachDetailBody");
  if (!body) return;
  const stars = "★★★★★";
  body.innerHTML = `
    <div class="coach-detail-hero" style="background-image:linear-gradient(180deg, rgba(17,29,40,0) 35%, rgba(17,29,40,0.78) 100%), url('${coach.image}')">
      <div class="coach-detail-hero-info">
        <span class="chip">${coach.fit}% Trainly fit</span>
        <h2>${coach.name}</h2>
        <p>${coach.specialty} · ${coach.location} · ${coach.experience}y experience</p>
        <div class="coach-detail-meta">
          <span>★ ${coach.rating} (${coach.reviews} reviews)</span>
          <span>${coach.languages.join(", ")}</span>
          <span>From S$${coach.price}</span>
        </div>
      </div>
    </div>
    <div class="coach-detail-content">
      <section>
        <h3>About ${coach.name.split(" ")[0]}</h3>
        <p>${coach.long}</p>
      </section>
      <section>
        <h3>Certifications</h3>
        <ul class="cert-list">${coach.certifications.map((cert) => `<li><span class="cert-tick">✓</span>${cert}</li>`).join("")}</ul>
      </section>
      <section>
        <h3>Packages</h3>
        <div class="package-grid small">
          ${coach.packages.map((pkg, i) => `
            <article class="package-card ${i === 1 ? "highlight" : ""}">
              <strong>${pkg.name}</strong>
              <div class="package-price">S$${pkg.price}</div>
              <p>${pkg.detail}</p>
              <button class="primary-button" data-book-package="${pkg.name}">Choose</button>
            </article>
          `).join("")}
        </div>
      </section>
      <section>
        <h3>Recent reviews</h3>
        <div class="review-list">
          ${coach.sampleReviews.map((review) => `
            <article class="review-card">
              <div class="review-stars">${stars.slice(0, review.stars)}</div>
              <p>"${review.text}"</p>
              <span>— ${review.author}</span>
            </article>
          `).join("")}
        </div>
      </section>
      <div class="coach-detail-actions">
        <button class="secondary-button large" data-chat="${coach.name}">Chat with ${coach.name.split(" ")[0]}</button>
        <button class="primary-button large" data-book="${coach.name}">Book a session</button>
      </div>
    </div>
  `;
  body.querySelectorAll("[data-book], [data-book-package]").forEach((button) => {
    button.addEventListener("click", () => {
      closeModals();
      openBooking(coach.name);
    });
  });
  body.querySelectorAll("[data-chat]").forEach((button) => {
    button.addEventListener("click", () => {
      closeModals();
      openChat(coach.name);
    });
  });
  openModal("coachDetail");
}

function openChat(name) {
  const coach = findCoach(name);
  if (!coach) return;
  selectedCoach = coach.name;
  const header = document.querySelector("#chatHeader");
  const body = document.querySelector("#chatBody");
  if (!header || !body) return;
  header.innerHTML = `
    <img src="${coach.image}" alt="${coach.name}">
    <div>
      <strong>${coach.name}</strong>
      <span>Usually replies in under 1 hour · ★ ${coach.rating}</span>
    </div>
  `;
  body.innerHTML = `
    <div class="chat-bubble">
      <p>Hi there! 👋 Thanks for reaching out. I'm ${coach.name.split(" ")[0]}. What are you hoping to work on?</p>
      <span>${coach.name.split(" ")[0]} · 2 min ago</span>
    </div>
    <div class="chat-bubble">
      <p>Feel free to ask about pricing, location, or first-session expectations before booking.</p>
      <span>${coach.name.split(" ")[0]} · just now</span>
    </div>
  `;
  openModal("chat");
}

function appendChatBubble(text, mine = true) {
  const body = document.querySelector("#chatBody");
  if (!body) return;
  const coach = findCoach(selectedCoach);
  body.insertAdjacentHTML(
    "beforeend",
    `<div class="chat-bubble ${mine ? "me" : ""}"><p>${text}</p><span>${mine ? "You" : (coach ? coach.name.split(" ")[0] : "Coach")} · just now</span></div>`
  );
  body.scrollTop = body.scrollHeight;
}

function findBestMatch(preferences) {
  return coaches
    .map((coach) => {
      let score = coach.fit * 0.55;
      if (coach.specialty === preferences.specialty) score += 28;
      if (coach.vibe === preferences.vibe) score += 8;
      if (coach.sessions.includes(preferences.session)) score += 8;
      if (coach.price <= preferences.budget) score += 6;
      return { ...coach, score: Math.round(Math.min(score, 98)) };
    })
    .sort((a, b) => b.score - a.score)[0];
}

function openModal(type) {
  const modal = document.querySelector(`#${type}Modal`);
  if (!modal) return;
  document.body.classList.add("modal-open");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModals() {
  document.body.classList.remove("modal-open");
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
}

function openBooking(coachName) {
  selectedCoach = coachName;
  const title = document.querySelector("#bookingTitle");
  if (title) title.textContent = `Book ${coachName}`;
  openModal("booking");
}

function initLogin() {
  if (!document.querySelector("#loginScreen") && !document.querySelector(".login-page")) return;

  selectedLoginRole = new URLSearchParams(window.location.search).get("role") || selectedLoginRole;
  const emailInput = document.querySelector("#loginEmail");
  if (!emailInput) return;

  setLoginRole(selectedLoginRole);

  document.querySelectorAll("[data-role-option]").forEach((button) => {
    button.addEventListener("click", () => setLoginRole(button.dataset.roleOption));
  });

  document.querySelectorAll("[data-demo-login]").forEach((button) => {
    button.addEventListener("click", () => loginAs(button.dataset.demoLogin));
  });

  document.querySelector("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    loginAs(selectedLoginRole);
  });
}

function setLoginRole(role) {
  selectedLoginRole = role;
  const emailInput = document.querySelector("#loginEmail");
  const helper = document.querySelector("#loginHelper");
  document.querySelectorAll("[data-role-option]").forEach((button) => {
    button.classList.toggle("active", button.dataset.roleOption === role);
  });
  if (emailInput) emailInput.value = role === "provider" ? "provider@trainly.sg" : "user@trainly.sg";
  if (helper) helper.textContent = role === "provider" ? "Demo provider: provider@trainly.sg" : "Demo user: user@trainly.sg";
}

function loginAs(role) {
  if (document.querySelector("#dashboardScreen")) {
    showDashboard(role);
  } else {
    localStorage.setItem("trainlyRole", role);
    localStorage.setItem("trainlyName", role === "provider" ? "Sarah Lim" : "Cherrelle");
    window.location.href = "index.html";
  }
}

function initDashboard() {
  if (!document.querySelector("#dashboardScreen") && !document.querySelector(".dashboard-page")) return;

  const role = localStorage.getItem("trainlyRole") || "user";
  const isProvider = role === "provider";

  updateDashboardHeader(role);

  document.querySelector("#logoutButton")?.addEventListener("click", logout);
  document.querySelector("#mainDashAction")?.addEventListener("click", () => {
    if ((localStorage.getItem("trainlyRole") || "user") === "provider") {
      switchDashboardTab("profile");
    } else {
      showPublic();
      document.querySelector("#discover")?.scrollIntoView({ behavior: "smooth" });
    }
  });

  document.querySelectorAll("[data-dash-tab]").forEach((button) => {
    button.addEventListener("click", () => switchDashboardTab(button.dataset.dashTab));
  });

  if (!document.querySelector("#dashboardScreen")) {
    renderDashboard(isProvider);
  }

  document.querySelector("#addBookingButton").addEventListener("click", () => {
    if (isProvider) {
      providerRequests.unshift({ client: "New lead", service: "Home training", time: "Tomorrow, 6:30 PM", value: "S$95", status: "Pending" });
    } else {
      providerRequests.unshift({ client: "You", service: "Yoga with Priya", time: "Tomorrow, 7:30 AM", value: "S$72", status: "Requested" });
    }
    renderBookings(isProvider);
  });

  document.querySelector("#messageComposer").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.currentTarget.querySelector("input");
    if (!input.value.trim()) return;
    const list = document.querySelector("#messageList");
    list.insertAdjacentHTML("beforeend", `<div class="message-bubble me"><strong>You</strong><p>${input.value.trim()}</p></div>`);
    input.value = "";
  });

  document.querySelector("#profileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const success = document.querySelector("#profileSuccess");
    success.textContent = "Profile saved for this demo session.";
    success.classList.add("is-visible");
  });
}

function switchDashboardTab(tab) {
  document.querySelectorAll("[data-dash-tab]").forEach((button) => button.classList.toggle("active", button.dataset.dashTab === tab));
  document.querySelectorAll(".dashboard-view").forEach((view) => view.classList.remove("active"));
  document.querySelector(`#${tab}View`)?.classList.add("active");
  if (tab === "explore") renderExplore();
}

function renderDashboard(isProvider) {
  document.querySelector("#statGrid").innerHTML = isProvider
    ? statCards([
        ["S$3.8K", "monthly earnings"],
        ["21", "bookings this month"],
        ["4.96", "average rating"],
        ["87%", "profile completion"]
      ])
    : statCards([
        ["3", "upcoming sessions"],
        ["12", "week streak"],
        ["S$38", "pass savings"],
        ["94%", "best coach match"]
      ]);

  document.querySelector("#primaryListTitle").textContent = isProvider ? "New client requests" : "Recommended coaches";
  document.querySelector("#secondaryListTitle").textContent = isProvider ? "Schedule" : "Upcoming sessions";
  renderPrimaryList(isProvider);
  renderCalendar(isProvider);
  renderBookings(isProvider);
  renderMessages(isProvider);
  renderProfile(isProvider);
  renderProgress(isProvider);
}

function renderProgress(isProvider) {
  const wrap = document.querySelector("#progressPanel");
  if (!wrap) return;
  if (isProvider) {
    const weeks = [62, 78, 71, 88, 95, 84, 102];
    const max = Math.max(...weeks);
    wrap.innerHTML = `
      <div class="progress-head">
        <div>
          <h2>Weekly earnings</h2>
          <span>Last 7 weeks · S$${weeks.reduce((a, b) => a + b, 0) * 10}</span>
        </div>
        <span class="progress-trend">+12% vs. last month</span>
      </div>
      <div class="bar-chart">
        ${weeks.map((value, i) => `
          <div class="bar-col">
            <div class="bar" style="height:${(value / max) * 100}%"></div>
            <span>W${i + 1}</span>
          </div>
        `).join("")}
      </div>
      <div class="progress-meta">
        <article><strong>92%</strong><span>session show rate</span></article>
        <article><strong>4.96</strong><span>avg. review</span></article>
        <article><strong>18</strong><span>repeat clients</span></article>
        <article><strong>6</strong><span>new badges</span></article>
      </div>
    `;
  } else {
    const weeks = [1, 2, 3, 3, 4, 4, 5];
    const max = Math.max(...weeks);
    wrap.innerHTML = `
      <div class="progress-head">
        <div>
          <h2>Your wellness streak</h2>
          <span>Last 7 weeks · 22 sessions logged</span>
        </div>
        <span class="progress-trend">🔥 12-week streak</span>
      </div>
      <div class="bar-chart">
        ${weeks.map((value, i) => `
          <div class="bar-col">
            <div class="bar" style="height:${(value / max) * 100}%"></div>
            <span>W${i + 1}</span>
          </div>
        `).join("")}
      </div>
      <div class="progress-meta">
        <article><strong>22</strong><span>sessions done</span></article>
        <article><strong>3</strong><span>coaches tried</span></article>
        <article><strong>S$38</strong><span>package savings</span></article>
        <article><strong>4</strong><span>milestones hit</span></article>
      </div>
    `;
  }
}

function statCards(items) {
  return items.map(([value, label]) => `<article class="stat-card"><strong>${value}</strong><span>${label}</span></article>`).join("");
}

function renderPrimaryList(isProvider) {
  const list = document.querySelector("#primaryList");
  if (isProvider) {
    list.innerHTML = providerRequests
      .slice(0, 3)
      .map(
        (request, index) => `
          <article class="list-item">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" alt="">
            <div><strong>${request.client}</strong><p>${request.service} · ${request.time} · ${request.value}</p></div>
            <div class="item-actions"><button class="primary-button" data-request-index="${index}" data-request-action="Accepted">Accept</button><button class="secondary-button" data-request-index="${index}" data-request-action="Declined">Decline</button></div>
          </article>
        `
      )
      .join("");
  } else {
    list.innerHTML = coaches
      .slice(0, 3)
      .map(
        (coach) => `
          <article class="list-item">
            <img src="${coach.image}" alt="">
            <div><strong>${coach.name}</strong><p>${coach.specialty} · ${coach.location} · S$${coach.price}</p></div>
            <div class="item-actions"><button class="primary-button">Book</button></div>
          </article>
        `
      )
      .join("");
  }

  list.querySelectorAll("[data-request-action]").forEach((button, index) => {
    button.addEventListener("click", () => {
      providerRequests[Number(button.dataset.requestIndex)].status = button.dataset.requestAction;
      renderPrimaryList(true);
      renderBookings(true);
    });
  });
}

function renderCalendar(isProvider) {
  const calendar = document.querySelector("#calendarList");
  const items = isProvider
    ? ["Today 7:00 PM · Alicia · Home strength", "Sat 9:00 AM · Mr. Ong · Mobility", "Sun 5:00 PM · Jia Min · Package session"]
    : ["Today 7:00 PM · Strength with Sarah", "Sat 9:00 AM · Mobility with Marcus", "Sun 5:00 PM · Yoga with Priya"];
  calendar.innerHTML = items.map((item) => `<article class="list-item"><div></div><div><strong>${item.split(" · ")[0]}</strong><p>${item.split(" · ").slice(1).join(" · ")}</p></div></article>`).join("");
}

function renderBookings(isProvider) {
  const board = document.querySelector("#bookingBoard");
  document.querySelector("#bookingViewTitle").textContent = isProvider ? "Client requests" : "Your bookings";
  board.innerHTML = providerRequests
    .map(
      (booking, index) => `
        <article class="booking-item">
          <div><strong>${isProvider ? booking.client : booking.service}</strong><p>${booking.service} · ${booking.time} · ${booking.value}</p></div>
          <div class="booking-actions">
            <span class="chip">${booking.status}</span>
            ${
              isProvider && booking.status === "Pending"
                ? `<button class="primary-button" data-accept="${index}">Accept</button><button class="secondary-button" data-decline="${index}">Decline</button>`
                : `<button class="secondary-button">Details</button>`
            }
          </div>
        </article>
      `
    )
    .join("");

  board.querySelectorAll("[data-accept]").forEach((button) => {
    button.addEventListener("click", () => {
      providerRequests[Number(button.dataset.accept)].status = "Accepted";
      renderBookings(isProvider);
      renderPrimaryList(isProvider);
    });
  });
  board.querySelectorAll("[data-decline]").forEach((button) => {
    button.addEventListener("click", () => {
      providerRequests[Number(button.dataset.decline)].status = "Declined";
      renderBookings(isProvider);
      renderPrimaryList(isProvider);
    });
  });
}

function renderMessages(isProvider) {
  document.querySelector("#messageList").innerHTML = isProvider
    ? `<div class="message-bubble"><strong>Alicia</strong><p>Can we start at my condo gym? I am new to weights.</p></div><div class="message-bubble me"><strong>You</strong><p>Yes. I will bring a simple assessment plan and keep the first session beginner-friendly.</p></div>`
    : `<div class="message-bubble"><strong>Coach Sarah</strong><p>Any injuries or concerns before we confirm?</p></div><div class="message-bubble me"><strong>You</strong><p>I am nervous about gym machines. Can we start slowly?</p></div>`;
}

function renderProfile(isProvider) {
  document.querySelector("#profileTitle").textContent = isProvider ? "Provider profile" : "User profile";
  document.querySelector("#profileStatus").textContent = isProvider ? "Credential verified" : "Ready to book";
  const form = document.querySelector("#profileForm");
  form.displayName.value = isProvider ? "Sarah Lim" : "Cherrelle";
  form.specialty.value = isProvider ? "Beginner strength coaching" : "Strength, posture, and confidence";
  form.area.value = isProvider ? "Tiong Bahru, CBD, home visits" : "Central Singapore";
  form.bio.value = isProvider ? "Patient coach for beginners and busy adults." : "Looking for supportive coaches and flexible evening sessions.";
}

/* ─── Splash screen ─────────────────────────────────────── */
function initSplash() {
  const splash = document.querySelector("#splashScreen");
  if (!splash) return;

  // After 2.2 s start fading, then hide and show the right screen
  setTimeout(() => {
    splash.classList.add("fading");
    setTimeout(() => {
      splash.classList.add("is-hidden");
      // If already logged in, go straight to dashboard; otherwise login
      const savedRole = localStorage.getItem("trainlyRole");
      if (savedRole) {
        showDashboard(savedRole);
      } else {
        showLogin("user");
      }
    }, 720); // matches CSS transition duration
  }, 2200);
}

/* ─── Explore tab ────────────────────────────────────────── */
let exploreCategory = "all";

function renderExplore() {
  const grid = document.querySelector("#exploreGrid");
  const countEl = document.querySelector("#exploreResultCount");
  if (!grid) return;

  const query = (document.querySelector("#exploreSearchInput")?.value || "").toLowerCase().trim();
  const session = document.querySelector("#exploreSessionFilter")?.value || "all";
  const budget = document.querySelector("#exploreBudgetFilter")?.value || "all";
  const vibe = document.querySelector("#exploreVibeFilter")?.value || "all";

  let list = coaches
    .filter((c) => exploreCategory === "all" || c.specialty === exploreCategory)
    .filter((c) => !query || c.name.toLowerCase().includes(query) || c.specialty.toLowerCase().includes(query) || c.bio.toLowerCase().includes(query))
    .filter((c) => session === "all" || c.sessions.includes(session))
    .filter((c) => budget === "all" || c.price <= Number(budget))
    .filter((c) => vibe === "all" || c.vibe === vibe)
    .sort((a, b) => b.fit - a.fit);

  if (countEl) countEl.textContent = `${list.length} coach${list.length === 1 ? "" : "es"} found`;

  grid.innerHTML = list.length
    ? list.map(coachCard).join("")
    : `<article class="coach-card"><div class="coach-body"><h3>No coaches found</h3><p>Try adjusting your search or filters.</p></div></article>`;

  // Wire up card buttons
  grid.querySelectorAll("[data-book]").forEach((btn) => btn.addEventListener("click", () => openBooking(btn.dataset.book)));
  grid.querySelectorAll("[data-view]").forEach((btn) => btn.addEventListener("click", () => openCoachDetail(btn.dataset.view)));
  grid.querySelectorAll("[data-chat]").forEach((btn) => btn.addEventListener("click", () => openChat(btn.dataset.chat)));
  grid.querySelectorAll("[data-save]").forEach((btn) => {
    btn.addEventListener("click", () => { btn.textContent = btn.textContent === "Saved" ? "Save" : "Saved"; });
  });
}

function initExplore() {
  // Category pills
  document.querySelectorAll("[data-explore-cat]").forEach((pill) => {
    pill.addEventListener("click", () => {
      exploreCategory = pill.dataset.exploreCat;
      document.querySelectorAll("[data-explore-cat]").forEach((p) => p.classList.toggle("active", p === pill));
      renderExplore();
    });
  });

  // Search input — live filter
  document.querySelector("#exploreSearchInput")?.addEventListener("input", renderExplore);

  // Filter dropdowns
  ["exploreSessionFilter", "exploreBudgetFilter", "exploreVibeFilter"].forEach((id) => {
    document.querySelector(`#${id}`)?.addEventListener("change", renderExplore);
  });

  // Reset
  document.querySelector("#exploreResetFilters")?.addEventListener("click", () => {
    exploreCategory = "all";
    document.querySelectorAll("[data-explore-cat]").forEach((p) => p.classList.toggle("active", p.dataset.exploreCat === "all"));
    ["exploreSessionFilter", "exploreBudgetFilter", "exploreVibeFilter"].forEach((id) => {
      const el = document.querySelector(`#${id}`);
      if (el) el.value = "all";
    });
    const searchEl = document.querySelector("#exploreSearchInput");
    if (searchEl) searchEl.value = "";
    renderExplore();
  });
}

/* ─── Boot sequence ──────────────────────────────────────── */
initShared();
initHome();
initLogin();
initDashboard();
initExplore();
initSplash();
