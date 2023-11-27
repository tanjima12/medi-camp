import { useContext } from "react";
import NavBar from "../Home/Navbar";
import "./Authentication.css";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hook/useAxiosPublic";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password, data.name, data.role)
      .then((result) => {
        console.log(result.user);
        updateUser(data.name, data.photoURL).then(() => {
          console.log(result.user);
          const useInfo = {
            email: data.email,
            name: data.name,
            photoURL: data.photoURL,
            roll: data.role,
          };
          axiosPublic.post("/users", useInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("userAdded");
              reset();
              navigate("/");
            }
            console.log(res.data);
          });

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User register in successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      })
      .catch((error) => {
        console.error(error);
        // Handle errors, show a message to the user, etc.
      });
    // .catch((error) => console.error(error));
  };

  //
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const photo = form.photo.value;
  //   const role = form.role.value;
  //   console.log(email, password, name, role);
  //   if (password.length < 6) {
  //     return toast.error("Sorry your password is less than 6 character");
  //   } else if (/^[a-zA-Z0-9]*$/.test(password)) {
  //     return toast.error("There have no special character ");
  //   } else if (!/[A-Z]/.test(password)) {
  //     return toast.error("There have no capital letter ");
  //   } else {
  //     Swal("Good job!", "godd password", "success");
  //   }
  //   createUser(email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       // updateUser(name, photo).then(() => {
  //       //   console.log(result.user);
  //       //   Navigate("/");
  //       // });
  //       // console.log(result.user);
  //     })
  //     .catch((error) => console.error(error));
  // };
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div>
            <label>
              <input
                className="input"
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                required=""
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </label>
          </div>
          <div>
            <select
              {...register("role")}
              name="role"
              className="w-80 rounded-lg bg-gray-700"
            >
              <option value="Participants">Participants</option>
              <option value="Healthcare Professionals">
                Healthcare Professionals
              </option>
              <option value="Organizers">Organizers</option>
            </select>
          </div>

          <label>
            <input
              className="input"
              type="email"
              {...register("email", { required: true })}
              placeholder=""
              required=""
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
            <span>Email</span>
          </label>
          <label>
            <input
              className="input"
              type="text"
              {...register("photoURL", { required: true })}
              placeholder=""
              required=""
            />
            {errors.photo && (
              <span className="text-red-600">This field is required</span>
            )}
            <span>PhotoUrl</span>
          </label>

          <label>
            <input
              className="input"
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/,
              })}
              placeholder=""
              required=""
            />

            {errors.password?.type === "required" && (
              <div>Password is required</div>
            )}
            {errors.password?.type === "pattern" && (
              <div>
                Password must contain at least one digit and one letter, and can
                only include letters and digits.
              </div>
            )}
            {errors.password?.type === "maxLength" && (
              <div>Password must be less than 20 characters</div>
            )}
            {errors.password?.type === "minLength" && (
              <div>Password must be more than 6 characters</div>
            )}
            <span>Password</span>
          </label>

          <button className="submit">Submit</button>
          <p className="signin">
            Already have an acount ? <Link to="/logIn">SignIn</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
