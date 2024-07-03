import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

const SignUpForm = () => {
    return (
        <>
            <div className="w-full">
                <form className="rounded px-4 pt-6 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <Input type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <Input inputType="password" placeholder="Password" />
                    </div>
                    <Button className="w-full mb-4" type="button">
                        Sign In
                    </Button>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <Link
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            to="/forgot-password"
                        >
                            Forgot Password?
                        </Link>
                        <p className="text-sm">
                            Don't have account yet?&nbsp;
                            <Link className="underline" to="/sign-up">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2024 All rights reserved.
                </p>
            </div>
        </>
    );
};

export default SignUpForm;
