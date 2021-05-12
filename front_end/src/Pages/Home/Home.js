import React from 'react';
import Slider from '../../components/Slider/Slider';
import {SliderData} from '../../components/Slider/SliderData';


const Home = () => {



    return (
        <div>
            <Slider slides={SliderData}/>
        </div>
    );
}

export default Home;