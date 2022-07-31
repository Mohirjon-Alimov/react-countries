let Search = () => {
  return (
    <div className="searching position-relative d-flex justify-content-between align-items-center">
      <input className="searchInput position-relative" placeholder="Search for a country…"></input>
      <select className="select">
        <option selected disabled value="">filter by region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
      </select>
    </div>

    


  )
}
export default Search;