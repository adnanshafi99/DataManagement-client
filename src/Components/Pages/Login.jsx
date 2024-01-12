import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from './Context/AuthProvider';


const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            // Use signInUser function from AuthContext to sign in with email and password
            await signInUser(email, password);

            // Reset form and set success message
            e.target.reset();
            setSuccess('Logged In Successfully');
            // Redirect to Admin Portal if the email is admin, else User Portal
            if (email === "admin@gmail.com") {
                navigate('/admin-portal');
            } else {
                navigate('/user-portal');
            }

        } catch (error) {
            // Handle authentication errors
            if (error.code === 'auth/invalid-login-credentials') {
                setLoginError("Invalid email or password. Please check your credentials.");
            } else {
                setLoginError(error.message);
            }
        }

    }


   
    return (
        <div className="h-screen flex items-center justify-center  " >

            <div className='flex gap-5 shadow-xl rounded-xl '>
                {/* Left side with an image */}
                <div className='flex justify-center items-center'>
                    {/* Logo image */}
                    <img className='w-96 sm-hidden' src='Dokkaebi_R6S.png' alt="Logo"></img>
                </div>
                
                <div className="p-12 relative flex flex-col rounded-xl bg-transparent  text-gray-700   ">
                <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-4 grid h-28 place-items-center"><h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-white">Sign In</h3></div>
                    <p className="mt-1 text-center block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Enter your details to Log In.
                    </p>
                    <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="email" name="email" required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="password" name="password" required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>
                        </div>

                        <button
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] block w-full"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Log In
                        </button>
                       <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Don't have an account?
                            <NavLink className="font-medium text-pink-500 transition-colors hover:text-blue-700" to='/register'>Sign up</NavLink>
                        </p>

                    </form>

                    {
                        loginError && <p className="text-red-500">{loginError}</p>
                    }
                    {
                        success && <p className="text-green-500">{success}</p>
                    }

                </div>
            </div>
            </div>
            );
};

            export default Login;