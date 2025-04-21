import React, { useState, ChangeEvent, FormEvent } from "react";
import signupImage from "../../assets/image/image1.jpg";
import AuthService from "../../services/auth.services";
import { useNavigate } from "react-router-dom";
interface FormData {
  username: string;
  password: string;
}

interface FormErrors {
  username?: string;
  password?: string;
}

export default function SigninPage(): React.JSX.Element {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.username) {
      newErrors.username = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.username)) {
      newErrors.username = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const res = await AuthService.signin(formData);
    localStorage.setItem("token", res.data.data.token);
    Navigate('/my-blogs')
    setSubmitted(true);
  };
  const style:any = {
    width: '468px',
    height: '389px',
    background: 'var(--card, #FFFFFF)',
    margin: "159px 200px 0px 188px"
  };
  
  return (
    <div className="signin-wrapper">
      {/* Image for mobile */}
      <div className="signin-image-mobile">
        <img src={signupImage} alt="Signin Visual" />
      </div>

      {/* Left: Form */}
      <div className="signin-form-container">
        <h1 className="signin-title">
          Welcome Back <span role="img" aria-label="waving hand">👋</span>
        </h1>
        <p className="signin-subtitle">
          Shape Your Thoughts. Sign in to share and explore insightful blogs.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={errors.username ? "input error" : "input"}
              placeholder="shalini@gmail.com"
            />
            {errors.username && <div className="error-text">{errors.username}</div>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "input error" : "input"}
            />
            {errors.password && <div className="error-text">{errors.password}</div>}
          </div>

          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>

        {submitted && <p className="success-text">Successfully Signed In!</p>}

        <p className="signup-text">
          Don't you have an account? <span className="signup-highlight">Sign Up</span>
        </p>
      </div>

      {/* Right: Image for desktop */}
      <div className="signin-image-desktop">
        <img src={signupImage} alt="Signin Visual" />
      </div>
    </div>
  );
}


