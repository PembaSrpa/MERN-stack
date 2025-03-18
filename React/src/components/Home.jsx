import React from 'react'

export const Home = () => {
    return (
    <div className='w-[100%] flex flex-col min-h-screen'>
        <header className='bg-gray-400 text-center p-[2rem] mt-[3rem]'>
            <h2 className='text-3xl font-bold text-green-300 p-1'>This is Header.</h2>
            <p className='text-xl text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, nesciunt!.</p>
        </header>

        <main className="flex-grow p-[2rem] text-center border-1 bg-gray-300 ">
        <p className="text-black-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus quibusdam laboriosam suscipit minus, possimus minima ipsam cum laborum sed quam. Nostrum optio est ea quis nobis rerum commodi quo?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci atque voluptas eaque nihil accusamus sed debitis repellat numquam modi voluptatibus aspernatur animi obcaecati, voluptatem, iure quidem? Iste sapiente consequuntur quam nesciunt, omnis id laborum laudantium aliquam voluptatem, cum officia?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quis aliquam ex deleniti sit sequi facere porro, nisi odio cum modi sapiente sed ipsam numquam maxime provident natus expedita mollitia, possimus at sint perspiciatis optio eveniet distinctio! Labore molestias, ipsa eius delectus, ea error similique soluta animi officia deleniti corporis!
        </p>
        </main>

        <footer className="bg-gray-400 text-center p-[2rem] ">
        <p  className='text-3xl font-bold text-green-300 p-1'>This is footer.</p>
        </footer>
    </div>
    )
}
export default Home