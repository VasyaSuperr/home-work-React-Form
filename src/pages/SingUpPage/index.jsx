import { useState } from "react";
import styles from "./SingUp.module.css";

function SingUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [statements, setStatements] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password, passwordConfirm, statements });
    setFullName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setStatements(false);
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

  return (
    <div className={styles.wrapperWrapper}>
      <div className={styles.formWrapper}>
        <i className={`${styles.iconCreate} fa-regular fa-pen-to-square`}></i>
        <h2 className={styles.formHead}>Create Your Account</h2>
        <form className={styles.singUpForm} onSubmit={handleFormSubmit}>
          <label className={styles.formLabelForInput}>
            <span className={styles.labelCaptionForInput}>FULL NAME</span>
            <input
              className={styles.formInput}
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
              className={styles.formInput}
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
              className={styles.formInput}
              type="password"
              name="user-password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
            <span className={styles.eyeForPassword}>
              <i className="fa-solid fa-eye-slash"></i>
            </span>
          </label>
          <label className={styles.formLabelForInput}>
            <span className={styles.labelCaptionForInput}>
              PASSWORD CONFIRMATION
            </span>
            <input
              className={styles.formInput}
              type="password"
              name="user-password-confirmation"
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              placeholder="Password confirmation"
              required
            />
            <span className={styles.eyeForPassword}>
              <i className="fa-solid fa-eye-slash"></i>
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
          <button className={styles.submitBtn} type="submit">
            Sing Up
          </button>
          <div className={styles.wrapperForSingInRow}>
            <span>I'm already a member!</span>
            <button className={styles.singInBtn}>Sing In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingUpPage;
