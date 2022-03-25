context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url().should('eq', 'http://localhost:3333/')

    cy.contains('Opinionated Vite Starter Template').should('exist')

    cy.get('.button').click({ multiple: true }).should('exist')
  })

  it('images', () => {
    cy.visit('/images')
    cy.url().should('eq', 'http://localhost:3333/images')

    cy.get('img').should('exist')
  })

  it('axios-request', () => {
    cy.visit('/axios-request')
    cy.url().should('eq', 'http://localhost:3333/axios-request')

    cy.request(`${Cypress.env('apiUrl')}/users`).should((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.not.be.null
      expect(res.body).to.be.a('array')
    })

    cy.get('table').should('exist')
  })
})
