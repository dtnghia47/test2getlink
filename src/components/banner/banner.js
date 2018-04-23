import React from 'react';
import StyleWrapper from './StyleWrapper';

class Banner extends React.Component {
  render() {
    return (
      <StyleWrapper className={`banner-wapper`}>
        <div className="banner session text-center">
          <div className="content">
            <h1 className="title"> Banner</h1>
            <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>
        </div>
      </StyleWrapper>
    );
  }
}

export default Banner;