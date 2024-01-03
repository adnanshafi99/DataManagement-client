// Importing necessary components from the @material-tailwind/react library
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react';

// Functional component for the Login page
const Login = () => {
    return (
        // Container with flex properties to center content vertically and horizontally
        <div className='flex justify-center items-center h-screen'>
            <div>
                {/* Card component for the login form */}
                <Card className="">
                    {/* Flex container with a gap between child elements */}
                    <div className='flex gap-5'>
                        {/* Left side with an image */}
                        <div className='flex justify-center items-center'>
                            <img className='w-96' src='Dokkaebi_R6S.png'></img>
                        </div>
                        
                        {/* Right side with the login form */}
                        <div>
                            {/* CardHeader for the title of the card */}
                            <CardHeader
                                variant="gradient"
                                color="gray"
                                className="mb-4 grid h-28 place-items-center"
                            >
                                {/* Typography component for the title */}
                                <Typography variant="h3" color="white">
                                    Sign In
                                </Typography>
                            </CardHeader>
                            {/* CardBody for the form inputs */}
                            <CardBody className="flex flex-col gap-4">
                                {/* Input component for email */}
                                <Input label="Email" size="lg" />
                                {/* Input component for password */}
                                <Input label="Password" size="lg" />
                                {/* Checkbox for "Remember Me" */}
                                <div className="-ml-2.5">
                                    <Checkbox label="Remember Me" />
                                </div>
                            </CardBody>
                            {/* CardFooter for the buttons and additional information */}
                            <CardFooter className="pt-0">
                                {/* Button component for the Sign In action */}
                                <Button variant="gradient" fullWidth>
                                    Sign In
                                </Button>
                                {/* Additional information with a link to sign up */}
                                <Typography variant="small" className="mt-6 flex justify-center">
                                    Don&apos;t have an account?
                                    <Typography
                                        as="a"
                                        href="#signup"
                                        variant="small"
                                        color="blue-gray"
                                        className="ml-1 font-bold"
                                    >
                                        Sign up
                                    </Typography>
                                </Typography>
                            </CardFooter>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

// Exporting the Login component as the default export
export default Login;
