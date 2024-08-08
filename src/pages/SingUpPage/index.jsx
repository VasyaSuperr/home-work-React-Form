import React, { useState } from "react";
import styles from "./SingUp.module.css";
import classNames from "classnames";

function SingUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [statements, setStatements] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfVisible, setIsPasswordConfVisible] = useState(false);

  const SING_UP_FOR_REG_EXP = {
    fullName:
      /^[A-Z][a-z]{1,32}(-[A-Z][a-z]{1,32})? [A-Z][a-z]{1,32}(-[A-Z][a-z]{1,32})?$/,
    email: /^\w+@[A-Za-z\d]+\.[A-Za-z\d]+$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{6,32}$/,
    passwordConfirm:
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{6,32}$/,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password, passwordConfirm, statements });
    setFullName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setStatements(false);
    setIsPasswordVisible(false);
    setIsPasswordConfVisible(false);
  };

  const handleFullNameChange = ({ target: { value } }) => {
    setFullName(value);
  };

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handlePasswordConfirmChange = ({ target: { value } }) => {
    setPasswordConfirm(value);
  };

  const handleStatementsChange = ({ target: { checked } }) => {
    setStatements(checked);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePasswordConfVisibility = () => {
    setIsPasswordConfVisible(!isPasswordConfVisible);
  };

  const calcClassName = (name, value) => {
    let isValueValid;

    if (name === "passwordConfirm") {
      isValueValid =
        value === password && SING_UP_FOR_REG_EXP[name].test(value);
    } else {
      isValueValid = SING_UP_FOR_REG_EXP[name].test(value);
    }

    return classNames(styles.formInput, {
      [styles.validInput]: isValueValid,
      [styles.invalidInput]: !isValueValid,
    });
  };

  const isSubmitBtnDisabled = () => {
    return !(
      SING_UP_FOR_REG_EXP.fullName.test(fullName) &&
      SING_UP_FOR_REG_EXP.email.test(email) &&
      SING_UP_FOR_REG_EXP.password.test(password) &&
      SING_UP_FOR_REG_EXP.passwordConfirm.test(passwordConfirm) &&
      statements &&
      password === passwordConfirm
    );
  };

  return (
    <div className={styles.wrapperWrapper}>
      <div className={styles.formWrapper}>
        <i className={`${styles.iconCreate} fa-regular fa-pen-to-square`}></i>
        <h2 className={styles.formHead}>Create Your Account</h2>
        <form className={styles.singUpForm} onSubmit={handleFormSubmit}>
          <label className={styles.formLabelForInput}>
            <span className={styles.labelCaptionForInput}>FULL NAME</span>
            <input
              className={calcClassName("fullName", fullName)}
              type="text"
              name="user-fullName"
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="John Doe"
              autoFocus
              required
            />
          </label>
          <label className={styles.formLabelForInput}>
            <span className={styles.labelCaptionForInput}>EMAIL ADDRESS</span>
            <input
              className={calcClassName("email", email)}
              type="email"
              name="user-email"
              value={email}
              onChange={handleEmailChange}
              placeholder="johndoe@gmail.com"
              required
            />
          </label>
          <label className={styles.formLabelForInput}>
            <span className={styles.labelCaptionForInput}>PASSWORD</span>
            <input
              className={calcClassName("password", password)}
              type={isPasswordVisible ? "text" : "password"}
              name="user-password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
            <span
              className={styles.eyeForPassword}
              onClick={togglePasswordVisibility}
            >
              <i
                className={isPasswordVisible ? "fa fa-eye" : "fa fa-eye-slash"}
              ></i>
            </span>
          </label>
          <label className={styles.formLabelForInput}>
            <span className={styles.labelCaptionForInput}>
              PASSWORD CONFIRMATION
            </span>
            <input
              className={calcClassName("passwordConfirm", passwordConfirm)}
              type={isPasswordConfVisible ? "text" : "password"}
              name="user-password-confirmation"
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              placeholder="Password confirmation"
              required
            />
            <span
              className={styles.eyeForPassword}
              onClick={togglePasswordConfVisibility}
            >
              <i
                className={
                  isPasswordConfVisible ? "fa fa-eye" : "fa fa-eye-slash"
                }
              ></i>
            </span>
          </label>
          <label className={styles.formLabelForCheckBox}>
            <input
              type="checkbox"
              name="user-agree-all-statements"
              checked={statements}
              onChange={handleStatementsChange}
              required
            />
            <span>I Agree All Statements In Terms Of Service</span>
          </label>
          <button
            className={classNames(styles.submitBtn, {
              [styles.enabled]: !isSubmitBtnDisabled(),
              [styles.disabled]: isSubmitBtnDisabled(),
            })}
            disabled={isSubmitBtnDisabled()}
            type="submit"
          >
            Sign Up
          </button>
          <div className={styles.wrapperForSingInRow}>
            <span>I'm already a member!</span>
            <button className={styles.singInBtn}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingUpPage;
