import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/payments')
      .then(response => {
        setPayments(response.data);
      })
      .catch(error => {
        console.log('Error fetching payments:', error);
      });
  }, []);

  return (
    <div className="admin-dashboard">
      <img src='./logo.png' alt="Logo" className="dashboard-logo" />
      <h2>All Payment Records</h2>
      <table>
        <thead>
          <tr>
            <th>Name on Card</th>
            <th>Email Address</th>
            <th>Card Number</th>
            <th>Expiry Date</th>
            <th>CVV</th>
            <th>Purchased Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment._id}>
              <td>{payment.name}</td>
              <td>{payment.email}</td>
              <td>{payment.cardNumber}</td>
              <td>{payment.expiryDate}</td>
              <td>{payment.cvv}</td>
              <td>{payment.date}</td>
              <td>{payment.saveCard ? 'Saved' : 'Not Saved'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
