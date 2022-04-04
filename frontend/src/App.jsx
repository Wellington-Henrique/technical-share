import './App.css';
import { PostCard } from './components/PostCard/PostCard'
import { Login } from './components/Login/Login'



export function App() {
  const user = {
    name: "Arthur Oliveira",
    email: "aoliveira@teste.com",
    skills: ["frontend", "react"]
  }

  return (
    <div className="App">
      <Login />
    </div>
  );
}


//<PostCard user={user}/>