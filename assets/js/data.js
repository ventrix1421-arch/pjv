/*
================================================================
 PORTFOLIO & RESUME — SINGLE SOURCE OF TRUTH
 Edit ONLY this file. Portfolio + PDF Resume sync automatically.
================================================================
*/

const portfolio = {

    profile: {
        name: "Patrick John M. Veniegas",
        nickname: "Patrick",
        title: "Full Stack Developer",
        tagline: "Full Stack Developer · 60+ Web Systems · 30+ Mobile Apps",
        subtitle: "Built 60+ web systems and 30+ mobile applications · HTML, CSS, JavaScript, Flutter, React Native, Tailwind · PHP, Laravel, C# · MySQL & Firebase",
        email: "patrickveniegas150@gmail.com",
        phone: "+63 969 304 2972",
        location: "San Pablo, Binalonan, Pangasinan",
        mapLat: 16.0478,
        mapLng: 120.5897,
        mapZoom: 15,
        website: "",
        github: "https://github.com/ventrix1421-arch",
        linkedin: "https://www.linkedin.com/in/veniegas-patrick-john-4a6b70386",
        facebook: "",
        twitter: "",
        image: "assets/images/profile.svg",
        resumeFileName: "Patrick_John_Veniegas_Resume.pdf",
        resumeStaticPath: "assets/resume/veniegas-resume.pdf",
        availability: "Open to Work — Full-time · Part-time · Remote",
        workAuthorization: "Authorized to work in the Philippines"
    },

    stats: [
        { value: "60+", label: "Web Systems" },
        { value: "30+", label: "Mobile Apps" },
        { value: "3+", label: "Years Experience" },
        { value: "4 Yrs", label: "BSIT · UEP" }
    ],

    resumeSummary: `To gain hands-on experience and strengthen my professional and technical skills in a real-world work environment, while actively contributing to the development, improvement, and maintenance of systems. I aim to apply the knowledge and experience I gained from the Schools Division Office of Pangasinan II to practical projects, collaborate effectively with team members, and continuously learn industry best practices.`,

    about: {
        description: `I'm a Full Stack Developer from Pangasinan who has built 60+ web systems and 30+ mobile applications. My internship at the Schools Division Office of Pangasinan II gave me real government-sector development experience, and my BSIT program at University of Eastern Pangasinan grounded me in software engineering fundamentals.`,
        highlights: [
            "60+ web systems built with HTML, CSS, JavaScript, Tailwind, PHP, and Laravel",
            "30+ mobile applications with Flutter and React Native",
            "OJT at Schools Division Office of Pangasinan II — VLAG-DRFS, PROJECT GEM, BE-DRS",
            "Deployment experience on Vercel, Firebase Hosting, Hostinger and InfinityFree",
            "BS Information Technology — University of Eastern Pangasinan"
        ]
    },

    coreCompetencies: [
        {
            category: "Frontend/UI",
            items: ["HTML", "CSS", "JavaScript", "Flutter", "React Native", "Tailwind"]
        },
        {
            category: "Backend",
            items: ["PHP", "Laravel React Inertia", "C#"]
        },
        {
            category: "Databases",
            items: ["MySQL", "Firebase"]
        },
        {
            category: "Deployment/Hosting",
            items: ["Vercel", "Firebase Hosting", "GitHub Pages", "Hostinger", "InfinityFree"]
        }
    ],

    skills: [
        { name: "HTML", level: 90, category: "Frontend" },
        { name: "CSS", level: 88, category: "Frontend" },
        { name: "JavaScript", level: 85, category: "Frontend" },
        { name: "Tailwind", level: 88, category: "Frontend" },
        { name: "Flutter", level: 82, category: "Mobile" },
        { name: "React Native", level: 78, category: "Mobile" },
        { name: "PHP", level: 80, category: "Backend" },
        { name: "Laravel", level: 75, category: "Backend" },
        { name: "C#", level: 72, category: "Backend" },
        { name: "MySQL", level: 82, category: "Database" },
        { name: "Firebase", level: 78, category: "Database" },
        { name: "Git & GitHub", level: 85, category: "Tools" },
        { name: "Vercel", level: 82, category: "Deployment" },
        { name: "Hostinger", level: 78, category: "Deployment" },
        { name: "InfinityFree", level: 80, category: "Deployment" },
    ],

    stackShowcase: {
        web: { label: "Web Systems", count: "60+", tech: ["HTML", "CSS", "JS", "Tailwind"] },
        mobile: { label: "Mobile Apps", count: "30+", tech: ["Flutter", "React Native"] }
    },

    experience: [
        {
            company: "Schools Division Office of Pangasinan II",
            position: "Intern / OJT Developer",
            location: "Pangasinan, Philippines",
            start: "February 2026",
            end: "May 2026",
            description: [
                "Developed VLAG-DRFS, a document file tracking system for division record management.",
                "Built PROJECT GEM and BE-DRS for DepEd Pangasinan II personnel and school heads.",
                "Contributed to system development, improvement, and maintenance in a government education setting.",
                "Collaborated with team members and applied industry practices in real-world projects."
            ]
        }
    ],

    projects: [
        {
            title: "EduMaze: The Learning Labyrinth",
            description: "Educational Game",
            image: "assets/images/project1.svg",
            technologies: ["Unity", "C#"],
            github: "",
            live: "",
            type: "mobile",
            highlights: [
                "Interactive maze-based learning experience",
                "Designed to make lessons engaging through game mechanics"
            ],
            impact: "Educational Game"
        },
        {
            title: "VLAG-DRFS: Document File Tracking System",
            description: "Assigned project during internship at the Schools Division Office of Pangasinan II.",
            image: "assets/images/project2.svg",
            technologies: ["Laravel", "PHP", "MySQL"],
            github: "",
            live: "",
            type: "web",
            highlights: [
                "Tracks document filing, routing, and status updates",
                "Built during OJT at SDO Pangasinan II"
            ],
            impact: "OJT · SDO Pangasinan II"
        },
        {
            title: "PROJECT GEM",
            description: "Project developed for DepEd Pangasinan II personnel.",
            image: "assets/images/project3.svg",
            technologies: ["Flutter"],
            github: "",
            live: "",
            type: "web",
            highlights: [
                "Supports internal division workflows",
                "Built for DepEd Pangasinan II staff"
            ],
            impact: "DepEd Pangasinan II"
        },
        {
            title: "BE-DRS: Brigada Eskwela Daily Reporting System",
            description: "Brigada Eskwela Daily Reporting System for DepEd Pangasinan II School Heads.",
            image: "assets/images/project1.svg",
            technologies: ["Laravel", "PHP", "MySQL"],
            github: "",
            live: "",
            type: "web",
            highlights: [
                "Daily reporting for Brigada Eskwela activities",
                "Designed for School Heads under DepEd Pangasinan II"
            ],
            impact: "DepEd Pangasinan II"
        }
    ],

    education: [
        {
            school: "University of Eastern Pangasinan",
            degree: "Bachelor of Science in Information Technology",
            location: "Canarvacanan, Binalonan, Pangasinan",
            start: "2022",
            end: "June 2026",
            duration: "4 Years",
            gpa: "",
            honors: "",
            description: "Bachelor of Science in Information Technology program with focus on web development, mobile applications, databases, and software development.",
            coursework: [
                "Web Development",
                "Mobile App Development",
                "Database Management Systems",
                "Software Development",
                "Object-Oriented Programming"
            ]
        },
        {
            school: "Juan G. Macaraeg National High School",
            degree: "General Academic Strand (GAS)",
            location: "Canarvacanan, Binalonan, Pangasinan",
            start: "2016",
            end: "2022",
            duration: "",
            gpa: "",
            honors: "",
            description: "General Academic Strand — secondary education foundation.",
            coursework: []
        }
    ],

    ojtRecord: {
        organization: "Schools Division Office of Pangasinan II",
        role: "Intern / OJT Developer",
        location: "Pangasinan, Philippines",
        period: "2026",
        hours: "",
        affiliation: "University of Eastern Pangasinan"
    },

    certifications: [
        { title: "SUI Community Philippines", issuedOn: "November 2025", issuer: "", year: "2025", credentialId: "", url: "" },
        { title: "InnoVision", issuedOn: "February 2026", issuer: "", year: "2026", credentialId: "", url: "" },
        { title: "From College Students in the Philippines to International Employment", issuedOn: "May 2026", issuer: "", year: "2026", credentialId: "", url: "" }
    ],

    seminars: [],

    achievements: [
        { title: "60+ Web Systems", description: "Production web apps using HTML, CSS, JS, Tailwind, PHP, and Laravel" },
        { title: "30+ Mobile Apps", description: "Cross-platform applications built with Flutter and React Native" },
        { title: "UEP BSIT", description: "University of Eastern Pangasinan — Information Technology" },
        { title: "SDO Pangasinan II OJT", description: "Government-sector on-the-job training completed" }
    ],

    softSkills: [
        "Critical Thinking",
        "Adaptability",
        "Teamwork",
        "Time Management",
        "Creativity and Innovation",
        "Problem Solving"
    ],

    languages: [
        { name: "English", level: "Professional Working Proficiency" },
        { name: "Filipino", level: "Native / Bilingual" }
    ],

    interests: ["Web Development", "Mobile Apps", "Flutter", "Laravel", "Open Source"],

    atsKeywords: [
        "HTML", "CSS", "JavaScript", "Tailwind", "Flutter", "React Native",
        "PHP", "Laravel", "C#", "MySQL", "Firebase",
        "Full Stack Developer", "Web Development", "Mobile Development", "OJT"
    ],

    references: "Available upon request"
};
