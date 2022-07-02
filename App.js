import { useState } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: 'true',
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: 'true',
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 4th at 12:30pm',
        reminder: 'false',
    }
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  //Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: 
        !task.reminder } : task
        )
    )
  }
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> {/* Makes you code more robust, easily catch errors */}
      {showAddTask && <AddTask onAdd={addTask} />}  {/* terniary statement if showAddTask is true display 'AddTask'*/}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder} /> : 'No Tasks to show'}
    </div>
  );
}

export default App;
