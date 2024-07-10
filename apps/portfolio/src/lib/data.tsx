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

const projects: Data['projects']['projects'] = [
  {
    title: 'JustRoles',
    description:
      'Just Roles is a project that provides on-chain verifiable roles based on the Lens Protocol followers. Communities can set different roles for different thresholds and utilize the Phala Lens Oracle to obtain verifiable data from the API. ',
    image: '/images/1.png',
    coverImage: '/images/1-cover.png',
    backgroundColor: '#D5D5D5',
    color: '#2A2A2A',
    liveLink: 'https://just-roles.vercel.app/',
    githubLink: 'https://github.com/Envoy-VC/just-roles',
    videoDemo: 'https://www.youtube.com/watch?v=v43G7w5a0bM',
  },
  {
    title: 'Axioms',
    description:
      'Axioms provides organizations a one-stop shop for certificate issuance and verification. Organizations are Safe Multi-Sig Wallets. Certificates are stored indefinitely on Arweave and user verification is done with zkProofs via Sismo Connect.',
    image: '/images/2.jpeg',
    coverImage: '/images/2-cover.png',
    backgroundColor: '#D4D0C7',
    color: '#53BB89',
    liveLink: 'https://axioms-alpha.vercel.app/',
    githubLink: 'https://github.com/Envoy-VC/axioms',
    videoDemo: 'https://youtu.be/9rAgqT6YUqU',
  },
  {
    title: 'Atomic Toolkit',
    description:
      'Atomic Toolkit is your streamlined path to building on Atomic Standards. Craft rock-solid, spec-compliant assets with ease, thanks to robust type safety.',
    image: '/images/3.png',
    coverImage: '/images/3-cover.png',
    backgroundColor: '#33437F',
    color: '#D2DCF2',
    liveLink: 'https://atomictoolkit.mintlify.app/',
    githubLink: 'https://github.com/Envoy-VC/atomic-toolkit',
  },
  {
    title: 'GHO Tunes',
    description:
      'GHO Tunes introduces a novel payment model within the Aave Protocol ecosystem, built upon the GHO stablecoin. This system leverages GHO Credit delegation and Chainlink cron-based automation to establish robust recurring payments directly on the blockchain.',
    image: '/images/4.png',
    coverImage: '/images/4-cover.png',
    backgroundColor: '#ECDCE9',
    color: '#321D44',
    liveLink: 'https://ghotunes.vercel.app/',
    githubLink: 'https://github.com/Envoy-VC/ghotunes-lfgho',
    videoDemo:
      'https://stream.mux.com/lGKB2oGze8vTVE3Inx5QUkg02F02lbPf7RPOKryFBmJAE/high.mp4',
  },
  {
    title: 'Serendipity Engine',
    description:
      'Based on the theory called Six Degrees of Separation, Serendipity Engine is a profile discovery/Constellation graph Farcaster frame which help users discover other users in the farcaster network.',
    image: '/images/5.png',
    coverImage: '/images/5-cover.png',
    backgroundColor: '#F5EFDF',
    color: '#070707',
    liveLink: 'https://warpcast.com/envoy1084/0xff7e7314',
    githubLink: 'https://github.com/Envoy-VC/the-serendipity-engine',
    videoDemo:
      'https://stream.mux.com/IwZ7ZioiO9xosBTgSiQQjL6sjruxfn0000nH00G84holfo/high.mp4',
  },
  {
    title: 'BattleshipX',
    description:
      'BattleShipX is a secure and private battleship game that can be played with friends. It uses nillion for storing the game state and and blind computation for the game logic.',
    image: '/images/6.png',
    coverImage: '/images/6-cover.png',
    backgroundColor: '#33437F',
    color: '#D2DCF2',
    liveLink: 'https://battleship-x-web.vercel.app/',
    githubLink: 'https://github.com/Envoy-VC/battleship-x-scaling-ethereum',
    videoDemo:
      'https://stream.mux.com/67AHORdQSrbSbzm7e5FxeVtDf2VpxMW2kleRqtWN6cU/high.mp4',
  },
  {
    title: 'ZK Guesser',
    description:
      'ZK Guesser is a geo-location guessing game built on zero-knowledge proofs. Players attempt to pinpoint a hidden location on a map, but unlike traditional GeoGuessr, their exact guesses remain hidden. ',
    image: '/images/7.png',
    coverImage: '/images/7-cover.png',
    backgroundColor: '#454545',
    color: '#FFFFFF',
    liveLink: 'https://zk-guesser.vercel.app/',
    githubLink: 'https://github.com/Envoy-VC/zk-guesser',
    videoDemo: 'https://youtu.be/BEBZZV_Senk',
  },
  {
    title: 'Minesweeper',
    description:
      'This is a simple implementation of the classic game Minesweeper using Nillion Blind Computation.',
    image: '/images/8.jpeg',
    coverImage: '/images/8-cover.png',
    backgroundColor: '#C0C0C0',
    color: '#000000',
    githubLink: 'https://github.com/Envoy-VC/minesweeper-nillion',
    videoDemo: 'https://www.youtube.com/watch?v=sRLVX6E1iUQ',
  },
  {
    title: 'Transcend Vault',
    description:
      'Transcend Vault is a Multi-Peer Vault Storage which is gated by a secure Multi-Party Computation (MPC) based Biometric Authentication System.',
    image: '/images/9.png',
    coverImage: '/images/9-cover.png',
    backgroundColor: '#E1EBFD',
    color: '#3434FE',
    githubLink: 'https://github.com/Envoy-VC/transcend-nillion',
    videoDemo: 'https://youtu.be/m1_AWJ8iMpY',
  },
  {
    title: 'Blaze ID',
    description: `Blaze ID is a self-sovereign identity (SSI) wallet solution built on Lit Protocol's programmable key wallets. It supports a variety of Decentralized Identifiers (DIDs) including key, web, ethr and Polygon ID`,
    image: '/images/10.jpeg',
    coverImage: '/images/10-cover.png',
    liveLink: 'https://blaze-id.vercel.app/',
    githubLink: 'https://github.com/Envoy-VC/blaze-id',
    backgroundColor: '#DE4B40',
    color: '#FFF0CE',
  },
  {
    title: 'StarkSketch',
    description:
      'StarkSketch is a collaborative Sketching game built on Starknet using Dojo Game Engine. It is similar to the popular game Skribbl.io but with a twist that  multiple users can join a room and sketch together.',
    image: '/images/11.png',
    coverImage: '/images/11-cover.png',
    backgroundColor: '#DFE9F3',
    color: '#1C2134',
    liveLink: 'https://starksketch-katana.vercel.app/',
    githubLink: 'https://github.com/Envoy-VC/starksketch',
  },
  {
    title: 'PiperPay',
    description:
      'PiperPay is a Invoice and Payment management system built on top of Request Network. It allows users to create invoices and accept payments in a decentralized manner.',
    image: '/images/12.png',
    coverImage: '/images/12-cover.png',
    backgroundColor: '#DBE6E2',
    color: '#05A8A9',
    githubLink: 'https://github.com/Envoy-VC/piper-pay',
    liveLink: 'https://piper-pay.vercel.app/',
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
    hashnodeHostname: 'blog.envoy1084.xyz',
  },
  projects: {
    title: 'Projects',
    projects,
  },
  resume: {
    description: `Long story short, I'm currently looking for a new opportunity to work on exciting projects. I am open to both full-time, part-time  and DevRel roles.

You'd like to work with someone who's passionate, experienced, polyvalent, constantly learning, and quickly adjust with new technologies and tools.

So here's a little recap of everything you've seen in A4:`,
    website: 'https://envoy1084.xyz',
    name: 'Vedant Chainani',
    position: 'Fullstack Developer',
    email: 'vedantchainani1084@gmail.com',
    downloadLink: '/resume.pdf',
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
