import React from 'react';
import { teams } from './data/teams.js';
import TeamCard from './components/TeamCard.jsx';
import './App.css';
function App() {
  return (
    <div className='app'>
      <h1>NFL Board</h1>

      <div className='card-gird'>
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default App;
