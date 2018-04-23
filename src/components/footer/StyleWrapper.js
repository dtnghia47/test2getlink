import styled from 'styled-components';

const StyleWrapper = styled.div`
  background: #A9A9A9;
  .footer-item {
    width: 25%;
    float: left;
  }
  .footer {
    margin: 50px auto 0;
  }
  @media only screen and (max-width: 767px) {
    .footer-item {
      width: 50%;
    }
  }
`;

export default StyleWrapper;
