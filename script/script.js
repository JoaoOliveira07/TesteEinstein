// Você também pode criar métodos para atualizar a interface do usuário com base no estado do quebra-cabeça

const { Animal } = require("./animalEnum");
const { Bebida } = require("./bebidaEnum");
const { Cigarro } = require("./cigarroEnum");
const { Cor } = require("./corEnum");
const { Nacionalidade } = require("./nacionalidadeEnum");

// Seletor para o número da casa
var houseNumberElements = document.querySelectorAll(".house-number");

var root = document.getElementById('root')
// Repita a estrutura cinco vezes
root.innerHTML = [1, 2, 3, 4, 5].map((index) => {

  return `<div class="column">
                    <span class="title">Casa #${index}</span>
                    <span class="title-xs">#${index}</span>
                    <ul class="house${index}" id="house${index}" value="columnCasa${index}">
                        <li>
                            <select name ="colors" id="colorSelect${index}" onchange="optionSelected(${index})">
                                <option value="${Cor.SemOpcao}"></option>
                                <option value="${Cor.Amarelo}">Amarela</option>
                                <option value="${Cor.Azul}">Azul</option>
                                <option value="${Cor.Branco}">Branca</option>
                                <option value="${Cor.Verde}">Verde</option>
                                <option value="${Cor.Vermelho}">Vermelha</option>
                            </select>
                        </li>
                        <li>
                            <select name="nacionalidades" id="estrangeiroSelect${index}" onchange="estrangeiroSelected(${index})">
                                <option value="${Nacionalidade.SemOpcao}"></option>
                                <option value="${Nacionalidade.Alema}">Alemão</option>
                                <option value="${Nacionalidade.Dinamarquesa}">Dinamarquês</option>
                                <option value="${Nacionalidade.Inglesa}">Ingles</option>
                                <option value="${Nacionalidade.Norueguesa}">Norueguês</option>
                                <option value="${Nacionalidade.Sueca}">Sueco</option>
                            </select>

                        </li>
                        <li>
                            <select name="bebidas" id="bebidaSelect${index}" onchange="bebidaSelected(${index})">
                                <option value="${Bebida.SemOpcao}"></option>
                                <option value="${Bebida.Agua}">Água</option>
                                <option value="${Bebida.Cafe}">Café</option>
                                <option value="${Bebida.Cha}">Chá</option>
                                <option value="${Bebida.Cerveja}">Cerveja</option>
                                <option value="${Bebida.Leite}">Leite</option>
                            </select>

                        </li>
                        <li>
                            <select name="cigarros" id="cigarroSelect${index}" onchange="cigarroSelected(${index})">
                                <option value="${Cigarro.SemOpcao}"></option>
                                <option value="${Cigarro.Blends}">Blends</option>
                                <option value="${Cigarro.BlueMaster}">Blue Master</option>
                                <option value="${Cigarro.Dunhill}">Dunhill</option>
                                <option value="${Cigarro.PallMall}">Pall Mall</option>
                                <option value="${Cigarro.Prince}">Prince</option>
                            </select>
                        </li>
                        <li>
                            <select name="animais" id="animalSelect${index}" onchange="animalSelected(${index})">
                                <option value="${Animal.SemOpcao}"></option>
                                <option value="${Animal.Cachorros}">Cachorros</option>
                                <option value="${Animal.Cavalos}">Cavalos</option>
                                <option value="${Animal.Gatos}">Gatos</option>
                                <option value="${Animal.Passaros}">Pássaros</option>
                                <option value="${Animal.Peixes}">Peixes</option>
                                </select>
                                </li>
                                </ul>
                                </div>`
}).join("");
//O que eu preciso criar
//Selecionou uma option dentro de um select, desabilite em todos os outros select com id de colorSelect
//Caso se eu selecione outra option dentro do mesmo select Habilite anterior, e habilite nos outros
//Caso todas as option estejam preenchidas apenas na select selecionada quando eu clicar em nulo, ela deve habilitar a que estava selecionada
//nulo deve ser sempre nulo nunca pode ser ativado ou desativo, regras de habilitar e desabilitar não pode se aplicar a ele exceto de quando selecionamos ele habilitar a anterior selecionada


const selectedOptions = {}; // Movido para fora das funções

