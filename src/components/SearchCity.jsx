const SearchCity = (props) => {
  return (
    <form onSubmit={props.onSearch} className="flex justify-between items-center m-auto rounded-sm w-[40%] p-5 bg-[rgba(147,197,253,0.7)]">
      <label htmlFor="">
        <input 
          className="outline-none border-white border-2 p-1 rounded-sm w-[120%] text-white placeholder:text-gray-800" 
          type="text" 
          placeholder="Search city..." 
          onChange={props.onInputCity}
        />
      </label>
      <button type="submit" className="bg-blue-600 px-5 py-1 ml-2 text-white rounded-sm transition-colors ease-in hover:bg-blue-700">search</button>
    </form>
  )
}

export default SearchCity