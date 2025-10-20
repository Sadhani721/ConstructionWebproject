import React, {useRef,useState,useMemo,useEffect} from 'react'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import Header from '../../common/Header'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import JoditEditor from 'jodit-react'
import { toast } from 'react-toastify'
import { apiUrl, token, fileUrl } from '../../common/http'
import { useParams } from 'react-router-dom'





const Edit = () => {
     const editor = useRef(null);
  const [content, setContent] = useState('');
  const[services,setServices]=useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const config = useMemo(() => ({
    readonly: false,
    placeholder: 'Enter content here...',
    height: 400,
    toolbarButtonSize: 'large',
    buttons: ['bold', 'italic', 'underline', '|', 'ul', 'ol', '|', 'font', 'fontsize', '|', 'outdent', 'indent', 'align', '|', 'hr', 'link', 'table'],
    removeButtons: ['brush', 'file'],
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: false
  }), []);

     const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch service data on component mount
  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(apiUrl + 'services/' + params.id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token()}`
          }
        });
        
        const result = await res.json();
        
        if (result.status) {
          const serviceData = result.data;
          console.log('Service data loaded:', serviceData);
          setContent(serviceData.content || '');
          setServices(serviceData);
          
          // Set form values
          setValue('title', serviceData.title || '');
          setValue('slug', serviceData.slug || '');
          setValue('short_desc', serviceData.short_desc || '');
          setValue('status', serviceData.status?.toString() || '1');
        } else {
          toast.error('Failed to load service data');
          // Navigate back if service not found
          setTimeout(() => {
            navigate('/admin/services');
          }, 2000);
        }
      } catch (error) {
        console.error('Error fetching service data:', error);
        toast.error('Error loading service data');
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchServiceData();
    }
  }, [params.id, setValue]);

          const navigate = useNavigate();
          const onSubmit = async (data) => {
                // Include the JoditEditor content in the form data
                const newData = {
                    ...data,
                    content: content,"image_id": imageId
                };
                
                try {
                    const res = await fetch(apiUrl + 'services/' + params.id, {
                        method: 'PUT',
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

             const handleFile = async(e) => {
                const formData = new FormData();
                const file = e.target.files[0];
                if (!file) return;
                
                formData.append('image', file);
            
                
                       await fetch(apiUrl + 'temp-images', {
                          method: 'POST',
                          headers: {
                   
                              'Accept': 'application/json',
                              'Authorization': `Bearer ${token()}`
                          },
                          body: formData
                      }).then(response => response.json())
                      .then(result =>{
                     if(result.status==false){
                       toast.error(result.errors.image[0]);
                     }else{
                    setImageId(result.data.id);
                     }
                      })
              } 

            const handleImageUpload = (e) => {
                const file = e.target.files[0];
                if (file) {
                    handleFile(file);
                }
            };

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
                                  <h4 className='h5'>Services / Edit</h4>
                                  <Link to="/admin/services" className='btn btn-primary'>Back</Link>
                              </div>
                              <hr />
                              
                              {isLoading ? (
                                <div className="text-center">
                                  <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                  </div>
                                </div>
                              ) : (
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
                                      <div style={{ minHeight: '200px' }}>
                                        <JoditEditor
                                              ref={editor}
                                              value={content}
                                              config={config}
                                              tabIndex={1}
                                              onBlur={newContent => setContent(newContent)}
                                              onChange={newContent => {}}
                                            />
                                      </div>
                                      </div>

                                         <div className="mb-3">
                                      <label htmlFor="" className='form-label'>Image</label>
                                      <br />
                                    <input onChange={handleFile} type="file" />
                                   
                                      </div>

                                      <div className="mb-3">
                                        {
                                        services.image && <img src={fileUrl + 'uploads/services/small/' + services.image} alt="" />
                                    }
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
                                      <button disabled={isDisable} className='btn btn-primary'>Update</button>

                              </form>
                              )}
                          </div>

                        </div>

                    </div>
              </div>
          </div>
            
        </main>

        <Footer/>
   
   
   </>
  )
}

export default Edit