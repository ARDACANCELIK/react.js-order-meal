import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart"; //bu ve cart provider aşağısına cart folder koydu o

function App() {
  return (
    <CartProvider>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
