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

// PipelineCard = template (how UI looks)
// App = provides data
function PipelineCard ({name,status}) {
  return(
    <div>
      <h3>{name}</h3>
      <p>Status : {status}</p>
    </div>
  )
}
function App() {
  return (
    <div>
      <h1>MY CI/CD DASHBOARD!</h1>
      {pipeline.map((pl) =>(
      <PipelineCard
      key={pl.id}
      name={pl.name}
      status={pl.status}
        />
      ))}
    </div>
  );
}

export default App;
