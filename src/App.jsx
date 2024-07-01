import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';

import { CartContextProvider } from './components/store/CartContext.jsx';


function App() {
  return (
    <CartContextProvider>
      <Header/>
      <Menu/>
    </CartContextProvider>
  );
}

export default App;
