import styled from 'styled-components'

export const DetailContainer = styled.div`
  position: relative;
  padding: 20px;
  margin: 50px auto;
  max-width: 50vw;
  transition: all 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  color: ${(props) => props.theme.color === '#fff' ? '#fff' : 'yellow'};
  background-color: ${(props) => props.theme.background === '#fff' ? '#f0f0f0' : '#1a1a1a'};

  h2 {
    margin-bottom: 20px;
    padding: 3px;
    text-transform: capitalize;
    text-align: center;
    background-color: ${(props) => props.theme.background === '#fff' ? 'blue' : '#f01f01'};
    border-radius: 4px;
  }
`;

export const Image = styled.img`
  width: 200px;
`;

export const Section = styled.div`
  div { 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  h3 {
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 6px;
    background-color: ${(props) => props.theme.background === '#fff' ? 'blue' : '#f01f01'};
    border-radius: 4px;
  }
    
  li {
    text-transform: capitalize;
    margin: 5px;   
  }
`;