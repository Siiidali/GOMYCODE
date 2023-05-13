import { useQuery, useQueryClient } from "react-query";
import { getAllBudgets } from "../api/budget";

const ExistingBudgets = () => {
  const queryClient = useQueryClient();
  const {
    data: budgets,
    isLoading,
    isError,
    error,
  } = useQuery(["budgets"], getAllBudgets, {
    initialData: queryClient.getQueryData(["budgets"]),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
  if (isLoading) return <p>is loading ...</p>;
  if (isError) return <p>{error.response.data.message}</p>;
  return (
    <div>
      sidali
      {budgets.budgets && budgets.budgets.map((budget) => <p>{budget.name}</p>)}
    </div>
  );
};

export default ExistingBudgets;
