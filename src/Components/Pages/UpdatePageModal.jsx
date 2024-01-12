/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';


const URL = 'https://backend-eta-silk.vercel.app/api/v1/members/'

const UpdatePageModal = (props) => {
// State for form fields
const [timestamp, setTimestamp] = useState();
const [name, setName] = useState()
const [shape, setShape] = useState()
const [color, setColor] = useState()

// List of valid colors
const validShapes = ['square', 'triangle', 'circle'];
const validColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'gray',
    'black',
    'white',
];
const [oldData, setOldData] = useState({})
useEffect(() => {
    // Fetch existing data for the specified ID
    fetch(`${URL}${props.id}`, {
      method: 'GET',
    })
      .then((result) => {
        result.json().then((json) => {
          // Set the fetched data to state
          setOldData(json);
          setTimestamp(json.timestamp);
          setName(json.name);
          setShape(json.shape);
          setColor(json.color);
        });
      })
      .catch((error) => {
        console.error('Error fetching member data:', error);
      });
  }, [props.id]);


    useEffect((()=>{
        // API call to get member
    fetch(`${URL}${props.id}`, {
        method: 'GET',
    })
        .then((result) => {
            console.log();
            result.json().then(json => {
                setOldData(json);

            })
        })
        .catch((error) => {
            console.error('Error Updating member:', error);
        });
    }),[props])
    console.log(props);

    
    console.log(oldData);
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert shape and color to lowercase for case-insensitive validation
        const lowercaseShape = shape.toLowerCase();
        const lowercaseColor = color.toLowerCase();

        // Check if the provided shape is valid
        if (!validShapes.includes(lowercaseShape)) {
            alert('Invalid shape. Only square, triangle, and circle are accepted. Lowercase only');
            return;
        }

        // Check if the provided color is valid
        if (!validColors.includes(lowercaseColor)) {
            alert('Invalid color. Only red, blue, green, yellow, orange, purple, pink, brown, gray, black, and white are accepted.Lowercase only');
            return;
        }

        const currentDate = new Date();
        const formattedTimestamp = currentDate.toISOString();

        setTimestamp(formattedTimestamp);

        const member = { id: props.id, timestamp: formattedTimestamp, name, shape, color };

        // API call to update member
        fetch(`${URL}${props.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(member),
        })
            .then(() => {
                alert('Member Updated');
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error Updating member:', error);
            });
    };

    console.log(oldData);
    return (
        <div>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="relative z-0 w-full mb-5 group">
                    <input defaultValue={oldData[0]?.name} onChange={e => setName(e.target.value)} type="name" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                {/* Shape Input */}
                <div className="relative z-0 w-full mb-5 group">
                    <select
                        onChange={(e) => setShape(e.target.value)}
                        value={oldData[0]?.shape}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                        <option value="">
                            Select Shape
                        </option>
                        {validShapes.map((validShape) => (
                            <option key={validShape} value={validShape}>
                                {validShape}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Color Input */}
                <div className="relative z-0 w-full mb-5 group">
                    <select
                        onChange={(e) => setColor(e.target.value)}
                        value={oldData[0]?.color}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                        <option value="">
                            Select Color
                        </option>
                        {validColors.map((validColor) => (
                            <option key={validColor} value={validColor}>
                                {validColor}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Update Button */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            </form>

        </div>
    );
};


export default UpdatePageModal;