import React, { Component } from 'react';
import Menu                 from './MenuComponent';
import DishDetail           from './DishdetailComponent'; 
import commands             from './commands'
import { DISHES }           from '../shared/dishes';
import Header               from './HeaderComponent';
import Footer               from './FooterComponent';
import Home                 from './HomeComponent'
import Forms                from './Form';
import Products             from './Products'
import { COMMENTS }         from '../shared/comments';
import { PRODUCTS }         from '../shared/products';
import { PROMOTIONS }       from '../shared/promotions';
import { LEADERS }          from '../shared/leaders';
import About                from './AboutComponent';  
import { connect }          from 'react-redux';
import { Switch, Route,
   Redirect, withRouter }   from 'react-router-dom'


  // this pure function is used to get states from the store and make this props
   const mapStateToProps = state => {
    return {
      // to make this states available as components
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
      products: state.products
    }
  }

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes    : DISHES,
      comments  : COMMENTS,
      promotions: PROMOTIONS,
      leaders   : LEADERS,
      products  : PRODUCTS
    };
  }
  

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    console.log("clicked") 
  }
  

  render() {
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    return (
      
      <div>
        <Header />
        <div>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />}  />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Forms} />
              <Route exact path='/products' component={Products} />
              <Route exact path='/commands' component={commands} />
              
             
              <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));