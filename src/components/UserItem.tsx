import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItem {
    user: IUser
}

const UserItem: FC<UserItem> = ({user}) => {

    return(
        <div style={{padding: '15px', border:'1px solid gray'}}>
            {user.id}. {user.name} проживает в городе {user.address.city},на улице {user.address.street}
        </div>   
    )
}

export default UserItem