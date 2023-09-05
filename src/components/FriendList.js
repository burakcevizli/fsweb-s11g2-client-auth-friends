import React, { useEffect, useState } from 'react';
import axios from "axios"


const FriendList = () => {
    const [friends ,setFriends] = useState([]);
    console.log("şsdlfksdf",friends)
    useEffect(()=>{
        axios 
        .get("http://localhost:9000/api/friends",{
            headers:{Authorization:localStorage.getItem("s11g2")}
        })
            .then(res =>{
                setFriends(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

    return (
        <div className='friendListDiv'>
            <h1>FRIENDS LIST</h1>
            <div>
                {friends.map((elaman,index) => 
                    (<div key={index}>
                        <span>{elaman.name}</span>--<span>{elaman.email}</span>
                    </div>))}
            </div>
        </div>
    )
}
export default FriendList