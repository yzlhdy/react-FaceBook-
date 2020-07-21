import React from 'react';
import ProfilePage from '../ProfilePage';
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  ButtonMenu,
  HomeIcon,
  SearchIcon,
  EmailIcon,
  BellIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Guilherme Rodz</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage></ProfilePage>
      <ButtonMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </ButtonMenu>
    </Container>
  );
};

export default Main;
