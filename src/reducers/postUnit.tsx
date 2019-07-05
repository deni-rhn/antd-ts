import { ADD_POST, REMOVE_POST, UPDATE_POST } from '../actions/unit/index';

const initialState: any = [];

export default function PostUnit(state = initialState, action:any) {
    switch (action.type) {
        case ADD_POST:
            return [
                ...state,
                {
                    id: action.id,
                    nameUnit: action.nameUnit,
                    codeUnit: action.codeUnit,
                    unit: action.unit
                }
            ];
        case REMOVE_POST:
            return state.filter(({ id } : {id: number}) => id !== action.id);
        case UPDATE_POST:
            return state.map(
                (post:any) => (post.id === action.id ? {
                    ...post, 
                    ...action
                } : post)
            );            
        default:
            return state;
    }
}