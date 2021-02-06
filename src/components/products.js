import React ,{Component}                          from 'react';
//import { Link }                       from 'react-router-dom'
import ProductService from       '../service/ProductService';
import { Table } from 'reactstrap';
import HorizontalForm from './HorizontalForm';
import {Button, Card }        from 'reactstrap';


class Products extends Component{

       constructor(props) {
         super(props)
       
         this.state = {
            products : [],
            isLoading : false
         }
       }
       
        
        componentDidMount() {
          ProductService.getProducts().then((response) =>
             {
               this.setState({ products: response.data });
              
              console.log(response);
              } )
            ;
            
          }

          addProduct(event) {

            
            event.preventDefault();
        
        }
        

        
        
          render() {
            
        
            return (
              
              <div className="container" style={{padding:12}}>
                <div class="row">
                <Card style={{padding:12}}> <HorizontalForm></HorizontalForm> </Card>
                
                <Card><Table id = "productsTable" bordered>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nom</th>
                      <th>prix</th>
                      <th>stock</th>
                      <th>date de production</th>
                      <th>Description</th>
                      <th>modifier/suprimer</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.products.map(product =>   
                      <tr>
                        <th key={product.id}>{product.id}</th>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.productionDate}</td>
                        <td>{product.description}</td>
                        <td><Button id="crudButtons">modifier</Button> <Button id="crudButtons" color="danger">suprimer</Button></td>
                      </tr>
                    )}
                  </tbody>
                </Table></Card>
                <Card> <HorizontalForm></HorizontalForm> </Card>
               </div>
               </div>
              
            );
          }
            
          
}

export default Products;
