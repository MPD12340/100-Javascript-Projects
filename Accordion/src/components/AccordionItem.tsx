import React, { useState } from 'react'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const AccordionItem = () => {
    const [showState, setShowstate] = useState<boolean>(false)
    return (
        <div className='parent'>
            <div className='childone' onClick={() => setShowstate(!showState)}><p>Look at my details {showState ? <FaChevronDown /> : <FaChevronUp />}</p></div>
             <div className={`${showState ? 'show' : 'childtwo'}`}><p>My name is Mahendra Dhamala. I am from Nepalgunj. I love my mom and dad but I cannot exactly express how much I love them.</p></div>
        </div>
    )
}

export default AccordionItem