import React from 'react';
import PropTypes from 'prop-types';
import StyleWrapper from './StyleWrapper';

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleDetail: {}
    };
  }

  componentDidMount(){
    fetch(`../data-mocks/article-detail.json`)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({articleDetail: responseData});
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }
  render() {
    return (
      <StyleWrapper className={`article-detail-wapper`}>
        <div className="session">
          <h1>Article Detail</h1>
          <img
            className='article-detail-img'
            src= {require('../../../assets/img/' + (this.state.articleDetail.length>0 ? this.state.articleDetail.srcImg: 'placeholder.png'))}
            alt='article detail'
          />
          <p>{this.state.articleDetail.desc}</p>
        </div>
      </StyleWrapper>
    );
  }
}

ArticleDetail.propTypes = {
  articleDetail: PropTypes.object
}

export default ArticleDetail;

