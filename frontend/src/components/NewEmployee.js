import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NewEmployee() {

    const [values, setValues] = useState({
        id: '',
        firstname: '',
        lastname: '',
        contact: '',
        city: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:9091/InsertEmployee',values)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    };


  return (
    <div className='d-flex justify-content-center'>
      <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Employee</h2><br/>
                <div className='mb-4'>
     <input type='text' placeholder='id' onChange={e => setValues({...values,id:e.target.value})}/>
                </div><br/>

                <div className='mb-4'>
     <input type='text' placeholder='FirstName' onChange={e => setValues({...values,firstname:e.target.value})}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='LastName' onChange={e => setValues({...values, lastname:e.target.value})}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='Contact' onChange={e => setValues({...values, contact:e.target.value})}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='City' onChange={e => setValues({...values, city:e.target.value})}/>
                </div><br/>
                <button className='btn btn-success'>Submit</button>
            </form>
      </div>
    </div>
  )
}
