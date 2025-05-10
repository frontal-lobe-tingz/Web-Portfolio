import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ndumisotheodore@gmail.com',

    emailSubject: 'Ready ,At your service',
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
        techStack: ['React', 'Express', 'Node', 'CSS', 'HTML', 'MongoDB'],
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
        thumbnail: '/projects/images/confiie.png',
        longThumbnail: '/projects/images/confie2.png',
        images: [
            '/projects/images/confiie.png',
            '/projects/images/confie2.png',
            '/projects/images/confie3.png',
            '/projects/images/confie8.png',
            '/projects/images/confie7.png',
            '/projects/images/confie6.png',
        ],
        
        year: 2024,
        description:
            'Conference room booking is an app made to allow employees to book conference rooms at a convenient time and place',
        role: `I was the sole developer in the creation of this system `,
    },
    {
        title: 'Power BI Dashboard',
        slug: 'power-bi-dashboard',
        techStack: [

        ],
        thumbnail: '',
        longThumbnail: '',
        images: ['', '', ''],
        liveUrl: '',
        year: 2024,
        description: '',
        role: ``,
    },
    {
        title: 'Python E- commerce',
        slug: 'python-e-commerce',
        techStack: ['HTML', 'CSS', 'Python', 'Django'],
        thumbnail: 'powerbi1',
        longThumbnail: 'powerbi7',
        images: ['/projects/images/powerbi38.png',
            '/projects/images/powerbi2.png',
            '/projects/images/powerbi3.png',
            '/projects/images/powerbi4.png',
            '/projects/images/powerbi5.png',
            '/projects/images/powerbi6.png',],
        sourceCode: '',
        liveUrl: '',
        year: 2023,
        description: '',
        role: ``,
    },
    {
        title: 'Fort Gym System',
        slug: 'fort-gym-system',
        techStack: ['ASP.Net', 'C#', 'DotNet MAUI Blazor', 'MySql'],
        thumbnail: '',
        longThumbnail: '',
        images: ['', '', ''],
        sourceCode: '',
        liveUrl: '',
        year: 2022,
        description: 'a 3 peer system ',
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    /* {
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
   
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
    },
    */
];
