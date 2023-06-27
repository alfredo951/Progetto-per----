import React, { useState } from 'react';
import { RisultatoItemI } from './Stepper';

interface Option {
  option: string;
}

interface Step {
  answer: Answer[];
}

interface Answer {
  dati: Dati[];
}

interface Dati {
  risultato: string;
}

interface ParentComponentProps {
  stepsT: Step[];
}

const Select: React.FC<{
  options: Option[];
  value: string | number | File | RisultatoItemI | undefined;
  label: string;
  onChange: (selectedValue: string) => void;
}> = ({ options, value, label, onChange }) => {
  const handleOnchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  const renderInput = () => {
    if (value && value === 'Altro') {
      return <input type="text" onChange={(e) => onChange(e.target.value)} />;
    }
    return null;
  };

  return (
    <>
      <select onChange={handleOnchange}>
        {options.map((item) => (
          <option key={item.option} value={item.option}>
            {item.option}
          </option>
        ))}
      </select>
      {renderInput()}
    </>
  );
};
export default Select