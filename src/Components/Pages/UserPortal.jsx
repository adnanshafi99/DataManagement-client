// Importing necessary components from the @material-tailwind/react library
import { Card, Typography } from '@material-tailwind/react';
import React from 'react';

// Define the table header with the columns to display
const TABLE_HEAD = ["Timestamp", "Name", "Shapecolor"];

// Define the table rows with sample data
const TABLE_ROWS = [
  {
    timestamp: "5:36:15 2022-03-26",
    name: "Albert",
    shapecolor: "Red Triangle",
  },
  {
    timestamp: "08:55:41 2023-07-12",
    name: "Edison",
    shapecolor: "Blue Square",
  },
  {
    timestamp: "23:48:13 2021-12-31",
    name: "Thomas",
    shapecolor: "Green Circle",
  },
  {
    timestamp: "04:21:30 2024-01-05",
    name: "Melissa",
    shapecolor: "Yellow Triangle",
  },
];

// Functional component for the User Portal displaying a grid layout
const UserPortal = () => {
  return (
    <div>
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
              className={`font-normal leading-none opacity-70 ${index === 2 ? '' : 'border-b border-blue-gray-100'}`}
            >
              {head}
            </Typography>
          ))}
          
          {/* Displaying the grid rows */}
          {TABLE_ROWS.map(({ timestamp, name, shapecolor }) => (
            <React.Fragment key={timestamp}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {timestamp}
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {name}
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {shapecolor}
              </Typography>
            </React.Fragment>
          ))}
        </div>
      </Card>
    </div>
  );
};

// Exporting the UserPortal component as the default export
export default UserPortal;
