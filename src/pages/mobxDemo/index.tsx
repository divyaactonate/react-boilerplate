import ContactList from '@components/Mobx/with-context/ContactList';
import ContactInput from '@components/Mobx/with-context/ContactInput';
import example from '../../../public/assets/img/tdms/tacttree-logo.png';
import Layout from '@layouts/index';

// import ContactList from '@components/Mobx/with-hoc/ContactList'
// import ContactInput from '@components/Mobx/with-hoc/ContactInput'
function App() {
  return (
    <Layout>
      <div className='container mx-auto'>
        <img src={example} alt='img'></img>
        <br />
        <h1 className='my-6 text-3xl text-center text-gray-700'>Contacts</h1>
        <ContactInput />
        <ContactList />
      </div>
    </Layout>
  );
}

export default App;
