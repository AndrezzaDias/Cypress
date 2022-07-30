
describe('Cadastro', ()=>{
    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')


        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Andreza',
            cpf: '00088877766',
            email: 'andreza@hotmail.com',
            whatsapp:'123668989',
            endereco: {
                cep:'41219477',
                rua:'Rua Terra Nova',
                numero:'38',
                complemento: 'casa',
                bairro: 'ME',
                cidade_uf:'ssa'
            }
        }
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)

        cy.get('input[name="address-details"]').type(entregador.endereco.numero)


    })     
})