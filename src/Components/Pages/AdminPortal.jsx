/* eslint-disable no-unused-vars */
import './TestShape.css';
import { useEffect, useState } from "react";
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Input, Tooltip, Typography } from '@material-tailwind/react';
import ModalForm from "./ModalForm";
import UpdatePageModal from "./UpdatePageModal";
import { Navigate, useNavigate } from 'react-router-dom';

const TABLE_HEAD = ["Timestamp", "Name", "Shapecolor", "Edit/Delete",];


const AdminPortal = () => {
    const [selectID, setSelectID] = useState("");
    // Constant and State
    const URL = 'https://backend-eta-silk.vercel.app/api/v1/members/'
    const [data, setData] = useState([]);
    const [changeCounter, setChangeCounter] = useState(0);
    const navigate = useNavigate();

    // Fetch data on component mount and when changeCounter changes
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json => {
                setData(json);
            })
        }
        fetchData();
    }, [changeCounter]);

    //Handle delete operation
    const handleDelete = id => {
        fetch(`${URL} ${id}`, { method: 'DELETE' })
            .then(() => { setChangeCounter(changeCounter + 1) })
        console.log(id)
    }
    return (
        <div>
            <Card className="h-full w-full">
                {/* Card Header */}
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Admin Portal
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <Button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}><UserPlusIcon strokeWidth={2} className="h-4 w-4" />Add Member</Button>
                            <Button className="btn" onClick={() => navigate(`/`)}>Log Out</Button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    <ModalForm></ModalForm>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head, index) => (
                                    <th
                                        key={head}
                                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                        >
                                            {head}{" "}
                                            {index !== TABLE_HEAD.length - 1 && (
                                                <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                            )}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {data.map(
                                ({ id, timestamp, name, shape, color }, index) => {
                                    const isLast = index === data.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={name}>
                                            {/* Timestamp Column */}
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex flex-col">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {timestamp}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            {/* Name Column */}
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {name}
                                                    </Typography>
                                                </div>
                                            </td>
                                            {/* Shapecolor Column */}
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {(() => {
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
                                                    </Typography>
                                                </div>
                                            </td>
                                            {/* Edit/Delete Column */}
                                            <td className={classes}>
                                                <IconButton variant="text" onClick={() => {
                                                    setSelectID(id)
                                                    console.log("ID: ")
                                                    document.getElementById('my_modal_3').showModal()
                                                }}>
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>


                                                {/* <Tooltip content="Edit User">
                                                    <IconButton variant="text">
                                                        <PencilIcon className="h-4 w-4" />
                                                        
                                                    </IconButton>
                                                </Tooltip> */}
                                                {/* Delete User Tooltip */}
                                                <Tooltip content="Delete User">
                                                    <IconButton onClick={e => handleDelete(id)} variant="text">
                                                        <TrashIcon className="h-4 w-4" />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>
                {/* Card Footer */}
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Page 1 of 10
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" size="sm">
                            Previous
                        </Button>
                        <Button variant="outlined" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <UpdatePageModal id={selectID}></UpdatePageModal>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default AdminPortal;