import React from 'react';
import jsonData from './CollegeBasketballTeams.json';
import './App.css';

interface Teamdata {
  school: string;
  name: string;
  city: string;
  state: string;
}

const allTeams = jsonData.teams;

class Team extends React.Component<Teamdata> {
  render() {
    const oneTeam = this.props;
    return (
      <div style={{ border: '1px solid black' }}>
        <h5>{oneTeam.school}</h5>
        <p>Mascot: {oneTeam.name}</p>
        <p>
          Location: {oneTeam.city}, {oneTeam.state}
        </p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {allTeams.map((singleTeam, index) => (
        <Team key={index} {...singleTeam} />
      ))}
    </div>
  );
}

function Welcome() {
  return <h1>Welcome to March Madness! </h1>;
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
