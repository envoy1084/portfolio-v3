import React from 'react';

import { About, Blogs, City, Header, Interests, Projects } from '~/components';

const Home = () => {
  return (
    <>
      <Header />
      <City />
      <About />
      <Interests />
      <Blogs />
      <Projects />
    </>
  );
};

export default Home;
