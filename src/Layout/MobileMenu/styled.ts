import styled from 'styled-components'

export const MobileMenuContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 110;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-in-out;

  &.open {
    opacity: 1;
    pointer-events: all;
  }
`

export const MobileMenuContent = styled.div`
  position: absolute;
  right: -130px;
  top: 0;
  width: 430px;
  height: 100vh;
  background-color: #fff;
  z-index: 112;

  transition: right 0.3s ease-in-out;
  transition-delay: 0.1s;

  &.open {
    right: 0;
  }
`

export const MobileMenuContentContainer = styled.div`
  padding: 35px 35px;
  height: calc(100vh - 70px);
  width: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > ul {
    & > li {
      list-style-type: none;
      margin: 20px;
      font-size: 20px;

      & > * {
        color: black;
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 5px;

        &.active {
          color: white;
          background-color: black;
        }
      }
    }
  }
`

export const Layout = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 111;
  cursor: pointer;
`
