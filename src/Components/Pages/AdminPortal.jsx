/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Input, Tooltip, Typography } from '@material-tailwind/react';
import ModalForm from "./ModalForm";
import UpdatePageModal from "./UpdatePageModal";

const TABLE_HEAD = ["Timestamp", "Name", "Shapecolor", "Edit/Delete",];


const AdminPortal = () => {
    const URL = 'http://localhost:3000/api/v1/members/'
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json => {
                setData(json);
            })
        }
        fetchData();
    }, []);

    const handleDelete = id => {
        fetch(`${URL} ${id}`, { method: 'DELETE' })
        console.log(id)
    }
    return (
        <div>
            <Card className="h-full w-full">
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
                        <tbody>
                            {data.map(
                                ({ id, timestamp, name, shapecolor }, index) => {
                                    const isLast = index === data.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={name}>
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
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {shapecolor}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <IconButton variant="text" onClick={() => {
                                                    console.log("ID: ",id)
                                                    document.getElementById('my_modal_3').showModal()
                                                }}>
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                                <dialog id="my_modal_3" className="modal">
                                                    <div className="modal-box">
                                                        <UpdatePageModal id={id}></UpdatePageModal>
                                                    </div>
                                                    <form method="dialog" className="modal-backdrop">
                                                        <button>close</button>
                                                    </form>
                                                </dialog>

                                                {/* <Tooltip content="Edit User">
                                                    <IconButton variant="text">
                                                        <PencilIcon className="h-4 w-4" />
                                                        
                                                    </IconButton>
                                                </Tooltip> */}
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
        </div>
    );
};

export default AdminPortal;