

class senhaSignupPage
{
    //Primeira pagina, endereçamento
    homeSenha1()
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
        cy.get(':nth-child(2) > .dropdown-item').click();
        cy.get('h5').should('have.text', ' Alterar senha');
    }

    //Recupera Senha
    homeSenha2()
    {
        cy.viewport(1920,1080);
        cy.visit('https://hear-dashboard-front.herokuapp.com/');
        cy.get('.mb-5').should('have.text', 'Login de acesso');

        //-------------------------------------------------------
        //Cadastro
        var cadastro = 
        {
            email: 'cleydsonpaes2@hotmail.com',
            senha: '"321edcbA"',
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
        cy.get(':nth-child(2) > .dropdown-item').click();
        cy.get('h5').should('have.text', ' Alterar senha');
    }

    //Preencher o formulario
    fillFormSenha(senha)
    {
        cy.get(':nth-child(1) > .form-control').clear();
        cy.get(':nth-child(1) > .form-control').type(senha.senhaAtual);

        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type(senha.novaSenha);

        cy.get(':nth-child(3) > .form-control').clear();
        cy.get(':nth-child(3) > .form-control').type(senha.confirmarNovaSenha);
    }


    SenhaAtualVazia(senha)
    {
        //cy.get(':nth-child(1) > .form-control').clear();
        //cy.get(':nth-child(1) > .form-control').type(senha.senhaAtual);

        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type(senha.novaSenha);

        cy.get(':nth-child(3) > .form-control').clear();
        cy.get(':nth-child(3) > .form-control').type(senha.confirmarNovaSenha);
    }

    SenhaAtualErrada(senha)
    {
        cy.get(':nth-child(1) > .form-control').clear();
        cy.get(':nth-child(1) > .form-control').type(senha.senhaAtual);

        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(3) > .form-control').type(senha.novaSenha);

        cy.get(':nth-child(4) > .form-control').clear();
        cy.get(':nth-child(4) > .form-control').type(senha.confirmarNovaSenha);
    }

    SenhaNovaVazia(senha)
    {
        cy.get(':nth-child(1) > .form-control').clear();
        cy.get(':nth-child(1) > .form-control').type(senha.senhaAtual);

        //cy.get(':nth-child(2) > .form-control').clear();
        //cy.get(':nth-child(3) > .form-control').type(senha.novaSenha);

        cy.get(':nth-child(4) > .form-control').clear();
        cy.get(':nth-child(4) > .form-control').type(senha.confirmarNovaSenha);
    }



    submitSenha()
    {
        //Validando formularios com click
        cy.get('.form-group > .d-flex > .btn-danger').click();
    }

    //Modal, sucesso
    modalContenteShouldBe()
    {
        cy.get('.p-toast-detail').should('have.text', 'Operação realizada com sucesso');
    }

    //Texto de negativa senha atual vazia
    Alerta_senhaAtualVazia()
    {
        cy.get('.p-toast-detail').should('have.text', 'Senha obrigatória');
    }    

    //Texto de negativa para senha errada
    SenhaErrada()
    {
        cy.get('.p-toast-detail').should('have.text', 'A senha não coincide com a atual');
    }

    //Texto de negativa para campo email vazio
    senhaIgual()
    {
        cy.get('.p-toast-detail').should('have.text', 'A senha nova está igual a atual');
    }

    senhaNovaVazia()
    {
        cy.get('#mensagem').should('have.text', 'Senha obrigatória');
    }

}

export default senhaSignupPage;