import React from 'react'
import { Button } from 'react-bootstrap'

export default function ListItem(props) {
    return (
        <tr>
            <td className='idCell'>{props.index + 1}</td>
            <td className='nameCell'>{props.product.name}</td>
            <td className='numCell'>{props.product.number}</td>
            <td className='priceCell'>{props.product.price}</td>
            <td className='btnCell'>
                <div className='itemBtnContainer'>
                    <Button variant="outline-info" size='sm' className='mr-2' onClick={() => props.showEditProductPopup({ id: props.product.id, name: props.product.name, number: props.product.number, price: props.product.price })}>Edit</Button>
                    <Button variant="outline-danger" size='sm' onClick={() => props.deleteSelectedProduct(props.product.id)}>Delete</Button>
                </div>
            </td>
        </tr>
    )
}
