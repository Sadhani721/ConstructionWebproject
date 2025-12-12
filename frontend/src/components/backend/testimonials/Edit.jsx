import React, { useState } from "react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../common/Footer";
import { apiUrl, fileUrl, token } from "../../common/http";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Edit = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [testimonial, setTestimonial] = useState([]);
  const params = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      try {
        const res = await fetch(apiUrl + "testimonials/" + params.id, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token()}`,
          },
        });
        const result = await res.json();

        if (result.status === false || !result.data) {
          toast.error(result.message || "Failed to load testimonial data");
          navigate("/admin/testimonials");
          return {};
        }

        setTestimonial(result.data);
        return {
          name: result.data.name,
          testimonial: result.data.testimonial,
          designation: result.data.designation,
          status: result.data.status,
        };
      } catch (error) {
        console.error("Error loading testimonial:", error);
        toast.error("Failed to load testimonial data. Please try again.");
        navigate("/admin/testimonials");
        return {};
      }
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newData = { ...data, image_id: imageId };
    const res = await fetch(apiUrl + "testimonials/" + params.id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    });
    const result = await res.json();

    if (result.status == true) {
      toast.success(result.message);
      navigate("/admin/testimonials");
    } else {
      toast.error(result.message);
    }
  };

  const handleFile = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);
    setIsDisable(true);

    await fetch(apiUrl + "temp-images", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setIsDisable(false);
        if (result.status == false) {
          toast.error(result.errors.image[0]);
        } else {
          setImageId(result.data.id);
        }
      });
  };

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
                    <h4 className="h5">Testimonials/Edit</h4>
                    <Link to="/admin/testimonials" className="btn btn-primary">
                      Back
                    </Link>
                  </div>
                  <hr />

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label htmlFor="" className="form-lable">
                        Testimonial
                      </label>
                      <textarea
                        placeholder="Testimonial"
                        {...register("testimonial", {
                          required: "The testimonial field is required",
                        })}
                        className={`form-control ${errors.testimonial && "is-invalid"
                          }`}
                        rows={4}
                      ></textarea>
                      {errors.testimonial && (
                        <p className="invalid-feedback">
                          {errors.testimonial?.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="" className="form-lable">
                        Citation
                      </label>
                      <input
                        placeholder="Citation"
                        {...register("name", {
                          required: "The citation field is required",
                        })}
                        type="text"
                        className={`form-control ${errors.name && "is-invalid"
                          }`}
                      />
                      {errors.name && (
                        <p className="invalid-feedback">
                          {errors.name?.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="" className="form-lable">
                        Designation
                      </label>
                      <input
                        placeholder="designation"
                        {...register("designation")}
                        type="text"
                        className={"form-control"}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="" className="form-lable">
                        Image
                      </label>
                      <br />
                      <input onChange={handleFile} type="file" accept="image/jpeg,image/png,image/jpg,image/gif" />
                    </div>

                    {testimonial.image &&
                      <img width={100} src={fileUrl + "uploads/testimonials/" + testimonial.image} alt="" />
                    }

                    <div className="mb-3">
                      <label htmlFor="" className="form-lable">
                        Status
                      </label>
                      <select className="form-control" {...register("status")}>
                        <option value="1">Active</option>
                        <option value="0">Block</option>
                      </select>
                    </div>

                    <button disabled={isDisable} className="btn btn-primary">
                      Update
                    </button>
                  </form>
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

export default Edit;