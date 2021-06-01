import React from 'react'
import './Page404.css'
import { useHistory } from "react-router-dom";



function Page404() {
    let history = useHistory();


    return (
        <>
            <div className='page404'>דף 404 <br/> <span onClick={() => history.push("/")} style={{textDecoration: 'underline',cursor:'pointer'}}>לחץ כאן</span> לחזרה לדף הבית</div>
        </>
    )
}

export default Page404
