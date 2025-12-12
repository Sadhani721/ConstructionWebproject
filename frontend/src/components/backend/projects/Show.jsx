import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import { Link } from 'react-router-dom'
import Footer from '../../common/Footer'
import { apiUrl, token } from '../../common/http'
import { toast } from 'react-toastify'

const Show = () => {

  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await fetch(apiUrl + 'projects', {
        'method': 'GET',
        'headers': {
          'Content-type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token()}`
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      console.log('Projects fetched:', result);

      if (result.status && result.data) {
        setProjects(result.data);
      } else {
        console.error('Unexpected API response:', result);
        toast.error('Failed to load projects');
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Error loading projects: ' + error.message);
    }
  }

  const deleteProject = async (id) => {

    try {
      const res = await fetch(apiUrl + 'projects/' + id, {
        'method': 'DELETE',
        'headers': {
          'Content-type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token()}`
        }
      });
      const result = await res.json();

      if (result.status == true) {
        toast.success(result.message);
        const newProjects = projects.filter(project => project.id != id)
        setProjects(newProjects)
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project. Please try again.");
    }
  }

  useEffect(() => {
    fetchProjects();
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className='row'>
            <div className='col-md-3'>
              <Sidebar />
            </div>


            <div className='col-md-9'>
              <div className="card shadow border-0">
                <div className="card-body  p-4">
                  <div className="d-flex justify-content-between">
                    <h4 className='h5'>projects</h4>
                    <Link to="/admin/projects/create" className='btn btn-primary'>Create</Link>
                  </div>
                  <hr />

                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        projects && projects.map(project => {
                          return (
                            <tr key={`project-${project.id}`}>
                              <td>{project.id}</td>
                              <td>{project.title}</td>
                              <td>{project.slug}</td>
                              <td>
                                {
                                  (project.status == 1) ? 'Active' : 'Inactive'
                                }
                              </td>
                              <td>
                                <Link to={`/admin/projects/edit/${project.id}`} className='btn btn-primary btn-sm ms-2'>Edit</Link>
                                <button type="button" onClick={() => deleteProject(project.id)} className='btn btn-danger btn-sm ms-2'>DELETE</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
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

export default Show