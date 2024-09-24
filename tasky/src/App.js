import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>

      <Task title="Dishes" deadline="Today" description="Clean Dishes and put away">
        
      </Task>
      
      <Task title="Laundry" deadline="Tomorrow" description="Fold the Laundry and put it away">

      </Task>
      
      <Task title="Tidy" deadline="Today" description="Tidy room">
         
      </Task>

      <Task title="homework" deadline="Yesterday" description="Web app Homework">
        
      </Task>
    </div>
  );
}

export default App;
