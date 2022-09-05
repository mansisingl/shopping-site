import React from 'react'
import {Input, Group, FormInputLabel} from './FormInput.styled';

const FormInput = ({label, ...otherProps}) => {
  return (
    <Group>
        <Input {...otherProps}/>
        {label && (
          <FormInputLabel shrink={otherProps.value.length}>
            {label}
          </FormInputLabel>
        )}    
    </Group> 
  )
}

export default FormInput;
