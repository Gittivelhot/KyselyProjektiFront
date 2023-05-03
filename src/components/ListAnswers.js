import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import React, {useState, useEffect} from "react";

function AnswerList (){

    const [answer, setAnswer] = useState([]);
    useEffect(()=>fetchData(), []);

    const fetchData = () =>{
        fetch("http://localhost:8080/jsonanswers")
        .then(response => response.json())
        .then(data =>{setAnswer(data)})
        .catch(err => console.error(err))
    }

   

    const [columnDefs] = useState([
        {field:"reply_id", sortable: true, filter: true, flex: 1 },
        {field:"reply",sortable: true, filter: true, flex: 1},
        
    ])

    return(
        <div className="ag-theme-material"
      style={{height: 600, width:"90%", margin: "auto"}}>
      <AgGridReact
        rowData={answer}
        columnDefs = {columnDefs}>
      </AgGridReact>
      </div>
    )

}
export default AnswerList;