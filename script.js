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
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80",
    bio: "Beginner-friendly strength coaching, home starts, and confidence-building gym plans.",
    tags: ["NASM", "First aid", "Beginner-safe"]
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
    image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=900&q=80",
    bio: "Physio-led strength and mobility coaching for desk workers and returning athletes.",
    tags: ["Physio", "Rehab", "Posture"]
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
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    bio: "Yoga, breathwork, and gentle mobility for stress, flexibility, pregnancy, and seniors.",
    tags: ["Yoga Alliance", "Mindful", "Seniors"]
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
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80",
    bio: "PE teacher and youth coach for agility, school fitness tests, and sports confidence.",
    tags: ["PE teacher", "NAPFA", "Kids"]
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
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    bio: "Mat pilates, core control, posture, prenatal strength, and low-impact toning.",
    tags: ["Pilates", "Core", "Posture"]
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
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    bio: "Practical nutrition coaching for busy adults who want structure without extreme dieting.",
    tags: ["Nutrition", "Meal plans", "Habits"]
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
        <div class="coach-actions">
          <button class="secondary-button" data-save="${coach.name}">Save</button>
          <button class="primary-button" data-book="${coach.name}">Book</button>
        </div>
      </div>
    </article>
  `;
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
  document.querySelector(`#${tab}View`).classList.add("active");
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

initShared();
initHome();
initLogin();
initDashboard();
