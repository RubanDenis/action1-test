import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Alert } from 'react-bootstrap';
import ProductList from './Components/ProductList';
import AddProductPopup from './Components/AddProductPopup';
import EditProductPopup from './Components/EditProductPopup';

export default class App extends Component {
  state = {
    productList: [],
    addProduct: false,
    editProduct: false,
    selectedProduct: {}
  };

  //изменяем флаг, чтобы показать попап добавления товара
  showAddProductPopup = () => {
    this.setState({
      addProduct: true
    });
  };

  //изменяем флаг, чтобы скрыть попап добавления товара
  hideAddProductPopup = () => {
    this.setState({
      addProduct: false
    });
  };

  //добаление нового товара в список
  addNewProduct = product => {
    product.id = this.state.productList.length + 1;

    //сначала добавим в массив, а потом используем setState чтобы заново отрендерить
    this.state.productList.push(product)
    this.setState({
      productList: this.state.productList,
      addProduct: false
    });
  };

  //изменяем флаг, чтобы показать попап редактирования товара
  showEditProductPopup = selectedProduct => {
    this.setState({
      selectedProduct: selectedProduct,
      editProduct: true
    });
  };

  //изменяем флаг, чтобы скрыть попап редактирования товара
  hideEditProductPopup = () => {
    this.setState({
      editProduct: false
    });
  };

  //сохраняем изменения после редактирования продукта
  editSelectedProduct = changedProduct => {
    this.setState({
      productList: this.state.productList.map(product => {
        if (product.id === changedProduct.id) {
          product = changedProduct;
        }
        return product;
      }),
      editProduct: false
    });
  };

  //удаление выбранного продукта
  deleteSelectedProduct = deletedProduct => {
    this.setState({
      productList: this.state.productList.filter(product => product.id !== deletedProduct)
    });
  };

  render() {
    return (
      <>
        {this.state.addProduct ? <AddProductPopup hideAddProductPopup={this.hideAddProductPopup} addNewProduct={this.addNewProduct} /> : ``}
        {this.state.editProduct ? <EditProductPopup hideEditProductPopup={this.hideEditProductPopup} selectedProduct={this.state.selectedProduct} editSelectedProduct={this.editSelectedProduct} /> : ``}
        <Container className='mt-5'>
          <Button variant="outline-success" className="mb-3" onClick={() => this.showAddProductPopup()}>Добавить товар</Button>
          {
            this.state.productList.length > 0
              ?
              <ProductList productList={this.state.productList} showEditProductPopup={this.showEditProductPopup} deleteSelectedProduct={this.deleteSelectedProduct} />
              :
              <Alert variant='secondary' className='font-weight-bold'>Список товаров пуст. Создайте товар.</Alert>
          }
        </Container>
      </>
    )
  }
}