function optionSelected(index) {
  const selectElement = document.getElementById(`colorSelect${index}`);
  const selectedValue = selectElement.value;

  if (selectedValue === Cor.SemOpcao) {
    // Reativar a opção anteriormente selecionada em todos os selects
    if (selectedOptions[index]) {
      const previousValue = selectedOptions[index];
      for (let i = 1; i <= 5; i++) {
        if (i !== index) {
          const otherSelect = document.getElementById(`colorSelect${i}`);
          const optionToEnable = otherSelect.querySelector(`option[value="${previousValue}"]`);
          if (optionToEnable) {
            optionToEnable.disabled = false;
          }
        }
      }
    }
  } else {
    // Desativar a opção selecionada em outros selects
    for (let i = 1; i <= 5; i++) {
      if (i !== index) {
        const otherSelect = document.getElementById(`colorSelect${i}`);
        const optionsToDisable = otherSelect.querySelectorAll(`option[value="${selectedValue}"]`);
        optionsToDisable.forEach((option) => {
          option.disabled = true;
        });
      }
    }
  }
  validarRegras();

  selectedOptions[index] = selectedValue;
}
function estrangeiroSelected(index) {
  const selectElement = document.getElementById(`estrangeiroSelect${index}`);
  const selectedValue = selectElement.value;

  // Lógica de desativar a opção selecionada em outros selects
  if (selectedValue === Nacionalidade.SemOpcao) {
    // Reativar a opção anteriormente selecionada em todos os selects
    if (selectedOptions[index]) {
      const previousValue = selectedOptions[index];
      for (let i = 1; i <= 5; i++) {
        if (i !== index) {
          const otherSelect = document.getElementById(`estrangeiroSelect${i}`);
          const optionToEnable = otherSelect.querySelector(`option[value="${previousValue}"]`);
          if (optionToEnable) {
            optionToEnable.disabled = false;
          }
        }
      }
    }
  } else {
    // Desativar a opção selecionada em outros selects
    for (let i = 1; i <= 5; i++) {
      if (i !== index) {
        const otherSelect = document.getElementById(`estrangeiroSelect${i}`);
        const optionsToDisable = otherSelect.querySelectorAll(`option[value="${selectedValue}"]`);
        optionsToDisable.forEach((option) => {
          option.disabled = true;
        });
      }
    }
  }
  validarRegras();
  // Armazenar a opção selecionada
  selectedOptions[index] = selectedValue;
}
function bebidaSelected(index) {
  const selectElement = document.getElementById(`bebidaSelect${index}`);
  const selectedValue = selectElement.value;

  // Lógica de desativar a opção selecionada em outros selects
  if (selectedValue === Bebida.SemOpcao) {
    // Reativar a opção anteriormente selecionada em todos os selects
    if (selectedOptions[index]) {
      const previousValue = selectedOptions[index];
      for (let i = 1; i <= 5; i++) {
        if (i !== index) {
          const otherSelect = document.getElementById(`bebidaSelect${i}`);
          const optionToEnable = otherSelect.querySelector(`option[value="${previousValue}"]`);
          if (optionToEnable) {
            optionToEnable.disabled = false;
          }
        }
      }
    }
  } else {
    // Desativar a opção selecionada em outros selects
    for (let i = 1; i <= 5; i++) {
      if (i !== index) {
        const otherSelect = document.getElementById(`bebidaSelect${i}`);
        const optionsToDisable = otherSelect.querySelectorAll(`option[value="${selectedValue}"]`);
        optionsToDisable.forEach((option) => {
          option.disabled = true;
        });
      }
    }
  }

  validarRegras()
  
  // Armazenar a opção selecionada
  selectedOptions[index] = selectedValue;
}
function cigarroSelected(index) {
  const selectElement = document.getElementById(`cigarroSelect${index}`);
  const selectedValue = selectElement.value;

  // Lógica de desativar a opção selecionada em outros selects
  if (selectedValue === Cigarro.SemOpcao) {
    // Reativar a opção anteriormente selecionada em todos os selects
    if (selectedOptions[index]) {
      const previousValue = selectedOptions[index];
      for (let i = 1; i <= 5; i++) {
        if (i !== index) {
          const otherSelect = document.getElementById(`cigarroSelect${i}`);
          const optionToEnable = otherSelect.querySelector(`option[value="${previousValue}"]`);
          if (optionToEnable) {
            optionToEnable.disabled = false;
          }
        }
      }
    }
  } else {
    // Desativar a opção selecionada em outros selects
    for (let i = 1; i <= 5; i++) {
      if (i !== index) {
        const otherSelect = document.getElementById(`cigarroSelect${i}`);
        const optionsToDisable = otherSelect.querySelectorAll(`option[value="${selectedValue}"]`);
        optionsToDisable.forEach((option) => {
          option.disabled = true;
        });
      }
    }
  }

  validarRegras();
  // Armazenar a opção selecionada
  selectedOptions[index] = selectedValue;
}
function animalSelected(index) {
  const selectElement = document.getElementById(`animalSelect${index}`);
  const selectedValue = selectElement.value;

  // Lógica de desativar a opção selecionada em outros selects
  if (selectedValue === Animal.SemOpcao) {
    // Reativar a opção anteriormente selecionada em todos os selects
    if (selectedOptions[index]) {
      const previousValue = selectedOptions[index];
      for (let i = 1; i <= 5; i++) {
        if (i !== index) {
          const otherSelect = document.getElementById(`animalSelect${i}`);
          const optionToEnable = otherSelect.querySelector(`option[value="${previousValue}"]`);
          if (optionToEnable) {
            optionToEnable.disabled = false;
          }
        }
      }
    }
  } else {
    // Desativar a opção selecionada em outros selects
    for (let i = 1; i <= 5; i++) {
      if (i !== index) {
        const otherSelect = document.getElementById(`animalSelect${i}`);
        const optionsToDisable = otherSelect.querySelectorAll(`option[value="${selectedValue}"]`);
        optionsToDisable.forEach((option) => {
          option.disabled = true;
        });
      }
    }
  }



  validarRegras();
  // Armazenar a opção selecionada
  selectedOptions[index] = selectedValue;
}
[1, 2, 3, 4, 5].forEach((index) => {
  optionSelected(index);
});

