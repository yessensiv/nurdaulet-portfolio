// Edit this file to personalize the portfolio. No build step is needed.
window.portfolio = {
  name: "Nurdaulet Yessensary",
  shortName: "Nurdaulet",
  initials: "NY",
  roles: ["Software Developer", "Frontend Developer", "Android Developer", "Creative Developer", "AI Developer"],
  // Add a local image such as "assets/portrait.webp" when your photo is ready.
  portrait: "assets/github-avatar.png",
  intro: "I’m Nurdaulet Yessensary — also known as yessensiv. I build web experiences, explore Android, and make AI tools.",
  bio: [
    "I work with Next.js and TypeScript on the web, explore Android with Kotlin, and build AI tools with Python.",
    "My projects span mathematics education, document assistants, and websites with motion. Code. Learn. Build. Repeat."
  ],
  statement: "From an idea to something real. A place for thoughtful digital experiences, useful tools, and a little creative curiosity.",
  // Supply your real email to enable the contact form. It opens a prepared email.
  email: "netabasyn@gmail.com",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/yessensiv" },
    { label: "Instagram", url: "https://instagram.com/timushiv" }
  ],
  services: [
    { title: "Web Development", tags: ["Next.js", "React", "TypeScript"] },
    { title: "Creative Development", tags: ["GSAP", "Lenis", "Motion"] },
    { title: "Android Development", tags: ["Kotlin", "Native Apps", "Mobile"] },
    { title: "AI Tools", tags: ["Python", "Document Assistants", "Telegram"] }
  ],
  // Descriptions verified against the public GitHub profile and repositories.
  projects: [
    { slug: "riov", title: "RIOV", category: "Project · RIOV", image: "assets/riov-cover.svg", sample: false, description: "RIOV — a project by Nurdaulet Yessensary. Explore the repository on GitHub; access may require permission.", url: "", repository: "https://github.com/yessensiv/RIOV", technologies: [] },
    { slug: "glyph-lab", title: "Glyph Lab", category: "Creative tool · ASCII art studio", image: "assets/glyph-lab-cover.svg", sample: false, description: "A browser-based studio for turning JPG, PNG, WebP, and GIF images into ASCII art. Tune character density, brightness, contrast, color, and dithering, compare the result, and export TXT, PNG, or SVG. Images are processed locally on your device, with English and Russian interfaces.", url: "https://glyph-lab-livid.vercel.app", repository: "https://github.com/yessensiv/glyph-lab", technologies: ["HTML", "CSS", "JavaScript", "Canvas", "SVG"] },
    { slug: "within", title: "Within", category: "Personal tools · Journal & goals", image: "assets/within-cover.svg", sample: false, description: "A personal journal and collection of goals with Markdown notes, memories, search, and a calm dark interface. Built with React, Vite, and TypeScript, with a local demo mode and optional Supabase integration.", url: "https://within-roan.vercel.app", repository: "https://github.com/yessensiv/Within", technologies: ["React", "Vite", "TypeScript", "Supabase"] },
    { slug: "san-portfolio", title: "SAN Portfolio", category: "Portfolio · Motion & design", image: "assets/san-cover.svg", sample: false, description: "A multilingual portfolio for websites, apps, and graphic design. The dark interface combines a canvas-based SAN composition, smooth scrolling, project galleries, and Russian, Kazakh, and English language options.", url: "https://san-portfolio-one.vercel.app", repository: "https://github.com/yessensiv/san-portfolio", technologies: ["Next.js", "TypeScript", "GSAP", "Lenis", "Canvas"] },
    { slug: "zaga-zaga", title: "Zaga Zaga", category: "Brand website · Independent concept", image: "assets/zaga-cover.svg", sample: false, description: "An independent beverage website design concept with expressive typography, interactive CSS can mockups, a flavor selector, and responsive layouts. This is an unofficial concept and does not imply a partnership with the brand.", url: "https://zaga-zaga.vercel.app", repository: "https://github.com/yessensiv/zaga-zaga", technologies: ["HTML", "CSS", "JavaScript"] },
    { slug: "nurdaulet-portfolio", title: "This Portfolio", category: "Portfolio · Creative development", image: "assets/portfolio-cover.svg", sample: false, description: "The portfolio you are exploring: a Framer-inspired layout rebuilt with HTML, CSS, and JavaScript. Includes animated developer roles, portrait transitions, smooth scrolling, custom project covers, and a responsive mobile composition.", url: "https://nurdaulet-portfolio-delta.vercel.app", repository: "https://github.com/yessensiv/nurdaulet-portfolio", technologies: ["HTML", "CSS", "JavaScript", "Lenis", "SVG"] },
    { slug: "ent-math", title: "ENT Math", category: "Education · Web platform", image: "assets/ent-math.svg", sample: false, description: "A mathematics learning platform for grades 5–11 and ENT preparation in Kazakhstan. The project brings lessons, practice, diagnostics, and learning progress into one place, with Russian and Kazakh interfaces.", url: "https://ent-math-learning.netabasyn.chatgpt.site", repository: "https://github.com/yessensiv/ENT-MATH", technologies: ["TypeScript", "Cloudflare Workers", "D1"] },
    { slug: "dentalux", title: "DentaLux", category: "Healthcare · Website demo", image: "assets/dentalux-cover.svg", sample: false, description: "A portfolio demo of a multi-page dental clinic website built with Next.js and TypeScript. Responsive layouts, motion, and clear service information shape the experience. It is a demonstration project; the clinic forms do not send enquiries.", url: "https://dentalux-sigma.vercel.app", repository: "https://github.com/yessensiv/dentalux", technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { slug: "docmind", title: "DocMind", category: "AI · Document assistant", image: "assets/docmind.svg", sample: false, description: "A Telegram assistant for summarizing TXT documents and answering questions about their contents. Built with Python, it supports a local demo mode and an API-powered mode, with document isolation and configurable usage limits.", url: "", repository: "https://github.com/yessensiv/docmind-telegram", technologies: ["Python", "Telegram", "AI"] },
    { slug: "flow", title: "Flow", category: "Android · Video & audio", image: "assets/flow-cover.svg", sample: false, description: "An Android video and audio downloader built with Kotlin. Flow offers available format choices, download progress, and a local library for saved files. The repository also includes an experimental web prototype.", url: "", repository: "https://github.com/yessensiv/flow-downloader", technologies: ["Kotlin", "Android", "yt-dlp", "FFmpeg"] }
  ],
  notes: [
    { project: "ent-math", title: "Learning, one step at a time", excerpt: "Lessons, practice, and a personal learning route for mathematics." },
    { project: "docmind", title: "Documents into understanding", excerpt: "Exploring summaries and questions with a Telegram document assistant." }
  ],
  approach: [
    { title: "Start with why.", text: "Understand the idea, the people it serves, and the problem worth solving." },
    { title: "Keep it simple.", text: "Give every element a purpose. Make the important things easy to find and use." },
    { title: "Build with care.", text: "Think about the small screens, the keyboard users, and the details between the clicks." },
    { title: "Keep exploring.", text: "Try a different approach. Learn something new. Make the next version a little better." }
  ]
};
