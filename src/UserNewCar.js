import React, { Component } from 'react';
import Navibar from './Navibar';
import SearchBar from './SearchBar';
import UserCard from './UserCard';
import UserFooter from './UserFooter';
import { getNewCarDetails } from './UserNewCarsArray';
import UserPurchaseCard from './UserPurchaseCard';


import { AiOutlineShoppingCart } from 'react-icons/ai';

class UserNewCar extends Component {
    state = {

        details: getNewCarDetails(),
        Civic_quantity: 9,
        Cultus_quantity: 7,
        Revo_quantity: 8,
        Brv_quantity: 4,
        Swift_quantity: 9,
        Alsvin_quantity: 12,
        Karvan_quantity: 11,
        Sonata_quantity: 19,
        Crusier_quantity: 2,
        CartItems: 0
    }

    handleDecrementCivic = () => {
        this.setState({
            Civic_quantity: this.state.Civic_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }

    handleDecrementCultus = () => {
        this.setState({
            Cultus_quantity: this.state.Cultus_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }




    handleDecrementrevo = () => {
        this.setState({
            Revo_quantity: this.state.Revo_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }




    handleDecrementSwift = () => {
        this.setState({
            Swift_quantity: this.state.Swift_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }

    handleDecrementKarvan = () => {
        this.setState({
            Karvan_quantity: this.state.Karvan_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementAlsvin = () => {
        this.setState({
            Alsvin_quantity: this.state.Alsvin_quantity- 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementSonata = () => {
        this.setState({
            Sonata_quantity: this.state.Sonata_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementBrv = () => {
        this.setState({
            Brv_quantity: this.state.Brv_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementCrusier = () => {
        this.setState({
            Crusier_quantity: this.state.Crusier_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }
    render() {
        return (
            <div style={{ backgroundColor: "skyblue" }}>



                <h3 style={{ marginLeft: "82%" }}><b >Cart Items  <AiOutlineShoppingCart />: {this.state.CartItems}
                </b></h3>

                <div className='row'>
                    <div className='col-12' style={{ backgroundColor: "blue", height: 300 }}>
                        <div style={{ marginTop: "100px" }}>
                            </div>
                    </div></div>
                <br></br><br></br>
                <h3 style={{ marginLeft: "30px", fontFamily: "a" }} ><b> New Cars for sale</b></h3>
                <br />




                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[4].pic} name={this.state.details[4].name}
                        description={this.state.details[4].description} items={this.state.Swift_quantity}
                        method={this.handleDecrementSwift} />
                </div>



                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[5].pic} name={this.state.details[5].name}
                        description={this.state.details[5].description} items={this.state.Alsvin_quantity}
                        method={this.handleDecrementAlsvin} />
                </div>




                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[6].pic} name={this.state.details[6].name}
                        description={this.state.details[6].description} items={this.state.Sonata_quantity}
                        method={this.handleDecrementSonata} />
                </div>




                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[7].pic} name={this.state.details[7].name}
                        description={this.state.details[7].description} items={this.state.Crusier_quantity}
                        method={this.handleDecrementCrusier} />
                </div>

                {/* Row endeed */}
                <br/><br/>

                <div style={{ display: "inline-block" }}>
                    <UserPurchaseCard pic={this.state.details[0].pic} name={this.state.details[0].name}
                        description={this.state.details[0].description} items={this.state.Civic_quantity}
                        method={this.handleDecrementCivic} />
                </div>


                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[1].pic} name={this.state.details[1].name}
                        description={this.state.details[1].description} items={this.state.Cultus_quantity}
                        method={this.handleDecrementCultus} />
                </div>


                <div style={{ display: "inline-block" }}>
                    <UserPurchaseCard pic={this.state.details[2].pic} name={this.state.details[2].name}
                        description={this.state.details[2].description} items={this.state.Revo_quantity} method={this.handleDecrementrevo} />
                </div>

                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[3].pic} name={this.state.details[3].name}
                        description={this.state.details[3].description} items={this.state.Brv_quantity}
                        method={this.handleDecrementBrv} />
                </div>


            </div>




        );
    }
}

export default UserNewCar;