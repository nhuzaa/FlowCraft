import { Handle, Position } from 'reactflow';
import React, { useState } from 'react';

//add prop validation 
//

//add prop va
const ButtonWrapper = ({ children, onClick }) => {


    return (
        <>
            <button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 text-white m-1 w-50 h-50 '>{children}</button>

        </>
    )
}

export default ButtonWrapper;
