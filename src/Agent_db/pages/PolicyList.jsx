import { useState } from 'react';
import styles from '../styles/PolicyList.module.css';

const PolicyDetails = () => {
  const [policies,setPolicies] = useState([]);
  const [filter, setFilter] = useState('active');
  const [showDelete, setShowDelete] = useState(null);
  const fetchPolicies = async () => {
    try {
        const response = await axios.get(`http://localhost:8081/api/claims/user/${userId}`, {
            headers: {
                'Authorization': 'Basic ' + btoa('user:user') // Base64 encode the username:password
            }
        });
        setPolicies(response.data);
    } catch (error) {
        setError('Error fetching claims. Please try again later.');
        console.error('Error fetching claims:', error);
    }
  };
  useEffect(() => {
    if (userId) {
        fetchPolicies();
    } else {
        setError('User ID is not available. Please log in.');
    }
}, [userId]);

  const filteredPolicies = policies.filter(policy => policy.status === filter);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>Policies</h2>
      </div>
      <div className={styles.controls}>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${filter === 'active' ? styles.active : ''}`} onClick={() => setFilter('active')}>Active</button>
          <button className={`${styles.tab} ${filter === 'inactive' ? styles.inactive : ''}`} onClick={() => setFilter('inactive')}>Inactive</button>
        </div>
        <div className={styles.searchTypeTotal}>
          <input type="text" placeholder="Search" className={styles.searchInput} />
          <div className={styles.totalCount}>Total Count: {filteredPolicies.length}</div>
        </div>
      </div>
      <table className={styles.policiesTable}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Policy ID</th>
            <th>Category</th>
            <th>Price</th>
            <th>Expiry</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPolicies.map((policy, index) => (
            <tr key={policy.id}>
              <td>{index + 1}</td>
              <td>{policy.admissionName}</td>
              <td>{policy.policyNumber}</td>
              <td>{policy.policyType}</td>
              <td>{policy.coverageAmount}</td>
              <td>{policy.status}</td>
              <td className={styles.actionCell}>
                <button className={`${styles.btn} ${styles.editBtn}`}>Edit</button>
                <button onClick={() => alert(`Deleting policy: ${policy.name}`)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PolicyDetails;
