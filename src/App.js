import './App.css';
import Header from './components/header';
import Search from './components/search';
import {Card} from './components/cards';

import React from 'react';
import {useState} from 'react';

function App() {
  const [countries, setCountries] = useState([
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      id: 2,
      img: "https://nationalflagfoundation.org/wp-content/uploads/1795.png",
      name: "Germany",
      population: "323,947,000",
      region: "Americas",
      capital: "Washington D.C"
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      capital: "Brasília"
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png",
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      capital: "Reykjavík"
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1024px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png",
      name: "Afghanistan",
      population: "27,657,145",
      region: "Asia",
      capital: "Kabul"
    },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png",
      name: "Uzbekistan",
      population: "35,482,369",
      region: "Asia",
      capital: "Tashkent"
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png",
      name: "Albania",
      population: "2,886,026",
      region: "Europe",
      capital: "Tirana"
    },
    {
      id: 8,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png",
      name: "Algeria",
      population: "40,400,000",
      region: "Africa",
      capital: "Algiers"
    },
  ])
  console.log(setCountries);


  return (
    <div className="container-fluid">
      <Header />
      <Search />
      <ul className='card-list'>
        {
          countries.map(country => (
            <Card key={country.id} img={country.img} population={country.population}region={country.region} capital={country.capital} name={country.name}></Card>
          ))
        }
      </ul>

     
      
    </div>
  );
}

export default App;
