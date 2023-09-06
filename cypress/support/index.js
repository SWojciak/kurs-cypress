
import './commands'
import './commands'
import'./addresses_commands'
import './home_commands'
import './loginPage_commands'
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("uncaught:exception", (err, runnable) => { console.log(err);  return false; });
// Cypress.on("uncaught:exception", (err, runnable) => {   if (err.message.includes("ResizeObserver")) {     return false;   } });
// Cypress.on("uncaught:exception", (err, runnable) => {   if (err.message.includes("is not defined")) {     return false;   } });
// Cypress.on("uncaught:exception", (err, runnable) => {   if (err.message.includes("is not a function")) {     return false;   } });
// Cypress.on("uncaught:exception", (err, runnable) => {   if (err.message.includes("invalid version specified")) {     return false;   } });
// Cypress.on("uncaught:exception", (err, runnable) => {   if (err.message.includes("Cannot read properties of undefined")) {     return false;   } });