import './App.css';

const Person = () => {
  return (
    <>
      <h1>First Name: Parth</h1>
      <h2>Last Name: Patel</h2>
      <h3>Age: 20</h3>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person/>
    </div>
  );
}

export default App;
