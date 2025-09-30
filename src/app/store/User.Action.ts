import { createAction, props } from "@ngrx/store"
import {  User } from "../../model/user"

export const LOAD_USERDATA = 'user getalldata'
export const LOAD_USERDATA_SUCCESS = 'user getalldata succ'
export const LOAD_USERDATA_FAIL = 'user getalldata fail'

export const DELETE_USERDATA = '[user] delete'
export const DELETE_USERDATA_SUCCESS = '[user] delete succ'

export const ADD_USERDATA= '[user] Add'
export const ADD_USERDATA_SUCCESS = '[user] Add succ'

export const UPDATE_USERDATA = '[user] Update'
export const UPDATE_USERDATA_SUCCESS = '[user] Update succ'

export const GET_USERDATA='[user] get user record'

export const loadUserDATA = createAction(LOAD_USERDATA)
export const loadUserDATASuccess = createAction(LOAD_USERDATA_SUCCESS, props<{ list: User[] }>())
export const loadUserDATAFail = createAction(LOAD_USERDATA_FAIL, props<{ errMsg: string }>())

export const deleteUserData=createAction(DELETE_USERDATA,props<{id:number}>())
export const deleteUserDataSuccess=createAction(DELETE_USERDATA_SUCCESS,props<{id:number}>())

export const addUserData=createAction(ADD_USERDATA,props<{data:User}>())
export const addUserDataSuccess=createAction(ADD_USERDATA_SUCCESS,props<{data:User}>())

export const updateUserData=createAction(UPDATE_USERDATA,props<{data:User}>())
export const updateUserDataSuccess=createAction(UPDATE_USERDATA_SUCCESS,props<{data:User}>())

export const getUserRecord=createAction(GET_USERDATA,props<{id:number}>())

export const emptyAction=createAction('empty')