import {User} from "../Models/User";


test('it should be ok', ()=>{
    const  user = new User();
    user.name = "Jose";
    expect(user.name).toEqual('Jose');
})