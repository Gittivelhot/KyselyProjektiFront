import React, {useState, useEffect} from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';


function PollList () {

    const [polls, setPolls] = React.useState([]);

    useEffect(()=>fetchData(), []);

    const fetchData = ()=> {
        fetch("https://carrestapi.herokuapp.com/cars")
        .then(response => response.json())
        .then(data =>setPolls(data._embedded.cars))
        .catch(err => console.error(err))
      };

    const [columnDefs] = useState([
        {field: "brand", sortable: true, filter: true, flex: 1,},
        {field: "model", sortable: true, filter: true, flex:1},
        {field: "fuel", sortable: true, filter: true, flex:1},
        {field: "year", sortable: true, filter: true,flex:1},
        {field: "price", sortable: true, filter: true,flex:1},
       

        
    ])

    return (
        <div className="ag-theme-material"
      style={{height: 600, width:"100%", margin: "auto"}}>

            <AgGridReact
        rowData={polls}
        columnDefs={columnDefs}>
          
        </AgGridReact>
        </div>
    )


    
}

export default PollList;