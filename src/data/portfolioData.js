export const personalInfo = {
  name: "Ayush",
  role: "Computer Science & Engineering Student | Software Developer | IoT Enthusiast",
  university: "Lovely Professional University",
  location: "Phagwara, Punjab, India",
  tagline: "Building practical software and IoT solutions while strengthening problem-solving, data structures, and full-stack development skills.",
  heroBio: "I build practical software and IoT solutions, solve programming problems, and continuously explore modern technologies to become a better software engineer.",
  email: "ayushsiroli2550@gmail.com",
  phone: "+91 9120305567",
  github: "https://github.com/ayushkashyap10",
  githubUsername: "ayushkashyap10",
  linkedin: "https://www.linkedin.com/in/ayush-839a31390",
  resumePdf: "/Ayush_Resume.pdf",
  resumeDocx: "/Ayush_Resume.docx",
  avatar: "/avatar.png"
};

export const stats = [
  {
    label: "Current CGPA",
    value: "9.53",
    subtext: "Lovely Professional University",
    highlight: true
  },
  {
    label: "Coding Problems Solved",
    value: "250+",
    subtext: "Algorithmic & DSA Practice",
    highlight: false
  },
  {
    label: "Major Engineering Projects",
    value: "2+",
    subtext: "IoT & Systems Software",
    highlight: false
  },
  {
    label: "Hackathon Recognition",
    value: "Top Tier",
    subtext: "Among 50+ College Teams",
    highlight: false
  }
];

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for problem solving, systems logic, and software design.",
    skills: [
      { name: "C++", level: "Primary", tag: "DSA & OOP" },
      { name: "Python", level: "Primary", tag: "Scripting & CLI" },
      { name: "C", level: "Core", tag: "System Programming" },
      { name: "JavaScript", level: "Core", tag: "Interactive Web" }
    ]
  },
  {
    id: "web",
    title: "Web Technologies",
    description: "Building responsive, modern, and accessible front-end interfaces.",
    skills: [
      { name: "HTML5", level: "Standard", tag: "Semantic Markup" },
      { name: "CSS3", level: "Standard", tag: "Responsive Design" },
      { name: "JavaScript (ES6+)", level: "Core", tag: "DOM & Async" }
    ]
  },
  {
    id: "tools",
    title: "Databases & Tools",
    description: "Industry-standard development workflows, relational data, and tooling.",
    skills: [
      { name: "MySQL", level: "Database", tag: "Relational Queries" },
      { name: "Git", level: "VCS", tag: "Version Control" },
      { name: "GitHub", level: "Collaboration", tag: "Open Source & CI" },
      { name: "Figma", level: "Design", tag: "UI/UX Prototyping" }
    ]
  },
  {
    id: "exploring",
    title: "Currently Exploring",
    description: "Active technical focus areas undergoing hands-on practice and development.",
    skills: [
      { name: "React", level: "Learning", tag: "Component Architecture" },
      { name: "Full-Stack Development", level: "Learning", tag: "End-to-End Apps" },
      { name: "Data Structures & Algorithms", level: "Continuous", tag: "Algorithmic Depth" },
      { name: "IoT Systems", level: "Continuous", tag: "Sensors & Embedded Microcontrollers" },
      { name: "Modern Web Development", level: "Active", tag: "Tailwind, Vite, Tooling" }
    ]
  },
  {
    id: "soft",
    title: "Professional Attributes",
    description: "Core interpersonal competencies demonstrated in academic and team settings.",
    skills: [
      { name: "Problem Solving", level: "Trait", tag: "Analytical Thinking" },
      { name: "Team Collaboration", level: "Trait", tag: "Hackathons & Projects" },
      { name: "Time Management", level: "Trait", tag: "Academic & Practice Balance" },
      { name: "Adaptability", level: "Trait", tag: "Rapid Tool Adoption" }
    ]
  }
];

