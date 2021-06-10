import { Button, InputsWrapper, PasswordInput, Popover } from '@library/core';
import { BiHubIcon } from '@shared/index';
import { Logger } from '@utils/logger';
import { useFormik } from 'formik';
import { FC, useState } from 'react';
import * as Yup from 'yup';

interface MyFormValues {
  password: string;
  confirmPassword: string;
}
const validationMap = {
  lowercase: (value: any) => /[a-z]/.test(value),
  uppercase: (value: any) => /[A-Z]/.test(value),
  special: (value: any) => /[\!\@\#\$\%\^\&\*\+\_\-\~]/.test(value),
  numeric: (value: any) => /[0-9]/.test(value),
  length: (value: any) => value.length >= 8,
};
function Requirement({ children, type, value }: any) {
  const predicate = validationMap[type];
  const isValid = predicate(value);

  return (
    <li className='requirement'>
      <span>{isValid ? '✔︎' : ''}</span>
      {children}
    </li>
  );
}
const SetPassword: FC = () => {
  const [value, setValue] = useState('');

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      Logger.error(error);
    }
  };
  const initialValues: MyFormValues = {
    password: '',
    confirmPassword: '',
  };
  const validationSchema: Yup.SchemaOf<MyFormValues> = Yup.object().shape({
    password: Yup.string().required('Please enter password'),
    confirmPassword: Yup.string().required('Please enter confirmPassword'),
  });
  const { errors, handleBlur, isValid, touched, values, handleChange, handleSubmit } =
    useFormik<MyFormValues>({
      initialValues,
      validationSchema,
      onSubmit,
    });
  return (
    <div
      style={{
        backgroundImage: `url(/assets/svg/loginBackground.svg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className='min-h-screen flex bg-repeat-space flex-col justify-center py-6 sm:px-6 lg:px-8'
    >
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <BiHubIcon className='mx-auto h-12 w-auto' />

        <div className='mt-6 text-center text-gray-800 text-2xl font-extrabold'>Set Password</div>
      </div>

      <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='border border-gray-200 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form onSubmit={handleSubmit} className='' action='#' method='POST'>
            <InputsWrapper
              errorMessage={errors.password}
              isInvalid={errors.password && touched.password ? true : false}
              label='Enter New Password'
            >
              <input
                type='password'
                value={value}
                onChange={(evt) => setValue(evt.target.value)}
                placeholder='Choose a password...'
              />
            </InputsWrapper>
            <InputsWrapper
              errorMessage={errors.confirmPassword}
              isInvalid={errors.confirmPassword && touched.confirmPassword ? true : false}
              label='Re-Enter Password'
            >
              <Popover
                content={
                  <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
                    <ul>
                      <div>Choose a secure password</div>
                      <Requirement value={value} type='length'>
                        8 characters
                      </Requirement>
                      <Requirement value={value} type='uppercase'>
                        1 uppercase letter
                      </Requirement>
                      <Requirement value={value} type='lowercase'>
                        1 lowercase letter
                      </Requirement>
                      <Requirement value={value} type='special'>
                        1 special character
                      </Requirement>
                      <Requirement value={value} type='numeric'>
                        1 number
                      </Requirement>
                    </ul>
                  </span>
                }
                placement='top-start'
              >
                <PasswordInput
                  onChange={handleChange}
                  isInvalid={errors.confirmPassword && touched.confirmPassword ? true : false}
                  onBlur={handleBlur}
                  name='confirmPassword'
                  id='confirmPassword'
                  value={values.confirmPassword}
                />
              </Popover>
            </InputsWrapper>

            <Button
              className='mt-12'
              disabled={!isValid}
              radius='xs'
              fullWidth
              color='blue'
              type='submit'
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
