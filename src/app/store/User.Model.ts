import { User } from "../../model/user";

export interface UserModel{
    list:User[],
    errormessage:string,
    empobj:User
}