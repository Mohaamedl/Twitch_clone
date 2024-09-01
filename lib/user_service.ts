import { db } from "@/lib/db";
export const getUserByUsername =  async(username:string) =>{
    const user = await db.user.findUniqueOrThrow({
        where:{
            username,
        }
    })
    
    return user;
}