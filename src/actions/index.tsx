export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST = "UPDATE_POST";

let nextId: number = 0;

export function addPost(name:string, code:string, address:string) {
    return {
        type: ADD_POST,
        id: nextId++,
        name,
        code,
        address
    };
}

export function removePost(id:number) {
    return {
        type: REMOVE_POST,
        id
    }; 
}

export function updatePost(id:number, name:string, code:string, address:string) {
    return {
        type: UPDATE_POST,
        id,
        name,
        code,
        address
    };
}
