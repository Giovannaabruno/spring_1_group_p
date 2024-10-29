import { useCallback, useEffect, useState } from 'react';
import './index.css';

const ScrollButton = () => {
  const [isVisble, setIsVisble] = useState(false);

  const toggleVisibility = useCallback(() => {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      setIsVisble(true);
    } else {
      setIsVisble(false);
    }
  }, []);
  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  return (
    <>
      {isVisble && (
        <button
          id='myBtn'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='semi-transparent'>
          Scroll to Top
        </button>
      )}
    </>
  );
};
export default ScrollButton;
