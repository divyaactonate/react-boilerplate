import { storiesOf } from '@storybook/react';
import { Toaster } from '.';

const multiline = (e: any) => {
  e?.preventDefault();
  Toaster.simple({
    duration: 5000,
    message:
      "This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller.",
  });
};
const simple = (e: any) => {
  e?.preventDefault();
  Toaster.simple({ message: 'simple' });
};
const sucess = (e: any) => {
  e?.preventDefault();
  Toaster.success({ message: 'sucess' });
};
const error = (e: any) => {
  e?.preventDefault();
  Toaster.error({ message: 'error' });
};
const warn = (e: any) => {
  e?.preventDefault();
  Toaster.warning({ message: 'warn' });
};
const info = (e: any) => {
  e?.preventDefault();
  Toaster.info({ message: 'info' });
};
const loading = (e: any) => {
  e?.preventDefault();
  Toaster.loading({});
};
const custom = (e: any) => {
  e?.preventDefault();
  Toaster.custom({ message: 'custom' });
};
const promise = (e: any) => {
  e?.preventDefault();
  Toaster.promise({
    functionName: new Promise((resolve) => {
      setTimeout(() => {
        resolve('timeout elapsed');
      }, 5000);
    }),
    content: {
      loading: 'Saving...',
      success: <b>Promise resolved!</b>,
      error: <b>Could not save.</b>,
    },
  });
};
storiesOf('@beautify/core/Feedback/Toaster', module).add('default', () => (
  <>
    <div className='flex justify-center space-x-8 items-start'>
      <button
        className='px-10 py-2 border bg-indigo-600 rounded-lg border-black-200 ext-md text-white ml-3'
        onClick={simple}
      >
        Simple
      </button>
      <br />
      <button
        className='px-10 py-2 border bg-indigo-600 rounded-lg border-black-200 ext-md text-white ml-3'
        onClick={multiline}
      >
        MultiLine
      </button>
      <br />
      <button
        className='px-10 py-2 border bg-green-600 rounded-lg border-black-200 ext-md text-white ml-3'
        onClick={sucess}
      >
        Sucesss
      </button>
      <br />
      <button
        className='px-10 py-2 border bg-gray-300 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
        onClick={custom}
      >
        custom
      </button>
      <br />
      <button
        className='px-10 py-2 border bg-red-600 rounded-lg border-black-200 ext-md text-white ml-3'
        onClick={error}
      >
        Error
      </button>
      <br />

      <button
        className='px-10 py-2 border bg-yellow-600 rounded-lg border-black-200 ext-md text-white ml-3'
        onClick={warn}
      >
        Warning
      </button>
      <br />
    </div>
    <div className='flex justify-center space-x-8 items-start'>
      <button
        className='px-10 py-2 border bg-blue-600 rounded-lg border-black-200 ext-md text-white ml-3'
        onClick={info}
      >
        Info
      </button>
      <br />
      <button
        className='px-10 py-2 border bg-yellow-400 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
        onClick={promise}
      >
        Promise
      </button>
      <br />
      <br />
      <button
        className='px-10 py-2 border bg-pink-600 rounded-lg border-black-200 ext-md text-white ml-3'
        onClick={loading}
      >
        Loading
      </button>
      <br />
    </div>
  </>
));
