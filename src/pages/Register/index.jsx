import React from "react";
import styles from "./Register.module.scss";
import { NavLink } from "react-router-dom";
import path from "../../constants/path";
const Register = () => {
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
            <form action="">
              <div className={styles.row}>
                <input type="text" name="" id="" placeholder="Họ" />
              </div>
              <div className={styles.row}>
                <input type="text" name="" id="" placeholder="Tên" />
              </div>
              <div className={styles.row}>
                <div className={styles.gender}>
                  <label className={styles.radio} for="nu" value="Nư">
                    <input type="radio" name="" id="nu" />
                    Nữ
                  </label>
                </div>
                <div className={styles.gender}>
                  <label className={styles.radio} for="nam" value="Nam">
                    <input type="radio" name="" id="nam" />
                    Nam
                  </label>
                </div>
              </div>
              <div className={styles.row}>
                <input type="date" name="" id="" />
              </div>
              <div className={styles.row}>
                <input type="email" name="" id="" placeholder="email" />
              </div>
              <div className={styles.row}>
                <input type="password" name="" id="" placeholder="password" />
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
