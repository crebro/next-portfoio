import Link from 'next/link'
import React from 'react'
import styles from "../../../../../styles/Navigation.module.css"

function Navigation() {
    return (
        <div className='flex items-center justify-center text-sm font-semibold'>
            <Link href={"/"}><div className={`mx-4 transition duration-150 cursor-pointer ${styles['underline-animation']}`}> Home </div></Link> <br/>
            <Link href={"https://github.com/crebro/"}><a target={"_blank"} rel={'noreferrer'}> <div className={`mx-4 transition duration-150 cursor-pointer ${styles['underline-animation']}`}> Projects </div> </a></Link> <br/>
            <Link href={"https://twitter.com/duwalkreation"}><a target={"_blank"} rel={'noreferrer'}> <div className={`mx-4 transition duration-150 cursor-pointer ${styles['underline-animation']}`}> Tweets </div> </a></Link> <br/>
            <div className={`mx-4 transition duration-150 cursor-pointer ${styles['underline-animation']}`}> Blog </div>
            <Link href={"https://ko-fi.com/duwalkreation"}><a target={"_blank"} rel={'noreferrer'}> <div className={`mx-4 transition duration-150 cursor-pointer ${styles['underline-animation']}`}> Support </div> </a></Link> <br/>
        </div>
    )
}

export default Navigation
