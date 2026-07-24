import React, { Component } from 'react';
import Cart from './Cart';

export class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { Itemname: 'Laptop', Price: 75000 },
        { Itemname: 'Wireless Mouse', Price: 1200 },
        { Itemname: 'Mechanical Keyboard', Price: 4500 },
        { Itemname: 'HD Monitor', Price: 15000 },
        { Itemname: 'Noise Cancelling Headphones', Price: 8900 }
      ]
    };
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1 style={{ color: 'green' }}>Items In Cart</h1>
        <table style={{ borderCollapse: 'collapse', width: '300px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Item Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cartItems.map((item, index) => (
              <Cart key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
