import {Ticket} from "../../models/Ticket";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TicketState{
    tickets:Ticket[]
    isLoading:boolean
    error:string,
    currency:string
}

const initialState:TicketState = {
    tickets:[],
    isLoading:false,
    error:'',
    currency:'rub'
}

export const ticketSlice = createSlice({
    name:'ticket',
    initialState,
    reducers:{
        ticketsFetching(state){
            state.isLoading = true
        },
        ticketsFetchingSuccess(state, action: PayloadAction<Ticket[]>){
            state.isLoading = false
            state.error = ''
            state.tickets = action.payload
            state.tickets = action.payload.map((el:any)=>el).sort((a:any,b:any)=>(a.price - b.price))
        },
        ticketsFetchingError(state, action:PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        },
        convertCurency(state, action:PayloadAction<string>){
            state.currency = action.payload
        },
        withOne(state, action:PayloadAction<Ticket[]>){
            state.tickets = []
            state.tickets.push(...action.payload.map((el:Ticket)=>el).filter(el=>el.stops===1))
        }
    }
})

export default ticketSlice.reducer