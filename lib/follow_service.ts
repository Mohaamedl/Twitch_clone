import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth_service";



export const isFollowingUser =  async(id:string) => {
    try {
        const self = await getSelf();
        const otherUser = await db.user.findUnique({
            where:{id},
        })
        if(!otherUser){
            throw new Error("User not found!");

        }
        if (otherUser.id===self.id){
            return true;
        }
        const existingFollow = await db.follow.findFirst({
            where:{
                followerId:self.id,
                followingId:otherUser.id,
            }
        })

        return !!existingFollow;
        
    } catch  {
        return false;
        
    }
}


export const followUser = async (id:string)=>{
    const self = await getSelf();
    const otherUser = await db.user.findUnique({
        where:{id},
    })
    
    if (!otherUser){
        throw new Error("User not found bro :/")

    }
    if(otherUser.id===self.id){
        throw new Error("You cannot follow yourself buddy :/")

    }
    const existingFollow = await db.follow.findFirst({
        where:{
            followerId:self.id,
            followingId:self.id,
        },
    })
    if (existingFollow){
        throw new Error("Already following");
    }

    const follow = await db.follow.create({
        data:{
            followerId:self.id,
            followingId:otherUser.id,
        },
        include:{
            following:true,
            follower:true,
        }



        
    })
    
    return follow;




}