import React, {useEffect} from 'react';
import Airlines from '../../assets/Turkish_Airlines_logo.webp'
import {ReactComponent as FlyIcon1} from "../../assets/flyIcon-1.svg";
import {useAppDispatch, useAppSelector} from "../../redux/redux";
import {RootState} from "../../redux/store/store";
import {fetchTickets} from "../../redux/actions/ActionCreators";
import { v4 as uuidv4 } from 'uuid';

export const Card: React.FC = (props) => {
    const dispatch = useAppDispatch()
    const {tickets, currency} = useAppSelector((state: RootState) => state.ticketReducer)

    useEffect(() => {
        dispatch(fetchTickets())
    }, [])

    return (
        <>
            {
                tickets.map((el) => (
                    <div key={uuidv4()} className='card'   >
                        <div className="buy-logo">
                            <div className="logo-airlines">
                                <img src={Airlines} alt="" />
                            </div>
                            <button className='buy-button'>
                                <p>Купить</p>
                                за {currency==='rub'&&el.price + ' ₽'}
                                    {currency==='usd'&&Math.round(el.price/72) + ' $'}
                                    {currency==='eur'&&Math.round(el.price/87) + ' €'}
                            </button>
                        </div>
                        <div className="time-transfers">
                            <div className="time">
                                <h2 className="clock">
                                    {el.departure_time}
                                </h2>
                                <p className="city">{el.origin}, {el.origin_name}</p>
                                <p className="date">
                                    {el.departure_date}
                                </p>
                            </div>
                            <div className="transfer">
                                 пересадок: {el.stops}
                                <FlyIcon1 width={190}/>
                            </div>
                            <div className="time">
                                <h2 className="clock">
                                    {el.arrival_time}
                                </h2>
                                <p className="city">
                                    {el.destination_name}, {el.destination}
                                </p>
                                <p className="date">
                                    {el.arrival_date}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}