import { inject } from 'mobx-react';
import { useState } from 'react';
import './login.css';
import { useHistory } from 'react-router';
import { Logger } from '@libs/logger';

function Login({ authStore }: any) {
  const { login } = authStore;
  const history = useHistory();

  const [state, setstate]: [any, any] = useState({});

  const handleInputChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setstate({ ...state, [name]: value });
  };

  const submit = async (event: any) => {
    try {
      event.preventDefault();
      await login(state.email, state.password);
      history.push('/protected');
    } catch (error) {
      Logger.error(error);
    }
  };

  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Email</p>
          <input
            name='email'
            className='form-input p-2 border border-black'
            type='text'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            className='form-input p-2 border border-black'
            type='password'
            name='password'
            onChange={handleInputChange}
          />
        </label>
        <div>
          <button className='p-2 bg-red-200' type='submit' onClick={submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default inject(({ store }) => store)(Login);
