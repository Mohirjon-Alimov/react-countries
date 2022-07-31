import Select from 'react-select';
import {useState} from 'react';

let Search = () => {
  const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  let [currentValue, setCurrentValue] = useState('');

  let getValue = () =>{
    return currentValue ? options.find(c => c.value === currentValue) : ' '
  }

  let onChange = (newValue) =>{
    return setCurrentValue(newValue.value);
  }
  return (
    <div className="searching position-relative d-flex justify-content-between align-items-center">
      <input className="searchInput position-relative" placeholder="Search for a country…"></input>
      <Select options={options} getValue={getValue} onChange={onChange}/>
      
      {/* <select className="select">
        <option selected disabled defaultValue="filter">filter by region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
      </select> */}
    </div>

    


  )
}
export default Search;