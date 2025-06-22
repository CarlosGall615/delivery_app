
// Pegando os Dados do Cliente (Entrgas do Dia)
let nome = document.querySelector("#nome");
let rua = document.querySelector("#rua");
let numero_casa = document.querySelector("#numero_casa");
let complemento = document.querySelector("#complemento");
let telefone = document.querySelector("#telefone");

// Botão gerar pedido
let gerar_pedido = document.querySelector("#gerar_pedido");

// Div onde os Dados serão exibidos
let comanda_imprimir = document.querySelector("#comanda_imprimir");

// Função que Coleta Dados dos Clientes
function dados_cliente(){
    let nome_client = '<b>Cliente: </b>' + nome.value;
    let endereço_client = '<b>Endereço: </b>' + rua.value + ' - nº ' + 
        Number(numero_casa.value) + '  /  ' + complemento.value;    
    let telefone_client = '<b>Telefone para Contato: </b>' + telefone.value;

    comanda_imprimir.innerHTML = 
        nome_client + '<br>' +
        endereço_client + '<br>' +
        telefone_client + '<br>';
}

// Pegando os Dados dos Produtos (Faça o Pedido)
let btn_mais_p = document.querySelector("#btn_mais_p");
let btn_menos_p = document.querySelector("#btn_menos_p");
let marmita_p = document.querySelector("#marmita_p");

let btn_mais_m = document.querySelector("#btn_mais_m");
let btn_menos_m = document.querySelector("#btn_menos_m");
let marmita_m = document.querySelector("#marmita_m");

let btn_mais_g = document.querySelector("#btn_mais_g");
let btn_menos_g = document.querySelector("#btn_menos_g");
let marmita_g = document.querySelector("#marmita_g");

let btn_mais_s = document.querySelector("#btn_mais_s");
let btn_menos_s = document.querySelector("#btn_menos_s");
let marmita_s = document.querySelector("#marmita_s");

// Eventos dos Botões das Marmitas (+) e (-)
btn_mais_p.onclick = function(){
    marmita_p.value = Number(marmita_p.value) + 1;
}
btn_menos_p.onclick = function(){
    marmita_p.value = Number(marmita_p.value) - 1;
    if(marmita_p.value < 0){
        marmita_p.value = 0;
    }
}

btn_mais_m.onclick = function(){
    marmita_m.value = Number(marmita_m.value) + 1;
}
btn_menos_m.onclick = function(){
    marmita_m.value = Number(marmita_m.value) - 1;
    if(marmita_m.value < 0){
        marmita_m.value = 0;
    }
}

btn_mais_g.onclick = function(){
    marmita_g.value = Number(marmita_g.value) + 1;
}
btn_menos_g.onclick = function(){
    marmita_g.value = Number(marmita_g.value) - 1;
    if(marmita_g.value < 0){
        marmita_g.value = 0;
    }
}

btn_mais_s.onclick = function(){
    marmita_s.value = Number(marmita_s.value) + 1;
}
btn_menos_s.onclick = function(){
    marmita_s.value = Number(marmita_s.value) - 1;
    if(marmita_s.value < 0){
        marmita_s.value = 0;
    }
}

function marmitas_btn(){
    let valor_marmita_p = 15;
    let quantidade_marmita_p = Number(marmita_p.value);
    let total_marmita_p = valor_marmita_p * quantidade_marmita_p;

    let valor_marmita_m = 18;
    let quantidade_marmita_m = Number(marmita_m.value);
    let total_marmita_m = valor_marmita_m * quantidade_marmita_m;

    let valor_marmita_g = 20;
    let quantidade_marmita_g = Number(marmita_g.value);
    let total_marmita_g = valor_marmita_g * quantidade_marmita_g;

    let valor_marmita_s = 5;
    let quantidade_marmita_s = Number(marmita_s.value);
    let total_marmita_s = valor_marmita_s * quantidade_marmita_s;

    if (quantidade_marmita_p > 0){
        comanda_imprimir.innerHTML += '<br>' +
        '<b>Pequena: </b>' + quantidade_marmita_p + 'und ' + ' R$ ' + 
            total_marmita_p.toFixed(2)
    }
    if (quantidade_marmita_m > 0){
        comanda_imprimir.innerHTML += '<br>' +
        '<b>Média: </b>' + quantidade_marmita_m + 'und ' + ' R$ ' + 
            total_marmita_m.toFixed(2)
    }
    if (quantidade_marmita_g > 0){
        comanda_imprimir.innerHTML += '<br>' +
        '<b>Grande: </b>' + quantidade_marmita_g + 'und ' + ' R$ ' + 
            total_marmita_g.toFixed(2)
    }
    if (quantidade_marmita_s > 0){
        comanda_imprimir.innerHTML += '<br>' +
        '<b>Salada: </b>' + quantidade_marmita_s + 'und ' + ' R$ ' + 
            total_marmita_s.toFixed(2)
    }

    let total_marmitas = total_marmita_g + total_marmita_m + total_marmita_p + total_marmita_s;

    if(total_marmitas > 0){
        comanda_imprimir.innerHTML += '<br><br>' + '<b>Total(R$): </b>' + total_marmitas.toFixed(2);
    }

}

