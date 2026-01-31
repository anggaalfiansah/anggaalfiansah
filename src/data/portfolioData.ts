// ============================================
// PORTFOLIO DATA CONFIGURATION - MULTI LANGUAGE
// ============================================

const portfolioData = {
  // Default language
  defaultLanguage: "id",

  // Available languages
  languages: {
    id: "Bahasa Indonesia",
    en: "English",
  },

  // INFORMASI PERSONAL
  personal: {
    name: "Angga Alfiansah",
    shortName: "AA",
    profileImage: "/images/optimized/profile-medium.webp",
    title: {
      id: "Software Engineer & Security Researcher",
      en: "Software Engineer & Security Researcher",
    },
    greeting: {
      id: "Halo, saya",
      en: "Hi, I'm",
    },
    description: {
      id: "yang gemar membangun sistem dari fase 'Zero to One'. Fokus menciptakan aplikasi yang andal, scalable, dan aman secara fundamental (Secure by Design).",
      en: "who loves building systems from 'Zero to One' phase. Focused on creating reliable, scalable, and fundamentally secure applications (Secure by Design).",
    },
    location: "Jakarta, Indonesia",
    email: "anggaalfiansah26@gmail.com",
    phone: "+62 857 4169 0725",

    social: {
      github: "https://github.com/anggaalfiansah",
      linkedin: "https://www.linkedin.com/in/anggaalfiansah",
      instagram: "https://instagram.com/anggaalfiansah26",
    },
  },

  // EXPERIENCE SECTION
  experience: {
    enabled: true,
    title: {
      id: "Pengalaman & Perjalanan",
      en: "Experience & Journey",
    },
    subtitle: {
      id: "Perjalanan karir profesional, pelatihan intensif, dan kontribusi keamanan.",
      en: "Professional career journey, intensive training, and security contributions.",
    },

    categories: [
      {
        type: "work",
        title: {
          id: "Pengalaman Kerja",
          en: "Professional Work",
        },
        icon: "💼",
        items: [
          {
            title: { id: "Programmer", en: "Programmer" },
            organization: "PT Digital Seucom Indonesia",
            date: "Jan 2022 - Present",
            description: {
              id: "Mengembangkan software enterprise dan solusi IoT. Membuat platform edukasi offline-first (SEP), sistem HRIS, smart parking gate (Qsentinel), dan CMS digital signage. Migrasi deployment ke Docker untuk reliabilitas lebih baik.",
              en: "Developing enterprise software and IoT solutions. Built offline-first education platform (SEP), HRIS system, smart parking gate (Qsentinel), and digital signage CMS. Migrated deployment to Docker for better reliability.",
            },
            skills: ["Docker", "Node.js", "React.js", "Raspberry Pi"],
            media: null,
          },
          {
            title: { id: "Programmer", en: "Programmer" },
            organization: "PT Multiartha Prima Sejahtera",
            date: "May 2021 - Dec 2021",
            description: {
              id: "Mengembangkan aplikasi mobile omnichannel dengan React Native. Melakukan reverse engineering API marketplace (Shopee, Tokopedia, Bukalapak) untuk upload produk otomatis. Integrasi chat multi-platform (FB, IG, Marketplace) ke satu interface.",
              en: "Developed omnichannel mobile app with React Native. Reverse engineered marketplace APIs (Shopee, Tokopedia, Bukalapak) for automated product uploads. Integrated multi-platform chats (FB, IG, Marketplace) into single interface.",
            },
            skills: ["React Native", "Reverse Engineering", "REST API", "Session Management"],
            media: null,
          },
          {
            title: { id: "Instruktur", en: "Instructor" },
            organization: "PT Multiartha Prima Sejahtera",
            date: "Apr 2021 - May 2021",
            description: {
              id: "Mengajar desain grafis (Photoshop, Illustrator) dan dasar pemrograman web/mobile (React.js, Node.js).",
              en: "Taught graphic design (Photoshop, Illustrator) and basic web/mobile programming (React.js, Node.js).",
            },
            skills: ["Photoshop", "Illustrator", "React.js", "Node.js"],
            media: null,
          },
          {
            title: { id: "Engineer", en: "Engineer" },
            organization: "PT Bahtera Pintas Utama",
            date: "Jul 2019 - Jul 2020",
            description: {
              id: "Integrasi IoT & Server untuk proyek Digitalisasi SPBU Pertamina (monitoring stok & transaksi real-time). Staging dan konfigurasi switch untuk migrasi SD-WAN Alfamart. Instalasi jaringan IP Camera.",
              en: "IoT & Server integration for Pertamina Gas Station Digitalization (real-time stock & transaction monitoring). Staging and switch configuration for Alfamart SD-WAN migration. IP Camera network installation.",
            },
            skills: ["IoT Integration", "Server Rack Assembly", "SD-WAN", "CCTV/IP Camera"],
          },
          {
            title: { id: "Teknisi Jaringan", en: "Network Technician" },
            organization: "PT Wisesa Sudi Karya",
            date: "Dec 2018 - Jul 2019",
            description: {
              id: "Instalasi perangkat jaringan (Wireless & Fiber) untuk klien residensial dan korporat. Troubleshooting konektivitas di layer fisik dan data link. Pemasangan switch untuk CCTV IP Camera.",
              en: "Network device installation (Wireless & Fiber) for residential and corporate clients. Connectivity troubleshooting at physical and data link layers. Switch installation for IP Camera CCTV.",
            },
            skills: ["Network Installation", "Fiber Optic", "Troubleshooting", "CCTV Setup"],
          },
        ],
      },
      {
        type: "education",
        title: {
          id: "Pendidikan",
          en: "Education",
        },
        icon: "🎓",
        items: [
          {
            title: {
              id: "Sarjana Sistem Informasi",
              en: "Bachelor of Information Systems",
            },
            organization: "Universitas Siber Asia",
            date: "2024 - 2028 (Expected)",
            description: {
              id: "Mahasiswa biasa dengan minat pada Cybersecurity dan Software Engineering.",
              en: "Regular student with interest in Cybersecurity and Software Engineering.",
            },
            skills: ["Information Systems", "Cybersecurity", "Software Engineering"],
          },
          {
            title: {
              id: "Teknik Komputer Jaringan",
              en: "Computer Network Engineering",
            },
            organization: "SMK At-Thoat Toroh",
            date: "2015 - 2018",
            description: {
              id: "Lulus dengan predikat terbaik satu jurusan.",
              en: "Graduated as the best student in the department.",
            },
            skills: ["Network Engineering", "System Administration", "Hardware Maintenance"],
          },
        ],
      },
      {
        type: "training",
        title: {
          id: "Pelatihan & Sertifikasi",
          en: "Training & Certification",
        },
        icon: "📜",
        items: [
          {
            title: "SMTP 2025 (Security Manpower Training)",
            organization: "KISIA & Ministry of Science and ICT of South Korea",
            date: "2025",
            description: {
              id: "Meraih predikat 'Highest Distinction' pada fase Online Training, kemudian terpilih sebagai Top 12 Finalis untuk mengikuti Onsite Training di Korea Selatan. Mempelajari Web Security, Network Security, Cryptography, OSINT, dan Malware Analysis.",
              en: "Achieved 'Highest Distinction' in the Online Training phase, then selected as Top 12 Finalist to attend Onsite Training in South Korea. Studied Web Security, Network Security, Cryptography, OSINT, and Malware Analysis.",
            },
            skills: ["Web Security", "Network Security", "Cryptography", "OSINT", "Malware Analysis"],
            media: {
              images: [
                {
                  url: "/images/optimized/smtp-arrival-thumbnail.webp",
                  fullUrl: "/images/optimized/smtp-arrival-full.webp",
                  alt: {
                    id: "Kedatangan di Korea Selatan - SMTP 2025",
                    en: "Arrival in South Korea - SMTP 2025",
                  },
                },
                {
                  url: "/images/optimized/smtp-kbri-thumbnail.webp",
                  fullUrl: "/images/optimized/smtp-kbri-full.webp",
                  alt: {
                    id: "Kunjungan ke KBRI Seoul",
                    en: "Visit to Indonesian Embassy (KBRI) in Seoul",
                  },
                },
                {
                  url: "/images/optimized/smtp-learning-thumbnail.webp",
                  fullUrl: "/images/optimized/smtp-learning-full.webp",
                  alt: {
                    id: "Sesi Pembelajaran Cybersecurity",
                    en: "Cybersecurity Learning Session",
                  },
                },
                {
                  url: "/images/optimized/smtp-starfield-thumbnail.webp",
                  fullUrl: "/images/optimized/smtp-starfield-full.webp",
                  alt: {
                    id: "Kunjungan ke Starfield Library",
                    en: "Visit to Starfield Library",
                  },
                },
                {
                  url: "/images/optimized/smtp-visit-markany-thumbnail.webp",
                  fullUrl: "/images/optimized/smtp-visit-markany-full.webp",
                  alt: {
                    id: "Kunjungan Perusahaan - MarkAny",
                    en: "Company Visit - MarkAny",
                  },
                },
                {
                  url: "/images/optimized/smtp-visit-netand-thumbnail.webp",
                  fullUrl: "/images/optimized/smtp-visit-netand-full.webp",
                  alt: {
                    id: "Kunjungan Perusahaan - Netand",
                    en: "Company Visit - Netand",
                  },
                },
              ],
            },
          },
          {
            title: "Full Stack Javascript Bootcamp",
            organization: "Juara Coding",
            date: "Jan 2021 - Apr 2021",
            description: {
              id: "Pelatihan intensif ekosistem JavaScript (MERN Stack). Capstone Project: Aplikasi absensi mobile dengan Face Recognition menggunakan React Native, Firebase, dan Express.js.",
              en: "Intensive JavaScript ecosystem training (MERN Stack). Capstone Project: Mobile attendance app with Face Recognition using React Native, Firebase, and Express.js.",
            },
            skills: ["MERN Stack", "React Native", "Firebase", "Face Recognition"],
          },
        ],
      },
      {
        type: "research",
        title: {
          id: "Riset Keamanan",
          en: "Security Research",
        },
        icon: "🛡️",
        items: [
          {
            title: {
              id: "Peneliti Keamanan Independen",
              en: "Independent Security Researcher",
            },
            organization: "Bug Bounty / Disclosure",
            date: "2021 - Present",
            description: {
              id: "Menemukan kerentanan kritis (Financial Logic, PII Leakage, ATO) pada platform besar seperti SiCepat Express, Segari, KBM App, dan lainnya. Melaporkan temuan secara bertanggung jawab dan berkontribusi pada peningkatan keamanan sistem mereka.",
              en: "Discovered critical vulnerabilities (Financial Logic, PII Leakage, ATO) on major platforms such as SiCepat Express, Segari, KBM App, and others. Responsibly reported findings and contributed to improving their system security.",
            },
            skills: ["Vulnerability Assessment", "Burp Suite", "OWASP Top 10"],
            media: {
              images: [
                {
                  url: "/images/optimized/secres-sicepat-thumbnail.webp",
                  fullUrl: "/images/optimized/secres-sicepat-full.webp",
                  alt: {
                    id: "Apresiasi dari SiCepat Express atas temuan keamanan",
                    en: "Appreciation from SiCepat Express for security findings",
                  },
                },
                {
                  url: "/images/optimized/secres-kbm-thumbnail.webp",
                  fullUrl: "/images/optimized/secres-kbm-full.webp",
                  alt: {
                    id: "Apresiasi dari KBM App atas temuan keamanan",
                    en: "Appreciation from KBM App for security findings",
                  },
                },
              ],
            },
          },
          {
            title: {
              id: "Desain Protokol CECSP",
              en: "CECSP Protocol Design",
            },
            organization: "Engineering Research",
            date: "Nov 2025",
            description: {
              id: "Merancang protokol keamanan custom layer aplikasi menggunakan TypeScript & Bun Runtime untuk mengamankan payload REST API.",
              en: "Designed custom application layer security protocol using TypeScript & Bun Runtime to secure REST API payloads.",
            },
            skills: ["Cryptography", "Protocol Design", "Bun"],
          },
          {
            title: "Capture The Flag (CTF)",
            organization: {
              id: "Berbagai Platform & Event",
              en: "Various Platforms & Events",
            },
            date: "2025 - Present",
            description: {
              id: "Mengikuti CTF sebagai sarana belajar dan mengasah kemampuan di berbagai sub-bidang IT Security seperti Web Exploitation, Binary Exploitation, Reverse Engineering, Cryptography, Forensics, dan OSINT.",
              en: "Participating in CTF as a learning medium to sharpen skills in various IT Security sub-fields such as Web Exploitation, Binary Exploitation, Reverse Engineering, Cryptography, Forensics, and OSINT.",
            },
            skills: ["Web Exploitation", "Binary Exploitation", "Reverse Engineering", "Cryptography", "Forensics", "OSINT"],
          },
        ],
      },
      {
        type: "volunteering",
        title: {
          id: "Kegiatan Sukarela",
          en: "Volunteering",
        },
        icon: "🤝",
        items: [
          {
            title: {
              id: "Petugas Cluster Wisuda",
              en: "Graduation Cluster Officer",
            },
            organization: "Universitas Siber Asia",
            date: "17-18 Jan 2026",
            description: {
              id: "Berpartisipasi sebagai petugas cluster pada acara wisuda kampus. Mengikuti gladi resik pada tanggal 17 Januari dan bertugas pada hari pelaksanaan wisuda tanggal 18 Januari 2026.",
              en: "Participated as a cluster officer at the university graduation ceremony. Attended rehearsal on January 17 and served on the graduation day on January 18, 2026.",
            },
            skills: ["Event Coordination", "Teamwork", "Public Service"],
            media: {
              images: [
                {
                  url: "/images/optimized/wisuda-1-thumbnail.webp",
                  fullUrl: "/images/optimized/wisuda-1-full.webp",
                  alt: {
                    id: "Dokumentasi Wisuda UNSIA 2026",
                    en: "UNSIA Graduation 2026 Documentation",
                  },
                },
                {
                  url: "/images/optimized/wisuda-3-thumbnail.webp",
                  fullUrl: "/images/optimized/wisuda-3-full.webp",
                  alt: {
                    id: "Dokumentasi Wisuda UNSIA 2026",
                    en: "UNSIA Graduation 2026 Documentation",
                  },
                },
              ],
            },
          },
          {
            title: {
              id: "Kontributor Open Source",
              en: "Open Source Contributor",
            },
            organization: "GitHub Community",
            date: "2022 - Present",
            description: {
              id: "Berkontribusi pada proyek open source dan membantu developer lain dalam troubleshooting issue di komunitas.",
              en: "Contributing to open source projects and helping other developers troubleshoot issues in the community.",
            },
            skills: ["Open Source", "Code Review", "Documentation"],
          },
        ],
      },
    ],
  },

  // ABOUT SECTION
  about: {
    paragraphs: {
      id: [
        "Kasih saya dokumentasi atau referensi, saya pelajari dan buatkan. Mau itu aplikasi, jaringan, IoT, atau hal baru yang belum pernah saya sentuh sekalipun. Selama ada resource untuk dipelajari, saya yakin bisa.",
        "Sejak SMK sudah manjat tower triangle buat pasang perangkat jaringan dan ngulik router. Berlanjut ke instalasi fiber optic, integrasi IoT untuk SPBU Pertamina, reverse engineering API marketplace, hingga sekarang fokus mengembangkan aplikasi enterprise. Setiap fase mengajarkan cara melihat masalah dari sudut berbeda.",
        "Ketertarikan dengan security dimulai dari hal konyol. Baru belajar HTML, iseng buka inspect element, eh ternyata bisa tembus. Sejak itu jadi penasaran: kalau ini bisa diakali, apalagi yang lain?",
        "Sekarang rasa penasaran itu tersalurkan lewat CTF dan bug bounty. Beberapa temuan sudah dilaporkan ke platform seperti SiCepat dan Segari. Ternyata memahami cara merusak sistem membantu saya membangun dengan lebih baik.",
      ],
      en: [
        "Give me documentation or references, I'll learn and build it. Whether it's applications, networks, IoT, or something completely new. As long as there's a resource to learn from, I'm confident I can figure it out.",
        "Since vocational high school, I was already climbing triangle towers to install network equipment and tinkering with routers. Then moved on to fiber optic installation, IoT integration for Pertamina gas stations, reverse engineering marketplace APIs, to now focusing on enterprise application development. Each phase taught me to see problems from different angles.",
        "My interest in security started from something silly. Just learning HTML, opened inspect element out of curiosity, and suddenly I got through. Since then I wondered: if this can be bypassed, what else can?",
        "Now that curiosity is channeled through CTF and bug bounty. Several findings have been reported to platforms like SiCepat and Segari. Turns out understanding how to break systems helps me build better.",
      ],
    },

    stats: [
      {
        number: "7+",
        label: { id: "Tahun Pengalaman", en: "Years of Experience" },
      },
      {
        number: "15+",
        label: { id: "Proyek Selesai", en: "Projects Delivered" },
      },
      {
        number: "10+",
        label: { id: "Laporan Bug Bounty", en: "Bug Bounty Reports" },
      },
    ],

    services: [
      {
        icon: "💻",
        title: {
          id: "Full Stack Development",
          en: "Full Stack Development",
        },
        description: {
          id: "Pengembangan aplikasi Web & Mobile menggunakan Node.js, React, dan React Native.",
          en: "Web & Mobile application development using Node.js, React, and React Native.",
        },
      },
      {
        icon: "🔒",
        title: {
          id: "Security Testing",
          en: "Security Testing",
        },
        description: {
          id: "Vulnerability assessment dan penetration testing untuk aplikasi web.",
          en: "Vulnerability assessment and penetration testing for web applications.",
        },
      },

      {
        icon: "🐳",
        title: {
          id: "DevOps & Infrastructure",
          en: "DevOps & Infrastructure",
        },
        description: {
          id: "Containerization dengan Docker, CI/CD pipelines, dan administrasi server Linux.",
          en: "Containerization with Docker, CI/CD pipelines, and Linux server administration.",
        },
      },
      {
        icon: "🌐",
        title: {
          id: "Jaringan & IoT",
          en: "Network & IoT",
        },
        description: {
          id: "Instalasi jaringan, konfigurasi perangkat, dan integrasi sistem IoT.",
          en: "Network installation, device configuration, and IoT system integration.",
        },
      },
    ],
  },

  // PROJECTS SECTION
  projects: {
    enabled: false, // Hide projects for now
    title: {
      id: "Proyek",
      en: "Projects",
    },
    subtitle: {
      id: "Beberapa proyek yang telah saya kerjakan",
      en: "Some projects I have worked on",
    },
    filterLabels: {
      all: { id: "Semua", en: "All" },
      featured: { id: "Unggulan", en: "Featured" },
      security: { id: "Keamanan", en: "Security" },
      fullstack: { id: "Full Stack", en: "Full Stack" },
      iot: { id: "IoT", en: "IoT" },
      research: { id: "Riset", en: "Research" },
    },
    items: [
      {
        id: 1,
        title: "CECSP - Secure API Protocol",
        description: {
          id: "Protokol keamanan custom layer aplikasi untuk mengamankan REST API payload dari serangan MITM dan Replay Attacks.",
          en: "Custom application layer security protocol to secure REST API payloads from MITM and Replay Attacks.",
        },
        image: "🔐",
        category: "security",
        technologies: ["TypeScript", "Bun Runtime", "AES-128", "Cryptography"],
        github: "https://github.com/anggaalfiansah/cecsp-protocol",
        demo: null,
        featured: true,
      },
      {
        id: 2,
        title: "Offline-First Educational Platform (SEP)",
        description: {
          id: "Sistem manajemen pembelajaran (LMS) offline untuk Interactive Flat Panels (IFP) tanpa ketergantungan internet.",
          en: "Offline learning management system (LMS) for Interactive Flat Panels (IFP) without internet dependency.",
        },
        image: "📚",
        category: "fullstack",
        technologies: ["Docker", "React.js", "Node.js", "Offline Architecture"],
        github: null,
        demo: null,
        featured: true,
      },
      {
        id: 3,
        title: "Qsentinel - IoT Parking System",
        description: {
          id: "Sistem parkir pintar mengintegrasikan Raspberry Pi dengan Node.js untuk kontrol hardware gate otomatis.",
          en: "Smart parking system integrating Raspberry Pi with Node.js for automatic gate hardware control.",
        },
        image: "🚗",
        category: "iot",
        technologies: ["Raspberry Pi", "Node.js", "Hardware Design"],
        github: null,
        demo: null,
        featured: false,
      },
      {
        id: 4,
        title: "Marketplace API Reverse Engineering",
        description: {
          id: "Analisis dan mapping API internal marketplace (Shopee/Tokopedia) untuk fitur upload produk otomatis.",
          en: "Analysis and mapping of internal marketplace APIs (Shopee/Tokopedia) for automatic product upload features.",
        },
        image: "🔍",
        category: "research",
        technologies: ["Reverse Engineering", "React Native", "REST API"],
        github: null,
        demo: null,
        featured: false,
      },
      {
        id: 5,
        title: "SiCepat & Segari Vulnerability Reports",
        description: {
          id: "Temuan celah keamanan kritis (Account Takeover, PII Leakage) yang telah dilaporkan dan diperbaiki.",
          en: "Critical security vulnerability findings (Account Takeover, PII Leakage) that have been reported and fixed.",
        },
        image: "🐛",
        category: "security",
        technologies: ["Burp Suite", "BOLA/IDOR Analysis"],
        github: null,
        demo: null,
        featured: true,
      },
    ],
  },

  // SKILLS SECTION
  skills: {
    title: {
      id: "Keahlian & Teknologi",
      en: "Skills & Technologies",
    },
    subtitle: {
      id: "Teknologi dan tools yang saya gunakan untuk mewujudkan ide",
      en: "Technologies and tools I use to bring ideas to life",
    },
    categories: [
      {
        title: {
          id: "Frontend & Mobile",
          en: "Frontend & Mobile",
        },
        icon: "📱",
        skills: ["React.js", "React Native", "tailwindcss", "Chakra UI", "WebSockets / Socket.io", "Leaflet.js", "Responsive Design"],
      },
      {
        title: {
          id: "Backend",
          en: "Backend",
        },
        icon: "⚙️",
        skills: ["Node.js / Express", "TypeScript / Bun", "REST API", "MongoDB / Firebase", "MySQL / PostgreSQL"],
      },
      {
        title: {
          id: "Keamanan Siber",
          en: "Cybersecurity",
        },
        icon: "🔒",
        skills: ["Vulnerability Assessment", "Burp Suite", "API Security (OWASP)", "Reverse Engineering", "Cryptography"],
      },
      {
        title: {
          id: "DevOps & Infrastruktur",
          en: "DevOps & Infrastructure",
        },
        icon: "🐳",
        skills: ["Docker / Containerization", "Linux Administration", "CI/CD Pipelines", "Git / Version Control"],
      },
      {
        title: {
          id: "Jaringan & Hardware",
          en: "Network & Hardware",
        },
        icon: "🌐",
        skills: ["SD-WAN / Fiber Optic", "CCTV / IP Camera", "Hardware Troubleshooting", "Network Configuration", "Server Rack Assembly"],
      },
      {
        title: {
          id: "Bahasa & Tools Lain",
          en: "Other Languages & Tools",
        },
        icon: "🛠️",
        skills: ["PHP", "Python", "C++ / C#", "Raspberry Pi / IoT", "Photoshop", "Illustrator"],
      },
    ],
  },

  // CONTACT SECTION
  contact: {
    title: {
      id: "Hubungi Saya",
      en: "Contact Me",
    },
    subtitle: {
      id: "Tertarik berkolaborasi untuk proyek aman dan skalabel?",
      en: "Interested in collaborating on secure and scalable projects?",
    },
    introText: {
      id: "Saya terbuka untuk diskusi mengenai pengembangan software enterprise, konsultasi keamanan, atau riset teknologi.",
      en: "I'm open to discussions about enterprise software development, security consulting, or technology research.",
    },
    successMessage: {
      id: "✓ Pesan terkirim! Saya akan membalas secepatnya.",
      en: "✓ Message sent! I'll reply as soon as possible.",
    },
    connectTitle: { id: "Mari Terhubung", en: "Let's Connect" },
    form: {
      nameLabel: { id: "Nama", en: "Name" },
      namePlaceholder: { id: "Nama Anda", en: "Your Name" },
      emailLabel: { id: "Email", en: "Email" },
      emailPlaceholder: { id: "email@anda.com", en: "your@email.com" },
      subjectLabel: { id: "Subjek", en: "Subject" },
      subjectPlaceholder: { id: "Perihal", en: "Subject" },
      messageLabel: { id: "Pesan", en: "Message" },
      messagePlaceholder: { id: "Tulis pesan Anda di sini...", en: "Write your message here..." },
      submitButton: { id: "Kirim via WhatsApp", en: "Send via WhatsApp" },
    },
    labels: {
      location: { id: "Lokasi", en: "Location" },
      email: { id: "Email", en: "Email" },
      phone: { id: "Telepon", en: "Phone" },
    },
  },

  // FOOTER
  footer: {
    tagline: {
      id: "Mengamankan dunia digital, membangun sistem yang kokoh.",
      en: "Securing the digital world, building robust systems.",
    },
    quickLinksTitle: { id: "Tautan Cepat", en: "Quick Links" },
    connectTitle: { id: "Terhubung", en: "Connect" },
    copyright: {
      id: "Open Source dengan ❤️",
      en: "Open Source with ❤️",
    },
    builtWith: {
      id: "Dibuat dengan React & TypeScript",
      en: "Built with React & TypeScript",
    },
  },

  // NAVIGATION MENU
  navigation: {
    links: [
      { id: "home", label: { id: "Beranda", en: "Home" } },
      { id: "about", label: { id: "Tentang", en: "About" } },
      { id: "experience", label: { id: "Pengalaman", en: "Experience" } },
      { id: "projects", label: { id: "Proyek", en: "Projects" } },
      { id: "skills", label: { id: "Keahlian", en: "Skills" } },
      { id: "contact", label: { id: "Kontak", en: "Contact" } },
    ],
  },
};

export default portfolioData;
