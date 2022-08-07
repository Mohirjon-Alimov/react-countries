import './App.css';
import Header from './components/header';
import {useEffect, useState } from 'react';
import React from 'react';
import Country from './components/pages/homePage';
import  {SinglePage} from './components/pages/singlePage';
import { Search } from './components/search';
import { Select } from './components/Select';
import { Routes, Route} from 'react-router-dom'; 

function App() {
  const [select, setSelect] = useState()
  const [value, setValue] = useState();
  const [countries, setCountries] = useState({
    isLoading: true,
    isError: false,
    data: {}
  })
  
  useEffect(() =>{
    if (value?.length) {
      fetch(`https://restcountries.com/v3.1/name/${value}`)
      .then((res) => res.json()).then((data)=> setCountries({
      isLoading: false,
      isError: false,
      data: data
      }))
      .catch((err) => console.log(), setCountries({
        isLoading: false,
        isError: true,
        data: {},
        
      }))
      
    }else if(select?.length && select !== 'all'){
      fetch(`https://restcountries.com/v3.1/region/${select}`)
        .then((res) => res.json())
        .then((data)=> setCountries({
        isLoading: false,
        isError: false,
        data: data
        }))
        .catch((err) => setCountries({
          isLoading: false,
          isError: true,
          data: {}
        }))
        
    }
    else {
      fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json()).then((data)=> setCountries({
        isLoading: false,
        isError: false,
        data: data
      }))
      .catch((err) => {
        // console.log(err);
        setCountries({
        isLoading: false,
        isError: true,
        data: {}
      })})
      
    }
  }, [value, select])

  return (
    <div className="container-fluid">

      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <div className="searching container-md d-sm-flex justify-content-between align-items-center">
              <Search setValue={setValue} /> 
              <Select setSelect={setSelect} />
            </div>
            <Country countries={countries} />
          </>
        } />
        <Route path="/country/:name" element={<SinglePage />}/>
      </Routes>
      
      
      
    
      
      {/* {countries.data.length && <PaintIcon />}  */}
    </div>
  )
}

export default App;