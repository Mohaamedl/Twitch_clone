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


export const unfollowUser = async (id:string) => {
    const self = await getSelf();
    const otherUser = await db.user.findUnique({
        where:{id}
    })
    if (!otherUser){
        throw new Error("User not found");
    }
    if (otherUser.id===self.id){
        throw new Error("Cannot unffolow yourself. You cannot even follow yourself...");

    }
    const existingFollow = await db.follow.findFirst({
        where:{
            followerId:self.id,
            followingId:otherUser.id,
        }
    })
     if(!existingFollow){
        throw new Error("Not following");
     }
     const follow = await db.follow.delete({
        where:{
            id:existingFollow.id,
        },
        include:{
            following:true,
        }
     })

     return follow;


}

export const getFollowedUsers = async () => {
    try{
        const self = await getSelf();
        const followedUsers = await db.follow.findMany({
            where:{
                followerId:self.id,
            },
            include:{
                following:true,
            },
        })
        return followedUsers;
    }
    catch(error){
        return [];
    }
}