import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";

export default function AllExpenses() {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expensesPeriod="Total"
      expenses={expenseCtx.expenses}
      fallBackText="No registered expenses found"
    />
  );
}
