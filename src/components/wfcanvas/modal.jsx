import React from 'react';
import MyForm from './form';

const Modal = ({ onClose }) => {
    console.log('modal');
    return (

        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
            <div className="container mx-auto bg-gray-500 bg-opacity-80 w-96 p-8">

                <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                </svg>
                </span>

                <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">Output</span>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
                        close
                    </button>
                </div>
                <div className="mt-4">
                    <MyForm />

                </div>

            </div>
        </div>
    );
}

export default Modal;