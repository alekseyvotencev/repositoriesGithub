import { useState } from 'react';
import Header from './components/Header';
import ReposList from './components/ReposList';
import SearchBlock from './components/SearchBlock';
import './styles/App.css';


function App() {

  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  return (
    <div className="App">
      <Header />
      <SearchBlock setRepos={setRepos} setError={setError} />
      <ReposList repos={repos} error={error} />
    </div>
  );
}

export default App;
