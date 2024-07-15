import './App.css';
import { Alert } from './joe-popup';
import { useState } from 'react';

function App() {
  const [notification, setNotification] = useState({
    visible: false,
    status: 200,
    text: '',
  });

  const handleAlertCall = () => {
    setNotification(prev => ({
      ...prev,
      visible: true,
      text: 'Registered successfully',
    }))
  }

  return (
    <div className="w-screen h-screen flex justify-center place-content-center">
      {notification.visible && <Alert status={notification.status} toggler={setNotification} className='text-neutral-800 border-[1px] border-l-8 rounded-r-[4px] px-2 py-1 w-[75%] sm:w-[300px] md:w-[400px] lg:w-[500px] font-semibold z-30 top-24 -right-10'>
        <div>
          <h1 className='font-bold'>{notification.status === 200 ? "Success!" : "Error occured!"}</h1>
          <small className='font-thin text-sm'>{notification.text}</small>
        </div>
      </Alert>}
      <button className='border-2 border-primary bg-primary-600 text-primary-100 p-3 rounded-md m-auto' onClick={handleAlertCall}>Call alert</button>
    </div>
  );
}

export default App;
