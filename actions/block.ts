import { blockUser } from "@/lib/block_service";
export const onBlock = async (id:string) => {

    const blockedUser = await blockUser(id);
    

}