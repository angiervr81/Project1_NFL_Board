import React from 'react';
import './App.css';

const TeamCard = ({ team }) => {
  return (
    <div className="team-card">
      <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />
      <h3>{team.name}</h3>
      <p>Record: {team.record}</p>
      <p>Next Game: {team.nextGame}</p>
      <a href={team.statsLink} target="_blank" rel="noopener noreferrer">
        View Stats
      </a>
    </div>
  );
}

export default TeamCard;
