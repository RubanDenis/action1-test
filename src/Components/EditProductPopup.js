import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function EditProductPopup({ hideEditProductPopup, selectedProduct, editSelectedProduct }) {
    const [name, setName] = useState(selectedProduct.name);
    const [number, setNumber] = useState(selectedProduct.number);
    const [price, setPrice] = useState(selectedProduct.price);

    const handleSubmit = event => {
        event.preventDefault();
        editSelectedProduct({ id: selectedProduct.id, name: name, number: number, price: price });
    };

    return (
        <div className='popupBackground'>
            <div className="popupContainer">
                <Container>
                    <h1 className='text-center'>Изменить товар</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId='formProductName'>
                            <Form.Label>Название</Form.Label>
                            <Form.Control type='text' placeholder='Введите название' required value={name} onChange={event => setName(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId='formProductNumber'>
                            <Form.Label>Количество</Form.Label>
                            <Form.Control type='number' placeholder='Введите количество' required value={number} onChange={event => setNumber(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId='formProductPrice'>
                            <Form.Label>Стоимость</Form.Label>
                            <Form.Control type='number' placeholder='Введите стоимость' required value={price} onChange={event => setPrice(event.target.value)} />
                        </Form.Group>

                        <Container className='popupBtnContainer'>
                            <Button variant='success' className='mr-3' type='submit'>Сохранить</Button>
                            <Button variant='danger' onClick={() => hideEditProductPopup()}>Отмена</Button>
                        </Container>
                    </Form>
                </Container>
            </div>
        </div>
    )
}
