import React from 'react';
import StyleWrapper from './StyleWrapper';
import Article from '../article/article';
import Banner from '../banner/banner';

class Home extends React.Component {
  render() {
    return (
      <StyleWrapper className={`home-wapper`}>
        <Banner />
        <Article />
      </StyleWrapper>
    );
  }
}

export default Home;
