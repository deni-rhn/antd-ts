export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST = "UPDATE_POST";

let nextId: number = 0;

export function addPostUnit(nameUnit:string, codeUnit:string, unit:string) {
    return {
        type: ADD_POST,
        id: nextId++,
        nameUnit,
        codeUnit,
        unit
    };
}

export function removePostUnit(id:number) {
    return {
        type: REMOVE_POST,
        id
    }; 
}

export function updatePostUnit(id:number, nameUnit:string, codeUnit:string, unit:string) {
    return {
        type: UPDATE_POST,
        id,
        nameUnit,
        codeUnit,
        unit
    };
}
