import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../../context/AuthContext";

function Signuppage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    if (password !== password2) {
      setError("Passwords do not match!");
    } else if (username.length < 4) {
      setError("Username must be at least 4 characters long.");
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
    } else {
      const result = await registerUser(email, username, password, password2);
      if (!result.success) {
        setError(result.error);
      }
    }
  };

  return (
    <div className="signup-page">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 d-none d-md-block">
                    <div className="signup-image" />
                  </div>
                  <div className="col-md-6 col-lg-6 d-flex align-items-center mx-auto">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                          />
                          <span className="h2 fw-bold mb-0">
                            Welcome to <b>Teaholic</b>
                          </span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Sign Up
                        </h5>
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Confirm Password"
                            onChange={(e) => setPassword2(e.target.value)}
                            value={password2}
                            required
                          />
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Already have an account?{" "}
                          <Link to="/login" style={{ color: "#393f81" }}>
                            Login Now
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 - till date Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            teaholic.com
          </a>
        </div>
      </footer>
    </div>
    );
    }

    export default Signuppage;
