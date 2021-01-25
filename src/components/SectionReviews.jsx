import React, {useEffect} from 'react';
import {withNamespaces} from "react-i18next";
import googlePlaces from "google-maps-reviews";


function SectionReviews({t}) {

    useEffect(() => {
        //Find a placeID via https://developers.google.com/places/place-id
        googlePlaces("google-reviews", {
            placeId: 'ChIJb6jc0AJGPA0REWTDMb7dNV4',
        });
    }, []);

    return (

        <section id="reviews" className="section-stories">


            {/*<div className="bg-video">*/}
            {/*    <img src="img/header.jpg"/>*/}
            {/*</div>*/}



            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary right-padding">
                    {t('clients_reviews')}
                </h2>
            </div>

            <div id="google-reviews"/>



            <div className="row u-margin-bottom-small">
                <div className="review">
                    <div className="review__text">
                        <p>
                            Un lugar increíble para comer o cenar y salir sin
                            nada
                            de hambre.
                            Además el trato es muy bueno. Mi familia y yo vamos
                            mucho, y siempre
                            nos quedamos con ganas de volver.
                        </p>
                        {/*<img src="img/stars.png" className="story__img"*/}
                        {/*     alt="Stars"/>*/}
                            <p className="heading-tertiary-small">
                                Silvia Moreno</p>
                    </div>
                </div>
            </div>

            {/*<div className="row u-margin-bottom-small">*/}
            {/*    <div className="story">*/}
            {/*        <div className="story__text">*/}
            {/*            <p>*/}
            {/*                Paramos porque íbamos de viaje por casualidad y ha*/}
            {/*                sido*/}
            {/*                el mejor sitio que he estado de paso nunca.*/}
            {/*                Cantidades y calidad a raudales. Buen servicio,*/}
            {/*                amabilidad y muy pendientes.*/}
            {/*                Ambiente agradable, tranquilo y familiar.*/}
            {/*                Llegamos muy tarde para la comida y aún así nos*/}
            {/*                atendieron.*/}
            {/*                100% recomendable y pararé siempre que pueda.*/}
            {/*            </p>*/}
            {/*            <img src="img/stars.png" className="story__img"*/}
            {/*                 alt="Meat">*/}
            {/*                <p className="heading-tertiary-small">*/}
            {/*                    Isa Lucas Sáiz</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="row u-margin-bottom-small">*/}
            {/*    <div className="story">*/}
            {/*        <div className="story__text">*/}
            {/*            <p>*/}
            {/*                Si pasáis cerca de aquí, este es el sitio dónde*/}
            {/*                tenéis*/}
            {/*                que parar a comer.*/}
            {/*                El menú una auténtica bestialidad. Todo buenísimo, y*/}
            {/*                con*/}
            {/*                hambre no se queda uno.*/}
            {/*                La atención más que sobresaliente. Todo para*/}
            {/*                celiacos.*/}
            {/*                Un 10.*/}
            {/*            </p>*/}
            {/*            <img src="img/stars.png" className="story__img"*/}
            {/*                 alt="Meat">*/}
            {/*                <p className="heading-tertiary-small">*/}
            {/*                    Jayro Pérez Gómez</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="row u-margin-bottom-small">*/}
            {/*    <div className="story">*/}
            {/*        <div className="story__text">*/}
            {/*            <p>*/}
            {/*                Descubrimos este sitio porque nos lo recomendaron y*/}
            {/*                no*/}
            {/*                se equivocaron, se come fenomenal,*/}
            {/*                comida variada de calidad y cantidad, y un servicio*/}
            {/*                excelente, atentos y muy agradables.*/}
            {/*                Totalmente recomendable.*/}
            {/*            </p>*/}
            {/*            <img src="img/stars.png" className="story__img"*/}
            {/*                 alt="Meat">*/}
            {/*                <p className="heading-tertiary-small">*/}
            {/*                    Antonio Zamora</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="u-center-text u-margin-top-huge">
                <a target="_blank"
                   href="https://www.google.com/search?client=safari&rls=en&q=asador+carpio+de+azaba&ie=UTF-8&oe=UTF-8#lrd=0xd3c4602d0dca86f:0x5e35ddbe31c36411,1,,,"
                   className="btn-text">Ver más opiniones &rarr;</a>
            </div>
        </section>

    );
}

export default withNamespaces()(SectionReviews);