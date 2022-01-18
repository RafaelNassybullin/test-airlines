import React from 'react';
import {Currency} from "../Currency";
import {TransfersFilter} from "../Transfers-Filter";

export const FilterMenu = () => {

    return (
        <>
            <div className='filter-menu' >
                <Currency/>
                <TransfersFilter/>
            </div>
        </>
    )
}