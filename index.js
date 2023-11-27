'use strict';

const productData = {
    productName: "Adidas",
    quantity: 7,                       
    category: "Кросовки",       
    price: 7500                         
  };
  
  const totalPrice = productData.quantity * productData.price;
  
  console.log(`Наименование товара: ${productData.productName}`);
  console.log(`Общая сумма товаров: ${totalPrice}`);