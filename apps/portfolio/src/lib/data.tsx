import { type AboutSentence, type Data } from '~/types/data';

const aboutSentence1: AboutSentence = [
  { type: 'text', content: 'Hello! I am' },
  { type: 'text', content: 'Vedant', className: 'text-blue-400' },
  {
    type: 'text',
    content: ', a developer based in India.',
  },
];

const aboutSentence2: AboutSentence = [
  { type: 'text', content: 'I love to' },
  { type: 'emoji', content: '⛵' },
  {
    type: 'text',
    content: 'ship awesome web3 projects.',
  },
];

const aboutSentence3: AboutSentence = [
  { type: 'text', content: 'In my free time, I like write technical blogs' },
  { type: 'emoji', content: ' 📝' },
];

const projects = [
  {
    title: 'Blaze ID',
    description: '',
    link: '',
    image: '/images/1.jpg',
    backgroundColor: '#FFFFFF',
    color: '#CC9933',
  },
  {
    title: '',
    description: '',
    link: '',
    image: '/images/2.jpg',
    backgroundColor: '#BEBEBE',
    color: '#1E1E1E',
  },
  {
    title: 'Blaze ID',
    description: `Blaze ID is a self-sovereign identity (SSI) wallet solution built on Lit Protocol's programmable key wallets. It supports a variety of Decentralized Identifiers (DIDs) including key, web, ethr and Polygon ID`,
    link: '',
    image: '/images/3.jpg',
    backgroundColor: '#DE4B40',
    color: '#FFF0CE',
  },
  {
    title: '',
    description: '',
    link: '',
    image: '/images/4.jpg',
    backgroundColor: '#0A0A0A',
    color: '#D9D9D9',
  },
  {
    title: '',
    description: '',
    link: '',
    image: '/images/5.jpg',
    backgroundColor: '#D5D5D5',
    color: '#2A2A2A',
  },
  {
    title: '',
    description: '',
    link: '',
    image: '/images/6.jpg',
    backgroundColor: '#595E62',
    color: '#D99299',
  },
  {
    title: '',
    description: '',
    link: '',
    image: '/images/7.jpg',
    backgroundColor: '#898270',
    color: '#E0C8A4',
  },
  {
    title: '',
    description: '',
    link: '',
    image: '/images/8.jpg',
    backgroundColor: '#FEF8F6',
    color: '#BD998F',
  },
  // change from here
  {
    title: '',
    description: '',
    link: '',
    image: '/images/9.jpg',
    backgroundColor: '#FFFFFF',
    color: '#CC9933',
  },
  {
    title: '',
    description: '',
    link: '',
    image: '/images/10.jpg',
    backgroundColor: '#BEBEBE',
    color: '#1E1E1E',
  },
  {
    title: '',
    description: '',
    link: '',
    image: '/images/11.jpg',
    backgroundColor: '#DE4B40',
    color: '#FFF0CE',
  },
  {
    title: '',
    description: '',
    link: '',
    image: '/images/12.jpg',
    backgroundColor: '#0A0A0A',
    color: '#D9D9D9',
  },
];

export const data: Data = {
  header: 'EnvoyOS',
  about: [aboutSentence1, aboutSentence2, aboutSentence3],
  interests: {
    title: (
      <>
        *what do <br />I do as a <br />
        web3 <br />
        developer?
      </>
    ),
    description: `I started my journey as a web3 developer in 2020. I've been building decentralized applications, exploring various protocols, participating in hackathons, meeting other developers, and going to IRL events.

I'm currently working on a Battleship Game on Nillion Network which uses Secure MPC Computation to ensure that the game is fair and secure.`,
    interests: [
      'Build decentralized applications',
      'Explore various protocols',
      'Participate in hackathons',
      'Meet other developers',
      'Go to IRL events',
    ],
  },
  articles: {
    title: 'Articles',
    description: `I have been writing articles for a while now on various web3 protocols and even project builds. These articles are a mix of tutorials, guides, and project breakdowns. I hope you find them helpful.`,
    articles: [
      ...Array(12)
        .fill(true)
        .map((_, i) => ({
          link: ``,
          image: `https://picsum.photos/300/420?id=${String(i)}`,
        })),
    ],
  },
  projects: {
    title: 'Projects',
    projects,
  },
  resume: {
    description: `Long story short, I'm currently looking for a new project where I could step in on many different levels : content, social media, digital communication, design, and more!

You'd like to work with someone who's passionate, experienced, polyvalent, constantly learning, and who knows the internet like the back of his hand? 👋

So here's a little recap of everything you've seen in A4:`,
    website: 'https://envoy1084.xyz',
    name: 'Vedant Chainani',
    position: 'Fullstack Developer',
    email: 'vedantchainani1084@gmail.com',
    downloadLink: 'https://x.com/Envoy_1084',
  },
  contact: {
    links: [
      {
        title: 'Email',
        link: 'mailto:vedantchainani1084@gmail.com',
      },
      {
        title: 'Twitter',
        link: 'https://x.com/Envoy_1084',
      },
      {
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/vedant-chainani',
      },
      {
        title: 'Github',
        link: 'https://github.com/Envoy-VC',
      },
    ],
  },
};
