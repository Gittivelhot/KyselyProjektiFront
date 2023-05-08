import React from 'react';
import PollList from './components/PollList';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AnswerPage from './components/AnswerPage';

function App() {
  return (
    <div className="App">
        <HeaderBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<PollList />} />
            <Route path="/answers/:id" element={<AnswerPage />} />
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
