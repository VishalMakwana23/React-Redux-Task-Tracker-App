import { useState } from "react";
const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter a name");
      return;
    }
    if (!password) {
      alert("Please enter a password");
      return;
    }
    if (name === "vishal" && password === "vishal") {
      onLogin();
    } else {
      alert("Please Enter Valid User name and password");
    }
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>UserName</label>
        <input
          type="text"
          placeholder="Add userName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Passwod"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <input type="submit" value="Login" className="btn btn-block " />
    </form>
  );
};

export default Login;
