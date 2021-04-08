import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron,NavItem,NavLink,Nav,NavbarToggler,Collapse,Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked);
    event.preventDefault();

}
  render() {
    return(
    <React.Fragment>
        <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home' active><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to='/aboutus' active><span className="fa fa-info fa-lg"></span> About Us</Link>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu' active><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus' active><span className="fa fa-address-card fa-lg"></span> Utilisateurs</NavLink>
                            </NavItem>
                            <NavItem >
                                <Link className="nav-link" to='/products' ><span className="fa fa-product-hunt fa-lg"></span>produits</Link>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to='/stock' active><span className="fas fa-coins fa-lg"></span>Stock</NavLink>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to='/commands' active  ><span className="fa fa-check-square fa-lg"></span>Commandes</Link>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Déconnection</Button>
                                </NavItem>
                            </Nav>

                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"
                                        innerRef={(input) => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                        innerRef={(input) => this.password = input}  />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input}  />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </Form>
                            </ModalBody>
                             </Modal>
                        </Collapse>
                    </div>
                </Navbar>
       {/* <Jumbotron fluid color="primary">
           <div className="container">
              <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>bienvenue dans notre restaurant</h1>
                       <p>exemple d'une discription header!</p>
                      
                   </div>
               </div>
           </div>
       </Jumbotron> */}
    </React.Fragment>
    );
  }
}

export default Header;