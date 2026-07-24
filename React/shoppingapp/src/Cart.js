import React, { Component } from 'react';

export class Cart extends Component {
  render() {
    return (
      <tr>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{this.props.item.Itemname}</td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{this.props.item.Price}</td>
      </tr>
    );
  }
}

export default Cart;
