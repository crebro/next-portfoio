import React from 'react'
import styles from "../../../../../styles/Navigation.module.css"

function Navigation() {
    return (
        <div className='flex items-center justify-center text-sm font-semibold'>
            <div className={`mx-4 transition duration-150 cursor-pointer ${styles['underline-animation']}`}> Home </div>
            <div className={`mx-4 transition duration-150 cursor-pointer ${styles['underline-animation']}`}> Projects </div>
            <div className={`mx-4 transition duration-150 cursor-pointer ${styles['underline-animation']}`}> Tweets </div>
            <div className={`mx-4 transition duration-150 cursor-pointer ${styles['underline-animation']}`}> Blog </div>
            <div className={`mx-4 transition duration-150 cursor-pointer ${styles['underline-animation']}`}> Support </div>
        </div>
    )
}

export default Navigation
