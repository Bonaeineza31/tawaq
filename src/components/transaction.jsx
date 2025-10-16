import React, { useState } from 'react';
import { Search, Plus, MoreVertical, ChevronLeft, ChevronRight, X } from 'lucide-react';
import './Transaction.css';

const Transaction = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    amount: '',
    recipient: '',
    description: '',
  });

  const transactions = [
    {
      id: '456789356',
      description: 'Office Equipment & Supplies',
      date: 'Apr 25, 2025, 04:30pm',
      type: 'Expense',
      method: 'Mobile Money',
      amount: '5,670,000 rwf',
    },
    {
      id: '456789356',
      description: 'Software Development',
      date: 'Apr 25, 2025, 04:30pm',
      type: 'Revenue',
      method: 'Bank',
      amount: '5,670,000 rwf',
    },
    {
      id: '456789356',
      description: 'Insurance',
      date: 'Apr 25, 2025, 04:30pm',
      type: 'Expense',
      method: 'Bank',
      amount: '5,670,000 rwf',
    },
    {
      id: '456789356',
      description: 'Web Development',
      date: 'Apr 25, 2025, 04:30pm',
      type: 'Revenue',
      method: 'Bank',
      amount: '5,670,000 rwf',
    },
    {
      id: '456789356',
      description: 'UI/UX Design',
      date: 'Apr 25, 2025, 04:30pm',
      type: 'Revenue',
      method: 'Bank',
      amount: '5,670,000 rwf',
    },
    {
      id: '456789356',
      description: 'Service fee',
      date: 'Apr 25, 2025, 04:30pm',
      type: 'Revenue',
      method: 'Cash',
      amount: '5,670,000 rwf',
    },
    {
      id: '456789356',
      description: 'Employee Salaries',
      date: 'Apr 25, 2025, 04:30pm',
      type: 'Expense',
      method: 'Bank',
      amount: '5,670,000 rwf',
    },
    {
      id: '456789356',
      description: 'IT Consultancy',
      date: 'Apr 25, 2025, 04:30pm',
      type: 'Revenue',
      method: 'Bank',
      amount: '5,670,000 rwf',
    },
    {
      id: '456789356',
      description: 'Training and Workshops',
      date: 'Apr 25, 2025, 04:30pm',
      type: 'Revenue',
      method: 'Bank',
      amount: '5,670,000 rwf',
    },
  ];

  const tabs = ['All', 'Revenue', 'Expenses'];

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase());
    let matchesTab = true;
    
    if (activeTab === 'Revenue') {
      matchesTab = t.type === 'Revenue';
    } else if (activeTab === 'Expenses') {
      matchesTab = t.type === 'Expense';
    }
    
    return matchesSearch && matchesTab;
  });

  const handleAddClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Transaction added:', formData);
    setFormData({ type: '', amount: '', recipient: '', description: '' });
    handleCloseModal();
  };

  return (

      <div className="transaction-container">
        <div className="transaction-header">
          <h1>Transaction</h1>
          <button className="add-transaction-btn" onClick={handleAddClick}>
            <Plus size={20} />
            Add a Transaction
          </button>
        </div>

      <div className="transaction-content">
        {/* Search Bar */}
        <div className="search-section">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search for a transaction here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Tabs and Filters */}
        <div className="transaction-controls">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="status-filter">
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className="status-select"
            >
              <option value="All">Status: All</option>
              <option value="Pending">Status: Pending</option>
              <option value="Completed">Status: Completed</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="transaction-table">
          <div className="table-header">
            <div className="col col-ref">Ref ID</div>
            <div className="col col-desc">Description</div>
            <div className="col col-date">Transaction Date</div>
            <div className="col col-type">Type</div>
            <div className="col col-method">Payment Method</div>
            <div className="col col-amount">Amount</div>
            <div className="col col-action">Action</div>
          </div>

          <div className="table-body">
            {filteredTransactions.map((transaction, idx) => (
              <div key={idx} className="table-row">
                <div className="col col-ref">{transaction.id}</div>
                <div className="col col-desc">{transaction.description}</div>
                <div className="col col-date">{transaction.date}</div>
                <div className={`col col-type type-${transaction.type.toLowerCase()}`}>
                  {transaction.type}
                </div>
                <div className="col col-method">{transaction.method}</div>
                <div className="col col-amount">{transaction.amount}</div>
                <div className="col col-action">
                  <button className="action-btn">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="pagination-btn">
            <ChevronLeft size={18} />
          </button>
          <button className="pagination-btn">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Modal - Outside main container */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add Transaction</h2>
              <button className="modal-close" onClick={handleCloseModal}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Transaction type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleFormChange}
                  className="form-select"
                  required
                >
                  <option value="">Select type</option>
                  <option value="Revenue">Revenue</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>

              <div className="form-group">
                <label>Amount</label>
                <div className="amount-input-wrapper">
                  <input
                    type="number"
                    name="amount"
                    placeholder="0"
                    value={formData.amount}
                    onChange={handleFormChange}
                    className="form-input amount-input"
                    required
                  />
                  <span className="amount-currency">Rwf</span>
                </div>
              </div>

              <div className="form-group">
                <label>Recipient</label>
                <input
                  type="text"
                  name="recipient"
                  placeholder="Enter recipient name"
                  value={formData.recipient}
                  onChange={handleFormChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Enter description"
                  value={formData.description}
                  onChange={handleFormChange}
                  className="form-textarea"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="modal-buttons">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-add">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        </div>
  );
};

export default Transaction;