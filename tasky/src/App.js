import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>

      <Task title="Dishes" deadline="Today">
        Clean Dishes and put away
      </Task>
      
      <Task title="Laundry" deadline="Tomorrow" >
          Fold the Laundry and put it away
      </Task>
      
      <Task title="Tidy" deadline="Today" >
        Tidy room 
      </Task>
    </div>
  );
}

export default App;
