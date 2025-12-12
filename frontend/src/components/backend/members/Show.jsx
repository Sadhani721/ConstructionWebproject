import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import { Link } from "react-router-dom";
import Footer from "../../common/Footer";
import { apiUrl, token } from "../../common/http";
import { toast } from "react-toastify";

const Show = () => {

  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    const res = await fetch(apiUrl + "members", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });
    const result = await res.json();
    setMembers(result.data);
  };

  const deleteMember = async (id) => {
    console.log("Delete button clicked for member ID:", id);

    try {
      console.log("Making DELETE request to:", apiUrl + "members/" + id);
      console.log("Token:", token());

      const res = await fetch(apiUrl + "members/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });

      console.log("Response status:", res.status);
      const result = await res.json();
      console.log("Response data:", result);

      if (result.status == true) {
        const newMembers = members.filter((member) => member.id != id);
        console.log("Filtered members:", newMembers);
        setMembers(newMembers);
        toast.success(result.message);
      } else {
        console.error("Delete failed:", result.message);
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error deleting member:", error);
      toast.error("Failed to delete member. Please try again.");
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>

            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body  p-4">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Members</h4>
                    <Link
                      to="/admin/members/create"
                      className="btn btn-primary"
                    >
                      Create
                    </Link>
                  </div>
                  <hr />

                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {members &&
                        members.map((member) => {
                          return (
                            <tr key={`member-${member.id}`}>
                              <td>{member.id}</td>
                              <td>{member.name}</td>
                              <td>{member.job_title}</td>
                              <td>
                                {member.status == 1 ? "Active" : "block"}
                              </td>
                              <td>
                                <Link
                                  to={`/admin/members/edit/${member.id}`}
                                  className="btn btn-primary btn-sm ms-2"
                                >
                                  Edit
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => deleteMember(member.id)}
                                  className="btn btn-danger btn-sm ms-2"
                                >
                                  DELETE
                                </button>
                              </td>
                            </tr>
                          );
                        })}
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
  );
};

export default Show;