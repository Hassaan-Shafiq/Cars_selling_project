import React, { Component } from 'react';
import Navibar from './Navibar';
import SearchBar from './SearchBar';
import UserPurchaseCard from './UserPurchaseCard';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getUsedCarDetails } from './UsedCarsArray';

class UserUsedCars extends Component {
    state = {

        details: getUsedCarDetails(),
        Mehran_quantity: 9,
        Alto_quantity: 7,
        Santro_quantity: 8,
        Corolla_quantity: 4,
        Aqua_quantity: 9,
        Liana_quantity: 12,
        WagonR_quantity: 19,
        Vitz_quantity: 2,
        CartItems: 0
    }

    handleDecrementMehran = () => {
        this.setState({
            Mehran_quantity: this.state.Mehran_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }

    handleDecrementAlto = () => {
        this.setState({
            Alto_quantity: this.state.Alto_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }




    handleDecrementSantro = () => {
        this.setState({
            Santro_quantity: this.state.Santro_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }




    handleDecrementAqua = () => {
        this.setState({
            Aqua_quantity: this.state.Aqua_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }

    handleDecrementCiaz = () => {
        this.setState({
            Ciaz_quantity: this.state.Ciaz_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementLiana = () => {
        this.setState({
            Liana_quantity: this.state.Liana_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementWagonR = () => {
        this.setState({
            WagonR_quantity: this.state.WagonR_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementCorolla = () => {
        this.setState({
            Corolla_quantity: this.state.Corolla_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementVitz = () => {
        this.setState({
            Vitz_quantity: this.state.Vitz_quantity - 1,
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
                <h3 style={{ marginLeft: "30px", fontFamily: "a" }} ><b> Used for sale</b></h3>
                <br />

                   {/* Cards Started */}

                <div style={{ display: "inline-block" }}>
                    <UserPurchaseCard pic={this.state.details[0].pic} name={this.state.details[0].name}
                        description={this.state.details[0].description} items={this.state.Mehran_quantity}
                        method={this.handleDecrementMehran} />
                </div>


                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[1].pic} name={this.state.details[1].name}
                        description={this.state.details[1].description} items={this.state.Alto_quantity}
                        method={this.handleDecrementAlto} />
                </div>


                <div style={{ display: "inline-block" }}>
                    <UserPurchaseCard pic={this.state.details[2].pic} name={this.state.details[2].name}
                        description={this.state.details[2].description} items={this.state.Santro_quantity} method={this.handleDecrementSantro} />
                </div>

                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[3].pic} name={this.state.details[3].name}
                        description={this.state.details[3].description} items={this.state.Corolla_quantity}
                        method={this.handleDecrementCorolla} />
                </div>

                <br /><br /><br />


                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[4].pic} name={this.state.details[4].name}
                        description={this.state.details[4].description} items={this.state.Aqua_quantity}
                        method={this.handleDecrementAqua} />
                </div>



                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[5].pic} name={this.state.details[5].name}
                        description={this.state.details[5].description} items={this.state.Liana_quantity}
                        method={this.handleDecrementLiana} />
                </div>




                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[6].pic} name={this.state.details[6].name}
                        description={this.state.details[6].description} items={this.state.WagonR_quantity}
                        method={this.handleDecrementWagonR} />
                </div>




                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[7].pic} name={this.state.details[7].name}
                        description={this.state.details[7].description} items={this.state.Vitz_quantity}
                        method={this.handleDecrementVitz} />
                </div>



            </div>




        );
    }
}

export default UserUsedCars;