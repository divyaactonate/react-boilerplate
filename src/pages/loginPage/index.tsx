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
import { Logger } from '@utils/logger';
import { BiHubIcon } from '@shared/index';
import { useFormik } from 'formik';
import { inject } from 'mobx-react';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

const options = [
  { value: 'windows', label: 'Windows Ad' },
  { value: 'native', label: 'Native' },
  { value: 'ocean', label: 'Ocean' },
];
interface MyFormValues {
  email: string;
  password: string;
  authentication: string;
  authentication1: string;
}
const LoginPage: FC = ({ authStore }: any) => {
  const { login } = authStore;
  const history = useHistory();
  const onSubmit = async (data: any) => {
    try {
      await login(data.email, data.password);
      history.push('/protected');
    } catch (error) {
      Logger.error(error);
    }
  };
  const initialValues: MyFormValues = {
    email: '',
    password: '',
    authentication: 'native',
    authentication1: 'ocean',
  };
  const validationSchema: Yup.SchemaOf<MyFormValues> = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Please enter email'),
    password: Yup.string().required('Please enter password'),
    authentication: Yup.string().required('Please select authentication'),
    authentication1: Yup.string().required('Please select authentication1'),
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
                rightIcon
                id='email'
                isInvalid={errors.email && touched.email ? true : false}
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
                isInvalid={errors.password && touched.password ? true : false}
                onBlur={handleBlur}
                name='password'
                id='password'
                value={values.password}
              />
            </InputsWrapper>
            <InputsWrapper
              isInvalid={errors.authentication1 && touched.authentication1 ? true : false}
              errorMessage='not nice'
              label='Authentication'
            >
              <ReactSelect
                id='authentication1'
                name='authentication1'
                isInvalid={errors.authentication1 && touched.authentication1 ? true : false}
                isSearchable={false}
                isClearable={false}
                defaultValue={values.authentication1}
                options={options}
              />
            </InputsWrapper>
            <InputsWrapper
              isInvalid={errors.authentication && touched.authentication ? true : false}
              errorMessage='not nice'
              label='Authentication'
              minHeight='5rem'
            >
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
                    Windows AD
                  </Text>
                </Radio>
              </RadioGroup>
            </InputsWrapper>

            <Button disabled={!isValid} radius='xs' fullWidth color='blue' type='submit'>
              Sign in
            </Button>

            <div className='flex items-center mt-5 justify-between'>
              <div className='flex items-center space-x-2'>
                <Checkbox size='xs' color='blue' />
                <Text size='sm'>Remember me</Text>
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

export default inject(({ store }) => store)(LoginPage);
