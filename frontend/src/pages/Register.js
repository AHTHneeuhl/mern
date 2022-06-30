import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register } from "../features/auth/authSlice";
import { Spinner } from "../components";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formValues, setFormValues] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmed: "",
  });

  const { username, name, email, password, confirmed } = formValues;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }
  }, [isError, message, isSuccess, user, navigate]);

  const onValueChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmed) {
      toast.error("Passwords do not match");
    } else {
      const userDetails = {
        username,
        name,
        email,
        password,
      };

      dispatch(register(userDetails));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className="heading">
        <h1>
          <FaUser /> Register
        </h1>
      </div>
      <div className="form">
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={onValueChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onValueChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onValueChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onValueChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Confirm Password"
              type="password"
              id="confirmed"
              name="confirmed"
              value={confirmed}
              onChange={onValueChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
