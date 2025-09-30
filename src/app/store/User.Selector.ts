import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { UserModel } from "./User.Model";

const getUserDataState=createFeatureSelector<UserModel>('userrecord')

export const getUserDataList= createSelector(getUserDataState,(state)=>{
    return state.list
})

export const selectUserRecord=createSelector(getUserDataState,(state)=>{
    return state.empobj
})