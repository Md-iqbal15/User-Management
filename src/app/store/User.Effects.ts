import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../user.service";
import {  addUserData, addUserDataSuccess, deleteUserData, deleteUserDataSuccess, emptyAction, loadUserDATA, loadUserDATAFail, loadUserDATASuccess, updateUserData, updateUserDataSuccess} from "./User.Action";

import { catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";


@Injectable()
export class userEffect{
    

    action$=inject(Actions)
    userService=inject(UserService)
/**************Retrive Record */
    _loadUserData=createEffect(()=>
        this.action$.pipe(
            ofType(loadUserDATA),
            exhaustMap((action)=>{
                return this.userService.getAllUserDetail().pipe(
                    map((data:any)=>{
                        return loadUserDATASuccess({list:data})
                    }),
                    catchError((err)=>of(loadUserDATAFail({errMsg:err.message}))) 
                )
            })
        )
    )


    /**************Delete Record ***************** */

    _deleteUserData=createEffect(()=>
        this.action$.pipe(
            ofType(deleteUserData),
            mergeMap((action)=>{
                return this.userService.deleteUserDetail(action.id).pipe(
                    map((data:any)=>{
                        return deleteUserDataSuccess({id:action.id})
                        
                    }),
                    tap(() => this.Showalert('Deleted Successfully', 'pass')),
                    catchError((err)=>of(this.Showalert(err.message,'fail'))) 
                )
            })
        )
    )
  /************Add Record*********************** */
_addUserData=createEffect(()=>
        this.action$.pipe(
            ofType(addUserData),
            mergeMap((action)=>{
                return this.userService.addData(action.data).pipe(
                    map((data:any)=>{
                        return addUserDataSuccess({data:action.data})
                    
                    }),
                    tap(() => this.Showalert('Added Successfully', 'pass')),
                    catchError((err)=>of(this.Showalert(err.message,'fail'))) 
                )
            })
        )
    )

    /*****************Updated Record***************************** */

    _updateUserData=createEffect(()=>
        this.action$.pipe(
            ofType(updateUserData),
            mergeMap((action)=>{
                return this.userService.updateUserDetail(action.data).pipe(
                    map((data:any)=>{
                        return updateUserDataSuccess({data:action.data})
                        
                    }),
                    tap(() => this.Showalert('Updated Successfully', 'pass')),
                    catchError((err)=>of(this.Showalert(err.message,'fail'))) 
                )
            })
        )
    )

/********************Show Message******************************************** */
    Showalert(message:string,response:string){
        if(response=='pass'){
            alert('success '+message)
        }else{
            alert('error '+message)
        }

        return emptyAction
    }



}


