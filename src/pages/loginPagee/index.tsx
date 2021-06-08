import {
  Button,
  Checkbox,
  InputsWrapper,
  PasswordInput,
  Radio,
  RadioGroup,
  // ReactCheckbox,
  ReactSelect,
  Text,
  TextInput,
} from '@library/core';
import { BiHubIcon } from '@shared/index';
import { useFormik } from 'formik';
import { FC } from 'react';

const options = [
  { value: 'windows', label: 'Windows Ad' },
  { value: 'native', label: 'Native' },
  { value: 'ocean', label: 'Ocean' },
];

const LoginPage: FC = () => {
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = 'Required Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required Password';
    }
    if (!values.authentication) {
      errors.authentication = 'Required authentication';
    }
    return errors;
  };
  const initialValues = {
    email: '',
    password: '',
    authentication: 'native',
    authentication1: 'ocean',
  };
  const { errors, handleBlur, isValid, touched, values, handleChange, handleSubmit } = useFormik({
    initialValues,
    validate,
    onSubmit,
  });
  return (
    <div
      style={{
        backgroundImage: `url(/assets/svg/loginBackground.svg)`,
        backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className='min-h-screen flex bg-repeat-space flex-col justify-center py-6 sm:px-6 lg:px-8'
    >
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <BiHubIcon className='mx-auto h-12 w-auto' />

        <div className='mt-6 text-center text-gray-800 text-2xl font-extrabold'>
          Sign in to your account
        </div>
      </div>

      <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='border border-gray-200 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form onSubmit={handleSubmit} className='' action='#' method='POST'>
            <InputsWrapper
              errorMessage={errors.email}
              isInvalid={errors.email && touched.email ? true : false}
              label='Email address'
            >
              <TextInput
                placeholder='you@example.com'
                // defaultValue='Kaushal'
                rightIcon
                id='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </InputsWrapper>
            <InputsWrapper
              errorMessage={errors.password}
              isInvalid={errors.password && touched.password ? true : false}
              label='Password'
            >
              <PasswordInput
                onChange={handleChange}
                onBlur={handleBlur}
                name='password'
                id='password'
                value={values.password}
                // defaultValue='Kaushal'
              />
            </InputsWrapper>
            <InputsWrapper errorMessage='not nice' label='Authentication'>
              <ReactSelect
                id='authentication1'
                name='authentication1'
                isSearchable={false}
                isClearable={false}
                defaultValue={values.authentication1}
                options={options}
              />
            </InputsWrapper>
            <InputsWrapper errorMessage='not nice' label='Authentication' minHeight='5rem'>
              <RadioGroup
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={values.authentication}
                spacing={4}
                className='mt-2'
                variant='horizontal'
              >
                <Radio name='authentication' id='authentication' value='native'>
                  <Text size='sm' weight='normal'>
                    Native
                  </Text>
                </Radio>
                <Radio name='authentication' id='authentication' value='windows'>
                  <Text size='sm' weight='normal'>
                    Windows Ad
                  </Text>
                </Radio>
              </RadioGroup>
            </InputsWrapper>

            <div>
              <Button disabled={!isValid} radius='xs' fullWidth color='blue' type='submit'>
                Sign in
              </Button>
            </div>
            <div className='flex items-center mt-5 justify-between'>
              <div className='flex items-center'>
                <Checkbox size='xs' color='blue' />
                <Text size='sm' className='ml-2 block'>
                  Remember me
                </Text>
              </div>
              {/* <div className='text-sm'>
                <a href='#' className='font-medium text-blue-600 hover:text-blue-500'>
                  Forgot your password?
                </a>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
