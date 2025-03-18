import React, { useState } from "react";

const OnOff = () => {
const [count, setCount] = useState(false);
const [duck, setDuck] = useState(false);
const toggle = () => {
    setCount(!count);
};
const close = () => {
    setCount(false);
}
const quackle = () => {
    setDuck(!duck);
}
    return (
    <>
    <div className={`relative bg-gray-300 ${duck ? "bg-yellow-300" : "bg-gray-300"} ${count ? "" : ""}`}>
        <div className={`absolute ml-[15rem] mt-[15rem] ${duck ? "[display:flex]" : "[display:none]"}`}>
            <img src="/src/assets/duck-pog.gif" alt="" />
        </div>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis at magni, minus accusantium ut animi. Ipsam excepturi consequuntur illum cum inventore amet voluptatibus eveniet, explicabo, dicta unde laboriosam quibusdam.</span>
        <div className="relative flex flex-col items-center justify-center min-h-screen">
            <button
                className={`border rounded-md p-2 ${count ? "bg-blue-300" : "bg-green-300"}`}
                onClick={toggle}
            >
                {!count && "OPEN"}
            </button>
            <div className={`absolute flex-col items-center justify-between border-1 rounded-md p-6 shadow-md max-w-md bg-gray-200 ${count ? "[display:flex]" : "[display:none]"}`}>
                <img onClick={close} className="absolute top-2 right-2 h-[30px] bg-[aqua] rounded-2xl transition-all duration-200 hover:scale-110" src="/src/assets/icons8-cancel.svg" alt="" />
                <h1 className="text-2xl pb-7">Are You Sure?</h1>
                <div>
                    <button onClick={quackle}>{duck ? "NO QUACK ?" : "QUACK ?"}</button>
                    <button onClick={close}>CLOSE</button>
                </div>
            </div>
        </div>
    </div>
    </>
);
};
export default OnOff;



