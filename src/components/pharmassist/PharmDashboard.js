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

const StatCard = ({ 
  icon: Icon, 
  title, 
  value, 
  color, 
  trend, 
  className = '',
  priority = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`
        relative overflow-hidden bg-white dark:bg-gray-800 
        rounded-xl shadow-md hover:shadow-lg 
        transition-all duration-300 ease-out
        hover:-translate-y-1
        border border-gray-100 dark:border-gray-700
        group cursor-pointer
        ${priority ? 'p-6' : 'p-4'}
        ${className}
      `}
    >
      {/* Content */}
      <div className="relative">
        {/* Header with Icon */}
        <div className="flex items-center justify-between mb-3">
          <div className={`
            p-2 rounded-lg transition-all duration-300 group-hover:scale-110
            ${color} bg-opacity-10 group-hover:bg-opacity-20
          `}>
            <Icon className={`h-5 w-5 ${color.replace('bg-', 'text-')}`} />
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
        <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2 tracking-wide">
          {title}
        </h3>
        
        {/* Value */}
        <p className={`
          font-bold text-gray-900 dark:text-white 
          ${priority ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}
          tracking-tight leading-none
        `}>
          {value}
        </p>
      </div>
    </motion.div>
  );
};

const MiniChart = ({ data, color = 'cyan' }) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  
  return (
    <div className="flex items-end space-x-1 h-8 mt-3">
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

  const priorityCards = [
    { 
      title: "Today's Revenue", 
      value: formatCurrency(mockStats.revenue), 
      icon: DollarSign, 
      color: "bg-emerald-500",
      trend: 12.5,
      priority: true
    },
    { 
      title: "Total Profit", 
      value: formatCurrency(mockStats.profit), 
      icon: TrendingUp, 
      color: "bg-green-500",
      trend: 8.3,
      priority: true
    },
    { 
      title: "Net Cash Flow", 
      value: formatCurrency(mockStats.netCashFlow), 
      icon: FileText, 
      color: "bg-cyan-500",
      trend: 15.2,
      priority: true
    }
  ];

  const regularCards = [
    { 
      title: "Cash Inflow", 
      value: formatCurrency(mockStats.cashInflow), 
      icon: ArrowDownLeft, 
      color: "bg-sky-500",
      trend: 6.7
    },
    { 
      title: "Cash Outflow", 
      value: formatCurrency(mockStats.cashOutflow), 
      icon: ArrowUpRight, 
      color: "bg-rose-500",
      trend: -3.2
    },
    { 
      title: "Total Sales", 
      value: formatNumber(mockStats.totalSales), 
      icon: FileText, 
      color: "bg-blue-500",
      trend: 9.1
    },
    { 
      title: "Items Sold", 
      value: formatNumber(mockStats.itemsSold), 
      icon: Package, 
      color: "bg-purple-500",
      trend: 11.4
    },
    { 
      title: "Due by Customers", 
      value: formatCurrency(mockStats.totalReceivable), 
      icon: Wallet, 
      color: "bg-orange-500",
      trend: -2.8
    },
    { 
      title: "Payable to Suppliers", 
      value: formatCurrency(mockStats.totalPayable), 
      icon: Landmark, 
      color: "bg-red-500",
      trend: 4.6
    },
    { 
      title: "Low Stock Items", 
      value: formatNumber(mockStats.lowStockItems), 
      icon: AlertTriangle, 
      color: "bg-yellow-500",
      trend: -1.5
    },
    { 
      title: "Expiring Soon", 
      value: formatNumber(mockStats.expiringItems), 
      icon: Calendar, 
      color: "bg-amber-500",
      trend: 2.1
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-4"
          >
            Dashboard Power
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Get a 360° View of Your Pharmacy
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          >
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">Turn your pharmacy into a data-driven business</span> with 
            15+ real-time dashboard cards and comprehensive analytics.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="space-y-6">
          {/* Top 3 Priority Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {priorityCards.map((card, index) => (
              <StatCard key={card.title} {...card} />
            ))}
          </motion.div>

          {/* Regular Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {regularCards.map((card, index) => (
              <StatCard key={card.title} {...card} />
            ))}
          </motion.div>
        </div>

        {/* Compact Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Weekly Performance</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Real-time pharmacy overview</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Live</span>
            </div>
          </div>

          {/* Mini Charts */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Revenue</h4>
              <p className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">₨164K</p>
              <MiniChart data={[15, 22, 18, 25, 28, 32, 24]} color="cyan" />
            </div>

            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Sales</h4>
              <p className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">268</p>
              <MiniChart data={[25, 35, 28, 42, 48, 52, 38]} color="green" />
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Customers</h4>
              <p className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">189</p>
              <MiniChart data={[45, 52, 48, 61, 55, 68, 42]} color="purple" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-cyan-200/50 dark:border-cyan-700/50">
            <blockquote className="text-lg font-medium text-gray-700 dark:text-gray-300 italic mb-3">
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