import { Link } from "react-router-dom";
import TicTacToe from './TicTacToe'
import "./TicTacToe.css";

const GameTable = ({exitGame,roomTest}) => 
{
return (
    <div>
        <h1>Welcome to your game: {roomTest}</h1>
        <TicTacToe />
        <p>Players will arrive shortly</p>
        <Link to={`/`} onClick={()=>exitGame()}>Salir del Juego</Link>
    </div>
  )} 
  
  
export default GameTable;