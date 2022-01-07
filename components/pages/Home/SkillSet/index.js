import React from 'react'

function SkillSet() {

    return (
        <div className='flex items-center justify-center w-screen -translate-y-10'>
            <div className='w-[80%] xl:w-[55%] '>
                <div className='justify-center flex-col mt-10 items-center text-center'>
                    <div className='text-3xl font-extrabold'> My SkillSet</div>
                    <div className='text-sm'> I have learned a lot of technologies in my 2 years of development experience, here are some of them</div>
                    <div className='mt-8 flex-col itmes-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img src="/assets/images/technologies/flutter.png" className='w-16 h-16 mx-4' />
                            <img src="/assets/images/technologies/laravel.png" className='w-16 h-16 mx-4' />
                            <img src="/assets/images/technologies/tailwindcss.png" className='w-16 h-16 mx-4' />
                            <img src="/assets/images/technologies/react.png" className='w-16 h-16 mx-4' />
                            <img src="/assets/images/technologies/next.png" className='w-16 h-16 mx-4' />
                            <img src="/assets/images/technologies/figma.png" className='w-12 h-16 mx-4' />
                            <img src="/assets/images/technologies/mysql.png" className='w-16 h-16 mx-4' />
                        </div>
                        <div className='flex items-center justify-center mt-2'>
                            <img src="/assets/images/technologies/php.png" className='w-24 h-16 mx-4' />
                            <img src="/assets/images/technologies/python.png" className='w-16 h-16 mx-4' />
                            <img src="/assets/images/technologies/javascript.png" className='w-16 h-16 mx-4' />
                            <img src="/assets/images/technologies/dart.png" className='w-16 h-16 mx-4' />
                        </div>
                    </div>
                </div>
                <div className='text-lg font-bold mt-4'> Blogs coming soon ...</div>
            </div>
        </div>
    )
}

export default SkillSet
