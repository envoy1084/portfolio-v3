import React from 'react';

import { About, Blogs, City, Header, Interests } from '~/components';

const Home = () => {
  return (
    <div className=''>
      <Header />
      <City />
      <About />
      <Interests />
      <Blogs />
      <div className='h-screen'></div>
    </div>
  );
};

export default Home;
