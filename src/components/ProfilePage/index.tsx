import React from 'react';
import Feed from '../Feed'
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      {/* 头部 */}
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined> Edit fill12313</EditButton>
        <h1>Guilherme Rodz</h1>
        <h2>@guilherme_rodz</h2>
        <p>
          Developer at <a href="https://www.baidu.com">@yizhiyang</a>
        </p>
        <ul>

          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            São Paulo, Brasil
          </li>
        </ul>
        <Followage>
          <span>
            São Paulo<strong>90</strong>
          </span>
          <span>
            <strong>90</strong> Brasil
          </span>
        </Followage>
      </ProfileData>
      <Feed></Feed>

    </Container>
  );
};

export default ProfilePage;
