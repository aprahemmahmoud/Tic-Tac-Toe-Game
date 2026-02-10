import { useState } from "react";


export default function Player({name, symbol,children}) {
  let [playerName,setPlayerName] = useState(name)
  let [isEditing, setIsEditing] = useState(false);

  function handleName(el){
    setPlayerName(el.target.value)
  }
  
  function handleEdit() {
    setIsEditing(!isEditing)
  }

  return (
    <li>
      <span className="player">
        {isEditing == false ? <span className="player-name">{playerName}</span>: <input type="text" required Value={playerName} onChange={handleName}></input>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={()=>{handleEdit()}}>{isEditing==false?"Edit":"Save"}</button>
    </li>
  );
}
