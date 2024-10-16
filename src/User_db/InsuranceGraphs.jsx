import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import styles from './InsuranceGraphs.module.css';

const InsuranceGraphs = () => {
  const policyData = [
    { name: 'Health', value: 400 },
    { name: 'Car', value: 100 },
    { name: 'Life', value: 500 },
    { name: 'Home', value: 200 },
  ];

  const claimTrendsData = [
    { month: 'Jan', claims: 5 },
    { month: 'Feb', claims: 10 },
    { month: 'Mar', claims: 15 },
    { month: 'Apr', claims: 8 },
    { month: 'May', claims: 12 },
  ];

  const premiumData = [
    { name: 'Health', premium: 200 },
    { name: 'Car', premium: 300 },
    { name: 'Life', premium: 500 },
    { name: 'Home', premium: 400 },
  ];

  const COLORS = ['#1E90FF', '#4682B4', '#002E81', '#87CEFA']; // Blue color variants

  return (
    <section className={styles.graphsSection}>
      <h3 className={styles.sectionTitle}>Insurance Data Visualization</h3>

      <div className={styles.chartContainer}>
        {/* Pie Chart for Policy Distribution */}
        <div className={styles.chart}>
          <h4 className={styles.chartTitle}>Policy Types Distribution</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={policyData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {policyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart for Claims Trends */}
        <div className={styles.chart}>
          <h4 className={styles.chartTitle}>Claims Trends Over Months</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={claimTrendsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="claims" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart for Premiums by Policy Type */}
        <div className={styles.chart}>
          <h4 className={styles.chartTitle}>Premiums by Policy Type</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={premiumData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="premium" fill="#002E81" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default InsuranceGraphs;
