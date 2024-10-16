import React from 'react';
import styles from './DashboardContent.module.css';

const DashboardContent = React.forwardRef((props, ref) => (
    <div ref={ref} className={styles.dashboardContent}>
      <div className={styles.greeting}>
        <h2>Welcome back, Jhon!</h2>
      </div>
      <div className={styles.overview}>
        <span>Total Policies: 5</span>
        <span>Total Claims: 2</span>
        <span>Upcoming Payments: 1</span>
      </div>  {/* Add the graphs section here */}
    </div>
));

export default DashboardContent;
