/*

	Assumptions:  
  	We has a site with a simple form where a user can enter data required to create a Supplier Invoice.
    We have a REST API which allows us POST supplier invoice data to a backend. 
    
  Story:
  	As an Activity Tracker, I need to enter the details of a Supplier Invoice so that a Supplier can be paid for services rendered. 
    
  Your Goal: 
  	Get the data for a Supplier invoice from the Front End and submit it to the backend, asynchronously:
    	Send the invoice
      Wait for a response
      Process the response - a success object, or and error 
    
    	Bonus: What does the user see when all this happens? How do they know it's done? 

*/

const supplierInvoicePostingEndpoint = "https://thisIsATestAPICall";
const regularPost = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
  	body: 
}
// Mock error reporting functions
const reportInvoicePostingError = (error) => {};
const reportInternalDBError = (error) => {};

// Mock load DB function
// Checking to see if there is supplier invoice
const loadInvoiceFromDB = () => new Promise((resolve,reject) => setTimeout(resolve(new SupplierInvoice()), 2000));

// User interaction assumed functions
const showProgressBar = () => { /*  Show the indeterminate progress bar to users  */ };
const hideProgressBar = () => { /*  Hide the progress bar  */ };
const showPostingSuccess = () => { /*  Show posting success to users  */ }


/*
    Main Supplier Invoice class
*/
class SupplierInvoice {

    /*

        Implement Me!

    */

}

/* 
    Main Form JS
*/
function onSendInvoiceForPayment() {

// Implement this

}