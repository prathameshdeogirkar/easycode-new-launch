"use client"
import React from 'react'

function Login({setopenLogin}) {
    return (
        <div className="h-screen w-screen absolute top-0  flex items-center justify-center px-4  left-0 backdrop-blur-md z-[100] " onClick={()=>setopenLogin(false)}>
            <div className="bg-gray-800 p-8 rounded-xl  w-full max-w-sm">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Admin Login</h2>
                <form className="space-y-5" onClick={(e)=>e.stopPropagation()}>
    
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-white mb-1" htmlFor="mobile">Mobile Number</label>
                        <input
                            id="mobile"
                            type="tel"
                            placeholder="Enter your mobile number"
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 text-white"
                            required
                        />
                    </div>

        
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-white mb-1" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 text-white"
                            required
                        />
                    </div>

        
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-green-800 transition duration-300 cursor-pointer"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}


export default Login