export const projects = [
  {
    id: "hydro-mind",
    title: "HYDRO MIND",
    subtitle: "Smart Weather-Based Irrigation System",
    category: "ESP32 | IoT | Blynk | Sensors",
    shortDescription: "An IoT-based smart irrigation system that automates plant watering using real-time soil moisture telemetry and live cloud weather forecasting to prevent water wastage.",
    fullDescription: "HYDRO MIND is an intelligent embedded IoT system built with an ESP32 microcontroller that monitors soil moisture, ambient temperature, humidity, and surrounding motion in real time. It links directly to the OpenWeather API over Wi-Fi to detect incoming rain, drizzle, or thunderstorms, preventing unnecessary irrigation and saving critical water resources. Users can view telemetry and control irrigation remotely via a custom Blynk IoT dashboard, or view live readings on a local 16×2 I2C LCD screen.",
    github: "https://github.com/ayushkashyap10/Hidro-MInd",
    featured: true,
    thumbnail: "/projects/hydro_mind.jpeg",
    images: [
      {
        url: "/projects/hydro_mind.jpeg",
        title: "Full Hardware Prototype Setup",
        description: "ESP32 connected to soil probe, DHT11, relay, and water reservoir with living plant."
      },
      {
        url: "/projects/hydro_components.png",
        title: "Circuit Components & Wiring Architecture",
        description: "Breadboard layout connecting ESP32, 1-channel 5V relay module, buzzer, and sensors."
      },
      {
        url: "/projects/hydro_result.png",
        title: "Live LCD System Output",
        description: "16x2 I2C LCD showing real-time moisture index, weather status, and pump operational mode."
      }
    ],
    technologies: [
      "ESP32",
      "C++",
      "Arduino IDE",
      "Blynk IoT",
      "OpenWeather API",
      "DHT11 Sensor",
      "Soil Moisture Sensor",
      "PIR Sensor",
      "Relay Module",
      "16×2 I2C LCD"
    ],
    features: [
      "Automated irrigation driven by soil moisture thresholding",
      "Weather-aware control: Queries OpenWeather API to suppress pumping during rain/storms",
      "Dual operational modes: Automatic sensor/weather control or manual cloud override",
      "Blynk IoT cloud dashboard for real-time mobile telemetry & remote pump activation",
      "DHT11 real-time ambient temperature and humidity tracking",
      "PIR motion sensing with audible buzzer alert for intrusion/crop monitoring",
      "Local 16×2 I2C LCD real-time display of moisture, weather, and pump state",
      "Submersible 5V water pump triggered safely via optocoupled relay"
    ],
    technicalFlow: [
      { step: "1. Data Collection", desc: "Soil probe, DHT11, and PIR sensors read environmental telemetry." },
      { step: "2. Cloud Weather Sync", desc: "ESP32 queries OpenWeather API over Wi-Fi for precipitation status." },
      { step: "3. Decision Engine", desc: "If Rain is detected -> Pump OFF. Else if Soil is Dry -> Activate Relay." },
      { step: "4. Execution & Telemetry", desc: "Relay powers 5V pump; live metrics stream to Blynk IoT & 16×2 LCD." }
    ],
    architectureDiagram: `
[ Soil Probe / DHT11 / PIR ]
           │ (Analog / Digital Signals)
           ▼
     ┌───────────┐      Wi-Fi GET      ┌──────────────────────┐
     │   ESP32   │ ──────────────────► │    OpenWeather API   │
     └─────┬─────┘                     └──────────┬───────────┘
           │                                      │ (Rain / Thunderstorm Data)
     Decision Engine ◄────────────────────────────┘
     [ Weather Safe & Soil Dry? ]
      ├── YES ──► Relay Switch ON  ──► [ 5V Water Pump ]
      └── NO  ──► Relay Switch OFF ──► [ Water Conserved ]
           │
           ├── Local I2C Bus ──► [ 16×2 LCD Display ]
           └── Wi-Fi Telemetry ──► [ Blynk IoT Dashboard (Mobile / Web) ]
    `
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    subtitle: "Persistent CLI Record Manager",
    category: "Python | CLI | File Handling",
    shortDescription: "A CLI-based student management system designed to manage student records efficiently through CRUD operations, student search, registration-number validation, and persistent file-based storage.",
    fullDescription: "A Python record management application built with a clean, interactive command-line interface and persistent file storage. The system maintains student data in structured in-memory dictionary lists and synchronizes changes with a persistent text file (students.txt). It enforces registration number uniqueness, validates types and boundaries, handles potential I/O exceptions gracefully, and provides instant record retrieval and updates.",
    github: "https://github.com/ayushkashyap10/Student-Management-System",
    thumbnail: "/projects/student_management.png",
    images: [
      {
        url: "/projects/student_management.png",
        title: "Student Management System - Python CLI Overview",
        description: "Command-line interface operations, file handling via students.txt, and validation engine."
      }
    ],
    technologies: [
      "Python 3",
      "File I/O",
      "Data Structures (Lists & Dictionaries)",
      "Exception Handling",
      "Input Validation",
      "CLI Design"
    ],
    features: [
      "Complete CRUD operations (Add, View, Update, Delete records)",
      "Instant student search by registration number",
      "Strict registration number uniqueness check to prevent duplicates",
      "Persistent flat-file storage via formatted students.txt",
      "Automatic data loading and state reconstitution upon startup",
      "Safe exception handling covering invalid inputs and file read/write issues",
      "Clean terminal menu with formatted tabular output"
    ],
    technicalFlow: [
      { step: "1. Initialization", desc: "Reads students.txt, parses records, and populates in-memory dictionary list." },
      { step: "2. User Interaction", desc: "Presents CLI menu; validates registration numbers, program, and CGPA." },
      { step: "3. State Modification", desc: "Performs CRUD mutations in memory with duplicate prevention." },
      { step: "4. Disk Synchronization", desc: "Atomically flushes updated state to students.txt to ensure persistence." }
    ],
    sampleRecordFormat: "Registration Number | Name | Age | Program | CGPA",
    simulatedCliCommands: [
      { cmd: "python main.py", output: `Loading records from students.txt... Loaded 4 records successfully.
================ MENU ================
1) Add Student
2) View All Students
3) Search Student
4) Update Student Record
5) Delete Student Record
6) Exit
======================================
Enter choice: 2` },
      { cmd: "View All Students", output: `----------------------------------------------------------------------
Reg No    | Name            | Age | Program                     | CGPA
----------------------------------------------------------------------
12501560  | Ayush           | 19  | Computer Science & Eng.     | 9.53
12505643  | Rohan Verma     | 19  | Computer Science & Eng.     | 8.39
12508921  | Priya Sharma    | 20  | Electronics & Comm. Eng.    | 8.85
----------------------------------------------------------------------` }
    ]
  }
];

