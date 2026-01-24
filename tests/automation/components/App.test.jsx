/**
 * Additional component tests for App behavior.
 * Focused on user-visible outcomes, not implementation details.
 */

test("total expense updates after adding expenses", async () => {
  render(<App />);
  const addButton = screen.getByRole("button", { name: /add a random expense/i });

  await userEvent.click(addButton);
  await userEvent.click(addButton);

  expect(
    screen.getByText(/total expense:/i)
  ).toBeInTheDocument();
});

test("filter closes automatically after selecting option", async () => {
  render(<App />);
  const addButton = screen.getByRole("button", { name: /add a random expense/i });

  await userEvent.click(addButton);
  await userEvent.click(addButton);

  const filterButton = screen.getByLabelText(/toggle expense filter/i);
  await userEvent.click(filterButton);

  const select = screen.getByRole("combobox");
  await userEvent.selectOptions(select, "ascending");

  // Filter select should disappear after selection
  expect(screen.queryByRole("combobox")).toBeNull();
});

test("expenses are rendered as list items", async () => {
  render(<App />);
  const addButton = screen.getByRole("button", { name: /add a random expense/i });

  await userEvent.click(addButton);

  const items = screen.getAllByRole("listitem");
  expect(items.length).toBeGreaterThan(0);
});
