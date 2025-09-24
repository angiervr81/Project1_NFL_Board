import React from 'react';
import './TeamCard.css';

function TeamCard({ team }) {
  return (
    <div className="team-card">
      <img src={team.logo} alt={`${team.name} logo`} />
      <h2>{team.name}</h2>
      <p>{team.stats}</p>
      <p>{team.standing}</p>

      {/* Schedule button */}
      {team.schedule && (
        <a
            href={team.schedule}
            target="_blank"
            rel="noopener noreferrer"
            className="schedule-button"
        >
            View Schedule
        </a>
)}

    </div>
  );
}

export default TeamCard;

