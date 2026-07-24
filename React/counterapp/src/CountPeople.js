import React, { Component } from 'react';

export class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  UpdateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  UpdateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div style={{ padding: '30px', textAlign: 'center', border: '2px solid darkgreen', borderRadius: '10px', width: '350px', margin: '30px auto' }}>
        <h2>Mall Entry & Exit Tracker</h2>
        <div style={{ margin: '20px 0', fontSize: '18px' }}>
          <p><b>Login:</b> {this.state.entrycount} People Entered</p>
          <button
            onClick={this.UpdateEntry}
            style={{ backgroundColor: 'lightgreen', border: '1px solid green', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}
          >
            Login
          </button>
        </div>
        <div style={{ margin: '20px 0', fontSize: '18px' }}>
          <p><b>Exit:</b> {this.state.exitcount} People Exited</p>
          <button
            onClick={this.UpdateExit}
            style={{ backgroundColor: 'lightcoral', border: '1px solid red', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer' }}
          >
            Exit
          </button>
        </div>
      </div>
    );
  }
}

export default CountPeople;
