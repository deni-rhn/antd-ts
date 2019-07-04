import { ADD_POST, REMOVE_POST, UPDATE_POST } from '../actions/index';

const initialState: any = [];

export default function Post(state = initialState, action:any) {
    switch (action.type) {
        case ADD_POST:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    code: action.code,
                    address: action.address
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