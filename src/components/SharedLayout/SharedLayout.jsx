import { Outlet } from 'react-router-dom';
import { Container, Header, NewLink, List } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <List>
            <li>
              <NewLink to="/goit-react-hw-05-movies/" className={({ isActive }) => (isActive ? 'active' : '')}>
                Home </NewLink>
            </li>
            <li>
              <NewLink to="/goit-react-hw-05-movies/movies" className={({ isActive }) => (isActive ? 'active' : '')}>
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