import PipelineCard from './PipelineCard';
import './App.css';

const pipeline = [{
  id: 1,
  name: 'Pipeline 1',
  status: 'success',
  logs : ["Build started...",
  "Tests passed...",
  "Deployment successful..."]
}, {
  id: 2,
  name: 'Pipeline 2',
  status: 'failed',
  logs : ["Build started...",
  "Tests passed...",
  "Deployment successful..."]
}, {
  id: 3,
  name: 'Pipeline 3',
  status: 'running',
  logs : ["Build started...",
  "Tests passed...",
  "Deployment successful..."]
}]


// PipelineCard = template (how UI looks)
// App = provides data

function App() {
  return (
    <div>
      <h1>MY CI/CD DASHBOARD!</h1>
      {pipeline.map((pl) => (
        <PipelineCard
          key={pl.id}
          name={pl.name}
          status={pl.status}
          logs ={pl.logs}
        />
      ))}
    </div>
  );
}

export default App;