[1, 2, 3, 4, 5].forEach((index) => {
  estrangeiroSelected(index);
});

[1, 2, 3, 4, 5].forEach((index) => {
  bebidaSelected(index);
});

[1, 2, 3, 4, 5].forEach((index) => {
  cigarroSelected(index);
});

[1, 2, 3, 4, 5].forEach((index) => {
  animalSelected(index);
});


function validarRegras(index) {
 
inglesVermelho(index);
suecoCachorro(index);
dinamarquesCha(index);
casaVerdeAoladoBranca(index);
verdeCafe(index);
pallMallPassaros(index);
amarelaDunhill(index);
blueMasterCerveja(index);
alemaoPrince(index);
casaMeioLeite(index);
norueguesPrimeira(index);
blendsLadoGatos(index);
cavaloLadoDunhill(index);
norueguesLadoAzul(index);
blendsVizinhoÁgua(index);
}

function inglesVermelho() {
  var colors = document.getElementsByName("colors");
  var nacionalidades = document.getElementsByName("nacionalidades");
  var primeiraLinha = document.getElementById("resultado");
  var regraValida = null;

  colors.forEach(function (color) {
    nacionalidades.forEach(function (nacionalidade) {
      if (regraValida) {
        return;
      }

      if (color.value == Cor.SemOpcao || nacionalidade.value == Nacionalidade.SemOpcao) {
        return;
      }

      if (color.value == Cor.Vermelho && nacionalidade.value == Nacionalidade.Inglesa) {
        regraValida = true;
        return;
      } else if ((color.value == Cor.Vermelho && nacionalidade.value != Nacionalidade.Inglesa)
        || (nacionalidade.value == Nacionalidade.Inglesa && color.value != Cor.Vermelho)) {
        regraValida = false;
        return;
      }
    });
  });


  if (regraValida == null) {
    primeiraLinha.textContent = "O Inglês vive na casa Vermelha.";
    primeiraLinha.classList.remove("right");
    primeiraLinha.classList.remove("wrong");
    
  } else if (regraValida) {
    primeiraLinha.classList.add("right");
    primeiraLinha.classList.remove("wrong");
   
  } else {
    primeiraLinha.classList.remove("right");
    primeiraLinha.classList.add("wrong");
  
  }
}

