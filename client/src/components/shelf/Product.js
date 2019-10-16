import React from 'react';
import PropTypes from "prop-types";

import Thumb from '../Thumb';

const MAX_CHAR = 70;
var originalPrice = 'About 100 USD ';
const Product = (props) => {
  const product = props.product;

  product.quantity = 1;

  if (product.price) {
    originalPrice = product.price;
    var price = product.price.replace(/\D/g, "");
    product.price = price;
  }
  else {
    /** giving some default price as we didn't price for few items */
    product.price = ("About 100 EUR").replace(/\D/g,'');;
  }

  return (
    <div className="shelf-item" key={product.DeviceName}>
      <p className="shelf-item__title">{product.DeviceName}</p>
      {
        (product.status).includes("Available") 
        ? <div className="shelf-stopper">Available</div> 
        : <div className="shelf-stopper">Coming soon</div> 
      }

      {
        product.Brand === "Apple"
          ? <Thumb
            classes="shelf-item__thumb"
            src='https://via.placeholder.com/375x667?text=Apple'
            alt={product.DeviceName}
          />
          : (
            product.Brand === "Samsung"
              ? <Thumb
                classes="shelf-item__thumb"
                src='https://via.placeholder.com/375x667?text=Samsung'
                alt={product.DeviceName}
              />
              : (
                (
                  product.Brand === "Huawei"
                    ? <Thumb
                      classes="shelf-item__thumb"
                      src='https://via.placeholder.com/375x667?text=Huawei'
                      alt={product.DeviceName}
                    />
                    : (
                      product.Brand === "Nokia"
                        ? <Thumb
                          classes="shelf-item__thumb"
                          src='https://via.placeholder.com/375x667?text=Nokia'
                          alt={product.DeviceName}
                        />
                        : (
                          (
                            product.Brand === "Xiaomi"
                              ? <Thumb
                                classes="shelf-item__thumb"
                                src='https://via.placeholder.com/375x667?text=Xiaomi'
                                alt={product.DeviceName}
                              />
                              : <Thumb
                                classes="shelf-item__thumb"
                                src='https://via.placeholder.com/375x667?text=Mobile'
                                alt={product.DeviceName}
                              />
                          )
                        )
                    )
                )
              )
          )

      }


      <div className="shelf-item__price">
        {product.price &&
          <div className="shelf-item__details">{originalPrice} </div>
        }
      </div>
      <div className="shelf-item__title">
        {product._2g_bands &&
          <div className="shelf-item__details"><strong>2G:</strong> {product._2g_bands}</div>
        }
        {product._3g_bands &&
          <div className="shelf-item__details"><strong>3G:</strong> {product._3g_bands}</div>
        }
        {product._4g_bands && product._4g_bands.length <= MAX_CHAR &&
          <div className="shelf-item__details"><strong>4G:</strong> {product._4g_bands}</div>
        }
        {product.technology &&
          <div className="shelf-item__details"><strong>Tech:</strong> {product.technology}</div>
        }
      </div>
      <div onClick={() => props.addProduct(product)} className="shelf-item__buy-btn">Book</div>
    </div>
  );
}


Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default Product;