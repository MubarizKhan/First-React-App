import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Mubariz';
  const lastName = 'Khan'
  const age = 22;
  const job = 'meh';
  const inputPlaceholder ='Enter your Details'
  const detailsInputBox = <input Placeholder={inputPlaceholder} autocomplete />;
  const mar = [1,2,3,4];
  
  const mObj = {
    name : 'Mubariz',
    age : 22
  };

  // Similarly Arrays and Objects can be accessed

  const getFullName = (firstName, LastName) => `${firstName} ${lastName}`;
  return (
    <div className="App">
      <h3> Full Name: (func) {getFullName(firstName, lastName)} </h3>
      <p> Age: {`${age}`}</p>
      <p> Job: {`${job}`} </p>

      {/* <input placeholder= {`${inputPlaceholder}`} /> */}
      <p> Age: {mObj.age} </p>
      <p> job: {job} </p>

      {mar[0]};

      {mar[0] > 0 ? " True " : " False "}
      
      
      <p> {detailsInputBox} </p>     
    </div>
  );
}

export default App;
