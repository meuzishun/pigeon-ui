import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx';
import Button from '../../components/Button/Button.jsx';
import styles from './LoginForm.module.scss';

function LoginForm() {
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(formState);
      navigate('/messages');
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (error?.message.includes('email') || error?.message.includes('User')) {
      emailRef.current.select();
    }

    if (error?.message.includes('password')) {
      passwordRef.current.focus();
    }
  }, [error]);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className={styles['login-form']}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formState.email}
            onChange={handleChange}
            ref={emailRef}
          />
        </fieldset>

        <fieldset>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formState.password}
            onChange={handleChange}
            ref={passwordRef}
          />
        </fieldset>

        {error && <p>{error.message}</p>}

        <Button type='submit' textContent='Login' classNames={['btn']} />

        <p className={styles['link']}>
          Don&apos;t have an account? <Link to='/register'>Click here</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
