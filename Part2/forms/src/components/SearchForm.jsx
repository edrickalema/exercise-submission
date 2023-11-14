const SearchForm = ({handleSearchForm, handleSearch, search}) => {
    return (
      <form onSubmit={handleSearchForm}>
          search: <input onChange={handleSearch} value={search} />
          <button>Search</button>
        </form>
    )
  }

  export default SearchForm