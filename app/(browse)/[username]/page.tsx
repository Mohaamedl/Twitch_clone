interface UserPageProps {
    params:{
        username:string;
    }
}
const UserPage = ({
    params,
}:UserPageProps) => {
    return(
        <div>
            UserPage: {params.username}
        </div>
    )
}

export default UserPage;