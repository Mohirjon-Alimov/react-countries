export const Select = ({setSelect})=> {
  return (
    <>
      <select onChange={(evt)=> setSelect(evt.target.value)} className='selectInp select mt-sm-0 mt-4'>
        <option value='all'>All</option>
        <option value='asia'>Asia</option>
        <option value='europ'>Europe</option>
        <option value='americas'>America</option>
        <option value='oceania'>Oceania</option>
        
      </select>
    </>
  )
}