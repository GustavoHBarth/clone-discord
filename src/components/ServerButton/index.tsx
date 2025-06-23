import React from "react";

// import Logo from '../../assets/Logo.svg
//  {isHome ? <img src={Logo} alt ="Logo" />} 
  

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >  
        </Button>
    )   

};

export default ServerButton