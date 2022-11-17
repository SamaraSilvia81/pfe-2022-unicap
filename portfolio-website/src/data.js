//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/puberflix.png';
import Project2 from './assets/img/projects/villians.png';
import Project3 from './assets/img/projects/library.png';
import Project4 from './assets/img/projects/todolist.png';
import Project5 from './assets/img/projects/profilegit.png';
import Project6 from './assets/img/projects/gamesecret.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/git.png';
import SkillImg6 from './assets/img/skills/figma.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'PuberFlix',
    category: 'UI/UX design',
    description:'Protótipo desenvolvido pela minha equipe para o primeiro ciclo de residência, Kick Off, do programa Embarque Digital.',
    href: 'https://www.figma.com/proto/7dO3PLdiGHOwpeiz8NbfHT/Resid%C3%AAncia-1?node-id=18%3A1172&starting-point-node-id=18%3A1172',
  },
  {
    id: '2',
    image: Project2,
    name: 'Word´s Villians',
    category: 'web development',
    description:'Projeto Pessoal de Front, contendo as tecnologias de HTML,CSS e JS, voltado para um universo dos vilões geek.',
    href: 'https://worldsvillians.netlify.app/',
  },
  {
    id: '3',
    image: Project3,
    name: 'Library Studio',
    category: 'UI/UX design',
    description:'Prótipo desenvolvido para um projeto fullstack, envolvendo React no front e Java e Spring Boot no back.',
    href: 'https://www.figma.com/proto/pEAWwmhwBH1392WHb1oFj0/Prot%C3%B3tipo---Library-Studio-X?node-id=0%3A1',
  },
  {
    id: '4',
    image: Project4,
    name: 'ToDo List',
    category: 'web development',
    description:'Projeto Front-End desenvolvido com HTML, CSS e JS.',
    href: 'https://projetos-front-end.vercel.app/ToDoList/index.html',
  },
  {
    id: '5',
    image: Project5,
    name: 'Profile Github',
    category: 'web development',
    description:'Projeto Básico de React simulando a view profile mobile do github.',
    href: '',
  },
  {
    id: '6',
    image: Project6,
    name: 'Game Secret',
    category: 'web development',
    description:'Projeto de React sobre um jogo de advinhar palavras/senhas.',
    href: 'https://jogo-da-senha-samara81.vercel.app/jogodasenha',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
