import React from 'react'
import Sidebar from './Sidebar'
import { FaMoneyBill, FaMoneyCheck, FaMoneyBillWave } from 'react-icons/fa';
import './sidebar.css'

const Dashboard = () => {
  const totalBalance = 100000000; // Example total balance in cents
  const totalDeposits = 500000; // Example total deposits in cents
  const totalWithdrawals = 20000; // Example total withdrawals in cents

  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  return (
    <>
    <div className='marg'>
      <div className='shadow-lg p-3 py-3 position-sticky top-0 w-100 navr z-3'>
        <h3>Green(logo)</h3>
      </div>
      <div className=' d-flex'>
       <div className='bg-info'>
       <Sidebar/>
       </div>
        <div className='flexor'>
        <div className='content'>
          <div className='header'>
            <h1>Green Dashboard</h1>
          </div>
          <div className='balance-container'>
            {/* Total Balance */}
            <div className='balance-card my-2'>
              <FaMoneyBill className='balance-icon' />
              <h5>Total Balance</h5>
              <p className='balance-amount'>{formatCurrency(totalBalance / 100)}</p>
            </div>

            {/* Total Deposits */}
            <div className='balance-card my-2'>
              <FaMoneyCheck className='balance-icon' />
              <h5>Total Deposits</h5>
              <p className='balance-amount'>{formatCurrency(totalDeposits / 100)}</p>
            </div>

            {/* Total Withdrawals */}
            <div className='balance-card my-2'>
              <FaMoneyBillWave className='balance-icon' />
              <h5>Total Withdrawals</h5>
              <p className='balance-amount'>{formatCurrency(totalWithdrawals / 100)}</p>
            </div>
          </div>
        </div>
            
         </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard