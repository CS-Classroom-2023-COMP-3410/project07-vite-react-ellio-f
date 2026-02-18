import Cart from '../components/Cart';

function CartPage({cart, setCart}) {

    return (
        <div>
            <h1>Cart Page</h1>

            {/* Cart sidebar */}
            <Cart cart={cart} setCart={setCart} />
        </div>
    );
}

export default CartPage;