import {
  Button,
  InputsWrapper,
  PasswordInput,
  Radio,
  RadioGroup,
  // ReactCheckbox,
  // ReactSelect,
  Text,
  TextInput,
  Checkbox,
} from '@library/core';
import { Validation } from '@models/index';
import { BiHubIcon } from '@shared/index';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

// const options = [
//   { value: 'windows', label: 'Windows Ad' },
//   { value: 'native', label: 'Native' },
//   { value: 'ocean', label: 'Ocean' },
// ];
type Inputs = {
  password: string;
  email: string;
};
const schema: Validation = {
  box: {
    name: 'box',
    validation: {
      // required: 'Select',
    },
  },
  authentication: {
    name: 'authentication',
    validation: {
      required: 'Select',
    },
  },
  password: {
    name: 'password',
    validation: {
      required: 'Enter password',
    },
  },
  email: {
    name: 'email',
    validation: {
      required: 'Enter your e-mail',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'Enter a valid e-mail address',
      },
    },
  },
};
const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: any) => {
    console.log('data', data);
  };
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
          <form onSubmit={handleSubmit(onSubmit)} className='' action='#' method='POST'>
            <InputsWrapper
              errorMessage={errors.email?.message}
              isInvalid={errors.email ? true : false}
              label='Email address'
            >
              <TextInput
                register={register}
                name={schema.email.name}
                rules={schema.email.validation}
                placeholder='you@example.com'
                defaultValue='Kaushal'
                rightIcon
                // type='email'
              />
            </InputsWrapper>
            <InputsWrapper
              errorMessage={errors.password?.message}
              isInvalid={errors.password ? true : false}
              label='Password'
            >
              <PasswordInput
                register={register}
                name={schema.password.name}
                rules={schema.password.validation}
                defaultValue='Kaushal'
              />
            </InputsWrapper>
            {/* <InputsWrapper errorMessage='not nice' label='Authentication'>
              <ReactSelect
                isSearchable={false}
                isClearable={false}
                defaultValue='windows'
                options={options}
              />
            </InputsWrapper> */}
            <InputsWrapper errorMessage='not nice' label='Authentication' minHeight='5rem'>
              <RadioGroup
                register={register}
                name={schema.authentication.name}
                rules={schema.authentication.validation}
                spacing={4}
                className='mt-2'
                variant='horizontal'
                defaultValue='native'
              >
                <Radio value='native'>
                  <Text size='sm' weight='normal'>
                    Native
                  </Text>
                </Radio>
                <Radio value='windows'>
                  <Text size='sm' weight='normal'>
                    Windows Ad
                  </Text>
                </Radio>
              </RadioGroup>
            </InputsWrapper>

            <div>
              <Button radius='xs' fullWidth color='blue' type='submit'>
                Sign in
              </Button>
            </div>
            <div className='flex items-center mt-5 justify-between'>
              <div className='flex items-center'>
                <Checkbox
                  register={register}
                  name={schema.box.name}
                  rules={schema.box.validation}
                  size='xs'
                  color='blue'
                />
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
