
 import styles from './Plans.module.css';

const InsurancePlans = () => {
  return (
    <div className={styles.plansContainer}>
      <center><h1>Best Health Insurance Plans for Family</h1></center>
      <div className={styles.plans}>
        {/* Plan 1 */}
        <div className={`${styles.plan} ${styles.lowPlan}`}>
        
          <h2>Basic Insurance Policy</h2>
          <br></br>
          <p><strong>IRDAI UIN : SHAHILP23131V022223</strong></p>
          <p>For those seeking widest benefits & highest coverage for risk.</p>
          <ul>
            <li>Unlimited 100% Automatic Restoration & consumables included.</li>
            <li>The perfect companion for your family planning: Extensive Maternity benefits, Highest Delivery Expenses & Assisted Reproduction Treatment, New Born Cover & More.</li>
            <li>Entry Age upto 75, as well as 2 child dependent from 91 days so you can add your children, parents & parent in laws.</li>
          </ul>
          <a href="#assure" className={styles.planButton}>Get Basic Insurance Policy</a>
        </div>

        {/* Plan 2 */}
        <div className={`${styles.plan} ${styles.mediumPlan}`}>

          <h2>Standard Insurance Policy</h2>
          <br></br>
          <p><strong>IRDAI UIN : SHAHILP22036V042122</strong></p>
          <p>For the young & healthy, seeking a risk protection policy</p>
          <ul>
            <li>Lowest premium, meant for those under 40.</li>
            <li>Only 1 year waiting period for slow growing diseases.</li>
            <li>Midterm Inclusion for future spouse+child.</li>
          </ul>
          <a href="#young-star" className={styles.planButton}>Get Standard Insurance Policy</a>
        </div>

        {/* Plan 3 */}
        <div className={`${styles.plan} ${styles.highPlan}`}>
          <h2>Premium Insurance Policy</h2>
          <br></br>
          <p><strong>IRDAI UIN : SHAHILP22028V072122</strong></p>
          <p>For those seeking complete coverage & pre-existing disease waiting period reduction.</p>
          <ul>
            <li>Secure yourself sooner: PED Buyback option to reduce waiting period for PED to 1 year.</li>
            <li>Support for family planning: Delivery expenses, New Born Baby cover & more.</li>
            <li>50% no claim bonus/year, With Personal Accident Cover equal to your sum insured get benefits of life insurance in Health.</li>
            <li>100% Automatic restoration once per year on complete exhaustion of sum insured.</li>
          </ul>
          <a href="#comprehensive" className={styles.planButton}>Get Premium Insurance Policy </a>
        </div>
      </div>
    </div>
  );
}

export default InsurancePlans;
