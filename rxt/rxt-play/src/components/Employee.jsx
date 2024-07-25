import { PropTypes } from 'prop-types';
// import EditEmployee from './EditEmployee';
// import React from 'react';
// import EditEmployee from './EditEmployee';


export default function Employee({ name, role, avatar, update }) {
    return (
        <div className="min-w-[350px] max-w-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">

            <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={avatar} alt="avatar" />

            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {name}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {role}
                    </p>
                </div>

                {update}
            </div>
        </div>
    )
}



// Define props validation
Employee.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    update: PropTypes.object,
    func: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
}
