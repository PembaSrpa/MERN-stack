import React from 'react'

export const Home = () => {
    return (
    <div className='h-[90%] w-[100%]'>
        <header className='bg-gray-400 text-center p-[3rem] '>
            <h2 className='text-3xl font-bold text-green-300 shadow-md p-1'>This is Header.</h2>
            <p className='text-xl text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, nesciunt!.</p>
        </header>
        <main className="p-[3rem] text-center border-1 bg-gray-300 ">
        <p className="text-black-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus quibusdam laboriosam suscipit minus, possimus minima ipsam cum laborum sed quam. Nostrum optio est ea quis nobis rerum commodi quo? <br> </br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci atque voluptas eaque nihil accusamus sed debitis repellat numquam modi voluptatibus aspernatur animi obcaecati, voluptatem, iure quidem? Iste sapiente consequuntur quam nesciunt, omnis id laborum laudantium aliquam voluptatem, cum officia?
        </p>
        </main>
        <footer className="bg-gray-400 text-center p-[3rem] ">
        <p  className='text-3xl font-bold text-green-300 shadow-md p-1'>This is footer.</p>
        </footer>
    </div>
    )
}
