import React, { useContext } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from './context/Auth'

const Login = () => {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log("Attempting login with:", data);
    
    try {
      const res = await fetch("http://localhost:8000/api/authenticate",{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      console.log("Response status:", res.status);
      console.log("Response ok:", res.ok);

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error response:", errorText);
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      console.log("Authentication response:", result);

      if(result.status==false){
        toast.error(result.message || "Invalid email or password");
      }else{
        const userInfo={
          id:result.id,
          token:result.token
        }
        localStorage.setItem('userInfo',JSON.stringify(userInfo))
        login(userInfo);
        toast.success("Login successful!");
        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.error("Login error details:", error);
      
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        toast.error("Network Error: Cannot connect to server. Make sure backend is running on port 8000.");
      } else if (error.message.includes('HTTP error')) {
        toast.error(`Server responded with error: ${error.message}`);
      } else {
        toast.error(`Connection Error: ${error.message}`);
      }
    }
  }

  return (
      <>
          <Header/>
             <main>
                <div className='container my-5'>
                  <div className="login-form my-5 mx-auto" style={{ maxWidth: '400px' }}>
                     <div className="card border-0 shadow">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                              <h4 className='mb-3'>Loging Here</h4>
                                <div className="mb-3">
                                    <label htmlFor="form-lable">Email</label>
                                    <input
                                        {
                                          ...register('email',{
                                            required:"This field is required",
                                            pattern: {
                                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                              message: 'Please enter a valid email address'
                                          }
                                          })
                                        }
                                    type="text" placeholder='Email' 
                                    className={`form-control ${errors.email && 'is-invalid'}`}/>
                                    {
                                      errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>
                                    }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="form-lable">Password</label>
                                    <input 
                                      {
                                        ...register('password',{
                                          required:"This field is required"
                                        })
                                      }
                                    type="Password" placeholder='Password' 
                                    className={`form-control ${errors.password && 'is-invalid'}`}/>
                                    {
                                      errors.password && <p className='invalid-feedback'>{errors.password?.message}</p>
                                    }
                                </div>
                                <button type='submit' className='btn btn-primary'>Login</button>
                            </form>
                        </div>
                     </div>
                  </div>
                </div>
             </main>
          <Footer/>
      </>
  )
}

export default Login