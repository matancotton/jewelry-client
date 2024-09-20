import styles from './JewelryList.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../providers/AppProvider';

const JewelryList = () => {
  const { loading, error, jewelries } = useContext(AppContext);

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.log(error);
    return <div>Error :(</div>;
  }

  return (
    <div>
      <h1 className={styles.title}>Jewelry List</h1>
      <ul className={styles.jewelryList}>
        <li className={styles.tableHeader}>
          <p>Price</p>
          <p>Shape</p>
          <p>Color</p>
          <p>Clarity</p>
          <p>Carat</p>
          <p>Is Lab Diamond</p>
          <p>Cut</p>
        </li>
        {jewelries.map((jewelry) => (
          <li key={jewelry._id}>
            <Link to={jewelry._id}>
              <p>{jewelry.price}</p>
              <p>{jewelry.shape}</p>
              <p>{jewelry.color}</p>
              <p>{jewelry.clarity}</p>
              <p>{jewelry.carat}</p>
              <p>{jewelry.isLabDiamond.toString()}</p>
              <p>{jewelry.cut}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JewelryList;
