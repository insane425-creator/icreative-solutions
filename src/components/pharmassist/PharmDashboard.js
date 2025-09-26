//src/components/pharmassist/PharmDashboard.js (Updated with Mockup)
'use client';

import { motion } from 'framer-motion';
import { 
  DollarSign, Package, Users, AlertTriangle, Calendar, TrendingUp,
  FileText, ArrowDownLeft, ArrowUpRight, Wallet, Landmark
} from 'lucide-react';

// Mock data for demonstration
const mockStats = {
  revenue: 147250,
  profit: 23450,
  netCashFlow: 18900,
  totalSales: 234,
  itemsSold: 1247,
  totalReceivable: 12500,
  totalPayable: 8900,
  lowStockItems: 7,
  expiringItems: 12,
  cashInflow: 45200,
  cashOutflow: 26300
};

const mockChartData = {
  daily: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    revenue: [15000, 22000, 18000, 25000, 28000, 32000, 24000],
    sales: [25, 35, 28, 42, 48, 52, 38]
  }
};

const StatCard = ({ 
  icon: Icon, 
  title, 
  value, 
  color, 
  gradient, 
  trend, 
  className = '',
  large = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`
        relative overflow-hidden bg-white dark:bg-gray-800 
        rounded-2xl shadow-lg hover:shadow-2xl 
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:scale-[1.02]
        border border-gray-100 dark:border-gray-700
        group cursor-pointer
        ${className}
      `}
    >
      {/* Gradient Background Overlay */}
      <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 ${gradient}`} />
      
      {/* Content */}
      <div className="relative p-6">
        {/* Header with Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className={`
            p-3 rounded-xl transition-all duration-300 group-hover:scale-110
            ${color} bg-opacity-10 group-hover:bg-opacity-20
          `}>
            <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
          </div>
          
          {/* Trend Indicator */}
          {trend && (
            <div className={`
              flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
              ${trend > 0 ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 
                trend < 0 ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' : 
                'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}
            `}>
              {trend > 0 ? <TrendingUp className="h-3 w-3" /> : <ArrowDownLeft className="h-3 w-3" />}
              {Math.abs(trend)}%
            </div>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 tracking-wide">
          {title}
        </h3>
        
        {/* Value */}
        <div className="space-y-1">
          <p className={`
            font-bold text-gray-900 dark:text-white 
            ${large ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'}
            tracking-tight leading-none
          `}>
            {value}
          </p>
        </div>
      </div>
      
      {/* Hover Effect Border */}
      <div className={`
        absolute bottom-0 left-0 right-0 h-1 
        ${gradient} opacity-0 group-hover:opacity-100 
        transition-opacity duration-500
      `} />
    </motion.div>
  );
};

const MiniChart = ({ data, color = 'cyan' }) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  
  return (
    <div className="flex items-end space-x-1 h-12 mt-4">
      {data.map((value, index) => {
        const height = ((value - minValue) / (maxValue - minValue)) * 100;
        return (
          <div
            key={index}
            className={`flex-1 bg-gradient-to-t from-${color}-500 to-${color}-400 rounded-sm opacity-80 transition-all duration-300 hover:opacity-100`}
            style={{ height: `${height}%` }}
          />
        );
      })}
    </div>
  );
};

export default function PharmDashboard() {
  const formatCurrency = (amount) => `₨${Number(amount).toLocaleString('en-PK', { minimumFractionDigits: 0 })}`;
  const formatNumber = (num) => Number(num).toLocaleString('en-PK');

  const statCardsData = [
    // Top 3 Priority Cards (Large)
    { 
      title: "Today's Revenue", 
      value: formatCurrency(mockStats.revenue), 
      icon: DollarSign, 
      color: "bg-emerald-500",
      gradient: "bg-gradient-to-br from-emerald-500 to-green-600",
      trend: 12.5,
      large: true
    },
    { 
      title: "Total Profit", 
      value: formatCurrency(mockStats.profit), 
      icon: TrendingUp, 
      color: "bg-green-500",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
      trend: 8.3,
      large: true
    },
    { 
      title: "Net Cash Flow", 
      value: formatCurrency(mockStats.netCashFlow), 
      icon: FileText, 
      color: "bg-cyan-500",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      trend: 15.2,
      large: true
    },
    
    // Regular Cards
    { 
      title: "Cash Inflow", 
      value: formatCurrency(mockStats.cashInflow), 
      icon: ArrowDownLeft, 
      color: "bg-sky-500",
      gradient: "bg-gradient-to-br from-sky-500 to-blue-600",
      trend: 6.7
    },
    { 
      title: "Cash Outflow", 
      value: formatCurrency(mockStats.cashOutflow), 
      icon: ArrowUpRight, 
      color: "bg-rose-500",
      gradient: "bg-gradient-to-br from-rose-500 to-red-600",
      trend: -3.2
    },
    { 
      title: "Total Sales", 
      value: formatNumber(mockStats.totalSales), 
      icon: FileText, 
      color: "bg-blue-500",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
      trend: 9.1
    },
    { 
      title: "Items Sold", 
      value: formatNumber(mockStats.itemsSold), 
      icon: Package, 
      color: "bg-purple-500",
      gradient: "bg-gradient-to-br from-purple-500 to-violet-600",
      trend: 11.4
    },
    { 
      title: "Due by Customers", 
      value: formatCurrency(mockStats.totalReceivable), 
      icon: Wallet, 
      color: "bg-orange-500",
      gradient: "bg-gradient-to-br from-orange-500 to-red-600",
      trend: -2.8
    },
    { 
      title: "Payable to Suppliers", 
      value: formatCurrency(mockStats.totalPayable), 
      icon: Landmark, 
      color: "bg-red-500",
      gradient: "bg-gradient-to-br from-red-500 to-rose-600",
      trend: 4.6
    },
    { 
      title: "Low Stock Items", 
      value: formatNumber(mockStats.lowStockItems), 
      icon: AlertTriangle, 
      color: "bg-yellow-500",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-600",
      trend: -1.5
    },
    { 
      title: "Expiring Soon", 
      value: formatNumber(mockStats.expiringItems), 
      icon: Calendar, 
      color: "bg-amber-500",
      gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
      trend: 2.1
    }
  ];

  return (
    <section id="pharm-dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6"
          >
            Dashboard Power
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Get a 360° View of Your Pharmacy
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">Turn your pharmacy into a data-driven business</span> with 
            15+ real-time dashboard cards, sales trends, and comprehensive analytics.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="space-y-8">
          {/* Top 3 Large Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {statCardsData.slice(0, 3).map((card, index) => (
              <StatCard
                key={card.title}
                {...card}
                className="lg:col-span-1"
              />
            ))}
          </motion.div>

          {/* Regular Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {statCardsData.slice(3).map((card, index) => (
              <StatCard
                key={card.title}
                {...card}
                className=""
              />
            ))}
          </motion.div>
        </div>

        {/* Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sales Trend (7 Days)</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Real-time pharmacy performance overview</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Live Data</span>
            </div>
          </div>

          {/* Mini Chart */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 rounded-xl">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Revenue Trend</h4>
              <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">₨164K</p>
              <MiniChart data={mockChartData.daily.revenue} color="cyan" />
            </div>

            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Sales Count</h4>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">268</p>
              <MiniChart data={mockChartData.daily.sales} color="green" />
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Customer Footfall</h4>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">189</p>
              <MiniChart data={[45, 52, 48, 61, 55, 68, 42]} color="purple" />
            </div>
          </div>

          {/* Chart Labels */}
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-4 px-4">
            {mockChartData.daily.labels.map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-cyan-200/50 dark:border-cyan-700/50">
            <blockquote className="text-xl font-medium text-gray-700 dark:text-gray-300 italic mb-4">
              "Turn your pharmacy into a data-driven business with insights that matter."
            </blockquote>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Last updated: {new Date().toLocaleString('en-PK')} • Real-time data
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}