function suecoCachorro() {
  var animais = document.getElementsByName("animais");
  var nacionalidades = document.getElementsByName("nacionalidades");
  var segundaLinha = document.getElementById("resultado2");
  var regraValida = null;

  animais.forEach(function (animal) {
    nacionalidades.forEach(function (nacionalidade) {
      if (regraValida) {
        return;
      }

      if (animal.value == Animal.SemOpcao || nacionalidade.value == Nacionalidade.SemOpcao) {
        return;
      }

      if (animal.value == Animal.Cachorros && nacionalidade.value == Nacionalidade.Sueca) {
        regraValida = true;
        return;
      }
      else if ((animal.value == Animal.Cachorros && nacionalidade.value != Nacionalidade.Sueca)
        || (nacionalidade.value == Nacionalidade.Sueca && animal.value != Animal.Cachorros)) {
        regraValida = false;
        return;
      }
    })
  });

  if (regraValida == null) {
    segundaLinha.textContent = "O Sueco tem Cachorros como animais de estimação.";
    segundaLinha.classList.remove("right");
    segundaLinha.classList.remove("wrong");
  }
  else if (regraValida) {
    segundaLinha.classList.add("right");
    segundaLinha.classList.remove("wrong");
  }
  else {
    segundaLinha.classList.remove("right");
    segundaLinha.classList.add("wrong");
  }
}

function dinamarquesCha() {

  var bebidas = document.getElementsByName("bebidas");
  var nacionalidades = document.getElementsByName("nacionalidades");
  var terceiraLinha = document.getElementById("resultado3");
  var regraValida = null;

  bebidas.forEach(function (bebida) {
    nacionalidades.forEach(function (nacionalidade) {

      if (regraValida) {
        return;
      }

      if (bebida.value == Bebida.SemOpcao || nacionalidade.value == Nacionalidade.SemOpcao) {
        return;
      }

      if (bebida.value == Bebida.Cha && nacionalidade.value == Nacionalidade.Dinamarquesa) {
        regraValida = true;
        return;
      }
      else if ((bebida.value == Bebida.Cha && nacionalidade.value != Nacionalidade.Dinamarquesa)
        || (nacionalidade.value == Nacionalidade.Sueca && bebida.value != Bebida.Cha)) {
        regraValida = false;
        return;
      }
    })
  });

  if (regraValida == null) {
    terceiraLinha.textContent = "O Dinamarquês bebe Chá.";
    terceiraLinha.classList.remove("right");
    terceiraLinha.classList.remove("wrong");
  }
  else if (regraValida) {
    terceiraLinha.classList.add("right");
    terceiraLinha.classList.remove("wrong");
  }
  else {
    terceiraLinha.classList.remove("right");
    terceiraLinha.classList.add("wrong");
  }
}

function casaVerdeAoladoBranca() {
  for (let index = 1; index <= 5; index++) {
    const casaAtual = document.getElementById(`colorSelect${index}`);
    const casaAnterior = document.getElementById(`colorSelect${index - 1}`);
    const casaSeguinte = document.getElementById(`colorSelect${index + 1}`);
    const resultadoElement = document.getElementById("resultado4");

    if (casaAtual != null) {
      if (casaAtual.value == Cor.Branco) {
        if (casaAnterior != null && casaAnterior.value == Cor.Verde) {
          resultadoElement.textContent = "A casa Verde fica do lado esquerdo da casa Branca.";
          resultadoElement.classList.add("right");
          resultadoElement.classList.remove("wrong");
          return; // A regra foi aplicada, podemos sair da função
        }
      } else if (casaAtual.value == Cor.Verde) {
        if (casaSeguinte != null && casaSeguinte.value != Cor.Branco && casaSeguinte.value != Cor.SemOpcao) {
          resultadoElement.textContent = "A casa Verde fica do lado esquerdo da casa Branca.";
          resultadoElement.classList.remove("right");
          resultadoElement.classList.add("wrong");
          return; // A regra foi aplicada, podemos sair da função
        }
      }
    }
    // Se a função chegou aqui, a regra não foi aplicada
    resultadoElement.textContent = "A casa Verde fica do lado esquerdo da casa Branca."; // Resposta em "normal" (vazia)
    resultadoElement.classList.remove("right");
    resultadoElement.classList.remove("wrong");
  }
}


