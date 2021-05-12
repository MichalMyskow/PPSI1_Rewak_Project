import React, { useState, useRef, useEffect } from 'react';
import {
    SliderSection,
    SliderWrapper,
    SliderSlide,
    SliderSlider,
    SliderImg,
    SliderContent,
    SliderBtnLink,
    Arrow,
    SliderButtons,
    PrevArrow,
    NextArrow
} from './Slider.elements';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    // const timeout = useRef(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url1 = 'http://blogapi.local/api/posts?page=1';

        fetch(url1, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'BEARER '+ localStorage.getItem('JWT'),
                'Accept': 'application/json'
            },
            credentials: 'include'
        }).then(resp => resp.json())
            .then(resp => setPosts(resp))
            // .then(resp => console.log(resp))
    }, []);

    const nextSlide = () => {
        // if (timeout.current) {
        //     clearTimeout(timeout.current)
        // }
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        // if (timeout.current) {
        //     clearTimeout(timeout.current)
        // }
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }




    // return (
    //     <SliderSection>
    //         <SliderWrapper>
    //             {slides.map((slide, index) => {
    //                 return (
    //                     <SliderSlide key={index}>
    //                         {index === current && (
    //                             <SliderSlider>
    //                                 <SliderImg src={slide.image} alt={slide.alt} />
    //                                 <SliderContent>
    //                                     <h1> {slide.title} </h1>
    //                                     <p> {slide.description} </p>
    //                                     <SliderBtnLink to={slide.path} css={`max-width: 160px;`}>
    //                                         {slide.button_label}
    //                                         <Arrow />
    //                                     </SliderBtnLink>
    //                                 </SliderContent>
    //                             </SliderSlider>
    //                         )}
    //                     </SliderSlide>
    //                 );
    //             })}
    //             <SliderButtons>
    //                 <PrevArrow onClick={prevSlide} />
    //                 <NextArrow onClick={nextSlide} />
    //             </SliderButtons>
    //         </SliderWrapper>
    //     </SliderSection>
    // );

    return (
        <SliderSection>
            <SliderWrapper>
                {posts.map((post, index) => {
                    return (
                        <SliderSlide key={index}>
                            {index === current && (
                                <SliderSlider>
                                    <SliderImg src={post.photoLink} alt="PhotoError" />
                                    <SliderContent>
                                        <h1> {post.title} </h1>
                                        <p> {post.subtitle} </p>
                                        {/* <SliderBtnLink to={slide.path} css={`max-width: 160px;`}>
                                            {slide.button_label}
                                            <Arrow /> */}
                                        {/* </SliderBtnLink> */}
                                    </SliderContent>
                                </SliderSlider>
                            )}
                        </SliderSlide>
                    );
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </SliderWrapper>
        </SliderSection>
    );
}

export default Slider;