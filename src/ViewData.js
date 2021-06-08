import React from 'react';
import {useSelector} from  'react-redux'


const ViewData = () => {

    const data = useSelector(state => state.dataSubmitted)
    console.log("final data", data)
    return (
        
        <div>
            {data && data.map(el=>{
                return(
                    <h1>
                    {el.name}
                </h1>
                )
               
            })}        </div>
    )
}

export default ViewData
