import {Modal, Button, Form, Dropdown, Row, Col} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {useState} from 'react';

export const CreateDevice = ({show, onHide}) => {
  const {brands} = useSelector(state => state.brand);
  const {types} = useSelector(state => state.type);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo(prev => [...prev, {id: Date.now(), title: '', description: ''}])
  }

  const removeInfo = (id) => {
    setInfo(prev => prev.filter(item => item.id !== id))
  }

  return (
    <Modal
      size='lg'
      show={show}
      onHide={onHide}
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mb-3'>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {
                types.map(type => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
            <Dropdown.Menu>
              {
                brands.map(brand => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className='mt-3'
            placeholder='Введите название устройства'/>
          <Form.Control
            className='mt-3'
            placeholder='Введите стоимость устройства'
            type='number'/>
          <Form.Control
            className='mt-3'
            type='file'/>
          <Button
            variant='outline-dark'
            className='mt-3'
            onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {
            info.map(item => (
              <Row className='mt-3' key={item.id}>
                <Col md={4}>
                  <Form.Control
                    placeholder='Введите название свойства'/>
                </Col>
                <Col md={4}>
                  <Form.Control
                    placeholder='Введите описание свойства'/>
                </Col>
                <Col md={4}>
                  <Button 
                    variant='outline-danger'
                    onClick={() => removeInfo(item.id)}>Удалить</Button>
                </Col>
              </Row>
            ))
          }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger'>Закрыть</Button>
        <Button variant='outline-success'>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};