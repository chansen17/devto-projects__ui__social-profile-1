import styled from 'styled-components';
import './App.css';

import Card from './Card';

function App() {
  return (
    <Main>
      <Card />
    </Main>
  );
}

const Main = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 1rem;
`;

export default App;
