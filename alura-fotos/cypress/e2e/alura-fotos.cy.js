describe('Login e registro do alura pic', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com/#/home')

    })

     it('Verifica mensagem validacao', () => {
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
      cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
      cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('Verifica mensagem de email invalido', () => {
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get('input[formcontrolname="email"]').type('Andreza');
      cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('Verifica mensagem de nome completo', () => {
      cy.contains('a', 'Register now').click();
      cy.get('input[formcontrolname="fullName"]').type('t');
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })
    it('Verifica mensagem de user name', () => {
      cy.contains('a', 'Register now').click();
      cy.get('input[formcontrolname="userName"]').type('And');
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage','Must be lower case').should('be.visible');
    })

    it('Verifica mensagem de senha', () => {
      cy.contains('a', 'Register now').click();
      cy.get('input[formcontrolname="password"]').type('And');
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
      
    })
})