

describe('Alura buscar cursos', () => {

    beforeEach( () => {
        cy.visit('https://www.alura.com.br')
        cy.viewport(1440, 900)

    })

    it('Buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Java')
        cy.get('.header-barraBusca-form-submit').click()
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Java e Orientação a Objetos')
    })

})

   