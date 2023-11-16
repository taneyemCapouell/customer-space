import React, { useState } from 'react';
import Select from 'react-select';
// import './custom-select.css';

const customStyles = {
    container: (provided) => ({
        ...provided,
        width: '300px',
    }),
    control: (provided, state) => ({
        ...provided,
        border: state.isFocused ? '2px solid #007bff' : '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: state.isFocused ? '0 0 0 2px rgba(0, 123, 255, 0.3)' : 'none',
        '&:hover': {
            border: state.isFocused ? '2px solid #007bff' : '1px solid #aaa',
        },
    }),
    menu: (provided) => ({
        ...provided,
        // marginTop: '90px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#007bff' : 'white',
        color: state.isFocused ? 'white' : 'black',
        padding: '8px 12px',
        '&:hover': {
            backgroundColor: state.isSelected ? '#007bff' : 'black',
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#333',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#999',
    }),
};

const options = [
    { value: '1', label: 'Etandard' },
    { value: '2', label: 'All Heights' },
    { value: '3', label: 'BEKATAL' },
    { value: '4', label: 'NTM' },
    { value: '5', label: 'ORANGE' },
];
const CustomSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
    };
    return (
        <div>
            <Select className='select_company'
                options={options}
                styles={customStyles}
                placeholder="Sélectionnez une entreprise"
                value={selectedOption}
                onChange={handleSelect}
            />
        </div>
    );
};

export default CustomSelect;