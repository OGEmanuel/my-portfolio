import framer from '../assets/framer.svg';
import portfolio from '../assets/portfolio.png';
import next from '../assets/next.svg';
import awaskill from '../assets/Awaskill.png';
import html from '../assets/icons8-html-5-48.png';
import css from '../assets/icons8-css3-48.png';
import tailwind from '../assets/icons8-tailwindcss-48.png';
import sass from '../assets/icons8-sass-48.png';
import javascript from '../assets/icons8-javascript-48.png';
import git from '../assets/icons8-git-48.png';
import assess from '../assets/devassess.png';
import apiTester from '../assets/api-tester.png';
import reactIcon from '../assets/react.svg';
import codeEditor from '../assets/code-editor.png';

export const SKILLS = [
  { id: 1, icon: html, framework: 'HTML' },
  { id: 2, icon: css, framework: 'CSS' },
  { id: 3, icon: sass, framework: 'SASS' },
  { id: 4, icon: tailwind, framework: 'Tailwind CSS' },
  { id: 5, icon: javascript, framework: 'Javascript' },
  { id: 6, icon: reactIcon, framework: 'React' },
  { id: 7, icon: git, framework: 'Git' },
  { id: 8, icon: framer, framework: 'Framer Motion' },
  { id: 9, icon: next, framework: 'NextJs' },
];

export const PROJECTS = [
  {
    id: 1,
    preview: apiTester,
    title: 'API Tester',
    code: 'https://github.com/OGEmanuel/my-api-tester',
    live: 'https://my-api-tester.vercel.app/',
    tech: [
      { id: 1.1, icon: html, framework: 'HTML' },
      { id: 1.2, icon: css, framework: 'CSS' },
      { id: 1.3, icon: javascript, framework: 'Javascript' },
      { id: 1.4, icon: git, framework: 'Git' },
    ],
  },
  {
    id: 2,
    preview: awaskill,
    title: 'Awaskill',
    code: 'https://github.com/kingjamesx/quiz-app',
    live: 'https://awaskill.vercel.app/',
    tech: [
      { id: 2.1, icon: next, framework: 'NextJs' },
      { id: 2.2, icon: tailwind, framework: 'Tailwind CSS' },
      { id: 2.3, icon: framer, framework: 'Framer Motion' },
      { id: 2.4, icon: git, framework: 'Git' },
    ],
  },
  {
    id: 3,
    preview: codeEditor,
    title: 'Code Editor',
    code: 'https://github.com/OGEmanuel/my-code-editor',
    live: 'https://my-code-editor-five.vercel.app/',
    tech: [
      { id: 3.1, icon: html, framework: 'HTML' },
      { id: 3.2, icon: css, framework: 'CSS' },
      { id: 3.3, icon: javascript, framework: 'Javascript' },
      { id: 3.4, icon: git, framework: 'Git' },
    ],
  },
  {
    id: 4,
    preview: portfolio,
    title: 'My Portfolio Website',
    code: 'https://github.com/OGEmanuel/my-portfolio',
    live: 'https://emanueldev.netlify.app/',
    tech: [
      { id: 4.1, icon: reactIcon, framework: 'React' },
      { id: 4.2, icon: tailwind, framework: 'Tailwind' },
      { id: 4.3, icon: framer, framework: 'Framer Motion' },
      { id: 4.4, icon: git, framework: 'Git' },
    ],
  },
  {
    id: 5,
    preview: assess,
    title: 'Desktop Assessment Project',
    code: 'https://github.com/OGEmanuel/team-assessment-frontend',
    live: 'https://devcareer-assessment.netlify.app/',
    tech: [
      { id: 5.1, icon: reactIcon, framework: 'React' },
      { id: 5.2, icon: css, framework: 'CSS' },
      { id: 5.3, icon: git, framework: 'Git' },
    ],
  },
];
