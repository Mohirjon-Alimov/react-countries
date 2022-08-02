// import Select from 'react-select';
// import { useState} from 'react';
// // import {useEffect} from 'react';

// let Search = () => {
//   // console.log(useRef);

//   const [countries, setCountries] = useState([])
  
  

//   // let inpRef = useRef()


//   let catchInpValue = (evt) => {
//     if(evt.code === "Enter"){
//       fetch(`https://restcountries.com/v3.1/name/${evt.target.value}`)
//       .then((res) => res.json()).then((data)=> {setCountries(data)})
//       .catch((err) => {console.log(err)})


      

//       console.log(countries);
//       evt.target.value = null;
//     }
//     // console.log(countries);
    
//   }

//   // useEffect((evt) =>{
//   //   fetch(`https://restcountries.com/v3.1/name/${evt.target.value || 'usa'}`)
//   //   .then((res) => res.json()).then((data)=> {setCountries(data)})
//   //   .catch((err) => {console.log(err)})
//   // }, [catchInpValue])

//   const options = [
//     { value: 'Africa', label: 'Africa' },
//     { value: 'America', label: 'America' },
//     { value: 'Asia', label: 'Asia' },
//     { value: 'Europe', label: 'Europe' },
//     { value: 'Oceania', label: 'Oceania' },
//   ];

//   let [currentValue, setCurrentValue] = useState('');

//   let getValue = () =>{
//     return currentValue ? options.find(c => c.value === currentValue) : ' '
//   }

//   // let onChange = (newValue) =>{
//   //   console.log(newValue);
//   //   return setCurrentValue(newValue.value);
//   // }

  
//     // useEffect(() =>{
//     //   fetch(`https://restcountries.com/v3.1/name/${this.value}`)
//     //   .then((res) => res.json()).then((data)=> {setCountries(data)})
//     //   .catch((err) => {console.log(err)})
//     // })
    
  
//   return (
//     <div className="searching position-relative d-flex justify-content-between align-items-center">
//       <input 
//       //  ref={inpRef}
//       onKeyUp={catchInpValue}
//        className="searchInput position-relative" type="text" placeholder="Search for a country…"></input>
//       <Select options={options} getValue={getValue} onChange={onchange}/>
      
//       {/* <select className="select">
//         <option selected disabled defaultValue="filter">filter by region</option>
//         <option>Africa</option>
//         <option>America</option>
//         <option>Asia</option>
//         <option>Europe</option>
//       </select> */}
//     </div>

    


//   )
// }
// export default Search;