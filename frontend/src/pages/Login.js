import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formValues;

  const onValueChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

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
