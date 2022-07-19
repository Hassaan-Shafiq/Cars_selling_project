import React, { Component } from 'react';
import Navibar from './Navibar';
import SearchBar from './SearchBar';
import UserPurchaseCard from './UserPurchaseCard';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getUsedCarDetails } from './UsedCarsArray';
import {getBikesDetails } from './UserBikesArray';

class Bikes extends Component {
    state = {
        details: getBikesDetails(),
        Ducati1098s_quantity: 9,
        BMWK1200S_quantity: 7,
        ApriliaRSV_quantity: 8,
        KawasakiNinjaZX14R_quantity: 4,
        AgustaF4_quantity: 9,
        YamahaYZFR1_quantity: 12,
        HondaCBR1100XX_quantity: 19,
        SuzukiHayabusa_quantity: 2,
        CartItems: 0
    }

    handleDecrementDucati1098s = () => {
        this.setState({
            Ducati1098s_quantity: this.state.Ducati1098s_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }

    handleDecrementBMWK1200S = () => {
        this.setState({
            BMWK1200S_quantity: this.state.BMWK1200S_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }




    handleDecrementApriliaRSV = () => {
        this.setState({
            ApriliaRSV_quantity: this.state.ApriliaRSV_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }




    handleDecrementAgustaF4 = () => {
        this.setState({
            AgustaF4_quantity: this.state.AgustaF4_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }

    handleDecrementCiaz = () => {
        this.setState({
            Ciaz_quantity: this.state.Ciaz_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementYamahaYZFR1 = () => {
        this.setState({
            YamahaYZFR1_quantity: this.state.YamahaYZFR1_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementHondaCBR1100XX = () => {
        this.setState({
            HondaCBR1100XX_quantity: this.state.HondaCBR1100XX_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementKawasakiNinjaZX14R = () => {
        this.setState({
            KawasakiNinjaZX14R_quantity: this.state.KawasakiNinjaZX14R_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementSuzukiHayabusa = () => {
        this.setState({
            SuzukiHayabusa_quantity: this.state.SuzukiHayabusa_quantity - 1,
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
                <h3 style={{ marginLeft: "30px", fontFamily: "a" }} ><b> Bikes for sale</b></h3>
                <br />

                   {/* Cards Started */}

                <div style={{ display: "inline-block" }}>
                    <UserPurchaseCard pic={this.state.details[0].pic} name={this.state.details[0].name}
                        description={this.state.details[0].description} items={this.state.Ducati1098s_quantity}
                        method={this.handleDecrementDucati1098s} />
                </div>

                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[1].pic} name={this.state.details[1].name}
                        description={this.state.details[1].description} items={this.state.BMWK1200S_quantity}
                        method={this.handleDecrementBMWK1200S} />
                </div>


                <div style={{ display: "inline-block" }}>
                    <UserPurchaseCard pic={this.state.details[2].pic} name={this.state.details[2].name}
                        description={this.state.details[2].description} items={this.state.ApriliaRSV_quantity} method={this.handleDecrementApriliaRSV} />
                </div>

                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[3].pic} name={this.state.details[3].name}
                        description={this.state.details[3].description} items={this.state.KawasakiNinjaZX14R_quantity}
                        method={this.handleDecrementKawasakiNinjaZX14R} />
                </div>

                <br /><br /><br />


                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[4].pic} name={this.state.details[4].name}
                        description={this.state.details[4].description} items={this.state.AgustaF4_quantity}
                        method={this.handleDecrementAgustaF4} />
                </div>



                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[5].pic} name={this.state.details[5].name}
                        description={this.state.details[5].description} items={this.state.YamahaYZFR1_quantity}
                        method={this.handleDecrementYamahaYZFR1} />
                </div>




                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[6].pic} name={this.state.details[6].name}
                        description={this.state.details[6].description} items={this.state.HondaCBR1100XX_quantity}
                        method={this.handleDecrementHondaCBR1100XX} />
                </div>




                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[7].pic} name={this.state.details[7].name}
                        description={this.state.details[7].description} items={this.state.SuzukiHayabusa_quantity}
                        method={this.handleDecrementSuzukiHayabusa} />
                </div>



            </div>




        );
    }
}

export default Bikes;