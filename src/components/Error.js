import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-red-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
                <h1 className="text-5xl font-extrabold text-red-600 mb-4">Oops!!</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Something went wrong!</h2>
                <h3 className="text-xl text-gray-600">
                    {err.status} : {err.statusText}
                </h3>
                <p className="mt-4 text-gray-500">Please try again later or contact support if the problem persists.</p>
            </div>
        </div>
    );
};

export default Error;
