import React from 'react';

const Progress = () => {
    return (
        <div className='w-screen z-20 absolute  bg-slate-200 top-0 left-0 h-screen flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Progress;