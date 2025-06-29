import React from 'react'

const SubmitButton = ({value})=> {
    return (
        <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-green-800 transition duration-300 cursor-pointer"
        >
            {value}
        </button>
    )
}

export default SubmitButton