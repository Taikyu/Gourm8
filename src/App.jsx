import Cart from './components/Cart.jsx';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';

import { CartContextProvider } from './components/store/CartContext.jsx';
import { UserStoryProvider } from './components/store/UserStoryContext.jsx';


function App() {
  return (
    <UserStoryProvider>
      <CartContextProvider>
        <Header />
        <Menu />
        <Cart />
      </CartContextProvider>
    </UserStoryProvider>
  );
}

export default App;
