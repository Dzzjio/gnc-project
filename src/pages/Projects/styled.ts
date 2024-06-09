import styled from 'styled-components';

export const StyledProjectDetailsPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  
  > div:first-child {
    flex: 1;
    max-width: 50%;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
  
  > div:nth-child(2) {
    flex: 1;
    max-width: 50%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
      font-size: 50px;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    a {
      display: inline-block;
      margin-top: 1rem;
    }
  }
`;