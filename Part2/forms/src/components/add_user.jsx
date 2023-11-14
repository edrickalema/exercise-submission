const AddNumberForm = ({handleSubmit, handleChange,handleNumber, newName,number}) => {

    return (
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
  
        <div>
          number: <input onChange={handleNumber} value={number} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )
  }

  export default AddNumberForm