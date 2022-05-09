import {User} from "../Models/User";

export class UsersController{

    public addUser(){
        const user = new User();
        user.name = "Jose";
        user.email = 'jose@gmail.com';

        return user;
    }
}