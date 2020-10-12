import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardImg,
    CardTitle,CardImgOverlay } from 'reactstrap';

        
    function RenderDish({dish}) {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
      }

    function RenderComments(comments) {
        
        
          const comment = comments.map((comment) => {
                  
              return (
        
                  <ul className = "list-unstyled">
                      <li>{comment.comment}</li>
                      <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
   
                  </ul> 
          
                      );
              });
              return(
                  <div>
                  {comment}
                  </div>

              );
        
        
      }
      const  DishDetail = (props) => {
        return (
            <div className="container">   
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}></RenderDish>
                </div>
                
                <div>
                    <h4>comments</h4>
                   <RenderComments comments={props.dish.comments}></RenderComments> 
               
                </div>
            </div>
            </div> 
        );
    }
                

               
            
            

export default DishDetail;