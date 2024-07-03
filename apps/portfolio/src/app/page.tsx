import React from 'react';

import {
  About,
  Blogs,
  City,
  Contact,
  Header,
  Interests,
  Projects,
  Resume,
} from '~/components';

const Home = () => {
  return (
    <>
      <Header />
      <City />
      <About />
      <Interests />
      <Blogs />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
