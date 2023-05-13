import { useMutation, useQueryClient } from "react-query";
import { createBudget } from "../api/budget";
import { useState } from "react";

const BudgetForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const queryClient = useQueryClient();
  const addNewBudget = useMutation(createBudget, {
    onSuccess: queryClient.invalidateQueries(["budgets"]),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addNewBudget.mutate({ name: name, amount: amount });
      }}
      className="flex flex-col w-3/6 gap-4 p-6 bg-white rounded-md drop-shadow-md "
    >
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
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
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <button className="text-white bg-black w-[30%] rounded-[4px] p-2">
        Create Budget
      </button>
    </form>
  );
};

export default BudgetForm;
