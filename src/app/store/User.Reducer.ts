import { createReducer, on } from "@ngrx/store"
import {  userState } from "./User.State"
import {  addUserDataSuccess,  deleteUserDataSuccess,  getUserRecord, loadUserDATAFail, loadUserDATASuccess, updateUserDataSuccess } from "./User.Action"


const _userReducer=createReducer(userState,
    on(loadUserDATASuccess,(state,action)=>{
    
        return{
            ...state,
            list:action.list,
            errormessage:''

        }
    }),
    on(loadUserDATAFail,(state,action)=>{
        
        return{
            ...state,
            list:[],
            errormessage:action.errMsg
        }
    }),
    on(deleteUserDataSuccess,(state,action)=>{
        const _newdata=state.list.filter(o=>o.id!=action.id)
        return{
            ...state,
            list:_newdata,
            errormessage:''
        }
    }),
    on(addUserDataSuccess,(state,action)=>{
        const _newdata={...action.data};
        return{
            ...state,
            list:[...state.list,_newdata],
            errormessage:''
        }
    }),
    on(updateUserDataSuccess,(state,action)=>{
        const _newdata=state.list.map(o=>{
            return o.id===action.data.id?action.data:o
        });
        return{
            ...state,
            list:_newdata,
            errormessage:''
        }
    }),

    on(getUserRecord,(state,action)=>{
    
        let _newdata=state.list.find(o=>{
        return  o.id===action.id
        });

        
    
        if(_newdata==null){
            _newdata=state.empobj

        }
        return{
            ...state,
            empobj:_newdata
            
        }
    }),
    
)

export function userReducer(state:any,action:any){

    return _userReducer(state,action)

}

