# Personal expense tracker

An entry level React project that covers:

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

## App overview

At this phase, this is a Random expense tracker.

It only displays a list of random expenses added with the "Add expense" button.

- lists expenses (amount, title, date)
- adds a new expense with a button click ("Add expense") and instantly updates the list

Optional for later: conditional rendering

## Steps

### Phase 1 — Static UI & Component Structure ✅

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

### Step 4: Render Multiple ExpenseItems Manually ✔

Concepts: JSX, Using and outputting dynamic values

- Hardcode 2–3 expenses
- Practice JSX expressions without loops

---

### Phase 2 — Dynamic Rendering

#### Step 5: Store Expenses in an Object ✔

Concepts: Using and outputting dynamic values

- Represent expenses as data
- Prepare for list rendering

      ✅ Store the data in `App.jsx` (for demonstration) or in a separate file (i.e. `Data.jsx` in real projects).
      ❌ Do not store the data in `ExpenseItem` because a component should not manage data it represents.

      This matches React’s top-down data flow:
      - `App.jsx` owns the list
      - child components only consume data

<br>

If you want a new value every time → it must be a function.

```javascript

  const randomExpense = {
    getRandomItem: () => items[Math.floor(Math.random() * items.length)],
    getAmount: () => Math.floor(Math.random() * 100) + 1,
    getDate: () => Date.now(),
  }
```

<br>

#### Step 6: Render Expenses Using .map()

Concepts: outputting data list dynamically, props, JSX

- Replace repeated JSX with data-driven rendering

#### Step 7: Use Fragments Where Appropriate ✔

Concepts: using fragments

- Avoid unnecessary wrapper `<div>`
- Keep JSX clean and semantic

---

### Phase 3 — Interactivity & State

#### Step 8: Move Expenses into Component State ✔

Concepts: managing state, useState

- Allow React to re-render when data changes

❗️ Don't leave the initial state empty, make it an empty array:

      const [expenses, setExpenses]= useState([]);



#### Step 9: Add an “Add Expense” Button ✔

Concepts: reacting to events, managing state

- Attach an event handler
- Trigger state updates on user interaction

#### Step 10: Update Expense List via State ✔

Concepts: managing state, outputting data list dynamically, reacting to events

- Add a new expense immutably
- Observe automatic UI updates

---

## COLOR THEMES

![color_themes](/src/assets/tracker_color_themes.png)

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