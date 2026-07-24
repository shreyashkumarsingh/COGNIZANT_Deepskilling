import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const dummyRepos = [
      { name: 'react-hands-on-labs' },
      { name: 'spring-boot-microservices' },
      { name: 'dotnet-fullstack-portal' }
    ];

    axios.get.mockResolvedValue({ data: dummyRepos });

    const repoNames = await GitClient.getRepositories('techiesyed');

    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
    expect(repoNames).toEqual([
      'react-hands-on-labs',
      'spring-boot-microservices',
      'dotnet-fullstack-portal'
    ]);
  });
});
