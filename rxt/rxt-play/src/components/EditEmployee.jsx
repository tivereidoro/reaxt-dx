import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { PropTypes } from 'prop-types';
// import Button from 'react-bootstrap/Button';


export default function EditEmployee({ name, role, id, update }) {
    // Define state functionalities
    const [employeeName, setName] = useState(name);
    const [employeeRole, setRole] = useState(role);
    // Define modal show and close
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>

            {/* Pop-up modal for editing employee details */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form id='editemployee' className="w-full max-w-sm" onSubmit={(e) => {
                        e.preventDefault();
                        update(id, employeeName, employeeRole);
                        handleClose();
                    }
                    }>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="full-name">
                                    Full Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="full-name" type="text" value={employeeName}
                                    onChange={(e) => { setName(e.target.value) }} />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                                    Employee Role
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="role" type="text" value={employeeRole}
                                    onChange={(e) => { setRole(e.target.value) }} />
                            </div>
                        </div>
                    </form>
                </Modal.Body>

                {/* Close and update buttons */}
                <Modal.Footer>
                    <button onClick={handleClose} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-black hover:bg-slate-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Close</button>

                    <button form='editemployee' className="px-4 py-1 font-bold bg-purple-600 text-sm text-white font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}





// Define props validation
EditEmployee.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    update: PropTypes.func,
    func: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
}
