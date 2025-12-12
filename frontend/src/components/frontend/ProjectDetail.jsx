import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link, useParams } from 'react-router-dom'
import { apiUrl, fileUrl } from '../common/http'
import Hero from '../common/Hero'
import ShowTestimonial from '../common/ShowTestimonial'

const ProjectDetail = () => {

    const params = useParams();
    const [project, setProject] = useState([]);
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
    const res = await fetch(`${apiUrl}get-projects`,{
        method: 'GET'
    });
    const result = await res.json();
    setProjects(result.data);
  }


  
    const fetchProject = async () => {
        const res = await fetch(`${apiUrl}get-project/${params.id}`,{
            method: 'GET'
        });
        const result = await res.json();
        setProject(result.data);
      }
  
  
    useEffect(() => {
    fetchProjects();
    fetchProject();
  }, [params.id]);

  return (
    <>
    <Header/>
      <main>
          <Hero 
            preHeading='Quality | Itigrity | Value'
            heading={`${project.title}`}
            text=''
          />

          <section className="section-10">
              <div className="container py-5">
                <div className="row">
                  <div className="col-md-4">
                      <div className="card shadow border-0 sidebar">
                          <div className="card-body px-4 py-4">
                              <h3 className="mt-2 mb-3">Our Projects</h3>
                              <ul>
                                 {
                                    project && projects.map(project => {
                                      return (
                                        <li key={`project-${project.id}`}>
                                           <Link to={`/project/${project.id}`} >{project.title}</Link>
                                        </li>
                                      )
                                    })
                                  } 

                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-8">
                    <div>
                        <img className='w-100' src={`${fileUrl}uploads/projects/large/${project.image}`} alt="" />
                    </div>
                    <h3 className='py-3'>{project.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: project.content }}>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          <section className='section-11 bg-light py-5'>
             <ShowTestimonial/>
          </section>
      </main>
    <Footer/>
  </>
  )
}

export default ProjectDetail