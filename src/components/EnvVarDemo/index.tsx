const EnvVar = () => {
  console.log('process.env.NAME', process.env.NAME);
  console.log('process.env.NAME', process.env.name);

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
