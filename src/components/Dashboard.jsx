"use client"

import {
  DollarSign,
  CreditCard,
  TrendingUp,
  BarChart3,
  ArrowUp,
  ArrowDown,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import "./dashboard.css"

const analyticsData = [
  { month: "Jan", Revenue: 38000000, Expenses: 0, maxValue: 50000000 },
  { month: "Feb", Revenue: 30000000, Expenses: 0, maxValue: 50000000 },
  { month: "Mar", Revenue: 32000000, Expenses: 0, maxValue: 50000000 },
  { month: "Apr", Revenue: 28000000, Expenses: 0, maxValue: 50000000 },
  { month: "May", Revenue: 42000000, Expenses: 0, maxValue: 50000000 },
  { month: "Jun", Revenue: 28000000, Expenses: 0, maxValue: 50000000 },
  { month: "Jul", Revenue: 48000000, Expenses: 0, maxValue: 50000000 },
  { month: "Aug", Revenue: 30000000, Expenses: 0, maxValue: 50000000 },
]

const calendarDays = [
  { day: 28, currentMonth: false },
  { day: 29, currentMonth: false },
  { day: 30, currentMonth: false },
  { day: 31, currentMonth: false },
  { day: 1, currentMonth: true },
  { day: 2, currentMonth: true },
  { day: 3, currentMonth: true },
  { day: 4, currentMonth: true },
  { day: 5, currentMonth: true },
  { day: 6, currentMonth: true },
  { day: 7, currentMonth: true },
  { day: 8, currentMonth: true },
  { day: 9, currentMonth: true },
  { day: 10, currentMonth: true },
  { day: 11, currentMonth: true },
  { day: 12, currentMonth: true },
  { day: 13, currentMonth: true },
  { day: 14, currentMonth: true },
  { day: 15, currentMonth: true },
  { day: 16, currentMonth: true },
  { day: 17, currentMonth: true },
  { day: 18, currentMonth: true },
  { day: 19, currentMonth: true },
  { day: 20, currentMonth: true },
  { day: 21, currentMonth: true },
  { day: 22, currentMonth: true },
  { day: 23, currentMonth: true },
  { day: 24, currentMonth: true },
  { day: 25, currentMonth: true },
  { day: 26, currentMonth: true },
  { day: 27, currentMonth: true, isToday: true },
  { day: 28, currentMonth: true },
  { day: 29, currentMonth: true, isLightSelected: true },
  { day: 30, currentMonth: true, isSelected: true },
  { day: 1, currentMonth: false },
  { day: 2, currentMonth: false },
]

const upcomingPayments = [
  {
    date: "May 1",
    title: "Rent",
    subtitle: "Rent - Monthly",
    amount: "1,000,000 Rwf",
  },
  {
    date: "Jan 16",
    title: "Insurance",
    subtitle: "Insurance - Annually",
    amount: "12,000,000 Rwf",
  },
]

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Metric Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon blue">
            <DollarSign size={24} />
          </div>
          <div className="metric-content">
            <div className="metric-label">Revenue</div>
            <div className="metric-value">20,300,000 Rwf</div>
            <div className="metric-change negative">
              <ArrowDown size={12} />
              <span>4.5%</span>
              <span className="metric-change-label">Compared to last month</span>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon yellow">
            <CreditCard size={24} />
          </div>
          <div className="metric-content">
            <div className="metric-label">Expenses</div>
            <div className="metric-value">15,000,000 Rwf</div>
            <div className="metric-change positive">
              <ArrowUp size={12} />
              <span>2.5%</span>
              <span className="metric-change-label">Compared to last month</span>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon orange">
            <TrendingUp size={24} />
          </div>
          <div className="metric-content">
            <div className="metric-label">Net profit</div>
            <div className="metric-value">2,000,000 Rwf</div>
            <div className="metric-change positive">
              <ArrowUp size={12} />
              <span>2.5%</span>
              <span className="metric-change-label">Compared to last month</span>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon purple">
            <BarChart3 size={24} />
          </div>
          <div className="metric-content">
            <div className="metric-label">Forecast</div>
            <div className="metric-value">10,300,000 Rwf</div>
            <div className="metric-change-right">
              <span>Scenario:</span>
              <span className="scenario-dropdown">
                Base case
                <ChevronDown size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Analytics Chart */}
        <div className="analytics-card">
          <div className="analytics-header">
            <h2>Analytics</h2>
            <div className="analytics-controls">
              <div className="legend-items">
                <div className="legend-item">
                  <span className="legend-dot revenue"></span>
                  <span>Revenue</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot expenses"></span>
                  <span>Expenses</span>
                </div>
              </div>
              <select className="year-select">
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#999", fontSize: 12 }} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#999", fontSize: 12 }}
                  tickFormatter={(value) => `${value / 1000000}M`}
                />
                <Bar dataKey="maxValue" fill="#f3f4f6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="Revenue" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-sidebar">
          <div className="calendar-card">
            <div className="calendar-header">
              <div className="calendar-month-year">
                <select className="month-select">
                  <option>April</option>
                </select>
                <select className="year-select-small">
                  <option>2025</option>
                </select>
              </div>
            </div>
            <div className="calendar-grid">
              <div className="calendar-day-header">Mo</div>
              <div className="calendar-day-header">Tu</div>
              <div className="calendar-day-header">We</div>
              <div className="calendar-day-header">Th</div>
              <div className="calendar-day-header">Fri</div>
              <div className="calendar-day-header">Sa</div>
              <div className="calendar-day-header">Su</div>
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`calendar-day ${!day.currentMonth ? "other-month" : ""} ${day.isToday ? "today" : ""} ${day.isSelected ? "selected" : ""} ${day.isLightSelected ? "light-selected" : ""}`}
                >
                  {day.day}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Payments */}
          <div className="payments-card">
            <div className="payments-header">
              <h3>Upcoming Payments</h3>
              <button className="view-all">
                View All
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="payments-list">
              {upcomingPayments.map((payment, index) => (
                <div key={index} className="payment-item">
                  <div className="payment-date">
                    <div className="payment-month">{payment.date.split(" ")[0]}</div>
                    <div className="payment-day">{payment.date.split(" ")[1]}</div>
                  </div>
                  <div className="payment-details">
                    <div className="payment-title">{payment.title}</div>
                    <div className="payment-subtitle">{payment.subtitle}</div>
                  </div>
                  <div className="payment-amount">{payment.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transaction */}
      <div className="transaction-card">
        <div className="transaction-header">
          <h2>Recent Transaction</h2>
          <button className="view-all">
            View All
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="transaction-tabs">
          <button className="tab active">All</button>
          <button className="tab">Revenue</button>
          <button className="tab">Expenses</button>
        </div>
      </div>
    </div>
  )
}
