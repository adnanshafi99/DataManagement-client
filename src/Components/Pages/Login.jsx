// Importing necessary components and hooks from external libraries
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./firebase-config";

// Functional component for the Login page
const Login = () => {
    // State variables to manage email, password, and error
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Event handler for handling the sign-in action
    const handleSignIn = async () => {
        try {
            // Attempt to sign in with email and password
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
            if (email === "admin@gmail.com") {
                navigate('/admin-portal');
            }
            // Redirect to User Portal after successful login
            else { navigate('/user-portal'); }

        } catch (error) {
            // Set error state if authentication fails
            setError(error.message);
        }
    };

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
                            {/* Logo image */}
                            <img className='w-96' src='Dokkaebi_R6S.png' alt="Logo"></img>
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
                                <Input
                                    label="Email"
                                    size="lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {/* Input component for password */}
                                <Input
                                    label="Password"
                                    size="lg"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {/* Checkbox for "Remember Me" */}
                                <div className="-ml-2.5">
                                    <Checkbox label="Remember Me" />
                                </div>
                            </CardBody>
                            {/* CardFooter for the buttons and additional information */}
                            <CardFooter className="pt-0">
                                {/* Button component for the Sign In action */}
                                <Button
                                    variant="gradient"
                                    fullWidth
                                    onClick={handleSignIn}
                                >
                                    Sign In
                                </Button>
                                {/* Display error message if authentication fails */}
                                {error && (
                                    <Typography
                                        variant="small"
                                        color="red"
                                        className="mt-2 text-center"
                                    >
                                        {error}
                                    </Typography>
                                )}
                                {/* Additional information with a Link to sign up */}
                                <Typography variant="small" className="mt-6 flex justify-center">
                                    Don&apos;t have an account?
                                    <Link to="/register" className="ml-1 font-bold text-blue-gray">
                                        Sign up
                                    </Link>
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
