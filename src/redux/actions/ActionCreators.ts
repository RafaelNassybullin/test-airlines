import {AppDispatch} from "../store/store";
import axios from "axios";
import {Ticket} from "../../models/Ticket";
import {ticketSlice} from "../reducers/TicketSlice";

export const fetchTickets = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(ticketSlice.actions.ticketsFetching())
        const res = await axios.get<Ticket[]>('https://rafaelnassybullin.github.io/DataRepo/ticketsArr.json')
        dispatch(ticketSlice.actions.ticketsFetchingSuccess(res.data))
    } catch (er:any) {
        dispatch(ticketSlice.actions.ticketsFetchingError(er.message))
    }
}




