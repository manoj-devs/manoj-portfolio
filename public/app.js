const projectData = {
    skillai: {
        eyebrow: "01 / SKILLAI",
        title: "SkillAI",
        type: "AI-powered adaptive skill development platform",
        body: `
            <p>
                SkillAI is designed to make skill development adaptive rather than static.
                A user's goal, available study time, current level, and progress feed into
                a personalized learning experience.
            </p>
            <p><strong>Core direction</strong></p>
            <ul>
                <li>Goal-based learning plans</li>
                <li>Daily tasks and progress tracking</li>
                <li>Weak-area identification</li>
                <li>Adaptive planning based on progress</li>
                <li>Analytics, XP, levels, rewards, and streaks</li>
            </ul>
            <p>
                <strong>Status:</strong> In development. The architecture is being shaped
                around a modern frontend, Java backend, database, and AI integration.
            </p>
        `,
        stack: ["React", "Java", "Spring Boot", "Database", "AI"]
    },

    printease: {
        eyebrow: "02 / PRINTEASE",
        title: "PrintEase",
        type: "Data structure-based campus printing system",
        body: `
            <p>
                PrintEase turns common data structures into the core of a campus printing
                workflow instead of using them only as academic exercises.
            </p>
            <p><strong>Data structure decisions</strong></p>
            <ul>
                <li><strong>Queue</strong> — FCFS print requests</li>
                <li><strong>Priority Queue</strong> — priority-based requests</li>
                <li><strong>Hash Table</strong> — efficient lookup</li>
                <li><strong>Linked List</strong> — print history</li>
                <li><strong>Stack</strong> — undo operations</li>
            </ul>
            <p>
                The project also explores PDF/text extraction, payment/verification workflow,
                and a Windows-based C++ backend.
            </p>
        `,
        stack: ["C++17", "HTML/CSS/JS", "PDF.js", "Tesseract", "LocalStorage"]
    },

    vstudy: {
        eyebrow: "03 / VSTUDY MONITOR",
        title: "VStudy Monitor",
        type: "Automated academic course monitoring",
        body: `
            <p>
                VStudy Monitor automates repetitive academic monitoring with Selenium,
                stores snapshots locally, detects relevant changes, and communicates updates
                through Telegram.
            </p>
            <p><strong>Flow</strong></p>
            <ul>
                <li>Automate browser interaction</li>
                <li>Select and inspect courses</li>
                <li>Extract academic information</li>
                <li>Store results in SQLite</li>
                <li>Compare changes across checks</li>
                <li>Send Telegram notifications</li>
            </ul>
            <p>
                The project is a practical exercise in browser automation, persistence,
                and event-driven notification workflows.
            </p>
        `,
        stack: ["Python", "Selenium", "SQLite", "Telegram"]
    }
};

const modal = document.getElementById("projectModal");

function openProject(key) {
    const project = projectData[key];

    if (!project) {
        return;
    }

    document.getElementById("modalEyebrow").textContent = project.eyebrow;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalType").textContent = project.type;
    document.getElementById("modalBody").innerHTML = project.body;
    document.getElementById("modalStack").innerHTML = project.stack
        .map(item => `<span>${item}</span>`)
        .join("");

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

document.querySelectorAll("[data-project]").forEach(button => {
    button.addEventListener("click", () => {
        openProject(button.dataset.project);
    });
});

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal();
    }
});

const menuButton = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});
