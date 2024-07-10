import React from 'react';

import {
  About,
  Blogs,
  City,
  Contact,
  Footer,
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
      <Footer />
    </>
  );
};

export default Home;
