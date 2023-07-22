import React, { useState } from 'react'
import { Square } from './Square'

export const Board = () => {
    const [state,setState]=useState(Array(9).fill(null));
    const [isXTrun,setIsXTurn]=useState(true);
const checkWinner=()=>{
  const winnerLogic=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let logic of winnerLogic){
    const[a,b,c]=logic;
    if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
        return state[a];
    }
  }
return false;
}
const isWinner=checkWinner();
function handelClick(index){
    if(state[index]!==null){
    return;
    }
  const copyState=[...state];
  copyState[index]=isXTrun ? "X":"0";
  setState(copyState);
  setIsXTurn(!isXTrun);


}
const emplystate=()=>{
    setState(Array(9).fill(null));
}
  return (
    <div className='board-container'>
      {
        isWinner ?(
            <>{isWinner} won the game <botton onClick={emplystate}>Play Again</botton></>
        ):(
            <>
            <h4>Player {isXTrun?"x":"0"}</h4>
             <div className='board-row'>
        <Square onClick={()=>handelClick(0)} value={state[0]}></Square>
        <Square onClick={()=>handelClick(1)} value={state[1]}></Square>
        <Square onClick={()=>handelClick(2)} value={state[2]}></Square>
       </div>
       <div className='board-row'>
       <Square  onClick={()=>handelClick(3)} value={state[3]}></Square>
        <Square onClick={()=>handelClick(4)} value={state[4]}></Square>
        <Square  onClick={()=>handelClick(5)} value={state[5]}></Square>
       </div>
       <div className='board-row'>
       <Square onClick={()=>handelClick(6)} value={state[6]}></Square>
        <Square onClick={()=>handelClick(7)} value={state[7]}></Square>
        <Square  onClick={()=>handelClick(8)} value={state[8]}></Square>
       </div>
            </>
        )
      }
    </div>
  )
}
