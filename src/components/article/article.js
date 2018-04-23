import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import StyleWrapper from './StyleWrapper';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      articleArr: [],
      showArticle: false
    };
  }
  componentDidMount(){
    fetch(`./data-mocks/article.json`)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({articleArr: responseData});
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <StyleWrapper className={`article-wrapper`}>
        <div className="session article">
          <ul className="clearfix">
            {this.state.articleArr.map(item => {
              let linkItem = `/article/` + item.id;
              return (
                <li className="article-item" key={item.id}>
                  <Link to={linkItem}>
                    <img
                      className='article-thumnail'
                      src= {require('../../assets/img/'+item.srcImg)}
                      alt='article item'
                    />
                    <div>
                      <h3 className="article-title">{item.title}</h3>
                      <p className="article-desc">{item.desc}</p>
                    </div>
                  </Link>
                </li>
              );}
            )}
          </ul>
        </div>
      </StyleWrapper>
    );
  }
}

Article.propTypes = {
  articleArr: PropTypes.arrayOf(PropTypes.object)
}


export default Article;