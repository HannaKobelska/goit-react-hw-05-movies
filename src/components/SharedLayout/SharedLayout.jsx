import { Outlet } from 'react-router-dom';
import { Container, Header, NewLink, List } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <List>
            <li>
              <NewLink to="/goit-react-hw-05-movies/">
                Home </NewLink>
            </li>
            <li>
              <NewLink to="/goit-react-hw-05-movies/movies">
                Movies </NewLink>
            </li>

          </List>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

// className={({ isActive }) => (isActive ? 'active' : '')