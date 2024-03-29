import React from 'react';
import '../css/Forbidden.css';

function Forbidden() {
    return (
        <div className="bg-gradient-to-r from-purple-300 to-blue-200">
            <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="text-9xl font-bold text-red-500">403</h1>
                        <h1 className="text-6xl font-medium py-8">Forbidden</h1>
                        <p className="text-2xl pb-8 px-12 font-medium">You do not have permission to access this page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forbidden;