import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/selectors/cart.selectors';
import { toggleCartHidden } from '../../redux/actions/cart.actions';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length > 0 ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleCartHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

const mapDispatchToProp = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProp)(CartDropdown)
);
