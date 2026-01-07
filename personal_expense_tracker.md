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

### Phase 1 — Static UI & Component Structure

Concepts: Components, JSX

#### Step 1: Create the App Component.

- Serve as the root component
- Render the page title and container layout

#### Step 2: Create a Reusable Card Component

Concepts: Components, props, _children_ prop

- Wrap content with consistent styling
- Accept content via children

####  Step 3: Create an ExpenseItem Component

Concepts: Components, JSX, props

- Display a single expense
- Receive title, amount, and date via props

### Step 4: Render Multiple ExpenseItems Manually

Concepts: JSX, Using and outputting dynamic values

- Hardcode 2–3 expenses
- Practice JSX expressions without loops

---

### Phase 2 — Dynamic Rendering

#### Step 5: Store Expenses in an Array

Concepts: Using and outputting dynamic values

- Represent expenses as data
- Prepare for list rendering

#### Step 6: Render Expenses Using .map()

Concepts: outputting data list dynamically, props, JSX

- Replace repeated JSX with data-driven rendering
- Introduce key concept naturally

#### Step 7: Use Fragments Where Appropriate

Concepts: using fragments

- Avoid unnecessary wrapper `<div>`
- Keep JSX clean and semantic

---

### Phase 3 — Interactivity & State

#### Step 8: Move Expenses into Component State

Concepts: managing state, useState

- Allow React to re-render when data changes

#### Step 9: Add an “Add Expense” Button

Concepts: reacting to events, managing state

- Attach an event handler
- Trigger state updates on user interaction

#### Step 10: Update Expense List via State

Concepts: managing state, outputting data list dynamically, reacting to events

- Add a new expense immutably
- Observe automatic UI updates

---

## COLOR THEMES

    #8C8C8C - dark gray
    #BFBFBD - light gray
    #F2F2F2 - dirty white
    #404040 - dark brown
    #736A63 - light brown


MUTED

    #F2F1F0 - dirty white
    #BFBFBD - dirty light gray
    #A6A39F - light gray brown
    #8C837B - light brown
    #595551 - dark brown

---

Current visual:
![current_visual](/assets/current_visual.png)