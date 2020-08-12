import React from 'react'


const RoomLog = ({ roomData }) => {

    console.log('roomData:', roomData);
    console.log('roomData[0]:', roomData[0]);
    
    return(
        <div style={{color:'white', margin:'20px'}}>
            USERS:
            {roomData.map((data, i) => 
            <div> {data.name} </div>
            )}

        </div>
    )
}

export default RoomLog
