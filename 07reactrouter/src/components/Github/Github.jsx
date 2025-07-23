import React, { useEffect, useState } from "react";

function Github() {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/bharat40')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data);
        })
    },[])
  return (
    <div
      className="bg-gray-500 text-center
     text-white text-3xl p-4"
    >
      Github Follower:{data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  );
}

export default Github;
