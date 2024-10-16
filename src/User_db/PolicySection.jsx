import styles from './PolicySection.module.css';

const PolicySection = () => {
  return (
    <section className={styles.policySection}>
      <h3 className={styles.sectionTitle}>Active Policies</h3>

      {/* First policy card */}
      <div className={styles.policyCard}>
        <div className={styles.policyInfo}>
          <span>Policy Name: Health Insurance</span>
          <span>Next Payment Due: 12/01/2024</span>
          <span>Coverage Amount: $5000</span>
          <span>Premium Amount: $200</span>
        </div>
        <div className={styles.policyActions}>
          <button className={styles.actionBtn}>View</button>
          <button className={styles.actionBtn}>Renew</button>
          <button className={styles.actionBtn}>Claim</button>
        </div>
      </div>

      {/* Second policy card */}
      <div className={styles.policyCard}>
        <div className={styles.policyInfo}>
          <span>Policy Name: Car Insurance</span>
          <span>Next Payment Due: 12/15/2024</span>
          <span>Coverage Amount: $10000</span>
          <span>Premium Amount: $400</span>
        </div>
        <div className={styles.policyActions}>
          <button className={styles.actionBtn}>View</button>
          <button className={styles.actionBtn}>Renew</button>
          <button className={styles.actionBtn}>Claim</button>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
