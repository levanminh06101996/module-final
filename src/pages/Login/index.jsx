import React, { useState } from "react";
import styles from "./Login.module.scss";
import path from "../../constants/path";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [active, setActive] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const toggleActive = () => {
    setActive((prev) => !prev);
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
            <form action="">
              <div className={styles.row} onClick={toggleActive}>
                <input
                  style={{ backgroundColor: active ? "white" : "#ededed" }}
                  type="text"
                  name=""
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
                  type="text"
                  name=""
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
