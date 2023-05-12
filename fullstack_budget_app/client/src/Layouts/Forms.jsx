import BudgetForm from "../components/BudgetForm";
import ExpenseForm from "../components/ExpenseForm";

const Forms = () => {
  return (
    <div>
      <h1 className="text-6xl font-extrabold">
        Welcome Back, <span className="text-[#1DBBC3]">Sidali</span>
      </h1>
      <div className="w-full flex gap-6 mt-8">
        <BudgetForm />
        <ExpenseForm />
      </div>
    </div>
  );
};

export default Forms;
