import React from "react";
import logo from '../img/logo.png';

const Main = () => {

    function importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }

    const images = importAll(require.context('../img/', false, /\.(png|jpe?g|svg)$/));
    console.log(images);

    return (
        <header>
            <img src={images['logo.png']} alt="Logo Img" width="54" height="54" />
        </header>
    );
}

export default Main;
