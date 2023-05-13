import { Routes, Route } from "react-router-dom";
import BudgetPage from "./pages/BudgetPage";
import ExpensesPage from "./pages/ExpensesPage";
import NavBar from "./components/NavBar";
import Test from "./components/Test";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BudgetPage />} />
        <Route path="/:id" element={<ExpensesPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
