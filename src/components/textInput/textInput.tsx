import React from 'react';
import {TextInput} from 'react-native';

export interface ITextInputComponent {
  placeholder: any;
  value: any;
  onChange: any;
  keyboardType: any;
  security?: any;
}

export const TextInputComponent: React.FC<ITextInputComponent> = ({
  placeholder,
  value,
  onChange,
  keyboardType,
  security,
}) => {
  return (
    <TextInput
      onChangeText={onChange}
      placeholder={placeholder}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={security}
    />
  );
};
