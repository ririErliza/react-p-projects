const CartItem = () => {
  return (
    <article className="cart-item">
      <div>
        <h4>title</h4>
        <h4 className="item-price">price</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">amount</button>
      </div>
    </article>
  );
};
export default CartItem;
