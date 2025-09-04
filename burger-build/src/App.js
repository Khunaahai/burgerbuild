import React from 'react';
import './App.css';
import Burger from './components/burgerbuild/burger';  
import BurgerControl from './components/burgercontrol/control';  



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Burger Builder</h1>
      <p>Builder your own burger!</p>
      </header>
      <main>
        <section>
        <Burger/>
        <BurgerControl/>
        </section>
        </main>

      <footer className="App-footer"> 
        <p>&copy; 2025 Burger Builder</p> 
      </footer> 
    </div>
  );
}

export default App;


