import React from 'react';
import {withNamespaces} from "react-i18next";

import chickenImg from "../img/chicken.jpg";
import codfishImg from "../img/codfish.jpg";
import meatImg from "../img/meat.jpg";
import startersImg from "../img/starters.png";
import Dish from "./Dish";
import DishImage from "./DishImage";


function SectionMenu({t}) {
    return (
        <section className="section-menu" id="menu">
            <div className="u-center-text u-margin-bottom-small">
                <h2 className="heading-secondary">
                    {t('special_menu')}
                </h2>
                <h3 className="heading-tertiary__digits">
                    {t('special_menu_price')}
                </h3>
                <h5 className="heading-tertiary__digits-small">
                    {t('special_menu_price_iva')}
                </h5>
            </div>


            <div className="row row-big-padding">
                <div className="col-1-of-2">
                    <Dish name={'sausage_with_cheese'}/>
                    <Dish name={'scrambled_cod'}/>
                    <Dish name={'dish_of_the_day'}/>
                    <Dish name={'roasted_red_sausage'}/>
                    <Dish name={'grilled_chicken'}/>
                </div>
                <div className="col-1-of-2">
                    <Dish name={'grilled_lamb'}/>
                    <Dish name={'grilled_pork'}/>
                    <Dish name={'grilled_veal'}/>
                    <Dish name={'variety_of_desserts'}/>
                    <Dish name={'coffee_and_liqueur'}/>
                </div>
            </div>

            {/*TODO colocar um carrosel com imagens*/}

            <div className="row">
                <div className="gallery">
                    <DishImage order='1' src={meatImg} name='Meat'/>
                    <DishImage order='2' src={chickenImg} name='Chicken'/>
                    <DishImage order='3' src={startersImg} name='Starters'/>
                    <DishImage order='4' src={codfishImg} name='Codfish'/>
                </div>

            </div>

        </section>

    );
}

export default withNamespaces()(SectionMenu);