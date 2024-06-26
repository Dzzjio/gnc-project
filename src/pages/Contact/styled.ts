import styled from 'styled-components'
import { Breakpoints, Colors, Transition } from '../../utils/Constants'

export const ContactPageContainer = styled.section`
  width: 80vw;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  min-height: 90vh;

  span > img {
    width: 25px;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const ContactPageLeft = styled.div`
  width: 80%;

  div.contact-us-box-container {
    display: flex;
    justify-content: space-arround;
    margin-top: 40px;
    height: auto;
    flex-wrap: wrap;

    @media (max-width: ${Breakpoints.tablet}) {
      justify-content: center;
    }
  }

  div.contact-us-box {
    // background: linear-gradient(135deg, white, lightgray);
    height: 150px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-radius: 10px;
    // box-shadow: 3px 2px 1px ${Colors.brandColor};

    @media ( max-width:  ${Breakpoints.tablet}) {
      width: 100%;
    }

    & > span:first-child > * {
      width: 50px;
      height: 50px;
    }

    & > span:last-child > * {
      color: black;
    }

    &:hover {
      transform: scale(1.05);
      ${Transition.veryFast};
      box-shadow: 3px 2px 5px ${Colors.brandColor};
    }
  }

  & > * {
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 10px 0;
    color: black;
  }

  & > h2 {
    font-size: 50px;
    margin-bottom: 20px;
  }

  & > p {
    font-size: 20px;

    &:hover {
      gap: 70px;
    }
  }

  @media (max-width: ${Breakpoints.tablet}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
