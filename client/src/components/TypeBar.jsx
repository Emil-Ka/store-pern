import {ListGroup} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';

import {setSelectedType} from '../redux/slices/typeSlice';

const TypeBar = () => {
  const dispatch = useDispatch();
  const {types, selectedType} = useSelector(state => state.type);
  
  return (
    <ListGroup>
      {
        types.map(type => (
          <ListGroup.Item 
            style={{cursor: 'pointer'}}
            key={type.name}
            onClick={() => dispatch(setSelectedType(type))}
            active={type.id === selectedType.id}>
          {type.name}
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  );
};

export default TypeBar;