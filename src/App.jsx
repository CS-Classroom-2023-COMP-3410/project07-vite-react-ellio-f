import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import Cart from './components/Cart';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([]);

    // Simple navigation state management
    const handleNavigate = (pageId) => {
        setCurrentPage(pageId);

    // This could be expanded to handle page transition animations
    // or to update browser history for back/forward navigation
    };

    // Render the appropriate page based on state
    const renderPage = () => {
        switch (currentPage) {
            case 'products':
                return <ProductsPage cart={cart} setCart={setCart} />;
            case 'profile':
                return <ProfilePage cart={cart} setCart={setCart} />;
            case 'cart' :
                return <CartPage cart={cart} setCart={setCart}/>;
            case 'home':
            default:
                return <HomePage onNavigate={handleNavigate} cart={cart} setCart={setCart} />;
        }
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <Header
                currentPage={currentPage}
                onNavigate={handleNavigate}
            />

            <main>
                {renderPage()}
            </main>

            <footer style={{
                marginTop: '50px',
                padding: '20px',
                borderTop: '1px solid #eee',
                textAlign: 'center',
                color: '#666'
            }}>
                <p>React Multi-Page Application</p>
            </footer>
        </div>
    );
}

export default App;