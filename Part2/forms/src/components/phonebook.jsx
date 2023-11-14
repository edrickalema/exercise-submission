import { deletePerson } from "../phoneService/phoneservice"

const Persons = ({personsData}) => {

  const deleteUser = (id) => {
    window.confirm(`Do you want to delete element ${id}`)
    deletePerson(id).then(response=> {
      console.log(response)
    })
}
    return  personsData.map((person, i) => (
        <div>
          <p key={i}><strong>{person.name}</strong>  {person.number}</p>
          <button onClick={()=> {deleteUser(person.id)}}>delete</button>
        </div>
      ))
}

export default Persons