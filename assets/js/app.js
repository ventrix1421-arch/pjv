// =========================================
// Portfolio App — Hire-Ready Template
// All content from data.js · Resume syncs live
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderStats();
    renderAbout();
    renderAchievements();
    renderSkills();
    renderStackShowcase();
    renderTerminal();
    renderProjects();
    renderExperience();
    renderEducation();
    renderCTA();
    renderContact();
    initContactMap();
    renderSocialLinks();
    renderResume();
    initCommandPalette();
    initLoader();
    initMobileMenu();
    initHeaderScroll();
    initResumeDownload();
    initSkillAnimations();

    document.getElementById("footer-year").textContent = new Date().getFullYear();
    document.getElementById("footer-name").textContent = portfolio.profile.name;
});

// =========================================
// Hero
// =========================================

function renderHero() {
    const p = portfolio.profile;
    document.getElementById("hero-name").textContent = p.name;
    document.getElementById("hero-tagline").textContent = p.tagline || p.title;
    document.getElementById("hero-subtitle").textContent = p.subtitle;
    document.getElementById("hero-image").src = p.image;
    document.getElementById("hero-image").alt = p.name;
    document.getElementById("availability-badge").textContent = p.availability || "Open to Work";
    document.title = `${p.name} | ${p.title}`;
}

