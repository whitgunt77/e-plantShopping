import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  console.log("Cart items:", cart)
  const dispatch = useDispatch();

  // Group items by category
  const groupedItems = cart.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
    return groups;
  }, {});

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
        const price = parseFloat(item.cost.substring(1));
        return total + (price * item.quantity);
    },0).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };



  const handleIncrement = (item) => {
    dispatch(updateQuantity({
        name: item.name,
        quantity: item.quantity + 1
    }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
        dispatch(updateQuantity({
            name: item.name,
            quantity: item.quantity - 1
        }));
    } else {
        dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  return (
    <div className='cart-container'>
        <h2 className='cart-total'>Total Cart Amount: ${calculateTotalAmount()}</h2>

        {Object.entries(groupedItems).map(([category, items]) => (
            <div className='category-section' key={category}>
                <h3 className='category-heading'>{category}</h3>
                <div className='category-items'>
                    {items.map(item => (
                        <div className='cart-item' key={item.name}>
                            <img className='cart-item-image' src={item.image} alt={item.name} />
                            <div className='cart-item-details'>
                                <div className='cart-item-name'>{item.name}</div>
                                <div className='cart-item-cost'>{item.cost}</div>
                                <div className='cart-item-quantity'>
                                    <button
                                        className='quantity-btn decrement'
                                        onClick={() => handleDecrement(item)}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className='quantity-btn increment'
                                        onClick={() => handleIncrement(item)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className='cart-item-total'>
                                    Total: ${(parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2)}
                                </div>
                                <button
                                    className='remove-btn'
                                    onClick={() => handleRemove(item)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}

        <div className='cart-actions'>
            <button className='continue-shopping' onClick={onContinueShopping}>
                Continue Shopping
            </button>
            <button className='checkout-btn' onClick={() => alert("Checkout functionality coming soon!")}>Checkout</button>
        </div>
    </div>
  );
};

export default CartItem;