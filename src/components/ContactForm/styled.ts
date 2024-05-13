import styled from 'styled-components'
import { Breakpoints, Colors, Transition } from '../../utils/Constants'

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;

  margin: 0 auto;

  & > label {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    position: relative;

    & > span {
      position: absolute;
      left: 15px;
      top: 0;
      font-size: 15px;
      background-color: transparent;
      transition: ${Transition.fast};
    }

    & > input,
    textarea {
      border: none;
      border-radius: 5px;
      padding: 15px;
      font-size: 15px;
      box-shadow: 3px 2px 1px ${Colors.brandColor};
      min-width: 100%;
      max-width: 100%;

      &::placeholder {
        font-size: 15px;
      }

      &:focus {
        outline: none;
        box-shadow: 5px 4px 1px ${Colors.brandColor};
        transition: ${Transition.slow};
      }
    }
  }

  & > button {
    border: none;
    border-radius: 5px;
    box-shadow: 3px 2px 1px ${Colors.brandColor};
    width: max-content;
    margin: 15px 0px;
    padding: 10px 40px;
    font-size: 15px;
    cursor: pointer;
    align-items: start;

    &:hover {
      background-color: ${Colors.brandColor};
      color: white;
    }

    &:active {
      box-shadow: 2px 1px 1px ${Colors.brandColor};
    }
  }

  @media (max-width: ${Breakpoints.tablet}) {
    width: 100%;
  }
`
