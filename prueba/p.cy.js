const getAngular = () => cy.window().its('angular')

const getElementScope = (selector) => {
  return cy.get(selector).then(($el) => getAngular().then((ng) => ng.element($el).scope()))
}

const getElementInjector = (selector) => {
  return cy
  .get(selector)
  .then(($el) => getAngular().then((ng) => ng.element($el).injector()))
}

const addTodo = (text) => cy.get('.new-todo').type(text).type('{enter}')



describe('Angular TodoMVC', () => {
  beforeEach(() => {
    cy.visit('/')
  })

})