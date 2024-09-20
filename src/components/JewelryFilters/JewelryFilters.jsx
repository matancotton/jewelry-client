import { useContext } from 'react';
import { AppContext } from '../providers/AppProvider';
import { setFiltersAction } from '../../actions/filtersAction';
import './JewelryFilters.module.scss';

const JewelryFilters = () => {
  const { filtersDispatch } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const filters = {
      price: parseInt(formData.get('price')) || null,
      shape: formData.get('shape'),
      isLabDiamond:
        formData.get('isLabDiamond') === '' ? null : formData.get('isLabDiamond') === 'true',
    };
    filtersDispatch(setFiltersAction(filters));
  };

  return (
    <div>
      <h2>Filters</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" />
        </div>
        <div>
          <label htmlFor="shape">Shape:</label>
          <select id="shape" name="shape" defaultValue="">
            <option value="" disabled>
              Select a shape
            </option>
            <option value="round">Round</option>
            <option value="princess">Princess</option>
            <option value="radiant">Radiant</option>
          </select>
        </div>
        <div>
          <label htmlFor="isLabDiamond">Lab Diamond:</label>
          <select id="isLabDiamond" name="isLabDiamond" defaultValue={''}>
            <option value={''}>Select an option</option>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default JewelryFilters;
