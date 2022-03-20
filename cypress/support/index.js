
import './commands'
import './commands'
import'./addresses_commands'
import './home_commands'
import './loginPage_commands'
// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on("uncaught:exception", (err, runnable) => {   if (err.message.includes("ResizeObserver")) {     return false;   } });
Cypress.on("uncaught:exception", (err, runnable) => {   if (err.message.includes("Popper is not defined")) {     return false;   } });