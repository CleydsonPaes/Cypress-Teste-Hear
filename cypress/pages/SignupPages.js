

class SignupPage
{
    //Primeira pagina, endereçamento
    homePerfil()
    {
        cy.viewport(1920,1080);
        cy.visit('https://hear-dashboard-front.herokuapp.com/');
        cy.get('.mb-5').should('have.text', 'Login de acesso');

        //-------------------------------------------------------
        //Cadastro
        var cadastro = 
        {
            email: 'cleydsonpaes2@hotmail.com',
            senha: '"Abcdef123"'
        }


        cy.get('input[id="email"]').type(cadastro.email);
        cy.get('input[id="senha"]').type(cadastro.senha);

        //-------------------------------------------------------
        //Entra na Pagina home
        cy.get('.form-group > .btn').click();
        cy.get('#sidebarCollapse > .fas');

        //-------------------------------------------------------
        //Abre aba de opções para selecionar o "alterar perfil"
        cy.get('.btn-group > .p-element').click();
        cy.get(':nth-child(1) > .dropdown-item').click();
        cy.get('h5').should('have.text', ' Perfil');


    }

    //Preencher o formulario
    fillForm(cadastro)
    {
        cy.get(':nth-child(1) > .form-control').clear();
        cy.get(':nth-child(1) > .form-control').type(cadastro.nome);

        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type(cadastro.sobrenome);

        cy.get(':nth-child(3) > .form-control').clear();
        cy.get(':nth-child(3) > .form-control').type(cadastro.email);
    }

    fillFormNameClear()
    {
        cy.get(':nth-child(1) > .form-control').clear();
    }

    fillFormSurnameClear()
    {
        cy.get(':nth-child(2) > .form-control').clear();
    }

    fillFormEmailClear()
    {
        cy.get(':nth-child(3) > .form-control').clear();
    }

    submit()
    {
        //Validando formularios com click
        cy.get('.form-group > .d-flex > .btn-danger').click();
    }

    //Modal, função pos-clique
    modalContenteShouldBe(expectedMessage)
    {
        //Função que verifica o texto do modal
        //Para fluxos alternativo, basta ver a mensagem negativa
        cy.get('.p-dialog-content > .ng-tns-c35-2').should('have.text', expectedMessage);
    }

    //Texto de negativa para campo nome vazio
    alertMessageName()
    {
        cy.get('#mensagem').should('have.text', 'Nome obrigatório');
    }

    //Texto de negativa para campo Sobrenome vazio
    alertMessageShouldSurname()
    {
        cy.get('#mensagem').should('have.text', 'Sobrenome obrigatório');
    }

    //Texto de negativa para campo email vazio
    alertMessageShouldEmail()
    {
        cy.get('#mensagem').should('have.text', 'E-mail inválido');
    }

}

export default SignupPage;