import { useState, useEffect } from 'react';

const useTypingEffect = (texts, typingSpeed = 150) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const handleTyping = () => {
      setSpeed(isDeleting ? 50 : typingSpeed);
      
      if (!isDeleting) {
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          return;
        }
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, speed, texts, typingSpeed]);

  return displayText;
};

export default useTypingEffect;