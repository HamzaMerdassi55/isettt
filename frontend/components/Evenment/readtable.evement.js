import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Table,Button } from 'semantic-ui-react'

export default function Read(){

    const [apIData, setapIData] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:3000/Evenment')
               .then((getData) =>{
                  setapIData(getData.data)
    })
}, [])
   function deletId(id)
   {
    axios.delete(`http://localhost:3000/Evenment/${id}`,{
        method:'DELETE'
   }).then((result)=>{
       window.location.reload();    })
   }
   function Update(id){
       console.log(id)
            window.location = "/ManageDepartement/Update/"+id
   }
    return(
        <div >
        {/* Row */}
        <div >
     <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apIData.map((data, index) => {
            return(
                <Table.Row>
                <Table.Cell>{index}</Table.Cell>
                <Table.Cell>{data.Title}</Table.Cell>
                <Table.Cell>{data.Category?.Title}</Table.Cell>
                <Table.Cell>{data.Course_Price}</Table.Cell>
                <Table.Cell><Button style={{backgroundColor: 'green', outline: 'none', border: 'none', color: '#FFF', borderRadius: 5, padding: '12px 20px'}} color="green" onClick={()=> Update(data._id)}>Update</Button></Table.Cell>
                <Table.Cell><Button style={{backgroundColor: 'red', outline: 'none', border: 'none', color: '#FFF', borderRadius: 5, padding: '12px 20px'}} color="red" onClick={()=> deletId(data._id)}>Delete</Button></Table.Cell>
              </Table.Row>     
            )
        })}
      </Table.Body>
     </Table>
             </div>
             </div>
    )
}
