import React, { Component } from 'react';

export class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      person: null
    };
  }

  async componentDidMount() {
    try {
      const url = 'https://api.randomuser.me/';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ person: data.results[0], loading: false });
    } catch (error) {
      console.error('Failed to fetch user:', error);
      // Fallback object if network call fails
      this.setState({
        person: {
          name: { title: 'Mr', first: 'Alex', last: 'Johnson' },
          picture: { large: 'https://randomuser.me/api/portraits/men/75.jpg' }
        },
        loading: false
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <div>Loading user details...</div>;
    }

    if (!this.state.person) {
      return <div>No person found</div>;
    }

    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', width: '300px', textAlign: 'center', margin: '20px auto' }}>
        <img
          src={this.state.person.picture.large}
          alt="User Profile"
          style={{ borderRadius: '50%', width: '120px', height: '120px' }}
        />
        <h2>
          {this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}
        </h2>
      </div>
    );
  }
}

export default Getuser;
