import './App.css';
import Select from 'react-select';
import Header from './components/header';
import {Card} from './components/cards';
import {useEffect,  useState } from 'react';
import React from 'react';
import {ReactComponent as PaintIcon} from './assets/img/image.svg'

function App() {

  const [countries, setCountries] = useState([])
  
  useEffect(() =>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json()).then((data)=> {setCountries(data)})
    .catch((err) => {console.log(err)})
  }, [])


  let catchInpValue = (evt) => {
    // if(evt.code === "Enter"){
      try{
        fetch(`https://restcountries.com/v3.1/name/${evt.target.value}`)
        .then((res) => res.json()).then((data)=> {setCountries(data)})
        .catch((err) => {console.log(err)})

        if(evt.code === "Enter"){
          evt.target.value = null;
        }
        
      }catch(err){
        console.log(err);
      }
    // }
  
  }

  const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ];

  let [currentValue, setCurrentValue] = useState('');

  let getValue = () =>{
    console.log(setCurrentValue());
    return currentValue ? options.find(c => c.value === currentValue) : ' '
  }
  let onChange = (newValue) =>{
    try{
      fetch(`https://restcountries.com/v3.1/region/${newValue.value}`)
      .then((res) => res.json()).then((data)=> {setCountries(data)})
      .catch((err) => {console.log(err)})

    }catch(err){
      console.log(err);
    }
    return setCurrentValue(newValue.value);
    
  }

  return (
    <div className="container-fluid">

      <Header />

      <div className="searching container-md d-sm-flex justify-content-between align-items-center">

        <div className="searchBox d-flex align-items-center">
          <input onChange={catchInpValue} className="searchInput position-relative" type="text" placeholder="Search for a country…"></input>
        </div>

      <Select className='selectInp  mt-sm-0 mt-4' options={options} getValue={getValue} onChange={onChange}/>
      
    </div>
      <ul className='card-list'>
      
        {
          countries.length ?
          countries.map(country => (
            <Card key={country.cca3} img={country.flags.png} population={country.population}region={country.region} capital={country.capital} name={country.name.common}></Card>
          )) : countries.length === 0 ? <PaintIcon /> : <p>Not found</p>
        }
      </ul>
    </div>
  );
}

export default App;