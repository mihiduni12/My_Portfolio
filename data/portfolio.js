// All the text on the site lives in this file.
// Edit it here and the page updates. You don't need to touch the components.

export const profile = {
  name: "Mihiduni Abeyratne",
  role: "Software engineer",
  // The line under your name
  headline: "Software engineer with a strong interest in AI",
  location: "Kandy, Sri Lanka",
  photo: "/profile.jpg",
  intro:
    "Software Engineering graduate with hands-on experience in Machine Learning, Deep Learning, NLP, Generative AI, and Large Language Models. Experienced in developing AI solutions using Python, Scikit-learn, TensorFlow, RAG, FAISS, and LLMs, with additional experience in REST APIs, databases, and full-stack development. Strong foundation in software engineering principles, data processing, model evaluation, and Agile development.",
  email: "mihiduniabeyratne@gmail.com",
  github: "https://github.com/mihiduni12",
  linkedin: "https://www.linkedin.com/in/mihiduni-abeyratne-956287249",
  // Put your CV in the "public" folder with this exact name to turn on the
  // "Download CV" button. Set this to null to hide the button.
  cv: "/Mihiduni_Abeyratne_CV.pdf",
};

// The research project is shown first, with a diagram of how it works.
export const featuredProject = {
  title: "AI physics learning assistant",
  context: "Final year research project",
  summary:
    "A learning assistant for Sri Lankan A/L Physics students that gives structured, exam-oriented explanations. It walks through theory step by step, in line with the local syllabus and past paper patterns. I worked on data preparation, prompt design and making the answers consistent and clear.",
  pipeline: [
    // Check these steps match how your system really works, and edit them if not.
    { step: "Student asks a question", detail: "React web app" },
    { step: "Find matching syllabus and past-paper content", detail: "Vector search with FAISS" },
    { step: "Generate an explanation from that content", detail: "LLaMA running locally on Ollama" },
    { step: "Return a step-by-step, exam-style answer", detail: "Aligned with the A/L syllabus" },
  ],
  pipelineNote: "Source material prepared from OCR-processed past papers and syllabus notes.",
  stack: ["Python", "NLP", "RAG", "FAISS", "LLaMA (Ollama)", "mT5", "React", "Node.js", "MongoDB", "OCR"],
  repo: "https://github.com/mihiduni12/AI-LMS",
};

export const projects = [
  {
    title: "Food-service inventory manager",
    summary:
      "A full-stack inventory app for a food-service business. A Spring Boot REST API manages products with create, update and delete, category filtering and a low-stock check, with input validation and tests that run on an in-memory H2 database. The React frontend uses Redux Toolkit for loading data, filters and editing.",
    stack: ["Java 17", "Spring Boot 3", "Spring Data JPA", "MySQL", "React", "Redux Toolkit", "Vite", "H2"],
    repo: "https://github.com/mihiduni12/InventoryApplication",
    image: null,
  },
  {
    title: "Movie Explorer",
    summary:
      "A React app for searching movies, browsing trending films and watching trailers, using the TMDb API. It has debounced search, infinite scrolling, filters by genre, year and rating, a favourites list, light and dark mode, and clear error messages with a retry option. State is managed with the Context API.",
    stack: ["React", "Material UI", "React Router", "Axios", "Context API", "TMDb API", "Vercel"],
    repo: "https://github.com/mihiduni12/Movie_Explorer",
    // A live link shows an "Open the live demo" button
    demo: "https://movie-explorer-ten-liard.vercel.app",
    image: null,
  },
  {
    title: "Food delivery system",
    summary:
      "A microservice-based food delivery platform. Customers browse restaurants, place orders and track deliveries in real time, and restaurant owners manage their menus and orders. Includes user authentication and a secure payment gateway.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "Docker", "Kubernetes"],
    repo: "https://github.com/DarkKnigh8/FoodDeliveryProject",
    // To show a screenshot, add an image to /public/projects and set it here,
    // for example: image: "/projects/food-delivery.png",
    image: null,
  },
  {
    title: "Skin cancer classification",
    summary:
      "A group deep learning project classifying skin lesion images from the HAM10000 dataset into seven classes. Each team member trained a different transfer-learning model and we compared the results. I built the DenseNet121 model, using class weights to handle the imbalanced data.",
    stack: ["Python", "Deep learning", "DenseNet121", "Transfer learning", "Jupyter"],
    repo: "https://github.com/kasundi2002/Deep-Learning-Project",
    image: null,
  },
  {
    title: "Employee attrition prediction",
    summary:
      "A group machine learning project predicting whether an employee is likely to leave, using the IBM HR Analytics dataset. We prepared and explored the data, then trained and compared Logistic Regression, Decision Tree, Random Forest and SVM models on accuracy, precision, recall and F1-score, and identified the main factors behind attrition.",
    stack: ["Python", "Machine learning", "Logistic Regression", "Random Forest", "SVM", "EDA"],
    repo: "https://github.com/kasundi2002/Employee_Attrition_ML_Analysis",
    image: null,
  },
  {
    title: "Tourism management system",
    summary:
      "A full-stack tourism management system. I helped gather requirements and define the core features, then built React components and REST APIs with Node.js and Express on a MongoDB database.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    repo: "https://github.com/mihiduni12/LocalTourisamManagemnet",
    image: null,
  },
  {
    title: "Pharmacy management system",
    summary:
      "Manages medicines, inventory, customer records and order processing, with user authentication and full CRUD operations. I also contributed to the system design and requirement analysis.",
    stack: ["Java", "JSP", "Servlets", "JDBC", "MySQL"],
    repo: "https://github.com/mihiduni12/MedOnlinePharamacy",
    image: null,
  },
  {
    title: "Smart waste management system",
    summary:
      "A web app for planning waste collection, with user authentication, geolocation mapping and location-based tracking of collection points.",
    stack: ["PHP", "SQL", "HTML", "CSS"],
    repo: "https://github.com/mihiduni12/GarbageCollection",
    image: null,
  },
];

