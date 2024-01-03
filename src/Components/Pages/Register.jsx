import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react';
import React from 'react';

const Register = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="gray"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Registration
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Name" size="lg"/>
                    <Input label="Email" size="lg" />
                    <Input label="Password" size="lg" />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth>
                        Sign Up
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue-gray"
                            className="ml-1 font-bold"
                        >
                            Sign In
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Register;