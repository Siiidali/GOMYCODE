const BudgetForm = () => {
  return (
    <form className="w-3/6 flex flex-col bg-white p-6 gap-4 rounded-md drop-shadow-md ">
      <h4 className="text-2xl font-bold">Create Budget</h4>
      <div className="flex flex-col gap-2">
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
      <div className="flex flex-col gap-2">
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
      <button className="text-white bg-black w-[30%] rounded-[4px] p-2">
        Create Budget
      </button>
    </form>
  );
};

export default BudgetForm;
