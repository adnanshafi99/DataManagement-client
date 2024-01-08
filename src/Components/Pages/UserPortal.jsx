// Importing necessary components from the @material-tailwind/react library
import { Button, Card, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import './TestShape.css';
import { useNavigate } from 'react-router-dom';

// Define the table header with the columns to display
const TABLE_HEAD = ["Timestamp", "Name", "Shapecolor"];

const UserPortal = () => {
  const URL = 'https://backend-eta-silk.vercel.app/api/v1/members/';
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then(json => {
        setData(json);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Logout Button */}
      <Button className="btn self-end mt-4 mr-4" onClick={() => Navigate(`/`)}>Log Out</Button>

      {/* Card component to contain the grid layout */}
      <Card className="h-full w-full">
        {/* Container with a grid layout */}
        <div className="grid grid-cols-3 gap-4 p-4">
          {/* Displaying the grid header */}
          {TABLE_HEAD.map((head, index) => (
            <Typography
              key={index}
              variant="small"
              color="blue-gray"
              className={`font-normal leading-none opacity-70 ${index === 2 ? '' : 'border-b border-r border-blue-gray-100'}`}
            >
              {head}
            </Typography>
          ))}

          {/* Displaying the grid rows */}
          {data.map(({ id, timestamp, name, shape, color }, index) => (
            <React.Fragment key={id}>
              {/* Timestamp Column */}
              <Typography
                variant="small"
                color="blue-gray"
                className={`font-normal border-b ${index === data.length - 1 ? 'border-r' : ''} border-blue-gray-100`}
              >
                {timestamp}
              </Typography>
              {/* Name Column */}
              <Typography
                variant="small"
                color="blue-gray"
                className={`font-normal border-b ${index === data.length - 1 ? 'border-r' : ''} border-blue-gray-100`}
              >
                {name}
              </Typography>
              {/* Shapecolor Column */}
              <div className={`shape-color-row border-b border-blue-gray-100 ${index === data.length - 1 ? 'border-r' : ''}`}>
                {(() => {
                  // Conditional rendering based on shape and color
                  if (shape + color === "trianglered") {
                    return <div className='trianglered'></div>;
                  } else if (shape + color === "triangleblue") {
                    return <div className='triangleblue'></div>;
                  } else if (shape + color === "trianglegreen") {
                    return <div className='trianglegreen'></div>;
                  } else if (shape + color === "triangleyellow") {
                    return <div className='triangleyellow'></div>;
                  } else if (shape + color === "triangleorange") {
                    return <div className='triangleorange'></div>;
                  } else if (shape + color === "trianglepurple") {
                    return <div className='trianglepurple'></div>;
                  } else if (shape + color === "trianglepink") {
                    return <div className='trianglepink'></div>;
                  } else if (shape + color === "trianglebrown") {
                    return <div className='trianglebrown'></div>;
                  } else if (shape + color === "trianglegray") {
                    return <div className='trianglegray'></div>;
                  } else if (shape + color === "triangleblack") {
                    return <div className='triangleblack'></div>;
                  } else if (shape + color === "trianglewhite") {
                    return <div className='trianglewhite'></div>;
                  } else if (shape + color === "squarered") {
                    return <div className='squarered'></div>;
                  } else if (shape + color === "squareblue") {
                    return <div className='squareblue'></div>;
                  } else if (shape + color === "squaregreen") {
                    return <div className='squaregreen'></div>;
                  } else if (shape + color === "squareyellow") {
                    return <div className='squareyellow'></div>;
                  } else if (shape + color === "squareorange") {
                    return <div className='squareorange'></div>;
                  } else if (shape + color === "squarepurple") {
                    return <div className='squarepurple'></div>;
                  } else if (shape + color === "squarepink") {
                    return <div className='squarepink'></div>;
                  } else if (shape + color === "squarebrown") {
                    return <div className='squarebrown'></div>;
                  } else if (shape + color === "squaregray") {
                    return <div className='squaregray'></div>;
                  } else if (shape + color === "squareblack") {
                    return <div className='squareblack'></div>;
                  } else if (shape + color === "squarewhite") {
                    return <div className='squarewhite'></div>;
                  } else if (shape + color === "circlered") {
                    return <div className='circlered'></div>;
                  } else if (shape + color === "circlegreen") {
                    return <div className='circlegreen'></div>;
                  } else if (shape + color === "circleblue") {
                    return <div className='circleblue'></div>;
                  } else if (shape + color === "circleyellow") {
                    return <div className='circleyellow'></div>;
                  } else if (shape + color === "circleorange") {
                    return <div className='circleorange'></div>;
                  } else if (shape + color === "circlepurple") {
                    return <div className='circlepurple'></div>;
                  } else if (shape + color === "circlepink") {
                    return <div className='circlepink'></div>;
                  } else if (shape + color === "circlebrown") {
                    return <div className='circlebrown'></div>;
                  } else if (shape + color === "circlegray") {
                    return <div className='circlegray'></div>;
                  } else if (shape + color === "circleblack") {
                    return <div className='circleblack'></div>;
                  } else if (shape + color === "circlewhite") {
                    return <div className='circlewhite'></div>;
                  } else {
                    // Default class if no match
                    return "";
                  }
                })()}
              </div>
            </React.Fragment>
          ))}
        </div>
      </Card>
    </div>
  );
};

// Exporting the UserPortal component as the default export
export default UserPortal;
