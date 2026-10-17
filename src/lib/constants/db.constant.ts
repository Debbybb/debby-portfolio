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
        slug: 'building-an-hr-people-operations-infrastructure',
        badge: 'Professional Project',
        subtitle: 'Dezick Architects',
        summary:
          'Designed a practical HR foundation for a growing architectural practice, bringing employee documentation, policies, recruitment, onboarding, performance management, employee relations and offboarding into one connected framework.',
        tags: [
          'HR Operations',
          'Policy Development',
          'Employee Lifecycle',
          'Process Design',
        ],
        challenge: {
          label: 'The Challenges',
          description:
            'As a startup, Dezick Architects needed structured HR processes and operational frameworks to support its growth. Rather than working with fully established systems, the opportunity was to help build and organise processes from the ground up, creating clearer procedures, documentation, and performance expectations to support employees and management.',
        },
        approach: {
          label: 'My Approach',
          description:
            'I approached the work by identifying the processes that needed structure and developing practical documentation and workflows to support day-to-day operations. My focus was on creating clear, usable systems that could grow alongside the business, improve accountability, and establish consistent expectations. \n\nI also developed an onboarding demonstration using a fictional employee, Olawande, to illustrate my approach to the employee journey—from preboarding and Day 1 orientation to the first 30, 60, and 90 days. The video demonstrates my onboarding methodology rather than an onboarding video created specifically for Dezick Architects.',
        },
        deliverables: {
          label: 'Deliverables',
          items: [
            'HR and People Operations process documentation and workflows.',
            'Employee performance-reporting and review templates, where applicable.',
            'Structured documentation to support operational consistency and accountability.',
            'An employee onboarding process demonstration covering the employee journey.',
          ],
        },
        tools: {
          label: 'Tools',
          items: [
            'Google Docs',
            'Google Sheet',
            'Digital documentation tools, as applicable to each',
          ],
        },
        disclaimer:
          'The portfolio version contains fictional employee details, workplace scenarios, and illustrative HR documentation created solely to demonstrate my processes and capabilities. Any materials inspired by my work at Dezick Architects have been recreated for portfolio purposes and should not be interpreted as official company records or approved organisational policies.',
      },
      {
        label: 'Building a Payroll System from Scratch for a Growing Startup',
        slug: 'building-a-payroll-system-from-scratch-for-a-growing-startup',
        subtitle: 'Avario Digitals',
        badge: 'Professional Project',
        summary:
          'Developed automated salary breakdowns and payroll calculations, integrated pension and tax deductions, generated employee payslips, and established structured payroll reporting. The system strengthened payroll accuracy, standardised salary administration, and supported more consistent payroll processing in line with applicable statutory requirements.',
        tags: [
          'Payroll System Development',
          'Compensation Administration',
          'Payroll Processing',
          'HR Operations',
          'Financial Record-Keeping',
          'Process Improvement',
        ],
        projects: [
          {
            label: 'Avario Digitals Payroll System',
            url: 'https://docs.google.com/spreadsheets/d/1rUfblYtx-3BcQtvEttfX6JxLUfNOAwtdI94pRFPilQA/edit?usp=drive_link',
            imageUrl: '/files/Payroll-Statutory.png',
          },
        ],
        challenge: {
          label: 'The Challenge',
          description:
            'Following organisational restructuring and changes in tax requirements, there was a need for a more structured payroll process to support employee compensation records, consistent salary calculations, deduction tracking, and payroll reporting. The objective was to establish a system that improved the organisation and traceability of payroll information.',
        },
        approach: {
          label: 'My Approach',
          description:
            'I designed and implemented a structured payroll workbook from the ground up. I organised employee compensation information, established salary breakdowns, incorporated automated calculations, and created a framework for tracking applicable tax and pension deductions. I also structured the outputs needed for payslips and payroll reporting to make payroll administration more consistent and easier to review.',
        },
        deliverables: {
          label: 'Deliverables',
          items: [
            'Employee compensation records and salary structures.',
            'Automated salary and payroll calculations.',
            'Tax and pension deduction tracking.',
            'Payslip generation and payroll reporting.',
            'A structured workbook supporting payroll administration and review.',
          ],
        },
        tools: {
          label: 'Tools',
          items: [
            'Microsoft Excel',
            'spreadsheet formulas',
            'structured data tables',
          ],
        },
        disclaimer:
          'The portfolio version uses fictional employee and salary data. Payroll, tax, and pension calculations are illustrative and should be verified before real-world use.',
      },
      {
        label: 'Are We Losing Too Many Good Employees?',
        slug: 'are-we-losing-too-many-good-employees',
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
        projects: [
          {
            label: 'NovaTech-HR-Analytics',
            url: 'https://drive.google.com/file/d/1CRH5sCysj_PFkQ1c3ebTDZKlQHct1suB/view?usp=drive_link',
            imageUrl: '/files/Group-3-NovaTech-HR-Analytics.png',
          },
          {
            label: 'NovaTech Retention Report',
            url: 'https://docs.google.com/spreadsheets/d/1ow3PtvrxNPyWZsMfgZYoRzidoOml7JvNDj-IOVnE88I/edit?usp=drive_link',
            imageUrl: '/files/Group-3-NovaTech.png',
          },
        ],
        challenge: {
          label: 'The Challenge',
          description:
            "The project required a team to organise information into a coherent output that could communicate the group's findings and recommendations clearly. This involved coordinating the information, structuring supporting data, and presenting the work in a format that was easy to understand.",
        },
        approach: {
          label: 'My Approach',
          description:
            'As the group leader, I coordinated the development of the project deliverables, guided the team’s contributions, and helped ensure that the work was organised and clearly presented. I led the preparation of the project presentation using Google Slides, which was exported to PDF, and oversaw the use of an Excel workbook as a supporting artefact to complement the presentation and communicate the project work effectively.',
        },
        deliverables: {
          label: 'Deliverables',
          items: [
            'A presentation exported from Google Slides to PDF.',
            'A supporting Excel workbook.',
            "A consolidated project output communicating the group's work.",
          ],
        },
        tools: {
          label: 'Tools Used',
          items: ['Google Slides', 'Google Sheets'],
        },
      },
      {
        slug: 'designing-a-performance-management-system-that-goes-beyond-ratings',
        label:
          'Designing a Performance Management System That Goes Beyond Ratings',
        subtitle: 'PeopleCore Technologies · Simulated data',
        badge: 'Independent HR Portfolio Project',
        summary:
          'Designed a structured performance-management system combining role KPIs, behavioural competencies, quarterly reviews, calibration, development planning and management analytics.',
        tags: ['Performance Management', 'KPI Design', 'HR Analytics', 'Excel'],
        projects: [
          {
            label: 'PeopleCore Performance Dashboard',
            url: 'https://docs.google.com/spreadsheets/d/1jJ-artXJ0ubH-y8rT4pqvjim96M-ZlaKTFdkYLfGbnM/edit?usp=drive_link',
            imageUrl:
              '/files/PeopleCore-Performance-Dashboard-pdf-Google-Drive-10-17-2026_08_30_PM.png',
          },
          {
            label: 'PeopleCore Performance Management',
            url: 'https://drive.google.com/file/d/1JMAKSpZuss3PcAER9w0czm531OriczKw/view?usp=drive_link',
            imageUrl: '/files/PeopleCore-Performance-mgt.png',
          },
        ],
        challenge: {
          label: 'The Challenge',
          description:
            'The project focused on organising performance management information into a structured framework that could communicate expectations and support the assessment and tracking of performance. This required documentation and a supporting spreadsheet to make the framework practical to use.',
        },
        approach: {
          label: 'My Approach',
          description:
            'I developed the project independently, using a Word document to present the framework and an Excel workbook to support the practical organisation or tracking of performance information. The aim was to connect the written framework with a usable working tool rather than treating documentation and tracking as separate activities.',
        },
        deliverables: {
          label: 'Deliverables',
          items: [
            'A performance management framework documented in Word.',
            'A supporting Excel workbook for the performance-related information or tracking process.',
            'A coordinated set of documents demonstrating the relationship between a defined framework and its practical application.',
          ],
        },
        tools: {
          label: 'Tools Used',
          items: ['Google Docs', 'Google Sheets'],
        },
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
        date: 'Sept 2026 – Nov 2026',
        role: 'HR & People Operations Representative',
        company: 'Dezick Architects',
        contributions: [
          'Developed and structured employee-lifecycle documentation and HR operating frameworks.',
          'Created an employee handbook covering key workplace policies and people practices.',
          'Developed employment documentation, employee information forms and supporting HR templates.',
          'Structured recruitment and job-design documentation for multiple business roles.',
          'Developed onboarding and employee-integration frameworks.',
          'Supported the design of performance expectations and KPI structures.',
          'Contributed to workforce planning for Arcfunmi nationwide architectural documentation initiative.',
          'Designed people-process recommendations to support scalable HR operations.',
        ],
      },
      {
        date: 'May 2025 – Present',
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
        date: 'March 2025 – June 2026',
        role: 'Data Administrator',
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
        date: 'May 2024 – March 2025',
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
          startYear: '2020',
          endYear: '2023',
        },
        {
          label: 'Nwafor Orizu College of Education, Nsugbe',
          degree: 'Nigeria Certificate in Education (NCE)',
          startYear: '2016',
          endYear: '2019',
        },
        {
          label: 'Talent Factory HR Academy',
          degree: 'Fellow',
          startYear: 'Oct 2026',
        },
        {
          label: 'AJID HR Academy',
          degree: 'HR Training',
          startYear: 'Dec 2025',
        },
        {
          label: 'ALX',
          degree: 'Virtual Assistant Programme',
          startYear: 'Sep 2024',
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
