import React from "react";

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickname="Gustavo Barth" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Bot De Todos Nos" isBot />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            <UserRow nickname="Barth" />
            

        </Container>
    )
};

export default UserList;