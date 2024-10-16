import styles from './ClaimsSection.module.css';

const ClaimsSection = () => {
  return (
    <section className={styles.claimsSection}>
      <h3 className={styles.sectionTitle}>Recent Claims</h3>

      {/* First claim card */}
      <div className={styles.claimCard}>
        <div className={styles.claimDetails}>
          <span>Claim ID: 12345</span>
          <br></br>
          <span>Status: Approved</span>
          <br></br>
          <span>Date Filed: 01/01/2024</span>
          <br></br>
        </div>
      </div>

      {/* Second claim card */}
      <div className={styles.claimCard}>
        <div className={styles.claimDetails}>
          <span>Claim ID: 67890</span>
          <br></br>
          <span>Status: Pending</span>
          <br></br>
          <span>Date Filed: 02/01/2024</span>
          <br></br>
        </div>
      </div>

      <button className={styles.claimButton}>File a Claim</button>
    </section>
  );
};

export default ClaimsSection;
