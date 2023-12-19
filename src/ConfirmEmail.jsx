import React from 'react'
import './App.css'


const ConfirmEmail = () => {
    return (
        <div class="actions">
            <div className=''>
                <div class="cardi py-5">
                    <div class="header">
                        <div class="image">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                            </svg>
                        </div>
                        <div class="content">
                            <h2>
                                <span class="title">Verify your email</span>
                            </h2>
                            <p class="message">WE sent a verification Email to jondoe@gmail.com. Check your inbox for next steps</p>
                        </div>

                        <div className='bgg'>  
                            <button className='button123 w-100'>Confirmed Email?</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmEmail