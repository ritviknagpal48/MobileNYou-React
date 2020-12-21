import React from 'react';

export const EmiTable = () => {
  return (
    <div
      style={{
        padding: '0 18px',
        display: 'none',
        backgroundColor: 'white',
        overflow: 'hidden',
        border: '0.5px solid gainsboro',
        marginBottom: '2%',
        borderRadius: '2px'
      }}
    >
      <table style={{ width: '105%' }}>
        <tbody>
          <tr style={{ color: 'gray' }}>
            <th>Month</th>
            <th>EMI</th>
            <th>Overall Cost</th>
          </tr>
          <tr>
            <td>3</td>
            <td>₹ 2,484 (12.5%)</td>
            <td>₹ 7,484</td>
          </tr>
          <tr>
            <td>6</td>
            <td>₹ 2,484 (12.5%)</td>
            <td>₹ 7,484</td>
          </tr>
          <tr>
            <td>9</td>
            <td>₹ 2,484 (12.5%)</td>
            <td>₹ 7,484</td>
          </tr>
          <tr>
            <td>12</td>
            <td>₹ 2,484 (12.5%)</td>
            <td>₹ 7,484</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
