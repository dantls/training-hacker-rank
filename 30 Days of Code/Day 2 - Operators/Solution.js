function solve(meal_cost, tip_percent, tax_percent) {
  const tip = meal_cost/100 * tip_percent;
  const tax = meal_cost/100 * tax_percent;
  const total_cost =  meal_cost + tax + tip;

  return total_cost.toFixed(0);
}
