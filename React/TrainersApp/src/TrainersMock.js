import Trainer from './trainer';

export const trainersData = [
  new Trainer(
    1,
    'Syed Mohammad',
    'syed.mohammad@cognizant.com',
    '9876543210',
    'Microsoft .NET',
    ['C#', 'ASP.NET Core', 'Entity Framework', 'React']
  ),
  new Trainer(
    2,
    'John Doe',
    'john.doe@cognizant.com',
    '9876543211',
    'Java Stack',
    ['Java 17', 'Spring Boot', 'Microservices', 'Angular']
  ),
  new Trainer(
    3,
    'Jane Smith',
    'jane.smith@cognizant.com',
    '9876543212',
    'Cloud Native',
    ['AWS', 'Docker', 'Kubernetes', 'DevOps']
  )
];

export default trainersData;
