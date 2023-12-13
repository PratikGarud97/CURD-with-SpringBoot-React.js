import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom';
import axios from 'axios';


function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9091/');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleDelete = (id) =>{
    axios.delete('http://localhost:9091/AllEmployee/'+id)
    .then(res => {
      window.location.reload();
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex bd-highlight'>
    <div className='w-50 bg-white rounded p-3'>
          <h1>Employee List</h1>
          <div className='d-flex justify-content-end'>
            <Link to="/create" className='btn btn-success'>Create New Employee</Link>
          </div>
        <table className='table'>
            <thead>
                  <tr>
                    <th>Id</th><br></br><br/>
                    <th>FirstName</th><br></br><br/>
                    <th>LastName</th><br/><br/>
                    <th>Contact</th><br/><br/>
                    <th>City</th><br></br>
                    <th>Action</th>
                  </tr>
            </thead>
              <tbody>
                  {data.map((employee,index) =>{
                    return <tr key={index}>
                    <td>{employee.id}</td><br/><br/>
                    <td>{employee.firstname}</td><br/><br/>
                    <td>{employee.lastname}</td><br/><br/>
                    <td>{employee.contact}</td><br/><br/>
                    <td>{employee.city}</td><br/><br/>
                    <td><br/>
                    <Link to={`/update/${employee.id}`} className='btn btn-sm btn-primary mx-2'>Update</Link>
                    <button onClick={ () => handleDelete(employee.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                    </tr>
                  })}
              </tbody>
        </table>
    </div>
  </div>
  )
}

export default Home;
