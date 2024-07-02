import React from 'react';

import { About, Blogs, City, Header } from '~/components';

const Home = () => {
  return (
    <div className=''>
      <Header />
      <City />
      <About />
      <Blogs />
      <div className='h-screen'></div>
    </div>
  );
};

export default Home;
