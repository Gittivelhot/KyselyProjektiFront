import PollList from './components/PollList';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
  } from "react-router-dom";
import { Button } from '@mui/material';

import './App.css';
import AnswerList from './components/ListAnswers';
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Link to="/"><Button style={{margin:10}} variant="contained" >Polls & answering</Button></Link>{' '}
      <Link to="/answer"><Button variant="contained">Answers</Button></Link>{' '}

      <Routes>
        <Route  exact path ="/" element= {<PollList/>} />
        <Route path="/answer" element= {<AnswerList/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
