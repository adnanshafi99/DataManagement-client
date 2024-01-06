/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const URL = 'http://localhost:3000/api/v1/members/'

const ModalForm = () => {
    const [timestamp, setTimestamp] = useState();
  console.log(timestamp);

    const [name,setName] = useState()
console.log(name)

const [shape,setShape] = useState()
console.log(shape)

const [color,setColor] = useState()
console.log(color)

useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(URL)
        result.json().then(json =>{
         console.log(json);   
        })
    }
    fetchData();
}, []);

const handleSubmit = (e) => {
    e.preventDefault();
    
    const currentDate = new Date();
    const formattedTimestamp = currentDate.toISOString();

    setTimestamp(formattedTimestamp);

    const member = { timestamp: formattedTimestamp, name, shape, color };

    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(member),
    })
      .then(() => {
        alert('New member added');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error adding new member:', error);
      });
  };


    return (
        <div>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={e=> setName(e.target.value)} type="name" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={e=> setShape(e.target.value)} type="Shape" name="floating_Shape" id="floating_Shape" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer lowercase" placeholder=" " required />
                    <label htmlFor="floating_Shape" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Shape</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={e=> setColor(e.target.value)} type="text" name="floating_color" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer lowercase" placeholder=" " required />
                    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Color</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default ModalForm;