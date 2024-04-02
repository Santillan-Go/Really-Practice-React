import { DECREAMENT, INCREAMENT, RESTORE } from "../../../TYPES";


const initialState=0;




const counterReducer=(state=0, action)=>{

switch(action.type){
    case INCREAMENT:{
return state=state+1;
    }
    case DECREAMENT :{
        return state=state-1;
    }
    case RESTORE:
        {
            return state=0;
        }
        default: return state
}

}


export {counterReducer};

