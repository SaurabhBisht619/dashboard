import React from 'react'
import './Cards.css';
function Cards(props) {
  return (
    <div>
      <div className="card">
            <span>{"ID:-"+props.id}</span>
            <span>{"Name:- "+props.name}</span>
            <span>{"Email:- "+props.email}</span>
            <span>{"Age:- "+props.age}</span>
            <span>{"Phone No:- "+props.phone}</span>
            <span>{"Access:- "+props.access}</span>  
      </div>
    </div>
  )
}

export default Cards
