/** @jsxImportSource @emotion/react */
import {
  Button,
  Checkbox,
  InputsWrapper,
  PasswordInput,
  Radio,
  RadioGroup,
  ReactSelect,
  Text,
  TextInput,
} from '@library/core';
import { BiHubIcon } from '@shared/index';
import { useFormik } from 'formik';
import { FC } from 'react';
import { Controller, MyFormValues } from './controller';
import { useStyles } from './styles';

const options = [
  { value: 'windows', label: 'Windows Ad' },
  { value: 'native', label: 'Native' },
  { value: 'ocean', label: 'Ocean' },
];

const LoginView: FC = () => {
  const { initialValues, validationSchema, onSubmit } = Controller();
  const { css, classes } = useStyles();
  const { errors, handleBlur, isValid, touched, values, handleChange, handleSubmit } =
    useFormik<MyFormValues>({
      initialValues,
      validationSchema,
      onSubmit,
    });

  return (
    <div css={css.wrapper} className={classes.wrapper}>
      <div className={classes.headingWrapper}>
        <BiHubIcon className={classes.icon} />

        <div className={classes.heading}>Sign in to your account</div>
      </div>

      <div className={classes.formWrapper}>
        <form onSubmit={handleSubmit} className='' action='#' method='POST'>
          <InputsWrapper
            errorMessage={errors.email}
            isInvalid={errors.email && touched.email ? true : false}
            label='Email address'
          >
            <TextInput
              placeholder='you@example.com'
              rightIcon
              size='lg'
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
              placeholder='*******'
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

          <div className={classes.bottomWrapper}>
            <div className={classes.checkboxWrapper}>
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
  );
};

export default LoginView;
