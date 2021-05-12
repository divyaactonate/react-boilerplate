import ContactList from './with-context/ContactList'
import ContactInput from './with-context/ContactInput'
import example from '../../public/assets/img/tdms/logo.png'

// import ContactList from '@components/with-hoc/ContactList';
// import ContactInput from '@components/with-hoc/ContactInput';
function App() {
  return (
    <div className='container mx-auto'>
      <img src={example}></img>
      <br />
      <h1 className='page-title'>Contacts</h1>
      <ContactInput />
      <ContactList />
    </div>
  )
}

export default App
