import { useRef, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth.jsx';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import styles from './RegisterForm.module.scss';

function RegisterForm() {
  const [error, setError] = useState(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
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
    passwordRef.current.blur();
    setError(null);

    try {
      await register(formState);
      setError(null);
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
    firstNameRef.current.focus();
  }, []);

  return (
    <div className={styles['register-form']}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formState.firstName}
            onChange={handleChange}
            ref={firstNameRef}
          />
        </fieldset>

        <fieldset>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='lastName'
            id='lastName'
            name='lastName'
            value={formState.lastName}
            onChange={handleChange}
            ref={lastNameRef}
          />
        </fieldset>

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

        <Button type='submit' textContent='Register' classNames={['btn']} />

        <p className={styles['link']}>
          Already have an account? <Link to='/login'>Click here</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
