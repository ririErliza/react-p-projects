const CartContainer = () => {
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>cart item</div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>total</h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};
export default CartContainer;
