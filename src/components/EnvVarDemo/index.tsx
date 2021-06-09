import { Logger } from '@utils/logger';

const EnvVar = () => {
  Logger.info('process.env.NAME', process.env.NAME);
  Logger.info('process.env.NAME', process.env.name);

  return (
    <>
      <h1 className='text-white text-xl bg-black p-20'>
        process.env.name : {process.env.name}
        <br />
        process.env.NAME : {process.env.NAME}
      </h1>
    </>
  );
};

export default EnvVar;
