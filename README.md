# Expense tracker

A full-stack learning project built to practice modern frontend and backend concepts.

The frontend is developed with React, focusing on component-based UI, state management, and dynamic rendering.

The backend will be implemented using PHP with a MySQL database, providing a simple REST-style API for persisting and retrieving expense data.

The project is developed incrementally in phases, with features added as new concepts are learned on both the frontend and backend.

## Content

1. [Phase 1](#phase-1)
2. [Phase 2](#phase-2)
3. [Color themes](#color-themes)
4. [Current visual](#current-visual)

<br>

## Phase 1

React concepts covered in this phase:

| Concept         | How it is used                              |
| --------------- | ------------------------------------------- |
| Components      | `App`, `ExpenseList`, `ExpenseItem`, `Card` |
| JSX             | Layout, expressions, conditional rendering  |
| Dynamic values  | Expense data displayed via JSX              |
| Props           | Passing expense data to child components    |
| `children` prop | Wrapper component (`Card`)                  |
| Events          | Button click to add expense                 |
| `useState`      | Managing the list of expenses               |
| Lists & keys    | Rendering expenses with `.map()`            |
| Fragments       | Avoid unnecessary wrapper elements          |

---
<br>

In Phase 1, the app functions as a random expense generator.

Expenses are generated programmatically and added via an “Add expense” button.


- lists expenses (amount, title, date)
- adds a new expense with a button click ("Add expense") and instantly updates the list

Optional for later: conditional rendering

### Static UI & Component Structure ✔

Concepts: Components, JSX

#### Step 1: Create the App Component. ✔

- Serve as the root component
- Render the page title and container layout

#### Step 2: Create a Reusable Card Component ✔

Concepts: Components, props, _children_ prop

- Wrap content with consistent styling
- Accept content via children

####  Step 3: Create an ExpenseItem Component ✔

Concepts: Components, JSX, props

- Display a single expense
- Receive title, amount, and date via props

#### Step 4: Render Multiple ExpenseItems Manually ✔

Concepts: JSX, Using and outputting dynamic values

- Hardcode 2–3 expenses
- Practice JSX expressions without loops

---

### Dynamic Rendering ✔

#### Step 5: Store Expenses as data object ✔

Concepts: Using and outputting dynamic values

- Represent expenses as data
- Prepare for list rendering

✅ **Learned:**

  🟩 Store the data in `App.jsx` (for demonstration) or in a separate file (i.e. `Data.jsx` in real projects).

  ❌ Do not store the data in `ExpenseItem` because a component should not manage data it represents.

  This matches React’s top-down data flow:
  - `App.jsx` owns the list
  - child components only consume data

<br>

✅ **Learned:**

If you want a new value every time → it must be a function.

```javascript

  const randomExpense = {
    getRandomItem: () => items[Math.floor(Math.random() * items.length)],
    getAmount: () => Math.floor(Math.random() * 100) + 1,
    getDate: () => new Date(),
  }
```

<br>

#### Step 6: Render expenses using .map()

Concepts: outputting data list dynamically, props, JSX

- Replace repeated JSX with data-driven rendering

#### Step 7: Use fragments where appropriate ✔

Concepts: using fragments

- Avoid unnecessary wrapper `<div>`
- Keep JSX clean and semantic

---

### Interactivity & State ✔

#### Step 8: Move Expenses into Component State ✔

Concepts: managing state, useState

- Allow React to re-render when data changes

<br>

✅ **Learned:**

❗️ Don't leave the initial state empty, make it an empty array:

      const [expenses, setExpenses]= useState([]);


🟩 Create new date and extract only the date as a string:

    new Date().toLocaleDateString();

<br>

#### Step 9: Add an “Add Expense” Button ✔

Concepts: reacting to events, managing state

- Attach an event handler
- Trigger state updates on user interaction

#### Step 10: Update Expense List via State ✔

Concepts: managing state, outputting data list dynamically, reacting to events

- Add a new expense immutably
- Observe automatic UI updates

---
<br>


## Phase 2

The goal of this phase is to cover:

- Dynamic data creation
- Derived values (total, sorted list)
- Clean component boundaries
- Predictable state flow

The app will also be architecturally ready for `useEffect`, `fetch` and backend data replacement.

<br>

#### Step 1 — Add a Total Expenses Summary ✔

Concepts: Using and outputting dynamic values, array methods (`reduce()`), React re-rendering on state change

Display the sum of all expense prices.

- Compute the total amount from the expenses array
- Display it above the list

✅ **Learned:**

- Do not store the total in state >> derive it from `expenses` state snapshot during render

```javascript
 // sum = accumulator, expense = currentExpense, 0 = initial value
  const totalExpense = expenses.reduce((sum, expense) => {
    return sum + expense.price
  }, 0);
```
<br>

#### Step 2 - Format the Date in ExpenseItem ✔

Make dates human-readable.

Concepts: Separation of concerns

- Convert the Date object into a readable format
- Keep formatting logic inside ExpenseItem
- Use `toLocaleDateString`
- Do not modify the stored data

#### Step 3 - Conditional Styling Based on Price ✔

Goal: Visually distinguish expensive items.

Concepts: Conditional rendering, dynamic `className`

- If `price > X` (e.g. 50), style the item differently
- Use a ternary operator
- Keep logic small and readable

#### Step 4 - Empty State Handling

Handle the case where no expenses exist.

Concepts: Conditional rendering, logical operators in JSX

- Show a message when `expenses.length === 0`
- Hide the list when empty
- Do not wrap everything in if statements
- JSX conditions should stay readable

#### Step 5 - Sort Expenses by Date

Goal: Control the order of displayed items.

Concepts: Immutability, array copying, derived data vs stored state

- Sort expenses by date (newest first)
- Do not mutate state directly
- Copy before sorting
- Sorting should happen at render time

#### Step 6 - Add a Simple Filter

Goal: Filter displayed expenses by price range

Concepts: Derived data, state-driven UI, mapping filtered arrays

- Add a toggle or simple condition (e.g. “Show only expensive”)
- Filtering should not permanently remove data
- Do not mutate expenses


## Color themes

![color_themes](/expense-tracker/src/assets/tracker_color_themes.png)

    #8C8C8C
    #BFBFBD
    #F2F2F2
    #404040
    #736A63


MUTED

    #F2F1F0
    #BFBFBD
    #A6A39F
    #8C837B
    #595551


## Current visual:

![current_visual](/src/assets/current_visual.png)