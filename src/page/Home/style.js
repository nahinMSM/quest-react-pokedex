import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: all 0.3s ease;

  ul {
    margin: 0 auto;
    max-width: 750px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    list-style: none;
    margin: 10px;
    text-align: center;
    background-color: ${(props) => props.theme.background === '#fff' ? '#f0f0f0' : '#1a1a1a'};
    padding: 10px;
    border-radius: 8px;
    transition: all 0.3s ease;

    img {
      width: 100px;
    }

    a {
      text-decoration: none;
    }

    p {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 14px;
      color: ${(props) => props.theme.color};
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const MoreButton = styled.button`
  display: block;
  margin: 20px auto;
  margin-bottom: 100px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.background === '#fff' ? '#000' : '#fff'};
  color: ${(props) => props.theme.background === '#fff' ? '#fff' : '#000'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;