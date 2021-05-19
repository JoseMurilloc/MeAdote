import React, { 
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState
} from 'react';
import { IconType } from 'react-icons';
import { Field } from 'formik'
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: IconType;
  containerStyle?: object;
  placeholderLabel: string;
  isErrored?: boolean;
}

const Input: React.FC<InputProps> = (
  { 
    name,
    placeholderLabel,
    containerStyle = {},
    icon: Icon, 
    isErrored = false,
    ...rest
  }
) => {
  
  const [ isFocus, setIsFocus ] =useState(false);
  const [ isFilled, setIsFilled ] =useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, [])

  const handleInputBluer = useCallback(() => {
    
    if (inputRef.current?.value) 
      setIsFilled(true)
    else 
      setIsFilled(false)

    setIsFocus(false);
  }, []);


  return (
    <Container 
      style={containerStyle}
      isFilled={isFilled}
      isFocus={isFocus}
      isErrored={isErrored}
    >
      <Icon 
        color={isErrored ? "#E10C40" : "#393A30"} 
        size="1.66rem"
      />
      <Field
        id={name}
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBluer}
        ref={inputRef}
        placeholder={placeholderLabel}
        {...rest}
      />
    </Container>
  );
};

export default Input;