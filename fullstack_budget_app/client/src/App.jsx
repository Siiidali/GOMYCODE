import { Routes, Route } from "react-router-dom";
import BudgetPage from "./pages/BudgetPage";
import ExpensesPage from "./pages/ExpensesPage";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BudgetPage />} />
        <Route path="/:id" element={<ExpensesPage />} />
      </Routes>
    </>
  );
}

export default App;
