import logo from './logo.svg';
import './App.css';

const pipeline = [{
  id:1 , 
  name : 'Pipeline 1',
  status : 'success!✅'
},{
id: 2,
name : 'Pipeline 2',
status : 'Failed ❌'
},{
  id:3,
  name: 'Pipeline 3',
  status: 'Running 🏃‍♀️'
}]

function App() {
  return (
    <div>
      <h1>MY CI/CD DASHBOARD!</h1>
      {pipeline.map((pl) =>(
      <p key ={pl.id}>
        {pl.name} - {pl.status}
      </p>

      ))}
    </div>
  );
}

export default App;
