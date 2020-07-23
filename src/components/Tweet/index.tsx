import React from 'react';

import {
    Container,
    Retweeted,
    Body,
    Avatar,
    RocketseatIcon,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Voce rewettou
            </Retweeted>
            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>React </strong>
                        <span>Typescript</span>
                        <Dot />
                        <time>27 de jun</time>
                    </Header>
                    <Description>Foguete não tem ré  🚀</Description>
                    <ImageContent />
                    <Icons>
                        <Status>
                            <CommentIcon />
                             18
                        </Status>
                        <Status>
                            <RetweetIcon />
                             18
                        </Status>
                        <Status>
                            <LikeIcon />
                             18
                        </Status>
                    </Icons>
                </Content>

            </Body>
        </Container>
    );
}

export default Tweet;