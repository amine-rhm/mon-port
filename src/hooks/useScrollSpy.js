import { useState, useEffect } from 'react';

const useScrollSpy = (sectionRefs) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  return activeSection;
};

export default useScrollSpy;