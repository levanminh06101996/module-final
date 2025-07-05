import React from "react";
import styles from "./Register.module.scss";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import path from "../../constants/path";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  // const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        data
      );
      console.log(res);
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message || "đã xảy ra lỗi");
    }
  };
  return (
    <div className={styles.wrapperRegister}>
      <div className={`container ${styles.register}`}>
        <div className={styles.mainRegister}>
          <div className={styles.title}>
            <h4>
              <NavLink to={path.login}>Đăng Nhập</NavLink>
            </h4>
            <h4>
              <NavLink to={path.register}>Đăng Ký</NavLink>
            </h4>
          </div>
          <div className={styles.wrapperForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.row}>
                <input type="text" name="firstName" placeholder="Họ" />
              </div>
              <div className={styles.row}>
                <input type="text" name="lastName" placeholder="Tên" />
              </div>
              <div className={styles.row}>
                <div className={styles.gender}>
                  <label className={styles.radio} htmlFor="nu">
                    <input type="radio" name="gender" id="nu" value="Nư" />
                    Nữ
                  </label>
                </div>
                <div className={styles.gender}>
                  <label className={styles.radio} htmlFor="nam">
                    <input type="radio" name="gender" id="nam" value="Nam" />
                    Nam
                  </label>
                </div>
              </div>
              <div className={styles.row}>
                <input type="date" name="birthday" />
              </div>
              <div className={styles.row}>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  autocomplete="username"
                />
              </div>
              <div className={styles.row}>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  autocomplete="new-password"
                />
              </div>
              <p>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="">Privacy Policy</a> and
                <a href=""> Terms of Service</a> apply.
              </p>
              <div className={styles.customerAction}>
                <div className={styles.button}>
                  <button type="submit">Đăng Ký</button>
                </div>
                <div className={styles.req_pass}>
                  <p>Bạn đã có tài khoản?</p>
                  <a href="/login">Đăng nhập ngay</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
Register;
