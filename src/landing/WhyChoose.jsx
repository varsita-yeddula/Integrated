
import styles from './WhyChoose.module.css';

const WhyChoose = () => {
    return (
        <section className={styles.whyChoose}>
            <h2>Why Choose MassMutual Insurance?</h2>
            <div className={styles.boxContainer}>
                <div className={styles.box}>
                    <img src="src\landing\assets\Realiablity1.jpg" alt="Feature 1" />
                    <p>Reliable Protection</p>
                </div>
                <div className={styles.box}>
                    <img src="src\landing\assets\afford.jpg" alt="Feature 2" />
                    <p>Affordable Plans</p>
                </div>
                <div className={styles.box}>
                    <img src="src\landing\assets\247jpg.jpg" alt="Feature 3" />
                    <p>24/7 Support</p>
                </div>
                <div className={styles.box}>
                    <img src="src\landing\assets\flexibility1.jpg" alt="Feature 4" />
                    <p>Flexible Coverage</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
