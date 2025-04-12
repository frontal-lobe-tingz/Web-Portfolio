import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ndumisotheodore@gmail.com',

    emailSubject: "Ready ,At your service",
    emailBody: 'Hi Theodore, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/frontal-lobe-tingz' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/Theodore' },
    { name: 'facebook', url: 'https://www.facebook.com/Theodore.2000' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Django',
            icon: '/logo/python.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Asp.net',
            icon: '/logo/cc.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'CSS',
            icon: '/logo/css.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'HTML',
            icon: '/logo/html.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
         {
            name: 'Asp.net',
            icon: '/logo/cc.png',
        },
        {
            name: 'Django.js',
            icon: '/logo/python.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
    
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        
    ],
    Mobile: [
        {
            name: 'React Native',
            icon: '/logo/rnative.png',
        },
        {
            name: '.NET MAUI Blazor',
            icon: '/logo/maui.png',
        },
    ],
    Languages: [
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
        {
            name: 'C++',
            icon: '/logo/C++.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
        {
            name: 'C#',
            icon: '/logo/cc.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Post man',
            icon: '/logo/postman.png',
        },
        {
            name: 'Power BI',
            icon: '/logo/pbi.png',
        },
       
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Hotel Room Booking',
        slug: 'hotel-room-booking',
        techStack: [
            'React',
            'Express',
            'Node',
            'CSS',
            'HTML',
            'MongoDB',
        ],
        thumbnail: '/projects/images/hottie2.png',
        longThumbnail: '/projects/images/hottie1.png',
        images: [
            '/projects/images/hottie1.png',
            '/projects/images/hottie2.png',
            '/projects/images/hottie3.png',
            '/projects/images/hottie4.png',
            '/projects/images/hottie5.png',
            '/projects/images/hottie6.png',
        ],
        liveUrl: 'https://hotelrooms.vercel.app/',
        year: 2024,
        description: `This is a project which features booking hotel rooms from a selected date,you can choose from room types`,
        role: `This was a lone Project to help understand MERN booking systems`,
    },
    {
        title: 'Conference Room Booking',
        slug: 'conference-room-booking',
        techStack: [
            'MySQl',
            'Node.js',
            'Express.js',
            'React.js',
            'React Native',
            'Xampp',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:\n- Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.\n- Integrated GPT-4 for AI-driven feedback and insights.\n- Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Power BI Dashboard',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:\n- Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.\n- Integrated dynamic state management for efficient handling of property data.\n- Implemented multi-language support with React i18n to cater to diverse audiences.\n- Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Python E- commerce',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Theodore/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'Fort Gym System',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Theodore/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description:
            'One of the most challenging projects in Frontend Mentor.\n\nI developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.',
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Strativ AB',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024',
    },
    {
        title: 'FRONTEND ENGINEER',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
    },
];
