// All portfolio content lives here: edit this file to update copy and projects.
export const profile = {
  name: 'Ping Yi Tung', nickname: 'Oscar', initials: 'PT', location: 'Ottawa, Canada',
  headline: 'Engineering software. Exploring intelligence. Building what works.',
  intro: 'M.Eng. student in Electrical and Computer Engineering (Applied AI) at the University of Ottawa, with hands-on experience across software development, system debugging, computer vision, and experimental validation.',
  email: 'tungoscar23@gmail.com',
  github: 'https://github.com/TungKangroo',
  linkedin: 'https://www.linkedin.com/in/oscar-tung-aa3029202/',
  availability: 'Exploring 2027 co-op opportunities',
};
export const projects = [
  {
    slug:'ai-batting-buddy', number:'01', title:'AI Batting Buddy', eyebrow:'COMPUTER VISION / APPLIED RESEARCH',
    subtitle:'An intelligent baseball training system built from an undergraduate research foundation.',
    tags:['Python','YOLO','OpenCV','Unity','Arduino'], category:'Research', theme:'mint',
    stats:[['200+','real-world trials'],['4','team members'],['2024','ACM ICMR paper']],
    overview:'AI Batting Buddy grew out of an earlier NSTC-supported undergraduate research project on VR-based batting training with image recognition. The subsequent system combined computer vision, motion evaluation, VR, and hardware feedback to support training and performance analysis.',
    contributions:['Led a four-member team through development and experimental validation.','Implemented YOLO-based pose detection and motion evaluation for personalized batting analysis.','Integrated Arduino collision and vibration sensors for haptic feedback.','Conducted more than 200 real-world trials to evaluate the integrated system.'],
    result:'The extended work was published at ACM ICMR 2024 (pp. 1246–1250). The NSTC award supported the preceding undergraduate research project; the publication describes the subsequent AI Batting Buddy work.',
    links:[{label:'Publication details',href:'https://doi.org/10.1145/3652583.3657590'}],
    illustration:'batting'
  },
  {
    slug:'codfish-quantum-reef', number:'02', title:'CodCoder — Quantum Reef', eyebrow:'HACKATHON / QUANTUM COMPUTING',
    subtitle:'A team-built quantum learning platform — 3rd Place at the Qiskit Fall Fest uOttawa 2026 Hackathon.',
    tags:['Python','Qiskit','SciPy','React','FastAPI'], category:'Engineering', theme:'violet',
    stats:[['3rd','Hackathon · Qiskit Fall Fest'],['4','quantum experiments'],['2026','uOttawa']],
    overview:'A team hackathon project created for Qiskit Fall Fest uOttawa 2026, combining quantum experimentation with an interactive web experience. The team earned third place in the hackathon.',
    contributions:['Developed and evaluated a Zero-Noise Extrapolation (ZNE) module to estimate ideal outcomes from noisy measurements.','Validated ZNE with Qiskit Aer and implemented IBM hardware execution support; real-device execution of the ZNE path remains unverified.','Created the initial application scaffold and contributed the homepage two-column layout for the team platform.'],
    result:'Awarded third place as a team at the Qiskit Fall Fest uOttawa 2026 Hackathon.',
    links:[], illustration:'quantum'
  },
  {
    slug:'software-reliability', number:'03', title:'Software Engineering Experience', eyebrow:'BACKEND / DEBUGGING / TESTING',
    subtitle:'Hyweb internship and a faculty-supervised Far EasTone collaboration.',
    tags:['Java','JavaScript','SQL Server','PHP'], category:'Engineering', theme:'blue',
    stats:[['200+','requests resolved'],['30+','feature updates'],['2','industry engagements']],
    overview:'A combined view of applied software engineering work at Hyweb Technology and Far EasTone Telecommunications. Hyweb was an internship; the Far EasTone project was a faculty-supervised university–industry collaboration. These separate engagements are grouped here as an engineering experience case study.',
    contributions:['At Hyweb: maintained backend functionality supporting Taiwan’s Ministry of Labor application platform.','Investigated 200+ system requests and data anomalies across a database of over 100,000 records.','In the faculty-supervised Far EasTone university–industry project: delivered 30+ feature updates for the internal E-CTI employee platform.','Diagnosed defects, prepared test reports and troubleshot frontend/backend behavior.'],
    result:'Developed a practical approach to debugging, test reporting, system reliability, and iterative delivery.',
    links:[], illustration:'terminal'
  }
];
export const experiences = [
  {bullets:["Maintained backend functionality for Taiwan’s Ministry of Labor application platform, supporting 1,000+ daily page views.","Troubleshot and resolved 200+ system requests and data anomalies across 100,000+ database records.","Developed and debugged backend functionality using Java, JavaScript, and SQL Server to support system reliability."],scopeNote:'',type:'Internship',title:'R&D Software Engineer Intern',org:'Hyweb Technology Co., Ltd.',period:'Jul 2024 — Jan 2025',location:'Taichung, Taiwan',details:'Analyzed reported issues and implemented program fixes using Java, JavaScript, and SQL Server. Investigated database anomalies, prepared structured test reports, and supported version control and releases. Available weekly reports record 117 completed issue-fix tickets and 17 completed requirement tickets across 15 reporting weeks.'},
  {type:'University–Industry Collaboration',title:'Software Development Project',org:'Far EasTone Telecommunications',period:'Dec 2022 — Jun 2023',location:'Taichung, Taiwan',details:'A university–industry collaboration with Far EasTone, conducted under faculty supervision. Delivered 30+ feature updates for the internal E-CTI employee platform, diagnosed defects, prepared test reports, and troubleshot frontend/backend functionality.'}
];
export const education = [
  {school:'University of Ottawa',degree:'M.Eng. · Electrical and Computer Engineering (Applied AI)',years:'2026 — Expected 2028',place:'Ottawa, Canada'},
  {school:'Providence University',degree:'B.S. · Computer Science and Communication Engineering',years:'2021 — 2025',place:'Taichung, Taiwan',note:'GPA 4.11/4.30 · 2nd in department'}
];
export const skillGroups = [
  {title:'Programming Languages',description:'Used for backend development, web functionality, data analysis, and experimental code.',items:['Python','Java','JavaScript','SQL','PHP']},
  {title:'AI & Quantum Computing',description:'Applied to computer vision, motion analysis, quantum simulation, and experimental validation.',items:['OpenCV','PyTorch','YOLO','SciPy','Qiskit','Qiskit Aer']},
  {title:'Web Development & Databases',description:'Used to build interfaces and APIs, investigate data issues, and manage code changes.',items:['React','FastAPI','Git','PostgreSQL','SQL Server']},
  {title:'Testing & Problem Solving',description:'Issue analysis, debugging, test reporting, and verification of software and experimental systems.',items:['Debugging','Experimental Validation','Test Reporting','Sensor Integration','Troubleshooting']}
];
export const recognition = [
  {
    "title": "NSTC Undergraduate Research Grant",
    "meta": "National Science and Technology Council, Taiwan · 2023",
    "description": "Received funding for an undergraduate project on VR-based baseball batting training using image recognition. This earlier research provided the foundation for the subsequent AI Batting Buddy system.",
    "detail": "Grant number: 112-2813-C-126-010-E",
    "href": "#/projects/ai-batting-buddy",
    "linkLabel": "See the research project"
  },
  {
    "title": "3rd Place — Qiskit Fall Fest uOttawa Hackathon",
    "meta": "Team award · Quantum computing hackathon · 2026",
    "description": "Our team earned third place with CodCoder — Quantum Reef, an interactive platform that introduces quantum noise and error-mitigation techniques through experiments and learning activities.",
    "detail": "My contribution: initial application scaffold, ZNE module development, and homepage layout.",
    "href": "#/projects/codfish-quantum-reef",
    "linkLabel": "Explore the hackathon project"
  },
  {
    "title": "1st Place — College Graduation Project Competition",
    "meta": "College of Informatics · Providence University",
    "description": "Received first place in the college’s graduation project competition. This award recognizes work presented as part of the undergraduate graduation project.",
    "detail": "An academic project competition award, separate from the Qiskit hackathon."
  },
  {
    "title": "Academic Achievement Award",
    "meta": "Providence University · 2021–2024",
    "description": "Received academic achievement recognition during undergraduate studies. Graduated with a GPA of 4.11/4.30 and ranked second in the department.",
    "detail": "The graduation GPA and department rank provide context for my overall academic record."
  }
];
export const publication = {
  title:'AI Batting Buddy: A Computational and Kinematic Approach for Enhancing Batting Performance and Analysis in Baseball',
  authors:'K. Y. Liu, T. Y. Guo, T. S. Pan, P. Y. Tung, and Y. R. Lin',
  venue:'ACM International Conference on Multimedia Retrieval (ICMR), 2024, pp. 1246–1250',
};

