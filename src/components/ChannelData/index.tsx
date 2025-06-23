import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";
 
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
 const messagesRef = useRef<HTMLDivElement>(null);

    return(
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                <ChannelMessage 
                    author="Gustavo Barth"
                    date="01/09/2001"
                    content="Dia do meu aniversário!"
                />
                



                <ChannelMessage 
                    author="Bot De Todos Nos"
                    date="01/09/2001"
                    content={
                        <>
                            <Mention>@Gustavo Barth</Mention>, Testando mention
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversarem #chat-livre" />
                <InputIcon />
            </InputWrapper>

        </Container>
    )
}

export default ChannelData;