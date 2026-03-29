import React, { useState, useEffect, useCallback } from 'react';
import ExpenseDashboard from '../components/ExpenseDashboard';
import { listExpenses } from '../services/expenseApi';

/**
 * Maps a backend expense object to the shape the ExpenseDashboard component expects.
 */
function mapBackendExpense(exp) {
  const statusMap = {
    'DRAFT': 'Draft',
    'SUBMITTED': 'Submitted',
    'WAITING_APPROVAL': 'Waiting Approval',
    'APPROVED': 'Approved',
    'REJECTED': 'Rejected',
  };

  return {
    id: exp.id,
    description: exp.description || 'Untitled Expense',
    date: exp.expense_date
      ? new Date(exp.expense_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : 'N/A',
    category: exp.category || 'Misc',
    amount: exp.original_amount,
    currency: exp.original_currency || 'INR',
    localAmount: exp.base_amount
      ? `${Number(exp.base_amount).toLocaleString('en-IN')} INR`
      : undefined,
    status: statusMap[exp.status] || exp.status,
    approvalType: 'sequential',
    steps: exp.approval_steps
      ? exp.approval_steps.map(s => ({
          title: `Step ${s.step_order}`,
          status: s.status?.toLowerCase() || 'pending',
        }))
      : [],
  };
}

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch real expenses from the backend
  const fetchExpenses = useCallback(async () => {
    try {
      setLoading(true);
      const data = await listExpenses();
      setExpenses((data || []).map(mapBackendExpense));
      setError(null);
    } catch (err) {
      console.error('Failed to fetch expenses:', err);
      setError(err.message);
      setExpenses([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  return (
    <ExpenseDashboard
      expenses={expenses}
      filter={filter}
      setFilter={setFilter}
      expandedId={expandedId}
      setExpandedId={setExpandedId}
      loading={loading}
      error={error}
      onRefresh={fetchExpenses}
    />
  );
};

export default Dashboard;
