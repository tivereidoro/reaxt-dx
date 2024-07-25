import '../styles/index.css';
import { useState } from 'react';
import avatar1 from '../assets/01.jpg';
import avatar2 from '../assets/02.jpg';
import avatar3 from '../assets/03.jpg';
import avatar4 from '../assets/04.jpg';
import avatar5 from '../assets/05.jpg';
import avatar6 from '../assets/06.jpg';
import avatar9 from '../assets/09.jpg';
import Employee from '../components/Employee';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import { v4 as uuidv4 } from 'uuid';


export default function EmployeesPage() {
  const showEmployee = true;
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Tivere', role: 'Jnr. Engineer', avatar: avatar2 },
    { id: 2, name: 'Osaretin', role: 'Intern', avatar: avatar1 },
    { id: 3, name: 'Caleb', role: 'Tester', avatar: avatar6 },
    { id: 4, name: 'Pneuma', role: 'Developer', avatar: avatar4 },
    { id: 5, name: 'Jake', role: 'Frontend Dev.', avatar: avatar3 },
    { id: 6, name: 'Nelly', role: 'P.M', avatar: avatar5 },
    { id: 7, name: 'Lyric', role: 'Intern', avatar: avatar9 },
  ]);

  // Function for editing and updating
  // an employee's details.
  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {

        // Update and return the new employee
        // if the id matches
        return { ...employee, name: newName, role: newRole }
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  // Adds new employee to the list
  function addNewEmployee(name, role, avatar) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      avatar: avatar,
    }
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div className='App min-h-screen bg-gray-300'>
      {showEmployee ?

        <>
          <div className='flex flex-wrap justify-center py-3'>
            {employees.map((employee) => {
              // Define and pass a component as prop
              const editEmployee = <EditEmployee id={employee.id} name={employee.name} role={employee.role} update={updateEmployee} />

              return (
                <Employee
                  name={employee.name}
                  role={employee.role}
                  avatar={employee.avatar}
                  key={employee.id}
                  id={employee.id}
                  update={editEmployee}
                />
              )
            })}
          </div>

          <AddEmployee func={addNewEmployee} />
        </>

        :

        <p>You need admin priviledges to see this page</p>
      }

    </div>
  )
}
