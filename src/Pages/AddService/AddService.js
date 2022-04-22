import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div className='w-50 mx-auto text-center'>
            <h2>Please Add a Service</h2>
            <form className='flex-colum' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} /><br />
                <textarea className='mb-2' placeholder='Description' {...register("description")} /><br />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} /><br />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} /><br />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;