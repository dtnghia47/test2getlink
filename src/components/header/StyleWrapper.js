import styled from 'styled-components';

const StyleWrapper = styled.div`
  .logo {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .menu {
    ul {
      li {
        display: inline-block;
        a {
          background: antiquewhite;
          padding: 10px 20px;
        }
      }
    }
    .active {
      color: orange;
      background: #ebc087;
    }
  }
`;

export default StyleWrapper;
