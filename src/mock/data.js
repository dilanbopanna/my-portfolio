import uuidv1 from 'uuid/v1';

export const headData = {
  title: 'Dilan Bopanna', 
  lang: 'en', 
  description: 'Welcome', 
};

export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};


export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: "Hello, my name is Bopanna. I'm a Computer Science Engineer with experience in Javascript, React, C/C++, Python, SQL, Swift and Java. My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).",
  paragraphTwo: "I'm constantly learning new things. currently those things include gaining more experience with React.js, Machine learning, Angular, Mongo DB, Node.js, Jquery and CSS.",
  paragraphThree: 'I love to build Apps and hopefully be a great developer one day.',
  resume: 'https://1.bp.blogspot.com/-HNj_jGfU87Q/XjEhEqncfGI/AAAAAAAAOdE/l3nh02XMDGgpqAh52spMcAmPOQxC8il-gCLcBGAsYHQ/s1600/CV.jpg', 
};

export const projectsData = [
  {
    id: uuidv1(),
    img: 'project1.png',
    title: 'Planetzy',
    info: 'The website is based on planets used to calculate your weight and age on different planets. It also shows different mass, orbit, facts and other info of solar system.',
    info2: 'It is built using React.js',
    url: 'https://dilanbopanna.github.io/planetzy/',
    repo: 'https://github.com/dilanbopanna/planetzy', 
  },
  {
    id: uuidv1(),
    img: 'project2.png',
    title: 'Medical Store Management System',
    info: 'The application is developed to manage medical store, stocks , medicines, staff. The project helps and makes easier in managing medical store in efficient way.',
    info2: 'It is built using C# and Management server(MS-SQL)',
    url: '',
    repo: 'https://github.com/dilanbopanna/Medical-Store-Management-Sysytem', 
  },
  {
    id: uuidv1(),
    img: 'project3.jpg',
    title: '',
    info: 'Coming soon',
    info2: '',
    url: '',
    repo: '', 
  },
];


export const contactData = {
  cta: '',
  btn: '',
  email: 'bopannamj@gmail.com',
};


export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/bopannamj',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bopannamj4a7a7/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/dilanbopanna',
    },
  ],
};

export const githubButtons = {
  isEnabled: false, 
};
