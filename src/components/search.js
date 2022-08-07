import { useRef } from "react";

export const Search = ({setValue}) => {
  const elInput = useRef('')

  let catchInpValue = (evt) => {
    evt.preventDefault();
    setValue(elInput.current.value)
    elInput.current.value = null;
  }  

  return (
    <>
      <div className="searchBox d-flex align-items-center">
        <form className="d-flex align-items-center" onSubmit={(evt) => catchInpValue(evt)}>
          <input ref={elInput} className="searchInput position-relative" type="text" placeholder="Search for a country…" />
          <button className="btn btn-primary mx-4" type="submit">Search</button>
        </form>
      </div>
    </>
  )
}