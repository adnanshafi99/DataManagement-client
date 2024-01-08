// Importing necessary components and hooks from external libraries
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate, Link } from 'react-router-dom';

// Functional component for the Registration page
const Register = () => {
    // State variables to manage name, email, password, and error
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Event handler for handling the sign-up action
    const handleSignUp = async () => {
        try {
            // Create a new user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Set user's display name
            await updateProfile(user, { displayName: name });

            // Redirect to User Portal after successful registration
            navigate('/user-portal');
        } catch (error) {
            // Set error state if registration fails
            setError(error.message);
        }
    };

    return (
        // Container with flex properties to center content vertically and horizontally
        <div className='flex justify-center items-center h-screen'>
            {/* Card component for the registration form */}
            <Card className="w-96">
                {/* CardHeader for the title of the card */}
                <CardHeader
                    variant="gradient"
                    color="gray"
                    className="mb-4 grid h-28 place-items-center"
                >
                    {/* Typography component for the title */}
                    <Typography variant="h3" color="white">
                        Registration
                    </Typography>
                </CardHeader>
                {/* CardBody for the form inputs */}
                <CardBody className="flex flex-col gap-4">
                    {/* Input component for name */}
                    <Input
                        label="Name"
                        size="lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                </CardBody>
                {/* CardFooter for the buttons and additional information */}
                <CardFooter className="pt-0">
                    {/* Button component for the Sign Up action */}
                    <Button
                        variant="gradient"
                        fullWidth
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>
                    {/* Display error message if registration fails */}
                    {error && (
                        <Typography
                            variant="small"
                            color="red"
                            className="mt-2 text-center"
                        >
                            {error}
                        </Typography>
                    )}
                    {/* Additional information with a Link to sign in */}
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Have an account?
                        <Link to="/" className="ml-1 font-bold text-blue-gray">
                            Sign In
                        </Link>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

// Exporting the Register component as the default export
export default Register;
