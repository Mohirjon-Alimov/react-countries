import {useContext} from 'react';
import {ThemeContext} from '../context/theme';

let Header = () => {
  
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className={`heading position-relative d-flex justify-content-between align-items-center ${theme}`}>
      <p className="h3">Where in the world?</p>
      <div className="d-mode position-relative">
        <select
        defaultValue = {theme}
        onChange={(evt)=>{setTheme(evt.target.value)}}>
          <option value="light">Light mode</option>
          <option value="dark">Dark mode</option>
        </select>
      </div>
      
    </div>
  )
}
export default Header;