import { Col, Container, Row, Image, Button } from "react-bootstrap";

export const DevicePage = () => {
  const device = {id: 1, name: 'Iphone 12 Pro', price: 65000, rating: 5, img: 'https://c.ndtvimg.com/2020-11/165re19g_gadgets_640x480_17_November_20.jpg'};
  const description = [
    {id: 1, title: 'ОЗУ', description: '5 гб'},
    {id: 2, title: 'Камера', description: '12 мп'},
    {id: 3, title: 'Аккумулятор', description: '4000 mAh'}
  ]

  return (
    <Container className='mt-4'>
      <Row>
        <Col md={4}>
          <Image src={device.img} alt={device.name} width={350}/>
        </Col>
        <Col>
          <h2 className='mb-2'>{device.name}</h2>
          <p className='mb-2'>Рейтинг: {device.rating}</p>
          <p className='mb-2'>Цена: {device.price} руб.</p>
          <Button variant='success'>Купить</Button>
        </Col>
      </Row>
      <Row className='mt-4'>
        <h2 className='mb-3'>Характеристики:</h2>
        {
          description.map((info, index) => (
            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: '8px'}}>
              {info.title}: {info.description}
            </Row>
          ))
        }
      </Row>
    </Container>
  );
};