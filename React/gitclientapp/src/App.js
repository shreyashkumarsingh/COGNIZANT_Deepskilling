import React, { useState } from 'react';
import GitClient from './GitClient';

function App() {
  const [username, setUsername] = useState('techiesyed');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRepos = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError('');

    try {
      const repoNames = await GitClient.getRepositories(username);
      setRepos(repoNames);
    } catch (err) {
      setError('Failed to fetch repositories for user: ' + username);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>GitHub Repositories Client</h1>
      <form onSubmit={fetchRepos} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ padding: '8px', width: '250px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#0366d6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Fetch Repositories
        </button>
      </form>

      {loading && <p>Loading repositories...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {repos.length > 0 && (
        <div>
          <h3>Repositories for {username}:</h3>
          <ul>
            {repos.map((repo, idx) => (
              <li key={idx} style={{ padding: '4px 0' }}>{repo}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
