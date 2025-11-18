import React from 'react';
import { useSelector } from 'react-redux';
import DashboardLayout from '../components/DashboardLayout';
import RepaymentAnalytics from '../components/RepaymentAnalytics';
import type { RootState } from '../store/store';

const FrontDeskDashboard: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth);
  
  // Stats data
  const stats = [
    {
      name: 'Total Customers',
      value: '142',
      change: '+12 from last week',
      icon: (
        <svg 
          className="h-6 w-6 text-blue-600" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      ),
      color: 'bg-blue-50',
      changeType: 'positive'
    },
    {
      name: 'Appointments Today',
      value: '24',
      change: '+5 from yesterday',
      icon: (
        <svg 
          className="h-6 w-6 text-green-600" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      color: 'bg-green-50',
      changeType: 'positive'
    },
    {
      name: 'Pending Tasks',
      value: '7',
      change: '-2 from yesterday',
      icon: (
        <svg 
          className="h-6 w-6 text-yellow-600" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      color: 'bg-yellow-50',
      changeType: 'positive'
    },
    {
      name: 'Inquiries',
      value: '18',
      change: '+3 from yesterday',
      icon: (
        <svg 
          className="h-6 w-6 text-purple-600" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          ></path>
        </svg>
      ),
      color: 'bg-purple-50',
      changeType: 'positive'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {auth.user?.firstName}!</h1>
              <p className="mt-2 text-blue-100">Here's what's happening at the front desk today.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <span className="text-xl font-bold">
                    {auth.user?.firstName?.charAt(0)}
                    {auth.user?.lastName?.charAt(0)}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">{auth.user?.firstName} {auth.user?.lastName}</p>
                  <p className="text-sm text-blue-200 capitalize">{auth.user?.role?.replace('_', ' ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`${stat.color} rounded-xl shadow-sm p-6 transition-all duration-200 hover:shadow-md`}
            >
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-white bg-opacity-80">
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-gray-500'}`}>
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                Add New Customer
              </button>
              <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                Schedule Appointment
              </button>
              <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                View Appointments
              </button>
              <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                Customer Inquiries
              </button>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Appointments</h3>
            <div className="space-y-4">
              <div className="flex items-center p-3 rounded-lg border border-gray-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-medium">10</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">John Smith</p>
                  <p className="text-xs text-gray-500">10:00 AM - Property Visit</p>
                </div>
              </div>
              <div className="flex items-center p-3 rounded-lg border border-gray-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-medium">11</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-xs text-gray-500">11:30 AM - Document Review</p>
                </div>
              </div>
              <div className="flex items-center p-3 rounded-lg border border-gray-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-medium">2</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Robert Davis</p>
                  <p className="text-xs text-gray-500">2:00 PM - Contract Signing</p>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full text-center text-sm font-medium text-blue-600 hover:text-blue-800">
              View all appointments
            </button>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full">
            <svg 
              className="h-12 w-12 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">More Features Coming Soon</h3>
          <p className="mt-2 text-gray-500 max-w-md mx-auto">
            We're working on adding more features to enhance your experience. Stay tuned for updates!
          </p>
        </div>

        {/* Repayment Analytics */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Repayment Analytics</h2>
          <RepaymentAnalytics />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FrontDeskDashboard;