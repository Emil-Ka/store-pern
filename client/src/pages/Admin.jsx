import { Col, Container, Row, Image, Button } from "react-bootstrap";

export const Admin = () => {
  return (
    <Container className='d-flex flex-column'>
      <Button className='mt-2 p-2' variant='outline-dark'>
        Добавить тип
      </Button>
      <Button className='mt-2 p-2' variant='outline-dark'>
        Добавить бренд
      </Button>
      <Button className='mt-2 p-2' variant='outline-dark'>
        Добавить устройство
      </Button>
    </Container>
  );
};