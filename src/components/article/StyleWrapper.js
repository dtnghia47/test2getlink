import styled from 'styled-components';

const StyleWrapper = styled.div`
  .article-item {
    float: left;
    width: 25%;
    padding: 5px;
  }
  img {
    width: 100%;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    .article-item {
      width: 50%;
    }
  }
  @media only screen and (max-width: 767px) {
    .article-item {
      width: 100%;
    }
  }
`;

export default StyleWrapper;
