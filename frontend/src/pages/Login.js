import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { login } from "../features/auth/authSlice";
import { Spinner } from "../components";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formValues;

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

    const userDetails = {
      username,
      password,
    };

    dispatch(login(userDetails));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className="heading">
        <h1>
          <FaSignInAlt /> Login
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
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={password}
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

export default Login;
