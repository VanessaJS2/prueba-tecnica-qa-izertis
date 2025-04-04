// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('create_user',(create,username)=>{ 

    return cy.request({
        method: 'POST',
        url:Cypress.env('api') + create, 
        headers:{
            'Content-Type':'application/json'
        },
        body:{
            "id": 1010,
            "username": username,
            "firstName": "Vanessa",
            "lastName": "Jaramillo",
            "email": "vanessa@gmail.com",
            "password": "12345",
            "phone": "123456789",
            "userStatus": 1
          },
          failOnStatusCode: false
    })    
})

Cypress.Commands.add('validate_user',(find,username)=>{ 

    return cy.request({
        method: 'GET',
        url:Cypress.env('api') + find + '/' + username, 
        headers:{
            'Content-Type':'application/json'
        },
        
          failOnStatusCode: false
    })    
})

Cypress.Commands.add('find_by_status',(findStatus,sold)=>{ 

    return cy.request({
        method: 'GET',
        url:Cypress.env('api') + findStatus, 
        headers:{
            'Content-Type':'application/json'
        },
        qs:{ 
            status:sold
        },
          failOnStatusCode: false
    })    
})