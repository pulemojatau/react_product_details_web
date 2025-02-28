import React, { useState } from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const [selectedFeature, setSelectedFeature] = useState('Time');
    const [selectedColorPos, setSelectedColorPos] = useState(0);

    const onFeatureItemClick = (feature) => {
        setSelectedFeature(feature);
    };

    const onColorOptionClick = (pos) => {
        setSelectedColorPos(pos);
    };

    return (
        <div className={classes.MainContainer}>
            <div className={classes.ProductPreview}>
                <img src={props.data.colorOptions[selectedColorPos].imageUrl} alt="Product Preview" />
                {selectedFeature === 'Time' ? 
                    <div className={classes.TimeSection}>
                        <p>{`${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, '0')}`}</p>
                    </div>
                    :
                    <div className={classes.HeartBeatSection}>
                        <i className="fas fa-heartbeat"></i>
                        <p>78</p>
                    </div>
                }
            </div>

            <div className={classes.ProductData}>
                <h1 className={classes.ProductTitle}>{props.data.title}</h1>
                <p className={classes.ProductDescription}>{props.data.description}</p>
                
                <h3 className={classes.SectionHeading}>Select Color</h3>
                <div className={classes.ProductImages}>
                    {props.data.colorOptions.map((item, pos) => (
                        <div 
                            key={pos} 
                            className={[classes.ProductImage, pos === selectedColorPos ? classes.SelectedProductImage : ''].join(' ')}
                            onClick={() => onColorOptionClick(pos)}
                        >
                            <img src={item.imageUrl} alt={`${item.styleName} Watch`} />
                        </div>
                    ))}
                </div>

                <h3 className={classes.SectionHeading}>Features</h3>
                <div className={classes.FeatureItems}>
                    {props.data.featureList.map((item, pos) => (
                        <div 
                            key={pos} 
                            className={[classes.FeatureItem, selectedFeature === item ? classes.SelectedFeatureItem : ''].join(' ')}
                            onClick={() => onFeatureItemClick(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                <button className={classes.PrimaryButton}>Buy Now</button>
            </div>
        </div>
    );
};

export default ProductDetails;