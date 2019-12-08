import React from 'react';

import Footer from './Footer';
import Header from './Header';

const Page = props => {
  return (
    <>
      <Header />
      <div className="flex-1">{props.children}</div>
      <Footer />
    </>
  );
};

export default Page;
