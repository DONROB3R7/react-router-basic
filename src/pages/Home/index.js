import React from 'react'

export default function Home() {
  // Const Name useState (String)
  const  [name, setName] = React.useState('Robert');

  // Const Years added (Number)
  const [year, setYear] = React.useState(0);

  // Const Object useState (Object)
  const [bank, setBank] = React.useState({
    money: 0,
    debt:0,
  })


  // UseState String
  function changeName() {
    setName('Costache');
  }
  
  // UseState Number
  function addYear() {
    setYear(year + 1);
  }

  // UseState Object 
  function addMoney(){
    setBank({...bank, money: bank.money + 1})
  }

  // UseState Object 
  function adddebt(){
      setBank({ ...bank, debt: bank.debt + 1})
  }

  return (
    <>
      <div>useState Training</div>
      <div><strong>Number:</strong></div>
      <div>Current Year: {year}</div>
      <button onClick={addYear}>Add Year</button>
      <div><strong>String:</strong></div>
      <div>Home Page Welcome User: {name}</div>
      <button onClick={changeName}>Change Name</button>
      <div><strong>Object:</strong></div>
      <div>Total Amount: {bank.money}$</div>
      <button onClick={addMoney}>Add Money</button>
      <div>Total Debt: {bank.debt}$</div>
      <button onClick={adddebt}>Add Money</button>
    </>
  )
}
