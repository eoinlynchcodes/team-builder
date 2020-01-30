import React, { useState } from 'react';
import Form from './components/Form';

function App() {

  const [ teamMember, setTeamMember ] = useState([]);

  console.log(teamMember);
  
  return (
    <Form setTeamMember={setTeamMember}/>
  );
}

export default App;
