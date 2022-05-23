import SignupPage from '../pages/SignupPages'

//NOTAS
//cltr+f para a barra de filtragem no inspecionar
//npm run test (abrir o cypress interface)


//Define switch de teste
describe('AlterarCadastro', ()=>
{
    //caso de teste - Caminho feliz
    it('CadastroSucesso', ()=>
    {

        //--------------------------------------------------------------------------
        //Preencher formulario
        //Senha "Abcdef123"
        var cadastro = 
        {
            nome: 'Cleydson',
            sobrenome: 'Paes',
            email: 'cleydsonpaes2@hotmail.com',
        }
        //Variavel com o valor da mensagem do modal
        const expectedMessage = 'Operação realizada com sucesso. A aplicação será redirecionada para a tela de login.';
        
        //--------------------------------------------------------------------------
        var signup = new SignupPage();
        signup.homePerfil();
        signup.fillForm(cadastro);
        signup.submit();
        signup.modalContenteShouldBe(expectedMessage);
    })


    it('CadastroSemNome', ()=>
    {

        var signup = new SignupPage();
        signup.homePerfil();
        signup.fillFormNameClear();
        signup.submit();
        signup.alertMessageName();
    })

    it('CadastroSemSobrenome', ()=>
    {
        var signup = new SignupPage();
        signup.homePerfil();
        signup.fillFormSurnameClear();
        signup.submit();
        signup.alertMessageShouldSurname();
    })

    it('CadastroSemEmail', ()=>
    {

        var signup = new SignupPage();
        signup.homePerfil();
        signup.fillFormEmailClear();
        signup.submit();
        signup.alertMessageShouldEmail();
    })

    
})
