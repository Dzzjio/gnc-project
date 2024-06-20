import styled from 'styled-components'
import { Breakpoints, Colors } from '../../utils/Constants'

export const StyledHeader = styled.header`
  border-bottom: 1px solid gray;
  background: linear-gradient(135deg, white, lightgray);
`;

export const StyledHeaderContainer = styled.header`
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  & > a > img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    cursor: pointer;
  }

  & > *.burger-menu {
    display: none;
    height: 30px;

    @media (max-width: ${Breakpoints.mobile}) {
      display: block;
    }
  }

  & > nav {
    @media (max-width: ${Breakpoints.mobile}) {
      display: none;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    & > li {
      list-style: none;

      & > a {
        text-decoration: none;
        color: black;
        transition: all .1s ease-in-out;
        padding: 10px 20px;

        &:hover {
          border-radius: 5px;
          color: white;
          background: linear-gradient(135deg, #a3c3b8, #5d867a, #30584D);
        }

        &.active {
          color: white;
          background: linear-gradient(135deg, #7da395, #4b6e62, #3a564a);
          border-radius: 5px;
        }
      }
    }
  }

  & > div {
    height: 20px;
    display: flex;
    gap: 10px;
  }

  .flag-img {
    width: 30px;
    cursor: pointer;
    border-radius: 5px;
  }

  .burger-menu {
    fill: ${Colors.brandColor};
  }
`
export const StyledLangOptions = styled.select`
  margin-bottom: -5px;
  border: none;
  border-bottom: 2px solid #30584d;
  outline: none;
  background-color: transparent;
`