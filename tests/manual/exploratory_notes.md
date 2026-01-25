# Exploratory Testing Notes

Example:

Date: /
Session duration: /

## Observations
- Randomized values make test reproduction difficult
- Very large prices visually dominate UI
- Rapid clicking can add many items quickly
- Filter closes correctly after selection

## Accessibility
- Buttons have accessible names
- List uses semantic HTML
- Screen reader announces total changes

## Risks Identified
- Random data complicates automated assertions
- No upper limit on expense count
- No error handling for invalid data (future scope)

## Ideas for Additional Tests
- Mock random generator for deterministic tests
- Add snapshot tests for list rendering
- Keyboard-only interaction tests
