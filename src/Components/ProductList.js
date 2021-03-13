import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import Context from '../Context';
import ListItem from './ListItem';

export default function ProductList() {
    const { productList } = useContext(Context);

    let totalPrice = 0
    return (
        <>
            <Table striped hover className='productList'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Стоимость</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product, index) => {
                        totalPrice = totalPrice + Number(product.price);
                        return <ListItem product={product} key={product.id} index={index} />
                    })}
                </tbody>
            </Table>
            <h5>Общая стоимость <strong>{totalPrice}</strong></h5>
        </>
    )
}