// Pegando Dados dos Produtos (Refrigerantes)
let refrigerante_tipo = document.querySelector("#refrigerante_tipo");
let refrigerante_sabores = document.querySelector("#refrigerante_sabores");

let btn_menos_refri = document.querySelector("#btn_menos_refri");
let btn_mais_refri = document.querySelector("#btn_mais_refri");
let quantidade_refri = document.querySelector("#quantidade_refri");

// Evento Botões Refrigerantes (+) e (-)
btn_mais_refri.onclick = function(){
    quantidade_refri.value = Number(quantidade_refri.value) + 1;
}
btn_menos_refri.onclick = function(){
    quantidade_refri.value = Number(quantidade_refri.value) - 1;
    if(quantidade_refri.value < 0){
        quantidade_refri.value = 0;
    }
}

// Função Refrigerantes
function refrigerantes_selection(){
    let tamanho_refri = document.querySelector("#refrigerante_tipo").value;
    let sabor_refri = document.querySelector("#refrigerante_sabores").value;
    let qtd_refri = Number(quantidade_refri.value);

    if(tamanho_refri === 'Refrigerantes 350ml'){
        let preco = 5.00;
        comanda_imprimir.innerHTML += '<br><br>' + 
        '<b>Refrigerante: </b>' + qtd_refri + 'und ' + tamanho_refri + '<br>' +
        '<b>Sabor: </b>' + sabor_refri + '<br>' +
        '<b>Valor(R$): </b>' + (qtd_refri * preco).toFixed(2);
    }
    if(tamanho_refri === 'Refrigerantes 600ml'){
        let preco = 7.00;
        comanda_imprimir.innerHTML += '<br><br>' + 
        '<b>Refrigerante: </b>' + qtd_refri + 'und ' + tamanho_refri + '<br>' +
        '<b>Sabor: </b>' + sabor_refri + '<br>' +
        '<b>Valor(R$): </b>' + (qtd_refri * preco).toFixed(2);
    }
    if(tamanho_refri === 'Refrigerantes 1L'){
        let preco = 10.00;
        comanda_imprimir.innerHTML += '<br><br>' + 
        '<b>Refrigerante: </b>' + qtd_refri + 'und ' + tamanho_refri + '<br>' +
        '<b>Sabor: </b>' + sabor_refri + '<br>' +
        '<b>Valor(R$): </b>' + (qtd_refri * preco).toFixed(2);
    }
    if(tamanho_refri === 'Refrigerantes 2L'){
        let preco = 15.00;
        comanda_imprimir.innerHTML += '<br><br>' + 
        '<b>Refrigerante: </b>' + qtd_refri + 'und ' + tamanho_refri + '<br>' +
        '<b>Sabor: </b>' + sabor_refri + '<br>' +
        '<b>Valor(R$): </b>' + (qtd_refri * preco).toFixed(2);
    }
    if(tamanho_refri === 'Dell Valle 310ml' || tamanho_refri === 'Dell Valle 450ml'){
        let preco = 5.00;
        comanda_imprimir.innerHTML += '<br><br>' + 
        '<b>Refrigerante: </b>' + qtd_refri + 'und ' + tamanho_refri + '<br>' +
        '<b>Sabor: </b>' + sabor_refri + '<br>' +
        '<b>Valor(R$): </b>' + (qtd_refri * preco).toFixed(2);
    }
    if(tamanho_refri === 'Água s/ Gás 500ml' || tamanho_refri === 'Água c/ Gás 500ml'){
        let preco = 3.00;
        comanda_imprimir.innerHTML += '<br><br>' + 
        '<b>Refrigerante: </b>' + qtd_refri + 'und ' + tamanho_refri + '<br>' +
        '<b>Sabor: </b>' + sabor_refri + '<br>' +
        '<b>Valor(R$): </b>' + (qtd_refri * preco).toFixed(2);
    }
}




// Botão Gerar Pedido que busca as funções
gerar_pedido.onclick = function(){
    dados_cliente();
    marmitas_btn();
    refrigerantes_selection();
}