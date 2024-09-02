import { isFollowingUser } from "@/lib/follow_service";
import { getUserByUsername } from "@/lib/user_service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";

interface UserPageProps {
    params:{
        username:string;
    }
}
const UserPage = async ({
    params,
}:UserPageProps) =>  {
    const user = await getUserByUsername(params.username)
    if(!user){
        notFound();
    }

    const isFollowing = await isFollowingUser(user.id);
    
    



    return(
        <div className="flex flex-col gap-4">
            <p>username:{user.username}</p>
            <p>userId:{user.id}</p>
            <p>isFolowing:{`${isFollowing}`}</p>
            <Actions userId={user.id} isFollowing={isFollowing} />
            

        </div>
    )
}

export default UserPage;