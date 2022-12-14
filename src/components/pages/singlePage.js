import { useParams, useNavigate } from "react-router-dom";
import {useEffect, useState } from 'react';
import {Loader} from '../loader/loader';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme';

export const SinglePage = ()=> {
  const {theme} = useContext(ThemeContext)
  // console.log(theme);
  const {name} = useParams();
  let [country, setCountry] = useState({
    isLoading: true,
    isError:false,
    data: {}
  })

  useEffect(()=> {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => setCountry({
      isLoading: false,
      isError: false,
      data: data,
    }))
    .catch(err => setCountry({
      isLoading: false,
      isError: true,
      data: {}
    }))
  }, [name])
  
  const navigate = useNavigate()
  return(
    <div className={theme}>
      <button className="btn btn-primary my-3"onClick={()=> navigate(-1)}>←  Go back</button>
      {country.isLoading && <Loader />}
      {country.isError && <h1>Error</h1>}
      {country.data.length &&
        <div>
          {country.data.map(c =>(
            
            <div key={c.name} className="d-md-flex justify-content-around align-items-center">
              <img src={c.flags.svg} className="flag" alt="flag" width="560" />
              <div>

                <h2 className="text-lg-start text-center ">{c.name.common}</h2>

                <div className="d-flex justify-content-around flex-wrap">
                  <div>

                    <p className="fw-bold">Native Name: <span className="fw-normal">{c.name.nativeName[Object.keys(c.name.nativeName)[0]].common}</span></p>
                    <p className="fw-bold">Population: <span className="fw-normal">{c.population}</span></p>
                    <p className="fw-bold">Region: <span className="fw-normal">{c.region}</span></p>
                    <p className="fw-bold">Sub Region: <span className="fw-normal">{c.subregion}</span></p>
                    <p className="fw-bold">Capital: <span className="fw-normal">{c.capital}</span></p>

                  </div>

                  <div className='mx-0 mx-lg-5'>

                    <p className="fw-bold">Top Level Domain: <span className="fw-normal">{c.tld}</span></p>
                    <p className="fw-bold">Currencies: <span className="fw-normal">{c.currencies[Object.keys(c.currencies)[0]].name}</span></p>
                    <p className="fw-bold">Languages: <span className="fw-normal">{c.languages[Object.keys(c.languages)[0]]}</span></p>

                  </div>
                </div>

                {c?.borders?.length && 
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <p className="fw-bold m-0 p-0">Border countries: </p>
                    {c.borders.map ((e)=> <button key={e} className="btn btn-sm btn-outline-primary mx-1 my-1">{e}</button>)}
                  </div>
                }

              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}