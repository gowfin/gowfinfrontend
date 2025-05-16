import React from 'react';
import axios from 'axios';
import './transactionmodal.css';

const ReversalModal = ({
  transaction,
  userid,
  isOpen,
  onClose,
  localhost,
  sesdate,
}) => {
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${localhost}/reverse`, {
        revtransaction:transaction,
        userid,
        sesdate,
      });
      alert('Transaction reversed successfully!');
      onClose();
    } catch (error) {
      console.error(error);
      alert('Failed to reverse transaction.');
    }
  };

  return (
    <div className="modal" style={styles.modal}>
      <h3 style={styles.header}>Reversal Details</h3>
      <h2 style={styles.h2}>Do you want to reverse this transaction?</h2>
      <div style={styles.tableContainer}>
        <ul>
         <li>TranID: {transaction.tranid}</li>
          <li>Account: {transaction.AccountID}</li>
          <li>Amount: {`₦${Number(transaction.amount).toLocaleString()}`}</li>
          <li>Description: {transaction.Stmtref}</li>
          <li>Transaction Number: {transaction.transactionNbr}</li>
          <li>Date: {transaction.ValueDate}</li>
          <li>Running Balance: {transaction.Runningbal}</li>
          <li>Posted By: {transaction.CreatedBy}</li>
        </ul>
      </div>
      <button onClick={handleSubmit}>Confirm Reversal</button>
      <button style={{backgroundColor:'red'}} onClick={onClose}>Cancel</button>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#e0e89f',
    color: '#fff',
    padding: '10px',
    margin: 0,
    fontSize: '18px',
    textAlign: 'center',
    borderBottom: '2px solid #0056b3',
  },
  tableContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: '10px',
    width:'100%',
    backgroundColor:'white'
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '600px',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  h2: {
    fontSize: '20px',                  /* Slightly larger for headers */
    fontWeight: 'bold',                /* Makes headings stand out */
    marginBottom:'10px' 
},
};

export default ReversalModal;
