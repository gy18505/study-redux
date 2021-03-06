/**
 * Created by Nealyang on 17/3/18.
 */
import {INCREMENT_COUNTER,DECREMENT_COUNTER} from '../actions';

export default function counter(state = 0,action) {
    switch (action.type){
        case INCREMENT_COUNTER:
            return state+1;
        case DECREMENT_COUNTER:
            return state-1;
        default:
            return state;
    }
}
