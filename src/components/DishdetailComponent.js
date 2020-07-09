import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
//import { DISHES } from '../shared/dishes';



class DishDetail extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 diches : props
            }
        }
        

    
    render(props){
            
            const comments = this.state.diches.map((dish ) =>{
                return (
                <div className="col-12 col-lg-5 col-md-5 m-1">
                       <Card>
                   <CardImg top src={dish.image} alt={dish.name} />
                   <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                    
                  </Card>
                    
                </div>
                );

            });
        return(

        <div className="container">
            <div className="row">

                
                    {comments}
                
                
            </div>

            
        </div>
        );
    }

}

export default DishDetail;