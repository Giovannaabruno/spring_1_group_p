import { useEffect, useState } from 'react';
import Switch from 'react-switch';
import useDataStorage from '../../hooks/useDataStorage';

interface DataStorageProps {
  storageKey: string;
  val1: string;
  val2: string;
}
export default function ToggleSwitch({ storageKey, val1, val2 }: DataStorageProps) {
  const { storedValue, setStoredValue } = useDataStorage(storageKey, '');
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(storedValue === val1);
  }, [val1]);
  useEffect(() => {
    setStoredValue(isChecked ? val1 : val2);
  }, [isChecked, setStoredValue, val1, val2]);

  const handleToggle = () => {
    setIsChecked(!isChecked);

    setTimeout(() => {
      window.location.reload();
    }, 0);
  };

  return (
    <label>
      <Switch
        onChange={handleToggle}
        checked={isChecked}
        onColor='#007bff'
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        height={25}
        width={50}
      />
    </label>
  );
}
