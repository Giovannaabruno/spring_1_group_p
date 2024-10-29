import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

const useDataStorage = (key: string, initilaValue: string) => {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initilaValue;
    } catch (error) {
      return initilaValue;
    }
  });
  // const [email, setEmail] = useState<string>('');

  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };
  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
  // };

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error setting localStorage');
    }
  }, [key, storedValue]);

  // useEffect(() => {
  //   localStorage.setItem('name', name);
  // //   localStorage.setItem('email', email);
  // }, [name]);

  return { storedValue, setStoredValue };
};
export default useDataStorage;
