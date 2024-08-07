import styles from "./SingUp.module.css";

function SingUpPage() {
  return (
    <div className={styles.wrapperWrapper}>
      <div className={styles.formWrapper}>
        <i className={`${styles.iconCreate} fa-regular fa-pen-to-square`}></i>
        <h2 className={styles.formHead}>Create Your Account</h2>
        <form className={styles.singUpForm}>
          <label className={styles.formLabelForInput}>
            <span className={styles.labelCaptionForInput}>FULL NAME</span>
            <input
              className={styles.formInput}
              type="text"
              name="user-fullName"
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
              placeholder="Password"
              required
            />
          </label>
          <label className={styles.formLabelForInput}>
            <span className={styles.labelCaptionForInput}>
              PASSWORD CONFIRMATION
            </span>
            <input
              className={styles.formInput}
              type="password"
              name="user-password-confirmation"
              placeholder="Password confirmation"
              required
            />
          </label>
          <label className={styles.formLabelForCheckBox}>
            <input type="checkbox" name="user-agree-all-statements" required />
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
