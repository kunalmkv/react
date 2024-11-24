
import React, { useState } from 'react';

function OnChange() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comments, setComments] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }
  function handleCommentsChange(e) {
    setComments(e.target.value);
  }
    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }
    function handleShippingChange(e) {
        setShipping(e.target.value);
    }
  return (
    <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p> Name : {name}</p>
        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity:{quantity} </p>

        <textarea value={comments} onChange={handleCommentsChange} placeholder="type your delivey comments" />
        <p>Comments: {comments}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select Option</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
        </select>
        <p>Payment Method: {payment}</p>

        <input type="radio" value="Standard" checked={shipping === "Standard"} onChange={handleShippingChange} />
        <label>Standard</label>
        <input type="radio" value="Express" checked={shipping === "Express"} onChange={handleShippingChange} />
        <label>Express</label>
        <input type="radio" value="Overnight" checked={shipping === "Overnight"} onChange={handleShippingChange} />
        <label>Overnight</label>
        <p>Shipping Method: {shipping}</p>

    </div>
  );
}

export default OnChange;