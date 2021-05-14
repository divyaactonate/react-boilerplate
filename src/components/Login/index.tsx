import { inject } from 'mobx-react';
import { useState } from 'react';
import './login.css';
import { useHistory } from 'react-router'

function Login({ authStore }: any) {
  const { login } = authStore;
  const history = useHistory();

  const [state, setstate]: [any, any] = useState({});

  const handleInputChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setstate({ ...state, [name]: value });
  };

  const submit = (event: any) => {
    event.preventDefault();
    login(state.email, state.password)
    .then((res: boolean) => {
      history.push('/protected')
    })
    .catch((err: Error) => {

    })
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
