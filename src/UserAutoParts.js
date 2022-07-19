import React, { Component } from 'react';
import Navibar from './Navibar';
import SearchBar from './SearchBar';
import UserPurchaseCard from './UserPurchaseCard';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import {getAutoPartsDetails } from './UserAutoPartsArray';

import NewCars from './NewCars';
class Bikes extends Component {
    state = {
        details: getAutoPartsDetails(),
        CottonFabric_quantity: 9,
        CarScratchRemover_quantity: 7,
        SolarPoweredAeroplane_quantity: 8,
        NexenTire_quantity: 4,
        PurposeCleaner_quantity: 9,
        FloorMats_quantity: 12,
        SeatSafetyBeltClip_quantity: 19,
        Towel_quantity: 2,
        CartItems: 0,
        abc : NewCars
    }

    handleDecrementCottonFabric = () => {
        this.setState({
            CottonFabric_quantity: this.state.CottonFabric_quantity - 1,
            CartItems: this.state.CartItems + 1,
        })
    }

    handleDecrementCarScratchRemover = () => {
        this.setState({
            CarScratchRemover_quantity: this.state.CarScratchRemover_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }




    handleDecrementSolarPoweredAeroplane = () => {
        this.setState({
            SolarPoweredAeroplane_quantity: this.state.SolarPoweredAeroplane_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }




    handleDecrementPurposeCleaner = () => {
        this.setState({
            PurposeCleaner_quantity: this.state.PurposeCleaner_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }

    handleDecrementCiaz = () => {
        this.setState({
            Ciaz_quantity: this.state.Ciaz_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementFloorMats = () => {
        this.setState({
            FloorMats_quantity: this.state.FloorMats_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementSeatSafetyBeltClip = () => {
        this.setState({
            SeatSafetyBeltClip_quantity: this.state.SeatSafetyBeltClip_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementNexenTire = () => {
        this.setState({
            NexenTire_quantity: this.state.NexenTire_quantity - 1,
            CartItems: this.state.CartItems + 1
        })
    }


    handleDecrementTowel = () => {
        this.setState({
            Towel_quantity: this.state.Towel_quantity - 1,
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
                <h3 style={{ marginLeft: "30px", fontFamily: "a" }} ><b> Auto Parts for sale</b></h3>
                <br />

                   {/* Cards Started */}

                <div style={{ display: "inline-block" }}>
                    <UserPurchaseCard pic={this.state.details[0].pic} name={this.state.details[0].name}
                        description={this.state.details[0].description} items={this.state.CottonFabric_quantity}
                        method={this.handleDecrementCottonFabric} />
                </div>

                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[1].pic} name={this.state.details[1].name}
                        description={this.state.details[1].description} items={this.state.CarScratchRemover_quantity}
                        method={this.handleDecrementCarScratchRemover} />
                </div>


                <div style={{ display: "inline-block" }}>
                    <UserPurchaseCard pic={this.state.details[2].pic} name={this.state.details[2].name}
                        description={this.state.details[2].description} items={this.state.SolarPoweredAeroplane_quantity} method={this.handleDecrementSolarPoweredAeroplane} />
                </div>

                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[3].pic} name={this.state.details[3].name}
                        description={this.state.details[3].description} items={this.state.NexenTire_quantity}
                        method={this.handleDecrementNexenTire} />
                </div>

                <br /><br /><br />


                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[4].pic} name={this.state.details[4].name}
                        description={this.state.details[4].description} items={this.state.PurposeCleaner_quantity}
                        method={this.handleDecrementPurposeCleaner} />
                </div>



                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[5].pic} name={this.state.details[5].name}
                        description={this.state.details[5].description} items={this.state.FloorMats_quantity}
                        method={this.handleDecrementFloorMats} />
                </div>




                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[6].pic} name={this.state.details[6].name}
                        description={this.state.details[6].description} items={this.state.SeatSafetyBeltClip_quantity}
                        method={this.handleDecrementSeatSafetyBeltClip} />
                </div>




                <div style={{ display: "inline-block" }}>

                    <UserPurchaseCard pic={this.state.details[7].pic} name={this.state.details[7].name}
                        description={this.state.details[7].description} items={this.state.Towel_quantity}
                        method={this.handleDecrementTowel} />
                </div>



            </div>




        );
    }
}

export default Bikes;