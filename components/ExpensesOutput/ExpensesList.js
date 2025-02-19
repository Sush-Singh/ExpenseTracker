import React from "react";
import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem expense={itemData.item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
