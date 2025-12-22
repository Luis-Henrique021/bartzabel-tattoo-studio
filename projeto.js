// MENSAGEM DE ERRO AO NÃO PREENCHER CAMPOS NO FORMLUÁRIO
function verificarFormulario() {

    // Variável de controle (Assume que tudo está certo inicialmente)
    var tudoValido = true

    // VALIDAÇÃO 1: NOME
    var input_nome = document.getElementById("nome_cliente"); 

    // Pega o que está escrito dentro dele e limpa espaços extras
    // .trim(): remove espaços no começo e fim.
    // Se o usuário digitar apenas espaços, o computador vai entender como vazio.
    var valor_nome = input_nome.value.trim();

    // Se o tamanho for zero (c)
    if (valor_nome.length === 0) {
        
        // Erro visual
        input_nome.style.border = "2px solid yellow";
        input_nome.style.boxShadow = "0 0 5px yellow";
        
        // Avisa para o usuário escrevendo no span vazio
        document.getElementById("erro_nome-cliente").textContent = "Preencha corretamente o campo 'Nome'";
        
        // Marca que deu erro
        tudoValido = false;
    } else {
        // Se estiver tudo certo, limpa o erro visual
        input_nome.style.border = "";
        input_nome.style.boxShadow = "";
        document.getElementById("erro_nome-cliente").textContent = "";
    }
    // FIM VALIDAÇÃO NOME


    // VALIDAÇÃO 2: PERFIL DO INSTAGRAM
    var input_perfil = document.getElementById("insta_cliente"); 
    
    // .trim(): remove espaços no começo e fim.
    var valor_perfil = input_perfil.value.trim();

    // 
    if (valor_perfil.length === 0) {
        // Erro visual
        input_perfil.style.border = "2px solid yellow";
        input_perfil.style.boxShadow = "0 0 5px yellow";
        
        // Avisa para o usuário escrevendo no span vazio
        document.getElementById("erro_perfil").textContent = "Preencha corretamente o campo 'Perfil'";
        
        // Marca que deu erro
        tudoValido = false;
    } else {
        // Se estiver tudo certo, limpa o erro visual
        input_perfil.style.border = "";
        input_perfil.style.boxShadow = "";
        document.getElementById("erro_perfil").textContent = "";
    }
    // FIM VALIDAÇÃO PERFIL


    // VALIDAÇÃO 3: IDADE
    var input_idade = document.getElementById("idade_cliente");
    var valor_idade = parseInt(input_idade.value);

    // Verifica se é válido
    if (isNaN (valor_idade) || valor_idade <=0) {
        // Erro visual
        input_idade.style.border = "2px solid yellow";
        input_idade.style.boxShadow = "0 0 5px yellow";
        
        // Avisa para o usuário escrevendo no span vazio
        document.getElementById("erro_idade").textContent = "Preencha corretamente o campo 'Idade'";
        
        // Marca que deu erro
        tudoValido = false;
    } 
    
    // Verifica se é menor de idade
    else if (valor_idade < 18) {
        // Erro visual
        input_idade.style.border = "2px solid yellow";
        input_idade.style.boxShadow = "0 0 5px yellow";
        
        // Avisa para o usuário escrevendo no span vazio
        document.getElementById("erro_idade").textContent = "Não tatuamos menores de 18 anos";
        
        // Marca que deu erro
        tudoValido = false;
    }
    
    else {
        // Se estiver tudo certo, limpa o erro visual
        input_idade.style.border = "";
        input_idade.style.boxShadow = "";
        document.getElementById("erro_idade").textContent = "";
    }
    // FIM VALIDAÇÃO IDADE

    // VALIDAÇÃO 4: PRIMEIRA VEZ (RADIO)
    var input_primeira_tattoo = document.querySelector('input[name="primeira_vez"]:checked');

    if (input_primeira_tattoo == null) {
        document.getElementById("erro_primeira-tattoo").textContent = "Por favor, selecione uma opção";

        tudoValido = false;
    } else {
        document.getElementById("erro_primeira-tattoo").textContent = "";
    }
    // FIM VALIDAÇÃO PRIMEIRA VEZ

    // VALIDAÇÃO 5: ARQUIVO DO PROJETO
    var input_arquivo = document.getElementById("img_projeto");

    // Verifica se o usuário anexou um arquivo
    if (input_arquivo.files.length === 0) {

        // Erro visual
        input_arquivo.style.border = "";
        input_arquivo.style.boxShadow = "";

        document.getElementById("erro_envio-arquivo").textContent = "";
    } else { // Se tiver algum arquivo anexado...

        // Cria uma variável para verificar os arquivos selecionados
        var arquivo = input_arquivo.files[0];
        
        // Validação de Tamanho Máximo (5MB)
        var limite_tamanho = 5 * 1024 * 1024; // == 5MB JS mede os arquivos em bytes

        // Se o arquivo for maior que o limite
        if (arquivo.size > limite_tamanho) {

            // Erro Visual
            input_arquivo.style.border = "2px solid yellow";
            input_arquivo.style.boxShadow = "0 0 5px yellow";

            document.getElementById("erro_envio-arquivo").textContent = "Arquivo muito grande! Selecione outro";

            tudoValido = false;

        // Se o arquivo não ser do tipo image
        } else if (!arquivo.type.includes("image/")) {
            // Validação de tipo de arquivo selecionado
            // O tipo 'image/' cobre png, jpg, jpeg, webp, etc
            // O sinal '!' no começo significa "NÃO"
            // Tradução: "Se o tipo do arquivo NÃO incluir a palavra 'image'..."

            // Erro Visual
            input_arquivo.style.border = "2px solid yellow";
            input_arquivo.style.boxShadow = "0 0 5px yellow";

            document.getElementById("erro_envio-arquivo").textContent = "Envie apenas imagens (JPG, PNG, entre outros)";

            tudoValido = false;
        } else {
            input_arquivo.style.border = "";
            input_arquivo.style.boxShadow = "";
            document.getElementById("erro_envio-arquivo").textContent = "";
        }
    }
    // FIM VALIDAÇÃO ARQUIVO DO PROJETO

    // VALIDAÇÃO 6: REGIÃO TATTOO
    var input_regiao_tattoo = document.getElementById("regiao_tattoo");

    var valor_regiao = input_regiao_tattoo.value.trim();

    if (valor_regiao.length === 0) {

        // Erro Visual
        input_regiao_tattoo.style.border = "2px solid yellow";
        input_regiao_tattoo.style.boxShadow = "0 0 5px yellow";

        document.getElementById("erro_regiao-tattoo").textContent = "Preencha corretamente o campo 'Região da Tattoo'";
        
        tudoValido = false;

    } else {
        input_regiao_tattoo.style.border = "";
        input_regiao_tattoo.style.boxShadow = "";
        document.getElementById("erro_regiao-tattoo").textContent = "";
    }

    // VALIDAÇÃO 7: TAMANHO DA TATTOO
    var input_tamanho_tattoo = document.getElementById("tamanho_tattoo");

    var valor_tamanho_tattoo = parseInt(input_tamanho_tattoo.value);

    if (isNaN (valor_tamanho_tattoo)) {
        
        // Erro visual
        input_tamanho_tattoo.style.border = "2px solid yellow"
        input_tamanho_tattoo.style.boxShadow = "0 0 5px yellow";
        document.getElementById("erro_tamanho-tattoo").textContent = "Preencha corretamente o campo 'Tamanho da Tatuagem'";

        tudoValido = false
    } else {
            input_tamanho_tattoo.style.border = "";
            input_tamanho_tattoo.style.boxShadow = "";
            document.getElementById("erro_tamanho-tattoo").textContent = "";
    }

    // VALIDAÇÃO FINAL
    if (tudoValido === false) {
        //  Se encontrou QUALQUER erro, impede o envio
        return false;
     } else {
        //  Se passou por tudo ileso, permite o envio
        return true;
     }
}