export const certifications = [
  {
    id: "fullstack-react",
    title: "Learning Full Stack React",
    organization: "Infosys Springboard",
    date: "March 2025",
    image: "/certificates/fullstack_certificate.png",
    description: "Comprehensive foundational training in React, full-stack architecture, components, state management, and modern web application development.",
    credentialType: "Course Completion & Skill Assessment"
  },
  {
    id: "computer-programming",
    title: "Computer Programming",
    organization: "neoCollab",
    date: "May 2026",
    image: "/certificates/c_programming.png",
    description: "Rigorous programmatic problem-solving and algorithmic implementation covering core programming paradigms, structured logic, and execution efficiency.",
    credentialType: "Technical Certification"
  },
  {
    id: "git-skillup",
    title: "Git – Skill Up",
    organization: "GeeksforGeeks",
    date: "February 2026",
    image: "/certificates/git_certificate.png",
    description: "Hands-on mastery of version control workflows: branching, merging, remote repositories, commit hygiene, and collaborative Git practices.",
    credentialType: "Technical Certification"
  },
  {
    id: "cdp-tctc",
    title: "Community Development Project (CDP)",
    organization: "Times Foundation / Lovely Professional University",
    date: "August 2026",
    image: "/certificates/cdp_certificate.png",
    description: "Participation and coordination in the Times Critical Thinking Championship (TCTC) fostering analytical reasoning, digital onboarding, and problem-solving.",
    credentialType: "Academic Social Project Certification"
  }
];

