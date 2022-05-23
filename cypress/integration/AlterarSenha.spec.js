import senhaSignupPage from '../pages/senhaSignupPages'

//NOTAS
//cltr+f para a barra de filtragem no inspecionar
//npm run test (abrir o cypress interface)


//Define switch de teste
describe('AlterarSenha', ()=>
{
    //Alterar Senha com sucesso
    it('SenhaSucesso', ()=>
    {

        //--------------------------------------------------------------------------
        //Preencher formulario
        //Senha "Abcdef123"
        //Senha2 "321edcba"
        var senha = 
        {
            senhaAtual: '"Abcdef123"',
            novaSenha: '"321edcbA"',
            confirmarNovaSenha: '"321edcbA"',
        }
        //Variavel com o valor da mensagem do modal
        //--------------------------------------------------------------------------
        var signup = new senhaSignupPage();
        signup.homeSenha1();
        signup.fillFormSenha(senha);
        signup.submitSenha();
        signup.modalContenteShouldBe();
    })

    //RECUPERA SENHA
    it('RecuperaSenha', ()=>
    
    {

        //--------------------------------------------------------------------------
        //Preencher formulario
        //Senha "Abcdef123"
        //Senha2 "321edcba"
        var senha = 
        {
            senhaAtual: '"321edcbA"',
            novaSenha: '"Abcdef123"',
            confirmarNovaSenha: '"Abcdef123"',
        }
        
        //Variavel com o valor da mensagem do modal
        //--------------------------------------------------------------------------
        var signup = new senhaSignupPage();
        signup.homeSenha2();
        signup.fillFormSenha(senha);
        signup.submitSenha();
        signup.modalContenteShouldBe();
    })
    

    //Senha atual vazia
    it('SenhaAtualVazia', ()=>
    {
        var senha = 
        {
            novaSenha: '"321edcbA"',
            confirmarNovaSenha: '"321edcbA"',
        }
        var signup = new senhaSignupPage();
        signup.homeSenha1();
        signup.SenhaAtualVazia(senha);
        signup.submitSenha();
        signup.Alerta_senhaAtualVazia();
    })

    //RECUPERA SENHA
    it('RecuperaSenha', ()=>
    {

        //--------------------------------------------------------------------------
        //Preencher formulario
        //Senha "Abcdef123"
        //Senha2 "321edcba"
        var senha = 
        {
            senhaAtual: '"321edcbA"',
            novaSenha: '"Abcdef123"',
            confirmarNovaSenha: '"Abcdef123"',
        }
        
        //Variavel com o valor da mensagem do modal
        //--------------------------------------------------------------------------
        var signup = new senhaSignupPage();
        signup.homeSenha2();
        signup.fillFormSenha(senha);
        signup.submitSenha();
        signup.modalContenteShouldBe();
    })


    //Senha atual errada
    it('SenhaAtualErrada', ()=>
    {
        var senha = 
        {
            senhaAtual: '"Errado"',
            novaSenha: '"321edcbA"',
            confirmarNovaSenha: '"321edcbA"',
        }
        var signup = new senhaSignupPage();
        signup.homeSenha1();
        signup.SenhaAtualErrada(senha);
        signup.submitSenha();
        signup.SenhaErrada();
    })

    //RECUPERA SENHA
    it('RecuperaSenha', ()=>
    {

        //--------------------------------------------------------------------------
        //Preencher formulario
        //Senha "Abcdef123"
        //Senha2 "321edcba"
        var senha = 
        {
            senhaAtual: '"321edcbA"',
            novaSenha: '"Abcdef123"',
            confirmarNovaSenha: '"Abcdef123"',
        }
        
        //Variavel com o valor da mensagem do modal
        //--------------------------------------------------------------------------
        var signup = new senhaSignupPage();
        signup.homeSenha2();
        signup.fillFormSenha(senha);
        signup.submitSenha();
        signup.modalContenteShouldBe();
    })


    //Senha atual igual a nova senha
    it('SenhaAtualNova', ()=>
    {
        var senha = 
        {
            senhaAtual: '"321edcbA"',
            novaSenha: '"321edcbA"',
            confirmarNovaSenha: '"321edcbA"',
        }
        
        var signup = new senhaSignupPage();
        signup.homeSenha1();
        signup.SenhaAtualErrada(senha);
        signup.submitSenha();
        signup.SenhaErrada();
    })


    //RECUPERA SENHA
    it('RecuperaSenha', ()=>
    {

        //--------------------------------------------------------------------------
        //Preencher formulario
        //Senha "Abcdef123"
        //Senha2 "321edcba"
        var senha = 
        {
            senhaAtual: '"321edcbA"',
            novaSenha: '"Abcdef123"',
            confirmarNovaSenha: '"Abcdef123"',
        }
        
        //Variavel com o valor da mensagem do modal
        //--------------------------------------------------------------------------
        var signup = new senhaSignupPage();
        signup.homeSenha2();
        signup.fillFormSenha(senha);
        signup.submitSenha();
        signup.modalContenteShouldBe();
    })

    /*
    //NOVA SENHA VAZIA
    it('SenhaAtualNova', ()=>
    {
        var senha = 
        {
            senhaAtual: '"321edcbA"',
            confirmarNovaSenha: '"321edcbA"',
        }
        
        var signup = new senhaSignupPage();
        signup.homeSenha1();
        signup.SenhaAtualErrada(senha);
        signup.submitSenha();
        signup.senhaNovaVazia();
    })


    //RECUPERA SENHA
    it('RecuperaSenha', ()=>
    {

        //--------------------------------------------------------------------------
        //Preencher formulario
        //Senha "Abcdef123"
        //Senha2 "321edcba"
        var senha = 
        {
            senhaAtual: '"321edcbA"',
            novaSenha: '"Abcdef123"',
            confirmarNovaSenha: '"Abcdef123"',
        }
        
        //Variavel com o valor da mensagem do modal
        //--------------------------------------------------------------------------
        var signup = new senhaSignupPage();
        signup.homeSenha2();
        signup.fillFormSenha(senha);
        signup.submitSenha();
        signup.modalContenteShouldBe();
    })
    */

    
})
