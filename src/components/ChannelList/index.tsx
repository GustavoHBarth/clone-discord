import React from "react";
import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName'

const ChannelList: React.FC = () => {
    return(
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="lol" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="warzone" />

        </Container>
    )
}

export default ChannelList;