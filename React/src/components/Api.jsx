import React, { use, useEffect, useState } from "react";
const items = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
];

const Api = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        // try {
        //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        //     setData( response.data);
        // }catch (error) {
        //     console.log(error);
        // }
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);
    return (
        <>
            <div className='grid grid-cols-5'>
                {data.map((item, index) => {
                    return (
                        <div
                            className='border-2 flex flex-col justify-center items-center p-4 m-2'
                            key={index}
                        >
                            <h1 className='font-bold'>{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Api;
