import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import RepaymentAnalytics from '../components/RepaymentAnalytics';

const OwnerDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Repayment Analytics</h1>
            <p className="mt-1 text-sm text-gray-500">Monitor SHG repayment status and upcoming dues</p>
          </div>
        </div>

        {/* Repayment Analytics */}
        <RepaymentAnalytics />
      </div>
    </DashboardLayout>
  );
};

export default OwnerDashboard;
