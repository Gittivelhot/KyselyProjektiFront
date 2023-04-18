import React, {useEffect, useState} from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AgGridReact } from "ag-grid-react";
import AnswerPoll from "./AnswerPoll";


function PollList () {

    const [polls, setPolls] = React.useState([]);

    useEffect(()=>fetchData(), []);

    const fetchData = ()=> {
        fetch("http://localhost:8080/jsonpolls")
        .then(response => response.json())
        .then(data =>setPolls(data))
        .catch(err => console.error(err))
      };

    const updateAnswer = (poll) => {
    }
     const [columnDefs] = useState([
      {field: "title"},
      {cellRenderer: row => <AnswerPoll updateAnswer={updateAnswer} poll= {row.data}/>},
      {field: "title.question.query"}
     ])
      
      return (
        <div className="ag-theme-material"
        style={{height: 600, width:"90%", margin: "auto"}}>
          
           < AgGridReact
        rowData={polls}
        columnDefs={columnDefs}>
          
        </AgGridReact>
        </div>
      );
}

export default PollList;