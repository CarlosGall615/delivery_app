// Tabela de preços
const precos = {
  marmitas: {
    pequena: 15,
    media: 18,
    grande: 20,
    salada: 5
  },
  refrigerantes: {
    "Refrigerantes 350ml": 6,
    "Refrigerantes 600ml": 7,
    "Refrigerantes 1L": 10,
    "Refrigerantes 2L": 15,
    "Dell Valle 310ml": 5,
    "Dell Valle 450ml": 6,
    "Água s/ Gás 500ml": 3,
    "Água c/ Gás 500ml": 3
  }
};

// Função para adicionar ou remover unidades
function ajustarQuantidade(idCampo, incremento) {
  const campo = document.getElementById(idCampo);
  let valor = parseInt(campo.value) || 0;
  valor += incremento;
  if (valor < 0) valor = 0;
  campo.value = valor;
}

// Eventos dos botões das marmitas
document.getElementById("btn_mais_p").addEventListener("click", () => ajustarQuantidade("marmita_p", 1));
document.getElementById("btn_menos_p").addEventListener("click", () => ajustarQuantidade("marmita_p", -1));

document.getElementById("btn_mais_m").addEventListener("click", () => ajustarQuantidade("marmita_m", 1));
document.getElementById("btn_menos_m").addEventListener("click", () => ajustarQuantidade("marmita_m", -1));

document.getElementById("btn_mais_g").addEventListener("click", () => ajustarQuantidade("marmita_g", 1));
document.getElementById("btn_menos_g").addEventListener("click", () => ajustarQuantidade("marmita_g", -1));

document.getElementById("btn_mais_s").addEventListener("click", () => ajustarQuantidade("marmita_s", 1));
document.getElementById("btn_menos_s").addEventListener("click", () => ajustarQuantidade("marmita_s", -1));

document.getElementById("btn_mais_refri").addEventListener("click", () => ajustarQuantidade("quantidade_refri", 1));
document.getElementById("btn_menos_refri").addEventListener("click", () => ajustarQuantidade("quantidade_refri", -1));

// Gerar resumo do pedido
document.getElementById("gerar_pedido").addEventListener("click", () => {
  const nome = document.getElementById("name").value;
  const rua = document.getElementById("rua").value;
  const numero = document.getElementById("num").value;
  const complemento = document.getElementById("comp").value;
  const telefone = document.getElementById("fone").value;

  const marmitaP = parseInt(document.getElementById("marmita_p").value) || 0;
  const marmitaM = parseInt(document.getElementById("marmita_m").value) || 0;
  const marmitaG = parseInt(document.getElementById("marmita_g").value) || 0;
  const marmitaS = parseInt(document.getElementById("marmita_s").value) || 0;

  const refriTipo = document.getElementById("refrigerante_tipo").value;
  const refriSabor = document.getElementById("refrigerante_sabores").value;
  const refriQtd = parseInt(document.getElementById("quantidade_refri").value) || 0;

  const pagamento = [];
  if (document.getElementById("dinheiro").checked) pagamento.push("Dinheiro");
  if (document.getElementById("cartao").checked) pagamento.push("Cartão");
  if (document.getElementById("pix").checked) pagamento.push("Pix");
  if (document.getElementById("crediario").checked) pagamento.push("Crediário");

  const troco = document.getElementById("troco").value;

  // Calcular totais
  const totalMarmitas =
    marmitaP * precos.marmitas.pequena +
    marmitaM * precos.marmitas.media +
    marmitaG * precos.marmitas.grande +
    marmitaS * precos.marmitas.salada;

  const precoRefri = precos.refrigerantes[refriTipo] || 0;
  const totalRefri = refriQtd * precoRefri;

  const totalGeral = totalMarmitas + totalRefri;

  // Montar resumo
  const resumo = `
    <h3>Resumo do Pedido:</h3>
    <p><strong>Cliente:</strong> ${nome}</p>
    <p><strong>Endereço:</strong> ${rua}, ${numero} ${complemento ? "- " + complemento : ""}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Marmitas:</strong><br>
      Pequena (${marmitaP} x R$ ${precos.marmitas.pequena.toFixed(2)})<br>
      Média (${marmitaM} x R$ ${precos.marmitas.media.toFixed(2)})<br>
      Grande (${marmitaG} x R$ ${precos.marmitas.grande.toFixed(2)})<br>
      Salada (${marmitaS} x R$ ${precos.marmitas.salada.toFixed(2)})
    </p>
    <p><strong>Refrigerante:</strong><br>
      ${refriTipo ? `${refriTipo} (${refriQtd} x R$ ${precoRefri.toFixed(2)})` : "Nenhum selecionado"}<br>
      Sabor: ${refriSabor}
    </p>
    <p><strong>Forma de Pagamento:</strong> ${pagamento.join(", ") || "Não selecionado"}</p>
    ${troco ? `<p><strong>Troco para:</strong> R$ ${troco}</p>` : ""}
    <p><strong>Total do Pedido:</strong> R$ ${totalGeral.toFixed(2)}</p>
  `;

  document.getElementById("comanda_imprimir").innerHTML = resumo;
});

// Impressão
document.getElementById("imprimir").addEventListener("click", () => {
  const conteudo = document.getElementById("comanda_imprimir").innerHTML;
  const janela = window.open("", "", "width=600,height=400");
  janela.document.write("<html><head><title>Impressão</title></head><body>");
  janela.document.write(conteudo);
  janela.document.write("</body></html>");
  janela.document.close();
  janela.print();
});
