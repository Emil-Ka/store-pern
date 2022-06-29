import {Modal, Button, Form} from 'react-bootstrap';

export const CreateBrand = ({show, onHide}) => {
  return (
    <Modal
      size='lg'
      show={show}
      onHide={onHide}
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder='Ведите название бренда'/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger'>Закрыть</Button>
        <Button variant='outline-success'>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};