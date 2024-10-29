import { Button } from 'react-bootstrap';
import { useState } from 'react';
import useDataStorage from '../../../hooks/useDataStorage';
import './index.css';
import ToggleSwitch from '../../../tool/toggleSwitch';

const SettingsPage = () => {
  const { storedValue, setStoredValue } = useDataStorage('displayMode', 'normal');
  const [isOn, setIsOn] = useState(false);
  const toggleMode = () => {
    setStoredValue(prevMode => (prevMode === 'normal' ? 'colorBlind' : 'normal'));
  };
  return (
    <div className={`Settings-page ${storedValue}`}>
      <h1>Settings</h1>
      <div className='toggle-container'>
        <label htmlFor='mode-toggle' className='toggle-label'>
          Enable Color Blindness
        </label>
        <ToggleSwitch storageKey='colorBlindMode' val1='colorBlindMode' val2='normal' />
      </div>
    </div>
  );
};
export default SettingsPage;
