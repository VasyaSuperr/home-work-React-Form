import styles from "./SingUp.module.css";

function SingUpPage() {
  return (
    <div>
      <i class="fa-regular fa-pen-to-square"></i>
      <h1>Create Your Account</h1>
      <form>
        <label>
          <span>FULL NAME</span>
          <input
            type="text"
            name="user-fullName"
            placeholder="John Doe"
            autoFocus
            required
          />
        </label>
        <label>
          <span>EMAIL ADDRESS</span>
          <input
            type="email"
            name="user-email"
            placeholder="johndoe@gmail.com"
            required
          />
        </label>
        <label>
          <span>PASSWORD</span>
          <input
            type="password"
            name="user-password"
            placeholder="Password"
            required
          />
        </label>
        <label>
          <span>PASSWORD CONFIRMATION</span>
          <input
            type="password"
            name="user-password-confirmation"
            placeholder="Password confirmation"
            required
          />
        </label>
        <label>
          <input type="checkbox" name="user-agree-all-statements" required />
          <span>I Agree All Statements In Terms Of Service</span>
        </label>
        <button type="submit">Sing Up</button>
        <div>
          <p>I'm already a member!</p>
          <button>Sing In</button>
        </div>
      </form>
    </div>
  );
}

export default SingUpPage;
