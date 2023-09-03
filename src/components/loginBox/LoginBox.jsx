import React, { useState } from "react";
import styles from "./loginBox.module.css";

export default function LoginBox() {
  const [isLeftLoginActive, setIsLeftLoginActive] = useState(true);
  const [isRightLoginActive, setIsRightLoginActive] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.loginType}>
        <div className={styles.loginTab}>
          <button
            type="button"
            className={`${styles.loginTypeBtn} ${
              isLeftLoginActive && styles.left_on
            }`}
            onClick={() => {
              setIsLeftLoginActive(true);
              setIsRightLoginActive(false);
            }}
          >
            고객회원 로그인
          </button>
        </div>
        <div className={styles.loginTab}>
          <button
            type="button"
            className={`${styles.loginTypeBtn} ${
              isRightLoginActive && styles.right_on
            }`}
            onClick={() => {
              setIsRightLoginActive(true);
              setIsLeftLoginActive(false);
            }}
          >
            업주회원 로그인
          </button>
        </div>
      </div>
      <form action="" className={styles.form}>
        <label htmlFor="email" className="txt-hide">
          이메일
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className={`${styles.email_input} ${styles.input}`}
        />
        <label htmlFor="pw" className="txt-hide">
          비밀번호
        </label>
        <input
          type="password"
          name="pw"
          id="pw"
          placeholder="password"
          className={`${styles.pw_input} ${styles.input}`}
        />
        <button type="submit" className={`${styles.login_btn} ${styles.btn}`}>
          Login
        </button>
        <button type="button" className={`${styles.google_btn} ${styles.btn}`}>
          <div className={styles.google_logo} />
          Login with Google
        </button>
      </form>
    </main>
  );
}
