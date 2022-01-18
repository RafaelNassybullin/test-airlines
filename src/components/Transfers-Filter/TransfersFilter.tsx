import React, {ChangeEventHandler, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useAppDispatch, useAppSelector} from "../../redux/redux";
import {RootState} from "../../redux/store/store";
import {ticketSlice} from "../../redux/reducers/TicketSlice";
import {fetchTickets} from "../../redux/actions/ActionCreators";

export const TransfersFilter: React.FC = () => {
    const dispatch = useAppDispatch()
    const {tickets} = useAppSelector((state: RootState) => state.ticketReducer)
    const arrr = [
        {id: '1', title: 'Все'},
        {id: '2', title: 'Без пересадок'},
        {id: '3', title: '1 пересадка'},
        {id: '4', title: '2 пересадки'},
        {id: '5', title: '3 пересадки'},
    ]
    const checboxHandler = (e:any) => {
        dispatch(ticketSlice.actions.withOne(tickets))

    }

    return (
        <div className='checkbox-wrap'>
            <h2 className='transfers-count-title' onClick={()=>{}}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
            {
                arrr.map(el => (
                    <div key={uuidv4()}
                         data-only={el.id}
                         onClick={(e)=>checboxHandler(e)}
                         className="filter-item">
                        <label htmlFor={el.id}>
                            <input type="checkbox"
                                   id={el.id}/>
                            <span >{el.title}</span>
                        </label>
                        <span data-only={el.id} className='only'>только</span>
                    </div>
                ))
            }
        </div>
    )
}