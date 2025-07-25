import React from 'react'
import UserContext from '../context/UserContext';
import {useContext} from 'react';
function Profile() {
    const {user}=useContext(UserContext);
 if(!user) return <div>Please login</div>
 return (
    <div>
        welcome {user.username}
    </div>
 )
}

export default Profile