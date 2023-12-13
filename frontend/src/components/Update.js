import { useState} from "react"
import { useNavigate,useParams} from "react-router-dom"
import axios from "axios";

export default function Update() {

    const {id} = useParams();

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
        axios.put('http://localhost:9091/AllEmployee/'+id,values)
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
                <h2>Update Employee Details</h2><br/>
                <div className='mb-4'>
     <input type='text' placeholder='id' onChange={e => setValues({...values,id:e.target.value})} value={values.id}/>
                </div><br/>

                <div className='mb-4'>
     <input type='text' placeholder='firstName' onChange={e => setValues({...values,firstname:e.target.value})} value={values.firstname}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='lastname' onChange={e => setValues({...values, lastname:e.target.value})} value={values.lastname}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='contact' onChange={e => setValues({...values, contact:e.target.value})} value={values.contact}/>
                </div><br/>

                <div className='mb-4'>
    <input type='text' placeholder='city' onChange={e => setValues({...values, city:e.target.value})} value={values.city}/>
                </div><br/>
                <button className='btn btn-success'>Submit</button>
            </form>
      </div>
    </div>
  )
}
