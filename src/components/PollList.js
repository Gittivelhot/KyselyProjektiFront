import React, {useState, useEffect} from "react";
function PollList () {

    const [polls, setPolls] = React.useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('http://carrestapi.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setPolls(data._embedded.cars))
        .catch(err => console.error(err))
    }


    
}

export default PollList;