// Chame a função após cada alteração nos seletores de cor
for (let index = 1; index <= 5; index++) {
  const selectElement = document.getElementById(`colorSelect${index}`);
  selectElement.addEventListener("change", casaVerdeAoladoBranca);
}


function verdeCafe() {
  var colors = document.getElementsByName("colors");
  var bebidas = document.getElementsByName("bebidas");
  var quintaLinha = document.getElementById("resultado5");
  var regraValida = null;

  colors.forEach(function (color) {
    bebidas.forEach(function (bebida) {

      if (regraValida) {
        return;
      }

      if (color.value == Cor.SemOpcao || bebida.value == Bebida.SemOpcao) {
        return;
      }

      if (color.value == Cor.Verde && bebida.value == Bebida.Cafe) {
        regraValida = true;
        return;
      }
      else if ((color.value == Cor.Verde && bebida.value != Bebida.Cafe)
        || (bebida.value == Bebida.Cafe && color.value != Cor.Verde)) {
        regraValida = false;
        return;
      }
    })
  });

  if (regraValida == null) {
    quintaLinha.textContent = "O homem que vive na casa Verde bebe Café.";
    quintaLinha.classList.remove("right");
    quintaLinha.classList.remove("wrong");
  }
  else if (regraValida) {
    quintaLinha.classList.add("right");
    quintaLinha.classList.remove("wrong");
  }
  else {
    quintaLinha.classList.remove("right");
    quintaLinha.classList.add("wrong");
  }
}

function pallMallPassaros() {

  var animais = document.getElementsByName("animais");
  var cigarros = document.getElementsByName("cigarros");
  var sextaLinha = document.getElementById("resultado6");
  var regraValida = null;

  cigarros.forEach(function (cigarro) {
    animais.forEach(function (animal) {
      if (regraValida) {
        return;
      }

      if (animal.value == Animal.SemOpcao || cigarro.value == Cigarro.SemOpcao) {
        return;
      }

      if (animal.value == Animal.Passaros && cigarro.value == Cigarro.PallMall) {
        regraValida = true;
        return;
      }
      else if ((animal.value == Animal.Passaros && cigarro.value != Cigarro.PallMall)
        || (cigarro.value == Cigarro.PallMall && animal.value != Animal.Passaros)) {
        regraValida = false;
        return;
      }
    })
  });

  if (regraValida == null) {
    sextaLinha.textContent = "O homem que fuma Pall Mall cria Pássaros.";
    sextaLinha.classList.remove("right");
    sextaLinha.classList.remove("wrong");
  }
  else if (regraValida) {
    sextaLinha.classList.add("right");
    sextaLinha.classList.remove("wrong");
  }
  else {
    sextaLinha.classList.remove("right");
    sextaLinha.classList.add("wrong");
  }
}

