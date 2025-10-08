import React, { useState, useRef, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import { useForm } from "react-hook-form"
import { apiUrl, token } from '../../common/http'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react';

const Create = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = useMemo(() => ({
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: placeholder || 'Start typing your content...',
    height: 300
  }), [placeholder]);

     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

          const navigate = useNavigate();

  const onSubmit = async (data) => {
      // Include the JoditEditor content in the form data
      const newData = {
          ...data,
          content: content
      };
      
      try {
          const res = await fetch(apiUrl + 'services', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${token()}`
              },
              body: JSON.stringify(newData)
          });
          
          const result = await res.json();
          
          if (result.status === true) {
              toast.success(result.message);
              navigate('/admin/services');
          } else {
              toast.error(result.message);
          }
          console.log(result);
      } catch (error) {
          console.error('Error submitting form:', error);
          toast.error('An error occurred while submitting the form');
      }
  } 

  return (
    <>
    
        <Header />
      
        <main >
          <div className='container my-5'>
              <div className='row'>
                    <div className='col-md-3'>
                      <Sidebar />
                      {/* Sidebar */}
                          
                    </div>
                  
                    <div className='col-md-9 dashboard'>
                        {/* Dashboard Content */}
                        <div className='card shadow border-0'>
                          <div className='card-body p-4' >
                              <div className='d-flex justify-content-between'>
                                  <h4 className='h5'>Services / Create</h4>
                                  <Link to="/admin/services" className='btn btn-primary'>Back</Link>
                              </div>
                              <hr />
                              <form onSubmit={handleSubmit(onSubmit)}>
                                  <div className="mb-3">
                                      <label htmlFor="" className='form-label'>Name</label>
                                      <input
                                    placeholder='title'


                                      {...register('title', { 
                                          required: "The title is required"
                                      })}
                                      type="text" 
                                      className={`form-control ${errors.title && 'is-invalid'}`}
                                      />
                                {
                                  errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>
                                }

                                      </div>

                                      
                                      <div className="mb-3">
                                      <label htmlFor="" className='form-label'>Slug</label>
                                      <input type="text" 
                                      placeholder='slug'
                                      {...register('slug', { 
                                          required: "The slug is required"
                                      })}
                                      className={`form-control ${errors.slug && 'is-invalid'}`} />
                                        {
                                  errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>
                                }

                                      </div>

                                      <div className="mb-3">
                                      <label htmlFor="" className='form-label'>Short Description</label>
                                      <textarea 
                                      placeholder='short description'
                                      {...register('short_desc')}
                                      className="form-control" rows={4}></textarea>
                                      </div>

                                      <div className="mb-3">
                                      <label htmlFor="" className='form-label'>Content</label>
                                      <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1} // tabIndex of textarea
                                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                            onChange={newContent => setContent(newContent)}
                                          />
                                      </div>

                                      <div className="mb-3">
                                      <label htmlFor="" className='form-label'>Status</label>
                                    <select 
                                    className='form-control' 
                                    {...register('status')}
                                    >
                                      <option value ="1">Active</option>
                                      <option value ="0">Block</option>
                                    </select>
                                      </div>
                                      <button className='btn btn-primary'>Submit</button>

                              </form>
                          </div>

                        </div>

                    </div>
              </div>
          </div>
            
        </main>

        <Footer />
      </>
  )
}

export default Create