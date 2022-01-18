import React from 'react';
import {ReactComponent as FlyIcon} from "../../assets/flyIcon-0.svg";

export const Logo: React.FC = () => {

    return (
        <header>
            <div className="logo">
                <FlyIcon className={'kkk'} width={90} fill={'#42A5F4'}/>
            </div>
        </header>
    )
}