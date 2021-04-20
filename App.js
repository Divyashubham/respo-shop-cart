import React, { useState } from "react";

import "./style.scss";

export const App = () => {
  const item1Price = 12.99;
  const item2Price = 45.99;
  const shippingPrice = 15;
  const [item1Count, setItem1Count] = useState(2);
  const [item2Count, setItem2Count] = useState(1);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <div class="shopping-cart">
        <div class="column-labels">
          <label class="product-image">Image</label>
          <label class="product-details">Product</label>
          <label class="product-price">Price</label>
          <label class="product-quantity">Quantity</label>
          <label class="product-removal">Remove</label>
          <label class="product-line-price">Total</label>
        </div>
        {item1Count ? (
          <div class="product">
            <div class="product-image">
              <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg" />
            </div>
            <div class="product-details">
              <div class="product-title">Dingo Dog Bones</div>
              <p class="product-description">
                The best dog bones of all time. Holy crap. Your dog will be
                begging for these things! I got curious once and ate one myself.
                I'm a fan.
              </p>
            </div>
            <div class="product-price">{item1Price}</div>
            <div class="product-quantity">
              <input
                type="number"
                value={item1Count}
                onChange={event => {
                  setItem1Count(event.target.value);
                }}
                min="1"
              />
            </div>
            <div class="product-removal">
              <button
                class="remove-product"
                onClick={() => {
                  setItem1Count(0);
                }}
              >
                Remove
              </button>
            </div>
            <div class="product-line-price">
              {(item1Price * item1Count).toFixed(2)}
            </div>
          </div>
        ) : (
          ""
        )}

        {item2Count ? (
          <div class="product">
            <div class="product-image">
              <img src="https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png" />
            </div>
            <div class="product-details">
              <div class="product-title">
                Nutro™ Adult Lamb and Rice Dog Food
              </div>
              <p class="product-description">
                Who doesn't like lamb and rice? We've all hit the halal cart at
                3am while quasi-blackout after a night of binge drinking in
                Manhattan. Now it's your dog's turn!
              </p>
            </div>
            <div class="product-price">{item2Price}</div>
            <div class="product-quantity">
              <input
                type="number"
                value={item2Count}
                onChange={event => {
                  setItem2Count(event.target.value);
                }}
                min="1"
              />
            </div>
            <div class="product-removal">
              <button
                class="remove-product"
                onClick={() => {
                  setItem2Count(0);
                }}
              >
                Remove
              </button>
            </div>
            <div class="product-line-price">
              {(item2Count * item2Price).toFixed(2)}
            </div>
          </div>
        ) : (
          ""
        )}

        <div class="totals">
          <div class="totals-item">
            <label>Subtotal</label>
            <div class="totals-value" id="cart-subtotal">
              {(item1Count * item1Price + item2Count * item2Price).toFixed(2)}
            </div>
          </div>
          <div class="totals-item">
            <label>Tax (5%)</label>
            <div class="totals-value" id="cart-tax">
              {(
                0.05 *
                (item1Count * item1Price + item2Count * item2Price)
              ).toFixed(2)}
            </div>
          </div>
          <div class="totals-item">
            <label>Shipping</label>
            <div class="totals-value" id="cart-shipping">
              {item1Count || item2Count
                ? shippingPrice.toFixed(2)
                : (0).toFixed(2)}
            </div>
          </div>
          <div class="totals-item totals-item-total">
            <label>Grand Total</label>
            <div class="totals-value" id="cart-total">
              {(
                1.05 * (item1Count * item1Price + item2Count * item2Price) +
                (item1Count || item2Count ? shippingPrice : 0)
              ).toFixed(2)}
            </div>
          </div>
        </div>

        <button class="checkout">Checkout</button>
      </div>
    </div>
  );
};
