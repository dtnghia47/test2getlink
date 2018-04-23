import styled from 'styled-components';
// import placeholder from '../../assets/img/placeholder.png';
const StyleWrapper = styled.div`
  background: #A9A9A9;
  .banner {
    position: relative;
    height: 400px;
    .content {
      max-width: 500px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
// background: url(${placeholder});

export default StyleWrapper;
