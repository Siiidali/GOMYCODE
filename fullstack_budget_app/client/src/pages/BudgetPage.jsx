import AddNewExpense from "../components/ExpenseForm";
import CreateBudget from "../components/BudgetForm";
import ExistingBudgets from "../Layouts/ExistingBudgets";
import RecentExpenses from "../Layouts/RecentExpenses";
import Forms from "../Layouts/Forms";
const BudgetPage = () => {
  return (
    <div>
      <Forms />
      <ExistingBudgets />
      <RecentExpenses />
    </div>
  );
};

export default BudgetPage;
