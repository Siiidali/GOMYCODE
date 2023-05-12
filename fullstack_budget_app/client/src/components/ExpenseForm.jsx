const ExpenseForm = () => {
  return (
    <form className="w-3/6 flex flex-col bg-white p-6 gap-4 rounded-md drop-shadow-md">
      <h4 className="text-2xl font-bold">Create New Expense</h4>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 w-1/2">
          <label className="text-lg font-semibold" htmlFor="newBudget">
            Budget Name
          </label>
          <input
            className="p-2 border-2 border-gray-400 rounded-[4px]"
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <label className="text-lg font-semibold" htmlFor="newBudgetAmount">
            Amount
          </label>
          <input
            className="p-2 border-2 border-gray-400 rounded-[4px]"
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $350"
            required
            inputMode="decimal"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="newExpenseBudget">Budget Category</label>
        <select
          className="p-2 bg-transparent border-[2px] border-gray-400 rounded-[5px]"
          name="newExpenseBudget"
          id="newExpenseBudget"
          required
        >
          <option>sidali</option>
          <option>sidali</option>
          <option>sidali</option>
        </select>
      </div>
      <button className="text-white bg-black w-[30%] rounded-[4px] p-2">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
