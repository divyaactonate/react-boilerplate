import { Logger } from '@utils/logger';
import { useAuth } from '@store/auth';
import { FormikHelpers } from 'formik/dist/types';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

export interface MyFormValues {
  email: string;
  password: string;
  authentication: string;
  authentication1: string;
}
export const Controller = () => {
  const { login } = useAuth();
  const history = useHistory();
  const onSubmit: (
    values: MyFormValues,
    formikHelpers: FormikHelpers<MyFormValues>
  ) => void | Promise<any> = async (values) => {
    try {
      // setSubmitting(false);
      await login(values.email, values.password);
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

  return {
    initialValues,
    validationSchema,
    onSubmit,
  };
};
