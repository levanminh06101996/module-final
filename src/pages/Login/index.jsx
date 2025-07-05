import React, { useState } from "react";
import styles from "./Login.module.scss";
import path from "../../constants/path";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [active, setActive] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const navigate = useNavigate();
  const toggleActive = () => {
    setActive((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        data
      );
      console.log(res);
      navigate("/products");
    } catch (err) {
      setError(err.response.data.message || "đã xảy ra lỗi");
    }
  };
  return (
    <div className={styles.wrapperLogin}>
      <div className={`container ${styles.login}`}>
        <div className={styles.mainLogin}>
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
              <div className={styles.row} onClick={toggleActive}>
                <input
                  style={{ backgroundColor: active ? "white" : "#ededed" }}
                  type="email"
                  name="email"
                  id=""
                  placeholder="Vui lòng nhập email của bạn"
                />
              </div>
              <div
                className={styles.row}
                onClick={() => {
                  setActiveTwo((prev) => !prev);
                }}
              >
                <input
                  style={{ backgroundColor: activeTwo ? "white" : "#ededed" }}
                  type="password"
                  name="password"
                  id=""
                  placeholder="Vui lòng nhập mật khẩu"
                />
              </div>
              <p>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="">Privacy Policy</a> and
                <a href=""> Terms of Service</a> apply.
              </p>
              <div className={styles.customerAction}>
                <div className={styles.button}>
                  <button type="submit">Đăng Nhập</button>
                </div>
                <div className={styles.req_pass}>
                  <p>
                    Bạn chưa tài khoản?
                    <a href="">
                      <NavLink to={path.register}>&nbsp; Đăng Ký</NavLink>
                    </a>
                  </p>
                  <p>
                    Bạn quên mật khẩu?&nbsp;{" "}
                    <a href="/login"> Đăng nhập ngay</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
