import React, {SyntheticEvent,useState} from 'react';
import classNames from "classnames/bind";
import {ticketSlice} from "../../redux/reducers/TicketSlice";
import {useAppDispatch, useAppSelector} from "../../redux/redux";

export const Currency: React.FC = () => {
    const [active, setActive] = useState(1)
    const handler = (index:number) => {
        setActive(index)
    }
    const btnRub = classNames({
        'currency-btn':true,
        'currency-btn _active':active===1
    })
    const btnUsd = classNames({
        'currency-btn':true,
        'currency-btn _active':active===2
    })
    const btnEur = classNames({
        'currency-btn':true,
        'currency-btn _active':active===3
    })
    const dispatch = useAppDispatch()
    return (
        <>
            <h2>ВАЛЮТА</h2>
            <div className='curency'>
                <button onClick={()=>{handler(1); dispatch(ticketSlice.actions.convertCurency('rub'))}} className={btnRub}>RUB</button>
                <button onClick={()=>{handler(2); dispatch(ticketSlice.actions.convertCurency('usd'))}} className={btnUsd}>USD</button>
                <button onClick={()=>{handler(3); dispatch(ticketSlice.actions.convertCurency('eur'))}} className={btnEur}>EUR</button>
            </div>
        </>
    )
}
