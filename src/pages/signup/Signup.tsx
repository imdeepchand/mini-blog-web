import React, { useState, ChangeEvent, FormEvent } from "react";
import signupImage from "../../assets/image/image1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "../../services/auth.services";
import { useNavigate } from "react-router-dom";

interface SignupFormData {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignupFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignupPage(): React.JSX.Element {
  const Navigate = useNavigate()
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<SignupFormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): SignupFormErrors => {
    const newErrors: SignupFormErrors = {};

    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
    await AuthService.signup(formData);
    Navigate('/signin')
    setSubmitted(true);
    console.log("Form Submitted", formData);
  };

  return (
    <div className="signup-wrapper">
      {/* Mobile Image */}
      <div className="signup-image-mobile">
        <img src={signupImage} alt="Signup Visual" />
      </div>

      {/* Form Section */}
      <div className="signup-form">
        <h1 className="signup-title">Sign Up</h1>
        <p className="signup-subtitle">
          Join the Conversation. Sign up to share and explore insightful blogs.
        </p>

        <form onSubmit={handleSubmit} noValidate className="form-content">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              className={`form-input ${errors.name ? "error" : ""}`}
              value={formData.name}
              onChange={handleChange}
              placeholder=""
            />
            {errors.name && <div className="form-error">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              className={`form-input ${errors.phone ? "error" : ""}`}
              value={formData.phone}
              onChange={handleChange}
              placeholder="0987654321"
            />
            {errors.phone && <div className="form-error">{errors.phone}</div>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className={`form-input ${errors.email ? "error" : ""}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="shalini@gmail.com"
            />
            {errors.email && <div className="form-error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className={`form-input ${errors.password ? "error" : ""}`}
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
            />
            {errors.password && <div className="form-error">{errors.password}</div>}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className={`form-input ${errors.confirmPassword ? "error" : ""}`}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder=""
            />
            {errors.confirmPassword && (
              <div className="form-error">{errors.confirmPassword}</div>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        {submitted && <p className="success-msg">Successfully Signed Up!</p>}

        <p className="signin-text">
          Already have an account? <span className="highlight"><a href="/signin">Sign In</a></span>
        </p>
      </div>

      {/* Desktop Image */}
      <div className="signup-image-desktop">
        <img src={signupImage} alt="Signup Visual" />
      </div>
    </div>
  );
}
