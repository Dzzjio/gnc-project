import styled from 'styled-components'
import { Colors } from '../../utils/Constants'

export const StyledFooter = styled.footer`
  border-top: 1px solid gray;
  width: 100%;
  // position: absolute;
  bottom: 0;
  background-color: ${Colors.brandColor};

  .footer-container {
    width: 80vw;
    margin: 0 auto;
    padding: 10px 0;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 0;

    & > * {
      width: 30%;
    }
  }

  .footer-content-elements {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > * {
      color: #a8d0c5;
      text-decoration: none;
    }
  }

  .footer-copyright {
    border-top: 1px solid #8eaea5;
    display: flex;
    justify-content: center;

    & > * {
      color: #8eaea5;
      padding: 5px;
    }
  }
`
