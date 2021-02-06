import axios from 'axios'
//const axios = require('axios');


const ALL_PRODUCTS_URL = "http://localhost:8080/products/getProducts";

class ProductService {

    getProducts(){
        return axios.get(ALL_PRODUCTS_URL);
    }

    addProduct(product){

        axios.post(ALL_PRODUCTS_URL, {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    

}

export default new ProductService();