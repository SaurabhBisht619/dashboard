import React from 'react';
import mockData from './data/mockData'
import Cards from './Cards';
function Home() {

  
  function fun(val,i) {
    return (
      <div>
          <Cards id={mockData[i].id} email={mockData[i].email} name={mockData[i].name} age={mockData[i].age} phone={mockData[i].phone} access={mockData[i].access} />
      </div>
    )
  }

 
  return (
    <div>
    {mockData.map(fun)}
    </div>
  )
}

export default Home
