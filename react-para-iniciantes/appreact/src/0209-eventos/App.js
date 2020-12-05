const App = () => {
  function handleClick(event) {
    alert(event.target.innerText);
  }
  return <button onClick={handleClick}>Clique</button>;
};

export default App;
