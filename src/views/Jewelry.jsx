import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../components/providers/AppProvider';

const Jewelry = () => {
  const params = useParams();
  const { getSingleJewelry } = useContext(AppContext);
  const id = params.id;
  const jewelry = getSingleJewelry(id);
  if (!jewelry) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <h1>Details on item: {jewelry._id}</h1>
      <div>
        <p>Price: {jewelry.price}</p>
        <p>Shape: {jewelry.shape}</p>
        <p>Color: {jewelry.color}</p>
        <p>Clarity: {jewelry.clarity}</p>
        <p>Carat: {jewelry.carat}</p>
        <p>Cut: {jewelry.cut}</p>
        <p>Is Lab Diamond: {jewelry.isLabDiamond.toString()}</p>
      </div>
    </div>
  );
};

export default Jewelry;
