import { Outlet } from 'react-router-dom';
import { Container, Header, NewLink, List } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
         
          <List>
            <li>
              <NewLink
                to="/"
              >
                Home
              </NewLink>
            </li>
            <li>
              <NewLink
                to="movies"
              >
                Movies
                </NewLink>
            </li>

          </List>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

// className={({ isActive }) => (isActive ? 'active' : '')