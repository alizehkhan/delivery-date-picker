[![Netlify Status](https://api.netlify.com/api/v1/badges/d0a42651-00a9-467a-b1fa-edeb92cdc770/deploy-status)](https://app.netlify.com/sites/deliverydatepicker/deploys)

# Delivery Date Picker

This project implements a delivery date picker with the following constraints:

- A pre-selected date (which is the earliest available delivery) is shown on the prompt.
- When you click on the prompt, a modal opens that allows a user to select a new date for delivery.
- The dates listed show the current month.
- Tuesdays, Fridays and Saturdays are 'un-deliverable' days and therefore not selectable by the user or possible to be set as an initial delivery date.

## Built using

- [**date-fns**](https://date-fns.org/) - date utility library
- [**react-modal**](https://reactcommunity.org/react-modal/) - accessible modal: traps focus within modal when open, focus returns to the modal's trigger button when closed, can close modal via esc key, modal is appended to the end of `document.body`.

## How to run this project

1. Switch to the node version stated in .nvmrc with `nvm use`
2. Install all dependancies with `yarn`
3. Start the server with `yarn start`

You can view the website on http://localhost:3000
