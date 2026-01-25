# Expense tracker

A full-stack learning project built to practice modern frontend and backend concepts.

The frontend is developed with React, focusing on component-based UI, state management, and dynamic rendering.

The backend will be implemented using PHP with a MySQL database, providing a simple REST-style API for persisting and retrieving expense data.

QA part demonstrates manual and automated testing.

The project is developed incrementally in phases, with features added as new concepts are learned on both the frontend and backend.

## Content

1. [Phase 1](#phase-1)
2. [Phase 2](#phase-2)
3. [Phase 3](#phase-3)
4. [QA](#qa)
5. [Accessibility](#accessibility)
6. [Color themes](#color-themes)
7. [Current visual](#current-visual)

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

#### Step 4 - Empty State Handling ✔

Handle the case where no expenses exist.

Concepts: Conditional rendering, logical operators in JSX

- Show a message when `expenses.length === 0`
- Hide the list when empty
- Do not wrap everything in `if` statements
- JSX conditions should stay readable


<br>

#### Step 5 - Sort Expenses by Date ✔

Goal: Control the order of displayed items.

Concepts: Immutability, array copying, derived data vs stored state

- Refactor the date generating function (preparation for filtering later)
    - Generate and store a Date object
    - Format it only when rendering

- Sort expenses by date (newest first)
- Do not mutate state directly
- Copy before sorting
- Sorting should happen at render time

#### Step 6 - Add a Simple Filter ✔

Goal: Filter displayed expenses by price range

Concepts: Derived data, state-driven UI, mapping filtered arrays

- Add a toggle or simple condition (e.g. “Show only expensive”)
- Filtering should not permanently remove data
- Do not mutate expenses

---

1. There is no filter at the beginning.

2. When at least 2 Expense items are generated - the filter appears.

3. All the information generated in the expense items should be (temporarily) stored in `expenses` to be used in filter in that one session.
Filtering/sorting should not mutate `expenses`, but derive a view of it >>> `visibleExpenses` are derived result

4. When the filter appears, it is a drop-down that shows these options: no filter, sort by date (newest / oldest), filter by ascending price, filter by descending price.

5. When there is hard-reset, everything comes back to 1.


      expenses
        ↓
      (optional copy)
        ↓
      (optional sort)
        ↓
      displayedExpenses
        ↓
      .map() → ExpenseItem

Run during render, depend on `expenses` and `selectedFilter`

---

<br>

---

## Phase 3

 - Toggle filter button and filter select element. ✔

 - Implement tests


<br>

## QA

### Tools used

- React
- JavaScript
- Node.js
- Jest (test runner)
- React Testing Library (component testing)
- GitHub Actions (CI)

### QA focus

Manual testing
  - Test plan
  - Test cases
  - Exploratory testing notes

Automated testing (frontend)
  - Unit tests for business logic
  - Component tests for UI behavior and accessibility
  - Implemented using Jest and React Testing Library (JavaScript)

Future testing scope (planned)
  - End-to-end (E2E) testing once application flows grow
  - API testing after backend integration
  - CI automation enhancements

CI integration
  - GitHub Actions workflow to automatically run automated tests

Reporting
  - Console-based test results from Jest
  - CI logs for pass/fail visibility

---

### Run tests locally

Install independencies

        npm install

Run automated tests

        npm test

### Manual testing plan

Scope
- Functional testing
- Exploratory testing
- Accessibility checks

Browsers: Chrome, Firefox, Safari

Environment: `http://localhost:3000`

Entry Criteria
- Application runs locally
- Sample data can be generated via UI

Exit Criteria
- All critical functional tests pass
- No open high-severity defects

### Exploratory Notes (Examples)

- Random data generation may affect test reproducibility
- Long expense names may affect layout
- Rapidly adding expenses may impact UI responsiveness

Accessibility checks:
- Keyboard navigation
- Screen reader announcements
- ARIA labels and roles

### Automated Testing

Unit Tests

- Validate pure business logic (e.g. total expense calculation, sorting)
- Fast, deterministic, no UI rendering

Located under `tests/automation/unit`

Component Tests
- Simulate real user interactions
- Validate UI behavior and accessibility
- Implemented with React Testing Library
- Located under `tests/automation/components`

### Future Testing (Planned)

#### End-to-End (E2E) Testing

- To be added once application complexity increases
- Will validate complete user journeys
- May use Playwright with JavaScript

#### API Testing

- To be introduced after backend integration
- Will validate REST endpoints using mocked or real APIs

### CI Integration

GitHub Actions workflow runs automated tests on:

      push

      pull_request

Failing tests block the pipeline.
Test results visible in GitHub Actions logs.

Workflow file: `.github/workflows/tests.yml`

### Test cases (examples)

| ID    | Scenario               | Steps                              | Expected Result               |
| ----- | ---------------------- | ---------------------------------- | ----------------------------- |
| TC-01 | Add expense            | Click “+” button                   | Expense appears in list       |
| TC-02 | Empty state            | Load app without adding expenses   | Empty state message displayed |
| TC-03 | Filter visibility      | Add two expenses                   | Filter button becomes visible |
| TC-04 | Sort expenses          | Open filter and select sort option | Expenses reorder correctly    |
| TC-05 | Close filter on select | Select sorting option              | Filter closes automatically   |


<br>

## Accessibility ✔

Go through all the components and adjust for A11y standards.


## Color themes

![color_themes](/expense-tracker/src/assets/tracker_color_themes.jpg)

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

![current_visual](/expense-tracker/src/assets/current_visual.png)