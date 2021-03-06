import React from 'react';
import image1 from '../../assets/image/image-1.jpg';
import image2 from '../../assets/image/image-2.jpg';
import image3 from '../../assets/image/image-3.jpg';
import image4 from '../../assets/image/image-4.jpg';
import './AboutSection.scss';


export default () => (
    <div className="about-section">
        <div className="about-info">
            <h2>ABOUT US</h2>
            <div className="underline">
                <div className="underline-1"></div>
                <div className="underline-2"></div>
            </div>
            <h2 className="brand">Hotelia</h2>
            <p>
                Exercitation esse non sit ea quis duis eiusmod eiusmod do occaecat tempor aliqua aliqua in. Excepteur mollit nisi sunt eiusmod et deserunt consequat exercitation ullamco ut esse ex est qui. Cillum consectetur voluptate dolore ut. Amet laborum aute aliqua dolor aliquip consequat cupidatat consectetur do deserunt do non sint incididunt.
            </p>

            <button>READ MORE <i className="fas fa-angle-double-right arrow-left"></i></button>
        </div>
        <div className="about-images">
            <img className="image image-1" src={image1} alt="Hotelia"/>
            <img className="image image-2" src={image2} alt="Hotelia"/>
            <img className="image image-3" src={image3} alt="Hotelia"/>
            <img className="image image-4" src={image4} alt="Hotelia"/>
        </div>
    </div>
);