import {
  Button,
  InputsWrapper,
  PasswordInput,
  // Radio,
  // RadioGroup,
  ReactSelect,
  Text,
  TextInput,
} from '@library/core';
import { Checkbox } from '@library/core/Checkbox';
import { BiHubIcon } from '@shared/index';
import { FC } from 'react';

const options = [
  { value: 'windows', label: 'Windows Ad' },
  { value: 'native', label: 'Native' },
  { value: 'ocean', label: 'Ocean' },
];
const LoginPage: FC = () => {
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
          <form className='space-y-6' action='#' method='POST'>
            <InputsWrapper label='Email address'>
              <TextInput placeholder='you@example.com' defaultValue='Kaushal' rightIcon />
            </InputsWrapper>
            <InputsWrapper label='Password'>
              <PasswordInput defaultValue='Kaushal' />
            </InputsWrapper>
            <InputsWrapper label='Authentication'>
              <ReactSelect defaultValue='windows' options={options} />
            </InputsWrapper>
            {/* <InputsWrapper label='Authentication'>
              <RadioGroup spacing={4} className='mt-2' variant='horizontal' defaultValue='native'>
                <Radio value='native'>
                  <Text size='sm' weight='normal' className=''>
                    Native
                  </Text>
                </Radio>
                <Radio value='windows'>
                  <Text size='sm' weight='normal' className=''>
                    Windows Ad
                  </Text>
                </Radio>
              </RadioGroup>
            </InputsWrapper> */}

            <div>
              <Button radius='xs' fullWidth color='blue' type='submit'>
                Sign in
              </Button>
            </div>
            <div className='flex items-center justify-between'>
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