export const experience = [
  {
    title: "Software engineering intern",
    org: "Tekly Solutions, Kelaniya",
    period: "Jun 2025 – Dec 2025",
    points: [
      "Built and maintained RESTful APIs for FurGlo, a pet care management system, covering its core business logic and backend services.",
      "Designed the database schemas for pet profiles, schedules, appointments and health records.",
      "Built frontend UI components and connected them to the backend, testing the API endpoints along the way.",
      "Worked in a distributed Scrum team: daily stand-ups, sprint planning, reviews, code reviews and resolving merge conflicts.",
    ],
  },
  {
    title: "Speech and drama instructor",
    org: "First Friends Campus",
    period: "2022 – 2023",
    points: [
      "Ran sessions that built students' communication, creativity and confidence.",
      "Planned lessons and organised events for different age groups.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "Python", "C++", "C", "PHP"] },
  { group: "Frameworks", items: ["Spring Boot", "Spring Data JPA", "React", "Redux Toolkit", "Next.js", "Node.js", "Express"] },
  { group: "Databases", items: ["MySQL", "MongoDB", "SQL"] },
  { group: "Web", items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Kubernetes", "Jira", "Trello", "Figma", "Draw.io", "VS Code", "Jupyter"] },
  { group: "AI and data", items: ["Generative AI", "LLMs", "RAG", "Prompt engineering", "NLP", "Machine learning", "Deep learning"] },
  { group: "Concepts", items: ["OOP", "MVC", "REST APIs", "Agile", "Algorithms"] },
];

export const education = [
  {
    school: "Sri Lanka Institute of Information Technology (SLIIT)",
    detail: "BSc (Hons) in Information Technology, specialising in Software Engineering",
    period: "2022 – 2026",
  },
  {
    school: "Hillwood College, Kandy",
    detail: "G.C.E. Advanced Level, Commerce stream",
    period: "2019 – 2022",
  },
];

export const certifications = [
  { name: "Frontend Web Development", issuer: "University of Moratuwa", period: "2024" },
  { name: "Python Programming", issuer: "University of Moratuwa", period: "2024" },
  { name: "Project Management 101 (PMP training)", issuer: "Simplilearn SkillUp", period: null },
];

export const beyondCode = [
  "Member of Central Link Toastmasters Club",
  "Treasurer of the Commerce Club, Hillwood College",
  "President Guide (2021), leading guiding activities and community initiatives",
];