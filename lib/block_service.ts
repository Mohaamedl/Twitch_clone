import { db } from "./db";
import { getSelf } from "./auth_service";

export const isBlockedByUser = async (id:string) => {
    try {
        const self =await  getSelf();
        const otherUser = await db.user.findUnique({
            where:{id,},
        })

        if(!otherUser){
            throw new Error("User not found");
        }
        if (otherUser.id===self.id){
            return false;
        }
        const exitingBlock = await db.block.findUnique({
            where:{
                blockedId_blockerId:{
                    blockerId:otherUser.id,
                    blockedId:self.id,
                }
            },
        });
        return !!exitingBlock;

        
    } catch (error) {
        return false;
        
    }

}

export const blockUser = async (id:string) => {
    const self = await getSelf();
    if(self.id===id){
        throw new Error("Cannot block yourself!")
    }

    const otherUser = await db.user.findUnique({
        where:{
            id,
        }
    });
    if(!otherUser){
        throw new Error("User not found");
    }
    const existingBlock = await db.block.findUnique({
        where:{
            blockedId_blockerId:{
                blockerId:self.id,
                blockedId:otherUser.id,
            },
        },
    });
    if(existingBlock){
        throw new Error("User already blocked!");
    }
    const block = await db.block.create({
        data:{
            blockerId:self.id,
            blockedId: otherUser.id,
        },
        include:{
            blocked:true,
        },
    });
    return block;

}

export const unBlockUser =  async (id:string) => {
    const self =await getSelf();
    if (self.id===id){
        throw new Error("Cannot Unblock yourself!");
    }
    const otherUser = await db.user.findUnique({
        where:{id,},
    });
    if(!otherUser){
        throw new Error("User not found")
    }
    const existingBlock = await db.block.findUnique({
        where:{
            blockedId_blockerId:{
                blockerId:self.id,
                blockedId:otherUser.id,
            },
           
        },
        
    });
    if(!existingBlock){
        throw new Error("Not blocked");
    }
    const unBlock = await db.block.delete({
        where:{
            id: existingBlock.id,
        },
        include:{
            blocked:true,
            },
    });
    return unBlock;

}