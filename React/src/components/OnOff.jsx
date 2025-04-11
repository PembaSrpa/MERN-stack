import React, { useEffect, useState } from "react";

const OnOff = () => {
    const [count, setCount] = useState(false);
    const [duck, setDuck] = useState(false);
    const toggle = () => {
        setCount(!count);
    };
    const close = () => {
        setCount(false);
    };
    const quackle = () => {
        setDuck(!duck);
    };
    const [click, setClick] = useState(0);

    const add = () => {
        setClick(click + 1);
    };

    const myFun = () => {
        console.log("Count Value " + click);
    };
    useEffect(() => {
        myFun();
    }, [click]);

    return (
        <>
            <div
                className={`relative bg-gray-300 ${
                    duck ? "bg-yellow-300" : "bg-gray-300"
                } ${count ? "" : ""}`}
            >
                <div
                    className={`absolute ml-[15rem] mt-[15rem] ${
                        duck ? "[display:flex]" : "[display:none]"
                    }`}
                >
                    <img src='/src/assets/duck-pog.gif' alt='' />
                </div>
                <div className='relative flex flex-col items-center justify-center min-h-screen'>
                    <button
                        className={`border rounded-md p-2 ${
                            count ? "bg-blue-300" : "bg-green-300"
                        }`}
                        onClick={toggle}
                    >
                        {!count ? "OPEN" : "CLOSE"}
                    </button>

                    <div
                        className={`absolute flex-col items-center justify-between border-1 rounded-md p-6 shadow-md max-w-md bg-gray-200 ${
                            count ? "[display:flex]" : "[display:none]"
                        }`}
                    >
                        <img
                            onClick={close}
                            className='absolute top-2 right-2 h-[30px] bg-[aqua] rounded-2xl transition-all duration-200 hover:scale-110'
                            src='/src/assets/icons8-cancel.svg'
                            alt=''
                        />
                        <h1 className='text-2xl pb-7'>Are You Sure?</h1>
                        <div>
                            <button onClick={quackle}>
                                {duck ? "NO QUACK ?" : "QUACK ?"}
                            </button>
                            <button onClick={add}>
                                <p>{click}</p>
                            </button>
                            <button onClick={close}>CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OnOff;
