import ContactList from '@components/Mobx/with-context/ContactList'
import ContactInput from '@components/Mobx/with-context/ContactInput'
import example from '../../../public/assets/img/tdms/tacttree-logo.png'

// import ContactList from '@components/Mobx/with-hoc/ContactList'
// import ContactInput from '@components/Mobx/with-hoc/ContactInput'
function App() {
  return (
    <div className='container mx-auto'>
      <img src={example}></img>
      <br />
      <h1 className='my-6 text-3xl text-center text-gray-700'>Contacts</h1>
      <ContactInput />
      <ContactList />
    </div>
  )
}

export default App
