// import React from 'react';
import Cardbody from './Cardbody';

const ConditionRendering = ({setCartCount, products}) => {
    return (
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 justify-content-center">
                {products.map((item,index) => {
                    return (
                        <>
                            <Cardbody item= {item} index={index} setCartCount={setCartCount}/>
                           
                        </>
                    )
                })}
                </div>
                </div>
    );
};

export default ConditionRendering;