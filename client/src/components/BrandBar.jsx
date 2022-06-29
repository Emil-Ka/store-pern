import {Card, Row} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';

import {setSelectedBrand} from '../redux/slices/brandSlice';

export const BrandBar = () => {
  const dispatch = useDispatch();
  const {brands, selectedBrand} = useSelector(state => state.brand);

  return (
    <div className='d-flex'>
      {
        brands.map(brand => (
          <Card 
            key={brand.id} 
            border={selectedBrand.id === brand.id ? 'danger' : 'light'} 
            className='p-3'
            style={{cursor: 'pointer'}}
            onClick={() => dispatch(setSelectedBrand(brand))}>
            {brand.name}
          </Card>
        ))
      }
    </div>
  );
};