function renderStats() {
    document.getElementById("statsContainer").innerHTML = portfolio.stats.map(stat => `
        <div class="stat-card">
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join("");
}

// =========================================
// About
// =========================================

function renderAbout() {
    const highlights = (portfolio.about.highlights || []).map(h => `
        <li>${h}</li>
    `).join("");

    document.getElementById("aboutContainer").innerHTML = `
        <div class="about-grid">
            <div class="section-header">
                <p class="section-label">About Me</p>
                <h2 class="section-title">Developer Who Delivers</h2>
                <p class="section-desc">${portfolio.about.description}</p>
            </div>
            <div class="card about-highlights-card">
                <h3 class="about-highlights-title">Why Hire Me</h3>
                <ul class="about-highlights-list">${highlights}</ul>
            </div>
        </div>
    `;
}

// =========================================
// Achievements
// =========================================

function renderAchievements() {
    if (!portfolio.achievements?.length) return;

    document.getElementById("achievementsContainer").innerHTML = `
        <div class="section-header text-center achievements-header">
            <p class="section-label">Track Record</p>
            <h2 class="section-title">Proven Results</h2>
        </div>
        <div class="achievements-grid">
            ${portfolio.achievements.map(a => `
                <div class="card achievement-card">
                    <div class="achievement-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                    <h3 class="achievement-title">${a.title}</h3>
                    <p class="achievement-desc">${a.description}</p>
                </div>
            `).join("")}
        </div>
    `;
}

// =========================================
// Skills & Competencies
// =========================================

function renderSkills() {
    const skillsHtml = portfolio.skills.map(skill => `
        <div class="card skill-item">
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-fill" data-level="${skill.level}" style="width:0%"></div>
            </div>
            <p class="skill-category">${skill.category}</p>
        </div>
    `).join("");

    const competenciesHtml = (portfolio.coreCompetencies || []).map(group => `
        <div class="card competency-card">
            <h3 class="competency-category">${group.category}</h3>
            <div class="competency-items">
                ${group.items.map(item => `<span class="tag tag-primary">${item}</span>`).join("")}
            </div>
        </div>
    `).join("");

    const softHtml = portfolio.softSkills.map(s => `<span class="tag">${s}</span>`).join("");

    document.getElementById("skillsContainer").innerHTML = `
        <div class="section-header">
            <p class="section-label">Skills</p>
            <h2 class="section-title">Technical Expertise</h2>
            <p class="section-desc">Technologies and practices I use to ship production-quality applications.</p>
        </div>
        <div class="competencies-grid">${competenciesHtml}</div>
        <div class="skills-grid mt-section">${skillsHtml}</div>
        <div class="soft-skills-section">
            <h3 class="soft-skills-title">Soft Skills</h3>
            <div class="soft-skills">${softHtml}</div>
        </div>
    `;
}

function initSkillAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".skill-fill").forEach(bar => {
                    bar.style.width = bar.dataset.level + "%";
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const section = document.getElementById("skills");
    if (section) observer.observe(section);
}

// =========================================
// Projects
// =========================================

function renderProjects() {
    const projectsHtml = portfolio.projects.map(project => {
        const links = [];
        if (project.github) links.push(`<a href="${project.github}" target="_blank" rel="noopener" class="btn btn-ghost">GitHub</a>`);
        if (project.live) links.push(`<a href="${project.live}" target="_blank" rel="noopener" class="btn btn-ghost">Live Demo</a>`);

        const highlights = (project.highlights || []).map(h => `<li>${h}</li>`).join("");

        return `
            <div class="card project-card">
                <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
                <div class="card-body">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-badges">
                            ${project.type ? `<span class="project-type project-type-${project.type}">${project.type}</span>` : ""}
                            ${project.impact ? `<span class="project-impact">${project.impact}</span>` : ""}
                        </div>
                    </div>
                    <p class="project-desc">${project.description}</p>
                    ${highlights ? `<ul class="project-highlights">${highlights}</ul>` : ""}
                    <div class="project-tech">
                        ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                    </div>
                    ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
                </div>
            </div>
        `;
    }).join("");

    document.getElementById("projectsContainer").innerHTML = `
        <div class="section-header">
            <p class="section-label">Portfolio</p>
            <h2 class="section-title">Featured Projects</h2>
            <p class="section-desc">Real systems built with measurable impact. Each project demonstrates end-to-end development skills.</p>
        </div>
        <div class="projects-grid">${projectsHtml}</div>
    `;
}

// =========================================
// Experience
// =========================================

function renderExperience() {
    if (!portfolio.experience?.length) return;

    const jobsHtml = portfolio.experience.map(job => `
        <div class="card timeline-item">
            <div class="timeline-header">
                <div>
                    <h3 class="timeline-title">${job.position}</h3>
                    <p class="timeline-org">${job.company}</p>
                    ${job.location ? `<p class="timeline-location">${job.location}</p>` : ""}
                </div>
                <span class="timeline-date">${job.start} — ${job.end}</span>
            </div>
            <ul class="timeline-list">
                ${job.description.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </div>
    `).join("");

    document.getElementById("experienceContainer").innerHTML = `
        <div class="section-header">
            <p class="section-label">Experience</p>
            <h2 class="section-title">Professional Background</h2>
            <p class="section-desc">Hands-on development experience from OJT at Schools Division Office of Pangasinan II.</p>
        </div>
        <div class="timeline">${jobsHtml}</div>
    `;
}

// =========================================
// Education & Certifications
// =========================================

function renderEducation() {
    const educationEntries = portfolio.education || [];
    const ojt = portfolio.ojtRecord;

    const certMeta = (cert) => {
        if (cert.issuedOn) return `Issued on: ${cert.issuedOn}`;
        if (cert.issuer && cert.year) return `${cert.issuer} · ${cert.year}`;
        if (cert.year) return cert.year;
        return "";
    };

    const certHtml = portfolio.certifications.map((cert, i) => `
        <div class="cert-badge card">
            <span class="cert-num">${String(i + 1).padStart(2, "0")}</span>
            <div class="cert-body">
                <h4 class="cert-title">${cert.title}</h4>
                ${certMeta(cert) ? `<p class="cert-issuer">${certMeta(cert)}</p>` : ""}
                ${cert.url ? `<a href="${cert.url}" target="_blank" rel="noopener" class="cert-link">Verify →</a>` : ""}
            </div>
        </div>
    `).join("");

    const langHtml = (portfolio.languages || []).map(l => `
        <div class="lang-chip">
            <span class="lang-chip-name">${typeof l === "string" ? l : l.name}</span>
            ${typeof l === "object" && l.level ? `<span class="lang-chip-level">${l.level}</span>` : ""}
        </div>
    `).join("");

    const seminarsHtml = (portfolio.seminars || []).map(s =>
        `<li><strong>${s.title}</strong> — ${s.date}</li>`
    ).join("");

    document.getElementById("educationContainer").innerHTML = `
        <div class="section-header">
            <p class="section-label">Education</p>
            <h2 class="section-title">Academic Background</h2>
            <p class="section-desc">BSIT from University of Eastern Pangasinan with OJT at Schools Division Office of Pangasinan II.</p>
        </div>

        <div class="academic-timeline">
            ${educationEntries.map((edu, index) => `
            <div class="academic-step">
                <div class="academic-marker">
                    <div class="academic-dot${index === 0 ? " academic-dot-primary" : ""}"></div>
                    ${index < educationEntries.length - 1 || ojt ? `<div class="academic-line"></div>` : ""}
                </div>
                <div class="card academic-card${index === 0 ? " academic-card-featured" : ""}">
                    <div class="academic-card-top">
                        <div class="academic-icon${index !== 0 ? " academic-icon-ojt" : ""}">
                            <svg width="${index === 0 ? 24 : 22}" height="${index === 0 ? 24 : 22}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                        </div>
                        ${index === 0 ? `
                        <div class="academic-badges">
                            <span class="academic-badge">${edu.duration || "4 Years"}</span>
                            <span class="academic-badge academic-badge-outline">BSIT</span>
                        </div>
                        ` : `<span class="academic-badge">High School</span>`}
                    </div>
                    <h3 class="academic-degree">${edu.degree}</h3>
                    <p class="academic-school">${edu.school}</p>
                    <p class="academic-meta">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        ${edu.location}
                        <span class="academic-sep">·</span>
                        ${edu.start} — ${edu.end}
                    </p>
                    <p class="academic-desc">${edu.description}</p>
                    ${edu.coursework?.length ? `
                        <div class="coursework-tags">
                            ${edu.coursework.map(c => `<span class="tag tag-primary">${c}</span>`).join("")}
                        </div>
                    ` : ""}
                </div>
            </div>
            `).join("")}

            ${ojt ? `
            <div class="academic-step">
                <div class="academic-marker">
                    <div class="academic-dot"></div>
                </div>
                <div class="card academic-card">
                    <div class="academic-card-top">
                        <div class="academic-icon academic-icon-ojt">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                        </div>
                        <span class="academic-badge">OJT${ojt.hours ? ` · ${ojt.hours} hrs` : ""}</span>
                    </div>
                    <h3 class="academic-degree">${ojt.role}</h3>
                    <p class="academic-school">${ojt.organization}</p>
                    <p class="academic-meta">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        ${ojt.location}
                        <span class="academic-sep">·</span>
                        ${ojt.period}
                    </p>
                    <p class="academic-desc">Affiliated with ${ojt.affiliation} — government-sector on-the-job training in web development.</p>
                </div>
            </div>
            ` : ""}
        </div>

        <div class="academic-bottom">
            ${seminarsHtml ? `
            <div class="academic-bottom-section academic-bottom-wide">
                <h3 class="subsection-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    Seminars Attended
                </h3>
                <ul class="seminars-list">${seminarsHtml}</ul>
            </div>
            ` : ""}
            <div class="academic-bottom-section">
                <h3 class="subsection-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    Certifications & Training
                </h3>
                <div class="cert-grid">${certHtml}</div>
            </div>
            <div class="academic-bottom-section">
                <h3 class="subsection-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    Languages
                </h3>
                <div class="lang-chips">${langHtml}</div>
            </div>
        </div>
    `;
}

// =========================================
// CTA
// =========================================

function renderCTA() {
    const p = portfolio.profile;

    document.getElementById("ctaContainer").innerHTML = `
        <div class="cta-card">
            <div class="cta-content">
                <h2 class="cta-title">Ready to bring value to your team</h2>
                <p class="cta-desc">I'm actively seeking full stack developer roles. With 60+ web systems, 30+ mobile apps, UEP BSIT, and SDO Pangasinan II OJT — I'm ready to contribute from day one.</p>
                <div class="cta-actions">
                    <a href="mailto:${p.email}" class="btn btn-primary">Email Me</a>
                    <button id="cta-download-btn" class="btn btn-outline">Download Resume</button>
                    ${p.linkedin ? `<a href="${p.linkedin}" target="_blank" rel="noopener" class="btn btn-outline">LinkedIn</a>` : ""}
                </div>
            </div>
        </div>
    `;

    document.getElementById("cta-download-btn").addEventListener("click", downloadResume);
}

// =========================================
// Contact
// =========================================

function renderContact() {
    const p = portfolio.profile;
    const mapsQuery = encodeURIComponent(p.location);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

    document.getElementById("contactContainer").innerHTML = `
        <div class="section-header">
            <p class="section-label">Contact</p>
            <h2 class="section-title">Let's Connect</h2>
            <p class="section-desc">${p.availability || "Open to opportunities."} ${p.workAuthorization ? "· " + p.workAuthorization : ""}</p>
        </div>
        <div class="contact-layout">
            <div class="card contact-map-card">
                <div class="contact-map-header">
                    <div>
                        <p class="contact-label">Live Location</p>
                        <p id="contact-live-location" class="contact-live-text">${p.location}</p>
                    </div>
                    <span id="contact-live-badge" class="contact-live-badge">Live Map</span>
                </div>
                <div id="contact-map" class="contact-map" role="img" aria-label="Map showing ${p.location}"></div>
                <a href="${mapsUrl}" target="_blank" rel="noopener" class="contact-map-link">
                    Open in Google Maps
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
            </div>
            <div class="contact-details">
                <div class="card contact-item">
                    <div class="contact-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div>
                        <p class="contact-label">Email</p>
                        <p class="contact-value"><a href="mailto:${p.email}">${p.email}</a></p>
                    </div>
                </div>
                <div class="card contact-item">
                    <div class="contact-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                        <p class="contact-label">Phone</p>
                        <p class="contact-value"><a href="tel:${p.phone.replace(/\s/g, "")}">${p.phone}</a></p>
                    </div>
                </div>
                <div class="card contact-item">
                    <div class="contact-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                        <p class="contact-label">Location</p>
                        <p id="contact-location-value" class="contact-value">${p.location}</p>
                    </div>
                </div>
                <div class="card contact-item">
                    <div class="contact-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    </div>
                    <div>
                        <p class="contact-label">Resume (PDF)</p>
                        <p class="contact-value"><button id="contact-download-btn" class="btn btn-primary btn-sm" style="margin-top:0.25rem">Download Now</button></p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById("contact-download-btn").addEventListener("click", downloadResume);
}

function initContactMap() {
    const mapEl = document.getElementById("contact-map");
    if (!mapEl || typeof L === "undefined") return;

    const p = portfolio.profile;
    const lat = p.mapLat || 16.0478;
    const lng = p.mapLng || 120.5897;
    const zoom = p.mapZoom || 15;

    const map = L.map(mapEl, { scrollWheelZoom: false }).setView([lat, lng], zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<strong>${p.name}</strong><br>${p.location}`).openPopup();

    const badge = document.getElementById("contact-live-badge");
    if (badge) {
        badge.textContent = "Live Map";
        badge.classList.add("contact-live-badge-active");
    }

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setTimeout(() => map.invalidateSize(), 150);
            observer.disconnect();
        }
    }, { threshold: 0.1 });

    observer.observe(mapEl);
}

// =========================================
// Social Links
// =========================================

function renderSocialLinks() {
    const p = portfolio.profile;
    const links = [];

    if (p.github) links.push({ url: p.github, label: "GitHub", icon: githubIcon() });
    if (p.linkedin) links.push({ url: p.linkedin, label: "LinkedIn", icon: linkedinIcon() });
    if (p.website) links.push({ url: p.website, label: "Website", icon: globeIcon() });

    document.getElementById("socialLinks").innerHTML = links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener" class="social-link" aria-label="${l.label}">${l.icon}</a>
    `).join("");
}

function githubIcon() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`;
}

function linkedinIcon() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
}

function globeIcon() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
}

// =========================================
// Resume — ATS-Optimized Professional Layout
// =========================================

function renderResume() {
    const p = portfolio.profile;
    const summary = portfolio.resumeSummary || portfolio.about.description;

    const contactLine = [
        p.email,
        p.phone,
        p.location,
        p.linkedin ? p.linkedin.replace("https://www.", "").replace("https://", "") : "",
        p.github ? p.github.replace("https://", "") : ""
    ].filter(Boolean).join("  |  ");

    const competenciesHtml = (portfolio.coreCompetencies || []).map(group => `
        <div class="resume-comp-group">
            <strong>${group.category}:</strong> ${group.items.join(" · ")}
        </div>
    `).join("");

    const projectsHtml = portfolio.projects.slice(0, 4).map(proj => `
            <div class="resume-entry">
                <p class="resume-text"><strong>${proj.title}:</strong> ${proj.description}</p>
            </div>
        `).join("");

    const educationHtml = portfolio.education.map(edu => `
        <div class="resume-entry">
            <div class="resume-entry-row">
                <div>
                    <div class="resume-entry-title">${edu.degree}</div>
                    <div class="resume-entry-sub">${edu.school}${edu.location ? ` · ${edu.location}` : ""}</div>
                </div>
                <div class="resume-entry-date">${edu.end}</div>
            </div>
        </div>
    `).join("");

    const certHtml = portfolio.certifications.map(cert => {
        const meta = cert.issuedOn
            ? cert.issuedOn
            : cert.issuer
                ? `${cert.issuer}, ${cert.year}`
                : cert.year || "";
        return `
        <div class="resume-cert-line">
            <strong>${cert.title}</strong>${meta ? ` — ${meta}` : ""}
            ${cert.credentialId ? ` · ID: ${cert.credentialId}` : ""}
        </div>
    `;
    }).join("");

    const seminarsHtml = (portfolio.seminars || []).length ? `
        <ul class="resume-bullets">
            ${portfolio.seminars.map(s => `<li>${s.title} — ${s.date}</li>`).join("")}
        </ul>
    ` : "";

    document.getElementById("resume-document").innerHTML = `
        <div class="resume-page">
            <header class="resume-header">
                <h1 class="resume-name">${p.name.toUpperCase()}</h1>
                <p class="resume-title">${p.title}</p>
                <p class="resume-contact-line">${contactLine}</p>
            </header>

            <section class="resume-section">
                <h2 class="resume-section-title">Professional Summary</h2>
                <p class="resume-text">${summary}</p>
            </section>

            <section class="resume-section">
                <h2 class="resume-section-title">Education</h2>
                ${educationHtml}
            </section>

            <section class="resume-section resume-section-inline">
                <div class="resume-inline-col">
                    <h2 class="resume-section-title">Soft Skills</h2>
                    <p class="resume-text">${portfolio.softSkills.join(" · ")}</p>
                </div>
            </section>

            <section class="resume-section">
                <h2 class="resume-section-title">Tech Stack/Skills</h2>
                ${competenciesHtml}
            </section>

            <section class="resume-section">
                <h2 class="resume-section-title">Projects</h2>
                ${projectsHtml}
            </section>

            <section class="resume-section">
                <h2 class="resume-section-title">Certifications & Training</h2>
                ${certHtml}
            </section>

            ${seminarsHtml ? `
            <section class="resume-section">
                <h2 class="resume-section-title">Seminars Attended</h2>
                ${seminarsHtml}
            </section>
            ` : ""}

            <footer class="resume-footer">
                <p><strong>References:</strong> ${portfolio.references || "Available upon request"}</p>
            </footer>
        </div>
    `;
}

// =========================================
// Resume Download
// =========================================

function initResumeDownload() {
    [
        document.getElementById("download-resume-btn"),
        document.getElementById("download-resume-mobile"),
        document.getElementById("hero-download-btn")
    ].forEach(btn => {
        if (btn) btn.addEventListener("click", downloadResume);
    });
}

async function downloadResume() {
    const filename = portfolio.profile.resumeFileName || "Resume.pdf";
    const staticPath = portfolio.profile.resumeStaticPath;

    if (staticPath) {
        showToast("Downloading your resume...");
        try {
            const response = await fetch(staticPath);
            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = filename;
                link.click();
                URL.revokeObjectURL(url);
                showToast("Resume downloaded successfully!");
                return;
            }
        } catch (err) {
            console.warn("Static resume download failed, falling back to PDF generation.", err);
        }
    }

    renderResume();

    const element = document.querySelector("#resume-document .resume-page");

    showToast("Generating your resume...");

    const opt = {
        margin: [8, 8, 8, 8],
        filename,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false, letterRendering: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] }
    };

    try {
        await html2pdf().set(opt).from(element).save();
        showToast("Resume downloaded successfully!");
    } catch (err) {
        showToast("Download failed — please try again.");
        console.error(err);
    }
}

function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

// =========================================
// UI
// =========================================

function initLoader() {
    const loader = document.getElementById("loader");
    window.addEventListener("load", () => {
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 400);
    });
}

function initMobileMenu() {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobileMenu");

    btn.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        btn.classList.toggle("active", isOpen);
        btn.setAttribute("aria-expanded", isOpen);
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            btn.classList.remove("active");
            btn.setAttribute("aria-expanded", "false");
        });
    });
}

function initHeaderScroll() {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });
}

// =========================================
// Stack Showcase — Web vs Flutter
// =========================================

function renderStackShowcase() {
    const stack = portfolio.stackShowcase;
    if (!stack) return;

    const webTags = stack.web.tech.map(t =>
        `<span class="stack-tag">${t}</span>`
    ).join("");
    const mobileTags = stack.mobile.tech.map(t =>
        `<span class="stack-tag stack-tag-mobile">${t}</span>`
    ).join("");

    document.getElementById("stackContainer").innerHTML = `
        <div class="section-header text-center">
            <p class="section-label">Dual Stack</p>
            <h2 class="section-title">Web + Mobile Expertise</h2>
            <p class="section-desc">Two production stacks — 60+ web systems and 30+ mobile apps built personally by me.</p>
        </div>
        <div class="stack-dual">
            <div class="card stack-panel">
                <div class="stack-tags">${webTags}</div>
                <div class="stack-count">${stack.web.count}</div>
                <h3 class="stack-label">${stack.web.label}</h3>
                <p class="stack-desc">HTML · CSS · JavaScript · Tailwind · PHP · Laravel</p>
            </div>
            <div class="stack-connector">
                <div class="stack-connector-line"></div>
                <span class="stack-connector-badge">90+ Total Apps</span>
                <div class="stack-connector-line"></div>
            </div>
            <div class="card stack-panel stack-mobile">
                <div class="stack-tags">${mobileTags}</div>
                <div class="stack-count">${stack.mobile.count}</div>
                <h3 class="stack-label">${stack.mobile.label}</h3>
                <p class="stack-desc">Flutter · React Native · Firebase · Cross-platform</p>
            </div>
        </div>
    `;
}

// =========================================
// Interactive Dev Terminal
// =========================================

function renderTerminal() {
    const p = portfolio.profile;

    document.getElementById("terminalContainer").innerHTML = `
        <div class="section-header">
            <p class="section-label">Interactive</p>
            <h2 class="section-title">Developer Terminal</h2>
            <p class="section-desc">Explore my portfolio like a real CLI. Type <code class="inline-code">help</code> to start — try <code class="inline-code">flutter</code>, <code class="inline-code">skills</code>, or <code class="inline-code">hire</code>.</p>
        </div>
        <div class="terminal-window card">
            <div class="terminal-header">
                <div class="terminal-dots"><span></span><span></span><span></span></div>
                <span class="terminal-title">pjv@portfolio — bash</span>
                <span class="terminal-hint">↑↓ history · Tab complete</span>
            </div>
            <div id="terminal-output" class="terminal-output">
                <div class="terminal-line terminal-system">Welcome to PJV Portfolio Terminal v1.0</div>
                <div class="terminal-line terminal-muted">Type 'help' for available commands</div>
            </div>
            <form id="terminal-form" class="terminal-input-row" autocomplete="off">
                <span class="terminal-prompt">pjv@portfolio:~$</span>
                <input id="terminal-input" class="terminal-input" type="text" spellcheck="false" autocomplete="off" aria-label="Terminal input">
            </form>
        </div>
    `;

    initTerminal(p);
}

function initTerminal(p) {
    const form = document.getElementById("terminal-form");
    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-output");
    const history = [];
    let historyIndex = -1;

    const commands = {
        help: () => `
<span class="terminal-accent">Available commands:</span>
  help        — Show this list
  about       — About me
  skills      — Technical skills
  flutter     — Flutter & React Native skills
  projects    — Featured projects
  experience  — Work & OJT history
  education   — UEP · 4-year BSIT
  ojt         — SDO Pangasinan II details
  contact     — Email & phone
  stats       — Key metrics
  hire        — Why you should hire me
  resume      — Download PDF resume
  clear       — Clear terminal
  whoami      — Identity check`,

        about: () => portfolio.about.description,
        skills: () => portfolio.skills.map(s => `  ${s.name.padEnd(22)} ${s.level}%  [${s.category}]`).join("\n"),
        flutter: () => `
<span class="terminal-accent">Mobile Development</span>
  • Flutter and React Native for cross-platform apps
  • HTML, CSS, JavaScript, and Tailwind for web UI
  • PHP, Laravel React Inertia, and C# for backend work
  • MySQL and Firebase for data storage`,

        projects: () => portfolio.projects.map(pr => `  ▸ ${pr.title} (${pr.type || "web"})\n    ${pr.technologies.join(", ")}`).join("\n\n"),
        experience: () => portfolio.experience.map(j => `  ${j.position} @ ${j.company}\n  ${j.start} — ${j.end}`).join("\n\n"),
        education: () => portfolio.education.map(edu =>
            `  ${edu.degree}\n  ${edu.school}\n  ${edu.start} — ${edu.end}\n  ${edu.location}`
        ).join("\n\n"),
        ojt: () => {
            const o = portfolio.ojtRecord;
            return `  ${o.role}\n  ${o.organization}\n  ${o.location} · ${o.period}\n  ${o.affiliation}`;
        },
        contact: () => `  Email: ${p.email}\n  Phone: ${p.phone}\n  Location: ${p.location}`,
        stats: () => portfolio.stats.map(s => `  ${s.value.padEnd(8)} ${s.label}`).join("\n"),
        hire: () => `
<span class="terminal-accent">${p.name}</span> — ${p.title}
  ✓ 60+ web systems · 30+ mobile apps
  ✓ BSIT, University of Eastern Pangasinan
  ✓ OJT at Schools Division Office of Pangasinan II
  ✓ Deployment: Vercel, Firebase Hosting, Hostinger, InfinityFree
  ✓ ${p.availability || "Open to work"}
  → Run 'contact' or press Ctrl+K to navigate`,

        resume: () => {
            downloadResume();
            return `<span class="terminal-accent">Generating PDF resume...</span>`;
        },
        clear: () => null,
        whoami: () => `${p.name} — ${p.tagline}`
    };

    const aliases = { ls: "projects", cat: "about", pwd: "contact", neofetch: "stats" };

    function printLine(text, className = "") {
        const div = document.createElement("div");
        div.className = `terminal-line ${className}`;
        div.innerHTML = text;
        output.appendChild(div);
        output.scrollTop = output.scrollHeight;
    }

    function runCommand(raw) {
        const cmd = raw.trim().toLowerCase();
        if (!cmd) return;

        printLine(`<span class="terminal-prompt">pjv@portfolio:~$</span> <span class="terminal-command">${raw}</span>`);

        const resolved = aliases[cmd] || cmd;

        if (resolved === "clear") {
            output.innerHTML = "";
            return;
        }

        const handler = commands[resolved];
        if (handler) {
            const result = handler();
            if (result) printLine(result.replace(/\n/g, "<br>"));
        } else {
            printLine(`Command not found: '${cmd}'. Type 'help' for commands.`, "terminal-error");
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const val = input.value;
        if (val.trim()) {
            history.push(val);
            historyIndex = history.length;
        }
        runCommand(val);
        input.value = "";
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = history[historyIndex];
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                historyIndex++;
                input.value = history[historyIndex];
            } else {
                historyIndex = history.length;
                input.value = "";
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            const val = input.value.trim().toLowerCase();
            const all = [...Object.keys(commands), ...Object.keys(aliases)];
            const match = all.find(c => c.startsWith(val));
            if (match) input.value = match;
        }
    });
}

// =========================================
// Command Palette — Ctrl+K Navigation
// =========================================

function initCommandPalette() {
    const palette = document.getElementById("command-palette");
    const input = document.getElementById("command-input");
    const list = document.getElementById("command-list");
    const backdrop = palette.querySelector(".command-backdrop");
    const hintBtn = document.getElementById("cmd-hint-btn");

    const items = [
        { label: "Home", section: "#home", icon: "⌂" },
        { label: "About Me", section: "#about", icon: "◉" },
        { label: "Skills", section: "#skills", icon: "⚡" },
        { label: "Web + Mobile Stack", section: "#stack", icon: "◫" },
        { label: "Developer Terminal", section: "#terminal", icon: ">_" },
        { label: "Projects", section: "#projects", icon: "◧" },
        { label: "Experience", section: "#experience", icon: "◷" },
        { label: "Education & OJT", section: "#education", icon: "🎓" },
        { label: "Contact", section: "#contact", icon: "✉" },
        { label: "Download Resume", action: "resume", icon: "↓" },
        { label: "Email Me", action: "email", icon: "@" }
    ];

    let activeIndex = 0;
    let filtered = [...items];

    function renderList() {
        list.innerHTML = filtered.map((item, i) => `
            <li class="command-item ${i === activeIndex ? "active" : ""}" data-index="${i}">
                <span class="command-item-icon">${item.icon}</span>
                <span class="command-item-label">${item.label}</span>
                ${item.section ? `<span class="command-item-hint">${item.section}</span>` : ""}
            </li>
        `).join("");
    }

    function openPalette() {
        palette.classList.add("open");
        palette.setAttribute("aria-hidden", "false");
        input.value = "";
        filtered = [...items];
        activeIndex = 0;
        renderList();
        setTimeout(() => input.focus(), 50);
    }

    function closePalette() {
        palette.classList.remove("open");
        palette.setAttribute("aria-hidden", "true");
    }

    function execute(item) {
        closePalette();
        if (item.section) {
            document.querySelector(item.section)?.scrollIntoView({ behavior: "smooth" });
        } else if (item.action === "resume") {
            downloadResume();
        } else if (item.action === "email") {
            window.location.href = `mailto:${portfolio.profile.email}`;
        }
    }

    function filter(query) {
        const q = query.toLowerCase();
        filtered = items.filter(item => item.label.toLowerCase().includes(q));
        activeIndex = 0;
        renderList();
    }

    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault();
            palette.classList.contains("open") ? closePalette() : openPalette();
        }
        if (e.key === "Escape" && palette.classList.contains("open")) {
            closePalette();
        }
    });

    hintBtn?.addEventListener("click", openPalette);
    backdrop.addEventListener("click", closePalette);

    input.addEventListener("input", () => filter(input.value));
    input.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            activeIndex = Math.min(activeIndex + 1, filtered.length - 1);
            renderList();
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            activeIndex = Math.max(activeIndex - 1, 0);
            renderList();
        } else if (e.key === "Enter" && filtered[activeIndex]) {
            execute(filtered[activeIndex]);
        }
    });

    list.addEventListener("click", (e) => {
        const li = e.target.closest(".command-item");
        if (li) execute(filtered[parseInt(li.dataset.index, 10)]);
    });

    renderList();
}
