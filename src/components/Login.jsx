import React from 'react';
import googleIcon from '../../public/images/google.svg'; // Adjust path if needed
import appleIcon from '../../public/images/apple.svg';   // Adjust path if needed

function Login() {
  const styles = {
    loginOnly: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #f0fdf4, #e6f4ec)',
      fontFamily: "'Inter', sans-serif"
    },
    loginContainer: {
      background: 'white',
      padding: '2.5rem',
      borderRadius: '1.5rem',
      boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center'
    },
    formTitle: {
      fontSize: '1.75rem',
      fontWeight: 700,
      color: '#121212',
      marginBottom: '1.5rem'
    },
    socialLogin: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    socialButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1rem',
      border: '1px solid #ddd',
      borderRadius: '0.75rem',
      fontWeight: 600,
      cursor: 'pointer',
      backgroundColor: '#fff',
      transition: 'all 0.2s ease-in-out'
    },
    socialIcon: {
      width: '20px',
      height: '20px'
    },
    seperator: {
      position: 'relative',
      textAlign: 'center',
      margin: '1rem 0',
      fontSize: '0.9rem',
      color: '#888'
    },
    seperatorSpan: {
      background: 'white',
      padding: '0 1rem',
      position: 'relative',
      zIndex: 1
    },
    seperatorBefore: {
      content: '""',
      height: '1px',
      width: '100%',
      background: '#ddd',
      position: 'absolute',
      left: 0,
      top: '50%',
      zIndex: 0
    },
    loginForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    },
    inputWrapper: {
      position: 'relative'
    },
    inputField: {
      width: '100%',
      padding: '0.75rem 2.5rem 0.75rem 1rem',
      borderRadius: '0.75rem',
      border: '1px solid #ccc',
      fontSize: '1rem',
      outline: 'none'
    },
    icon: {
      position: 'absolute',
      right: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#888'
    },
    forgotPassLink: {
      textAlign: 'right',
      display: 'block',
      fontSize: '0.85rem',
      color: '#4caf50',
      textDecoration: 'none'
    },
    loginButton: {
      backgroundColor: '#4caf50',
      color: 'white',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '0.75rem',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer'
    },
    signupPrompt: {
      marginTop: '1.5rem',
      fontSize: '0.95rem'
    },
    signupLink: {
      color: '#4caf50',
      textDecoration: 'none',
      fontWeight: 600
    }
  };

  return (
    <div style={styles.loginOnly}>
      <div style={styles.loginContainer}>
        <h2 style={styles.formTitle}>Log in with</h2>
        <div style={styles.socialLogin}>
          <button style={styles.socialButton}>
            <img src={googleIcon} alt="Google" style={styles.socialIcon} />
            Google
          </button>
          <button style={styles.socialButton}>
            <img src={appleIcon} alt="Apple" style={styles.socialIcon} />
            Apple
          </button>
        </div>

        <div style={styles.seperator}>
          <span style={styles.seperatorSpan}>or</span>
          {/* No native way to do ::before in inline styles — would need to simulate with extra div if needed */}
        </div>

        <form action="#" style={styles.loginForm}>
          <div style={styles.inputWrapper}>
            <input type='email' placeholder='Email address' style={styles.inputField} required />
            <i className="material-symbols-outlined" style={styles.icon}>mail</i>
          </div>
          <div style={styles.inputWrapper}>
            <input type='password' placeholder='Password' style={styles.inputField} required />
            <i className="material-icons" style={styles.icon}>lock</i>
          </div>
          <a href="#" style={styles.forgotPassLink}>Forgot Password</a>
          <button type="submit" style={styles.loginButton}>Log In</button>
        </form>

        <p style={styles.signupPrompt}>
          Don&apos;t have an account? <a href="#" style={styles.signupLink}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
