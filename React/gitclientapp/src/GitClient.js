import axios from 'axios';

export class GitClient {
  static async getRepositories(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      return response.data.map((repo) => repo.name);
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  }
}

export default GitClient;
