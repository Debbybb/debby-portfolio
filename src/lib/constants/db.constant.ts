export const DB_CONSTANT = {
  initials: 'AH',
  fullName: 'Adebola Haastrup',
  slogan: 'People operations expert',

  // hero
  heroSubTitle: 'HR & People Operations Professional',
  heroDescription:
    'My work combines HR operations, employee lifecycle management, structured documentation and people analytics to turn workplace needs into practical systems that teams can actually use.',
  heroTags: [
    'People Operations',
    '',
    'Talent & Performance',
    '',
    'HR Analytics',
  ],
  linkedInUrl: import.meta.env.VITE_LINKEDIN_URL,
  email: import.meta.env.VITE_EMAIL,
  imageUrl: '/images/adebola-portrait.jpg',
  cvDownloadUrl: import.meta.env.VITE_CV_DOWNLOAD_URL,

  // what i do
  whatIDoSubtitle: 'What I Do',
  whatIDoTitle: 'Three areas where I help people functions work better.',
  whatIDoItems: [
    {
      label: 'People Operations',
      description:
        'I design and support practical HR processes across the employee lifecycle—from documentation and onboarding to employee records, policies, performance and offboarding.',
      tags: [
        'HR Operations',
        'Employee Documentation',
        'Policies & Procedures',
        'Onboarding',
        'Employee Relations',
        'Offboarding',
      ],
    },
    {
      label: 'Talent & Performance',
      description:
        'I help translate workforce needs into clear roles, structured recruitment processes and performance expectations that support both employees and business objectives.',
      tags: [
        'Recruitment',
        'Performance Management',
        'Job Design',
        'Interview Coordination',
        'Workforce Planning',
        'Learning & Development',
      ],
    },
    {
      label: 'People Analytics',
      description:
        'I use employee and HR data to identify patterns, monitor workforce outcomes and translate numbers into insights that support better people decisions.',
      tags: [
        'HR Metrics',
        'Turnover & Retention',
        'Recruitment Analytics',
        'Performance Analytics',
        'Compensation Analytics',
        'Excel Dashboards',
      ],
    },
  ],

  // featured work
  featuredWork: {
    subtitle: 'Featured Work',
    title: 'Selected projects and case studies',
    items: [
      {
        label: 'Building an HR & People Operations Infrastructure',
        badge: 'Professional Project',
        subtitle: 'Almond Architects',
        summary:
          'Designed a practical HR foundation for a growing architectural practice, bringing employee documentation, policies, recruitment, onboarding, performance management, employee relations and offboarding into one connected framework.',
        tags: [
          'HR Operations',
          'Policy Development',
          'Employee Lifecycle',
          'Process Design',
        ],
      },
      {
        label:
          'Workforce Planning for a 1,000-Project Nationwide Documentation Initiative',
        subtitle: 'Arcsy',
        badge: 'Professional Project',
        summary:
          'Developed the people structure for a nationwide architectural documentation initiative targeting approximately 1,000 projects within three months, including workforce planning, role design, field staffing and accountability.',
        tags: [
          'Workforce Planning',
          'Role Design',
          'Recruitment Strategy',
          'Project HR',
        ],
      },
      {
        label: 'Are We Losing Too Many Good Employees?',
        badge: 'HR Analytics Case Study',
        subtitle: 'NovaTech · Talent Factory HR Academy',
        summary:
          'Analysed employee data to investigate whether the organisation was losing valuable talent, examining voluntary exits, high-performer attrition and other workforce indicators before translating the findings into management recommendations.',
        tags: [
          'HR Analytics',
          'Excel',
          'Employee Retention',
          'Executive Storytelling',
        ],
      },
      {
        label:
          'Designing a Performance Management System That Goes Beyond Ratings',
        subtitle: 'PeopleCore Technologies · Simulated data',
        badge: 'Independent HR Portfolio Project',
        summary:
          'Designed a structured performance-management system combining role KPIs, behavioural competencies, quarterly reviews, calibration, development planning and management analytics.',
        tags: ['Performance Management', 'KPI Design', 'HR Analytics', 'Excel'],
      },
    ],
  },
  footer: {
    navigation: [
      { label: 'Email', href: `mailto:${import.meta.env.VITE_EMAIL}` },
      { label: 'LinkedIn', href: import.meta.env.VITE_LINKEDIN_URL },
      { label: 'Projects', href: '/projects' },
      { label: 'Download CV', download: import.meta.env.VITE_CV_DOWNLOAD_URL },
    ],
  },
  about: {
    subTitle: 'About',
    title: 'People Operations, Built to Work',
    description: `I'm ${import.meta.env.VITE_FULL_NAME}, an HR & People Operations professional with experience supporting people, administrative and operational processes across architecture, technology/digital services and real estate. \n\n My approach to HR is practical: understand the business need, identify the people or process gap, and build a solution that employees and managers can actually use. \n\nMy experience has exposed me to recruitment coordination, employee onboarding and offboarding, HR documentation, policy development, employee records, attendance and performance tracking, workforce planning, reporting and general people operations. \n\nBeyond day-to-day HR administration, I am particularly interested in HR systems and people analytics—using structured processes and workforce data to improve the quality of people decisions. \n\nI have developed HR frameworks and employee-lifecycle documentation for growing organisations, supported workforce planning for a nationwide project, analysed employee-retention data, and built independent HR systems covering recruitment analytics, performance management, compensation and learning & development.`,
    philosophySubtitle: 'My Philosophy',
    philosophyTitle: '“Good HR should make work clearer—not more complicated.”',
    philosophyDescription:
      'I believe people systems should balance employee experience with business needs. Policies should be understandable. Performance expectations should be measurable. Recruitment should be structured. Employee data should inform decisions. And HR processes should be practical enough to work in the real organisation they were designed for.',
    howIworkSubTitle: 'How I Work',
    howIworkTitle: 'A simple, repeatable way of solving people problems.',
    howIworkItems: [
      {
        label: 'Understand',
        description:
          'Understand the business problem, people requirement or process gap.',
      },
      {
        label: 'Structure',
        description:
          'Translate the requirement into responsibilities, workflows, documentation and measures.',
      },
      {
        label: 'Build',
        description:
          'Create practical systems, trackers, dashboards, policies and frameworks.',
      },
      {
        label: 'Measure',
        description: 'Use available data and feedback to assess outcomes.',
      },
      {
        label: 'Improve',
        description:
          'Refine the process based on evidence and changing organisational needs.',
      },
    ],
  },

  // Experience section
  experience: {
    subTitle: 'Experience',
    title: "Where I've built and supported people operations.",
    experienceItems: [
      {
        date: '2026 – Present',
        role: 'HR & People Operations Representative',
        company: 'Almond Architects',
        contributions: [
          'Developed and structured employee-lifecycle documentation and HR operating frameworks.',
          'Created an employee handbook covering key workplace policies and people practices.',
          'Developed employment documentation, employee information forms and supporting HR templates.',
          'Structured recruitment and job-design documentation for multiple business roles.',
          'Developed onboarding and employee-integration frameworks.',
          'Supported the design of performance expectations and KPI structures.',
          "Contributed to workforce planning for Arcsy's nationwide architectural documentation initiative.",
          'Designed people-process recommendations to support scalable HR operations.',
        ],
      },
      {
        date: '2025 – 2026',
        role: 'HR/Admin',
        company: 'Avario Digitals',
        contributions: [
          'Coordinated recruitment activities including CV screening, interview scheduling and employee onboarding/offboarding.',
          'Maintained HR records and employee documentation.',
          'Monitored staff attendance and compliance records.',
          'Supported performance-evaluation and payroll-preparation processes.',
          'Managed internal employee communications and HR administrative follow-ups.',
          'Maintained organised digital HR records.',
          'Supported implementation of company policies and operational procedures.',
        ],
      },
      {
        date: '2024 – 2025',
        role: 'Database Administrator',
        company: 'Triconna Investment Limited',
        contributions: [
          'Maintained property and client databases with high data accuracy.',
          'Organised more than 100 client records.',
          'Designed a simplified property-upload template that reduced data-entry time.',
          'Performed regular backups of critical records.',
          'Collaborated with operational teams to resolve documentation discrepancies.',
        ],
      },
      {
        date: '2024 – 2025',
        role: 'Administrative Assistant',
        company: 'Triconna Investment Limited',
        contributions: [
          'Improved document organisation and retrieval through structured filing.',
          'Developed and maintained management spreadsheets.',
          'Supported scheduling, record keeping and document management.',
          'Supported administrative coordination and day-to-day office operations.',
        ],
      },
    ],
    education: {
      subTitle: 'Education & Professional Development',
      title: 'Learning that shaped my practice',
      items: [
        {
          label: 'University of Nigeria, Nsukka',
          degree: 'Bachelor of Arts in Education',
          fieldOfStudy:
            'English & Literary Studies · Second Class Honours (Upper Division)',
          startYear: 2023,
          endYear: 2023,
        },
        {
          label: 'Nwafor Orizu College of Education, Nsugbe',
          degree: 'Nigeria Certificate in Education (NCE)',
          startYear: 2016,
          endYear: 2019,
        },
        {
          label: 'Talent Factory HR Academy',
          degree: 'Fellow',
          startYear: 2026,
          endYear: 2026,
        },
        {
          label: 'AJID HR Academy',
          degree: 'HR Training',
          startYear: 2025,
          endYear: 2025,
        },
        {
          label: 'Teachers Registration Council of Nigeria',
          degree: 'TRCN Certified',
          startYear: 2025,
          endYear: 2025,
        },
        {
          label: 'ALX',
          degree: 'Virtual Assistant Programme',
          startYear: 2024,
          endYear: 2024,
        },
      ],
    },
    capabilities: {
      subTitle: 'Capabilities',
      title: "Skills, grouped by how they're used.",
      items: [
        {
          label: 'People Operations',
          tags: [
            'HR Operations',
            'Employee Lifecycle',
            'Policies',
            'HR Documentation',
            'Employee Relations',
            'Onboarding',
            'Offboarding',
            'Attendance & Leave Administration',
          ],
        },
        {
          label: 'Talent Management',
          tags: [
            'Recruitment',
            'Candidate Screening',
            'Interview Coordination',
            'Job Design',
            'Workforce Planning',
            'Recruitment Operations',
          ],
        },
        {
          label: 'Performance & Development',
          tags: [
            'Performance Management',
            'KPI Design',
            'Competency Frameworks',
            'Learning & Development',
            'Training Needs Analysis',
          ],
        },
        {
          label: 'Analytics & Reward',
          tags: [
            'HR Metrics',
            'Retention Analytics',
            'Recruitment Analytics',
            'Performance Analytics',
            'Compensation',
            'Payroll',
            'Excel Dashboards',
          ],
        },
        {
          label: 'Systems & Technology',
          tags: [
            'Microsoft Excel',
            'Microsoft 365',
            'Google Workspace',
            'Google Sheets',
            'Microsoft Teams',
            'Zoom',
            'Zoho CRM',
            'HubSpot',
            'BambooHR',
            'Recooty AI',
            'Trello',
            'Asana',
            'ClickUp',
            'ChatGPT',
            'Claude',
          ],
        },
      ],
    },
  },

  // projects section

  projects: {
    subTitle: 'Projects',
    title: 'Selected HR Work',
    description:
      'My portfolio combines professional work, academy case studies and independently developed HR systems. Each project is clearly labelled so you can see the context in which it was created.',
    tabs: ['All', 'Professional', 'Analytics', 'Independent'],
  },
}
