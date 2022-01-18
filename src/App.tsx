import React, {useEffect} from 'react';
import './App.scss';
import {Logo} from "./components/Logo/Logo";
import {FilterMenu} from "./components/Filter-Menu/FilterMenu";
import {Card} from "./components/Card/Card";

export const App: React.FC = () => {

    return (
        <>
            <div className="container">
                <div className="main-wrapper">
                    <Logo/>
                    <div className="card-wrapper">
                        <aside>
                            <FilterMenu/>
                        </aside>
                        <main>
                            <Card/>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}


