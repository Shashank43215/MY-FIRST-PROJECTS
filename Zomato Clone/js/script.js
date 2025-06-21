// JS BY AI
document.addEventListener("DOMContentLoaded", () => {
    setupDarkMode();
    showGreeting();
});

// === 🌗 Dark Mode ===
function setupDarkMode() {
    const toggleBtn = document.createElement("button");
    toggleBtn.id = "dark-toggle";
    document.body.appendChild(toggleBtn);

    // Style the toggle button
    Object.assign(toggleBtn.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "9999",
        padding: "12px",
        fontSize: "1.3rem",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        backgroundColor: "#fff",
        transition: "all 0.3s ease"
    });

    // Initial theme load
    const userPref = localStorage.getItem("theme");
    const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (userPref === "dark" || (!userPref && systemPref)) {
        enableDarkMode(toggleBtn);
    } else {
        disableDarkMode(toggleBtn);
    }

    // Toggle on click
    toggleBtn.addEventListener("click", () => {
        if (document.body.classList.contains("dark")) {
            disableDarkMode(toggleBtn);
            toast("Light Mode Activated");
        } else {
            enableDarkMode(toggleBtn);
            toast("Dark Mode Activated");
        }
    });
}

function enableDarkMode(btn) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    btn.innerHTML = "☀️";
    btn.style.backgroundColor = "#222";
    btn.style.color = "#fff";
}

function disableDarkMode(btn) {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    btn.innerHTML = "🌙";
    btn.style.backgroundColor = "#fff";
    btn.style.color = "#000";
}

// === 👋 Greeting Based on Time ===
function showGreeting() {
    const hour = new Date().getHours();
    let greeting = "Welcome to Zomato Clone!";

    if (hour >= 5 && hour < 12) greeting = "🌞 Good Morning! Craving breakfast?";
    else if (hour >= 12 && hour < 17) greeting = "🥗 Good Afternoon! Time for lunch?";
    else if (hour >= 17 && hour < 22) greeting = "🍕 Good Evening! Dinner plans?";
    else greeting = "🌙 Late night cravings? We got you!";

    toast(greeting, 4000);
}

// === 🔔 Toast Notification ===
function toast(message, duration = 2500) {
    const toast = document.createElement("div");
    toast.textContent = message;
    document.body.appendChild(toast);

    Object.assign(toast.style, {
        position: "fixed",
        bottom: "80px",
        right: "20px",
        backgroundColor: "#e23744",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        fontSize: "1rem",
        opacity: "0",
        transform: "translateY(20px)",
        transition: "all 0.4s ease",
        zIndex: "9999"
    });

    // Animate in
    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    }, 100);

    // Animate out and remove
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        setTimeout(() => toast.remove(), 300);
    }, duration);
}