function amarelaDunhill() {
  var colors = document.getElementsByName("colors");
  var cigarros = document.getElementsByName("cigarros");
  var setimaLinha = document.getElementById("resultado7");
  var regraValida = null;

  cigarros.forEach(function (cigarro) {
    colors.forEach(function (color) {
      if (regraValida) {
        return;
      }

      if (color.value == Cor.SemOpcao || cigarro.value == Cigarro.SemOpcao) {
        return;
      }

      if (color.value == Cor.Amarelo && cigarro.value == Cigarro.Dunhill) {
        regraValida = true;
        return;
      }
      else if ((color.value == Cor.Amarelo && cigarro.value != Cigarro.Dunhill)
        || (cigarro.value == Cigarro.Dunhill && color.value == Cor.Amarelo)) {
        regraValida = false;
        return;
      }
    })
  });

  if (regraValida == null) {
    setimaLinha.textContent = "O homem que vive na casa Amarela fuma Dunhill.";
    setimaLinha.classList.remove("right");
    setimaLinha.classList.remove("wrong");
  }
  else if (regraValida) {
    setimaLinha.classList.add("right");
    setimaLinha.classList.remove("wrong");
  }
  else {
    setimaLinha.classList.remove("right");
    setimaLinha.classList.add("wrong");
  }
}
function blueMasterCerveja() {
  var bebidas = document.getElementsByName("bebidas");
  var cigarros = document.getElementsByName("cigarros");
  var decimaSegundaLinha = document.getElementById("resultado12");
  var regraValida = null;

  cigarros.forEach(function (cigarro) {
    bebidas.forEach(function (bebida) {
      if (regraValida) {
        return;
      }

      if (bebida.value == Bebida.SemOpcao || cigarro.value == Cigarro.SemOpcao) {
        return;
      }

      if (bebida.value == Bebida.Cerveja && cigarro.value == Cigarro.BlueMaster) {
        regraValida = true;
        return;
      }
      else if ((bebida.value == Bebida.Cerveja && cigarro.value != Cigarro.BlueMaster)
        || (cigarro.value == Cigarro.BlueMaster && bebida.value != Bebida.Cerveja)) {
        regraValida = false;
        return;
      }
    })
  });
  if (regraValida == null) {
    decimaSegundaLinha.textContent = "O homem que fuma Blue Master bebe Cerveja.";
    decimaSegundaLinha.classList.remove("right");
    decimaSegundaLinha.classList.remove("wrong");
  }
  else if (regraValida) {
    decimaSegundaLinha.classList.add("right");
    decimaSegundaLinha.classList.remove("wrong");
  }
  else {
    decimaSegundaLinha.classList.remove("right");
    decimaSegundaLinha.classList.add("wrong");
  }
}
function alemaoPrince() {
  var nacionalidades = document.getElementsByName("nacionalidades");
  var cigarros = document.getElementsByName("cigarros");
  var decimaTerceiraLinha = document.getElementById("resultado13");
  var regraValida = null;

  cigarros.forEach(function (cigarro) {
    nacionalidades.forEach(function (nacionalidade) {
      if (regraValida) {
        return;
      }

      if (nacionalidade.value == Nacionalidade.SemOpcao || cigarro.value == Cigarro.SemOpcao) {
        return;
      }

      if (nacionalidade.value == Nacionalidade.Alema && cigarro.value == Cigarro.Prince) {
        regraValida = true;
        return;
      }
      else if ((nacionalidade.value == Nacionalidade.Alema && cigarro.value != Cigarro.Prince)
        || (cigarro.value == Cigarro.Prince && nacionalidade.value == Nacionalidade.Alema)) {
        regraValida = false;
        return;
      }
    })
  });

  if (regraValida == null) {
    decimaTerceiraLinha.textContent = "O Alemão fuma Prince.";
    decimaTerceiraLinha.classList.remove("right");
    decimaTerceiraLinha.classList.remove("wrong");
  }
  else if (regraValida) {
    decimaTerceiraLinha.classList.add("right");
    decimaTerceiraLinha.classList.remove("wrong");
  }
  else {
    decimaTerceiraLinha.classList.remove("right");
    decimaTerceiraLinha.classList.add("wrong");
  }
}

  
  function casaMeioLeite(index) {
    var casa = "columnCasa3";
    var bebida = document.getElementById(`bebidaSelect3`);
    var resultadoElement = document.getElementById("resultado8");
    var regraInalterada = casa == "columnCasa3" && bebida.value == Bebida.SemOpcao;

    if (regraInalterada) {
      resultadoElement.textContent = "O homem que vive na casa do meio bebe Leite.";
      resultadoElement.classList.remove("wrong");
      resultadoElement.classList.remove("right");
    }
    else {
      if (casa && bebida.value == Bebida.Leite) {
        resultadoElement.classList.add("right");
        resultadoElement.classList.remove("wrong");
      }
      if ((casa && bebida.value != Bebida.Leite)
        || (bebida.value == Bebida.Leite && casa != "columnCasa3")) {
        resultadoElement.classList.remove("right");
        resultadoElement.classList.add("wrong");
      }
    }
    bebida.addEventListener("change", casaMeioLeite);
  }
  function norueguesPrimeira(index) {
    var casa = "columnCasa1";
    var nacionalidade = document.getElementById(`estrangeiroSelect1`);
    var resultadoElement = document.getElementById("resultado9");
    var regraInalterada = casa == "" || nacionalidade.value == Nacionalidade.SemOpcao;

    if (regraInalterada) {
      resultadoElement.textContent = "O Norueguês vive na primeira casa.";
      resultadoElement.classList.remove("wrong");
      resultadoElement.classList.remove("right");

    }
    else {
      if (casa && nacionalidade.value == Nacionalidade.Norueguesa) {
        resultadoElement.classList.add("right");
        resultadoElement.classList.remove("wrong");
      }
      if ((casa && nacionalidade.value != Nacionalidade.Norueguesa)
        || (nacionalidade.value == Nacionalidade.Norueguesa && casa != "columnCasa1")) {
        resultadoElement.classList.remove("right");
        resultadoElement.classList.add("wrong");
      }
    }
    nacionalidade.addEventListener("change", norueguesPrimeira);
  }

  function blendsLadoGatos(index) {
    for (let index = 1; index <= 5; index++) {
      const casaAtualGatos = document.getElementById(`animalSelect${index}`);
      const casaAtualBlends = document.getElementById(`cigarroSelect${index}`);
      const casaGatos = document.getElementById(`animalSelect${index - 1}`);
      const casaBlends = document.getElementById(`cigarroSelect${index + 1}`);
      const resultadoElement = document.getElementById("resultado10");

      if (casaAtualBlends != null) {
        if (casaAtualBlends.value == Cigarro.Blends) {
          if (casaGatos.value == Animal.Gatos) {
            resultadoElement.textContent = "O homem que fuma Blends vive ao lado do que tem Gatos.";
            resultadoElement.classList.add("right");
            resultadoElement.classList.remove("wrong");
            return;
          }
        } else if (casaAtualGatos.value == Animal.Gatos) {
          if (casaBlends.value != null && casaBlends.value != Cigarro.Blends && casaBlends.value != Cigarro.SemOpcao) {
            resultadoElement.textContent = "O homem que fuma Blends vive ao lado do que tem Gatos.";
            resultadoElement.classList.remove("right");
            resultadoElement.classList.add("wrong");
            return;
          }
        }
      }
      resultadoElement.textContent = "O homem que fuma Blends vive ao lado do que tem Gatos.";
      resultadoElement.classList.remove("right");
      resultadoElement.classList.remove("wrong");
    }
  }
  for (let index = 1; index <= 5; index++) {
    const casaAtualGatos = document.getElementById(`animalSelect${index}`);
    const casaAtualBlends = document.getElementById(`cigarroSelect${index}`);
    casaAtualGatos.addEventListener("change", blendsLadoGatos);
    casaAtualBlends.addEventListener("change", blendsLadoGatos);
  }
  function cavaloLadoDunhill(index) {
    for (let index = 1; index <= 5; index++) {
      const casaAtualCavalo = document.getElementById(`animalSelect${index}`);
      const casaAtualDunhill = document.getElementById(`cigarroSelect${index}`);
      const casaCavalos = document.getElementById(`animalSelect${index + 1}`);
      const casaDunhill = document.getElementById(`cigarroSelect${index - 1}`);
      const resultadoElement = document.getElementById("resultado11");

      if (casaAtualCavalo != null) {
        if (casaAtualCavalo.value == Animal.Cavalos) {
          if (casaDunhill.value == Cigarro.Dunhill) {
            resultadoElement.textContent = "O homem que cria Cavalos vive ao lado do que fuma Dunhill.";
            resultadoElement.classList.add("right");
            resultadoElement.classList.remove("wrong");
            return;
          }
        } else if (casaAtualDunhill.value == Cigarro.Dunhill) {
          if (casaCavalos.value != null && casaCavalos.value != Animal.Cavalos && casaCavalos.value != Animal.SemOpcao) {
            resultadoElement.textContent = "O homem que cria Cavalos vive ao lado do que fuma Dunhill.";
            resultadoElement.classList.remove("right");
            resultadoElement.classList.add("wrong");
            return;
          }
        }
      }
      resultadoElement.textContent = "O homem que cria Cavalos vive ao lado do que fuma Dunhill.";
      resultadoElement.classList.remove("right");
      resultadoElement.classList.remove("wrong");
    }
  }
  for (let index = 1; index <= 5; index++) {
    const casaAtualCavalo = document.getElementById(`animalSelect${index}`);
    const casaAtualDunhill = document.getElementById(`cigarroSelect${index}`);
    casaAtualCavalo.addEventListener("change", cavaloLadoDunhill);
    casaAtualDunhill.addEventListener("change", cavaloLadoDunhill);
  }

  function norueguesLadoAzul(index) {
    for (let index = 1; index <= 5; index++) {
      const casaAtualNoruegues = document.getElementById(`estrangeiroSelect${index}`);
      const casaAtualAzul = document.getElementById(`colorSelect${index}`);
      const casaNoruegues = document.getElementById(`estrangeiroSelect${index - 1}`);
      const casaAzul = document.getElementById(`colorSelect${index + 1}`);
      const resultadoElement = document.getElementById("resultado14");

      if (casaAtualAzul != null) {
        if (casaAtualAzul.value == Cor.Azul) {
          if (casaNoruegues.value == Nacionalidade.Norueguesa) {
            resultadoElement.textContent = "O Norueguês vive ao lado da casa Azul.";
            resultadoElement.classList.add("right");
            resultadoElement.classList.remove("wrong");
            return;
          }
        } else if (casaAtualNoruegues.value == Nacionalidade.Norueguesa) {
          if (casaAzul.value != null && casaAzul.value != Cor.Azul && casaAzul.value != Cor.SemOpcao) {
            resultadoElement.textContent = "O Norueguês vive ao lado da casa Azul.";
            resultadoElement.classList.remove("right");
            resultadoElement.classList.add("wrong");
            return;
          }
        }
      }
      resultadoElement.textContent = "O Norueguês vive ao lado da casa Azul.";
      resultadoElement.classList.remove("right");
      resultadoElement.classList.remove("wrong");
    }
  }
  for (let index = 1; index <= 5; index++) {
    const casaAtualAzul = document.getElementById(`colorSelect${index}`);
    const casaAtualNoruegues = document.getElementById(`estrangeiroSelect${index}`);
    casaAtualAzul.addEventListener("change", norueguesLadoAzul);
    casaAtualNoruegues.addEventListener("change", norueguesLadoAzul);
  }

  function blendsVizinhoÁgua(index) {
    for (let index = 1; index <= 5; index++) {
      const casaAtualAgua = document.getElementById(`bebidaSelect${index}`);
      const casaAtualBlends = document.getElementById(`cigarroSelect${index}`);
      const casaAgua = document.getElementById(`bebidaSelect${index - 1}`);
      const casaBlends = document.getElementById(`cigarroSelect${index + 1}`);
      const resultadoElement = document.getElementById("resultado15");

      if (casaAtualBlends != null) {
        if (casaAtualBlends.value == Cigarro.Blends) {
          if (casaAgua.value == Bebida.Agua) {
            resultadoElement.textContent = "O homem que fuma Blends é vizinho do que bebe Água.";
            resultadoElement.classList.add("right");
            resultadoElement.classList.remove("wrong");
            return;
          }
        } else if (casaAtualAgua.value == Bebida.Agua) {
          if (casaBlends.value != null && casaBlends.value != Cigarro.Blends && casaBlends.value != Cigarro.SemOpcao) {
            resultadoElement.textContent = "O homem que fuma Blends é vizinho do que bebe Água.";
            resultadoElement.classList.remove("right");
            resultadoElement.classList.add("wrong");
            return;
          }
        }
      }
      resultadoElement.textContent = "O homem que fuma Blends é vizinho do que bebe Água.";
      resultadoElement.classList.remove("right");
      resultadoElement.classList.remove("wrong");
    }
  }
  for (let index = 1; index <= 5; index++) {
    const casaAtualAgua = document.getElementById(`bebidaSelect${index}`);
    const casaAtualBlends = document.getElementById(`cigarroSelect${index}`);
    casaAtualAgua.addEventListener("change", blendsVizinhoÁgua);
    casaAtualBlends.addEventListener("change", blendsVizinhoÁgua);
  }


function handleColorChange(index) {
  const colorSelect = document.getElementById(`colorSelect${index}`);
  const house = document.querySelector(`.house${index}`);

  colorSelect.addEventListener('change', function () {
    const selectedColor = colorSelect.value;

    if (selectedColor !== Cor.SemOpcao) {
      house.className = `house house${index} ${selectedColor}`;
    } else {
      house.className = `house house${index}`;
    }
  });
}

[1, 2, 3, 4, 5].forEach((index) => {
  handleColorChange(index);
});