export const achievements = [
  {
    id: "coding-practice",
    title: "250+ Algorithmic Programming Problems",
    organization: "Online Coding Platforms",
    period: "Ongoing Practice",
    type: "Coding & Problem Solving",
    description: "Solved more than 250 programming problems through regular coding practice and algorithmic problem solving, strengthening mastery over arrays, strings, recursion, sorting, and core data structures."
  },
  {
    id: "hackathon-top",
    title: "Top Finish Among 50+ College Hackathon Teams",
    organization: "College Hackathon",
    period: "2025 - 2026",
    type: "Competitive Engineering",
    description: "Participated in rigorous multi-day college hackathons and achieved a top standing among 50+ teams by architecting and presenting innovative web-based software solutions under strict deadlines."
  }
];

export const education = [
  {
    id: "lpu",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    period: "Aug 2025 – Present",
    score: "CGPA: 9.53",
    status: "Active / Ongoing",
    details: "Core focus on Computer Science fundamentals, Object-Oriented Programming, Data Structures & Algorithms, Embedded IoT Systems, and Web Engineering."
  },
  {
    id: "bv-inter",
    institution: "B. V. Inter College",
    location: "Mohammadabad, Uttar Pradesh",
    degree: "Secondary Education",
    period: "Jun 2023 – Mar 2024",
    score: "Percentage: 70.8%",
    status: "Completed",
    details: "Strong scientific and mathematical foundation with coursework in Mathematics, Science, and Social Sciences."
  },
  {
    id: "skm-inter",
    institution: "S.K.M Inter College",
    location: "Nawabganj, Uttar Pradesh",
    degree: "Higher Secondary Education",
    period: "May 2021 – Mar 2022",
    score: "Percentage: 81.1%",
    status: "Completed",
    details: "Rigorous academic training in Physics, Chemistry, and Advanced Mathematics preparing for Engineering studies."
  }
];

export const githubRepos = [
  {
    name: "Hidro-MInd",
    url: "https://github.com/ayushkashyap10/Hidro-MInd",
    description: "Smart Weather-Based Irrigation System using ESP32, DHT11, Soil Moisture Sensor, Blynk IoT & OpenWeather API.",
    language: "C++",
    stars: 0,
    tags: ["ESP32", "IoT", "Blynk", "OpenWeather"]
  },
  {
    name: "Student-Management-System",
    url: "https://github.com/ayushkashyap10/Student-Management-System",
    description: "Interactive Python CLI student record manager with file persistence, validation, and full CRUD capabilities.",
    language: "Python",
    stars: 0,
    tags: ["Python", "CLI", "File-Handling", "CRUD"]
  },
  {
    name: "Basic_Calculater",
    url: "https://github.com/ayushkashyap10/Basic_Calculater",
    description: "Fundamental calculator application demonstrating clean control flow, input handling, and arithmetic operations.",
    language: "C++",
    stars: 0,
    tags: ["Programming", "Algorithms", "CLI"]
  },
  {
    name: "Pattern",
    url: "https://github.com/ayushkashyap10/Pattern",
    description: "Geometric and algorithmic pattern generation programs highlighting nested loops, recursion, and computational logic.",
    language: "C++",
    stars: 0,
    tags: ["Problem-Solving", "Nested-Loops", "Logic"]
  },
  {
    name: "Swastik",
    url: "https://github.com/ayushkashyap10/Swastik",
    description: "Algorithmic coordinate and symmetry matrix printing application exercising multi-dimensional array indices.",
    language: "C++",
    stars: 0,
    tags: ["Matrix", "Logic-Building"]
  }
];
