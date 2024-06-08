const exibir_resultado = () => {
    return `
    <p>Sua taxa de metabolismo basal é de <b>${m_basal.toFixed(2)}</b> calorias</p>
    <p>Seu gasto calórico é de <b>${gasto.toFixed(2)}</b> no dia</p>
    <p>Sua meta de calorias diarias é de <b>${calorias.toFixed(2)}</b></p>
    <br>
    <strong>Você precisa de:</strong>
    <p><b>${proteinagramas.toFixed(2)}</b> gramas de proteína</p>
    <p><b>${gorduragramas.toFixed(2)}</b> gramas de gordura</p>
    <p><b>${carboidratogramas.toFixed(2)}</b> gramas de carboidrato</p>
    <br>
    `
}
  
const calcular = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    // nome = formData.get('nome') 
    idade = formData.get('idade')
    peso = formData.get('peso')
    altura = formData.get('altura')
    sexo = formData.get('sexo')
    atividade = formData.get('atividade')
    objetivo = formData.get('objetivo')
    vegetariano = formData.get('vegetariano')
    vegano = formData.get('vegano')
    lactose = formData.get('lactose')
    gluten = formData.get('gluten')

    if(vegetariano == 'vegetariano') {
      // tabela_vegetariano.classList.remove('remover');
      tabela_vegetariano.classList.add('aparecer');
    }
    if(vegano == 'vegano') {
      // tabela_vegano.classList.remove('remover');
      tabela_vegano.classList.add('aparecer');
    }
    if(lactose == 'lactose') {
      // tabela_lactose.classList.remove('remover');
      tabela_lactose.classList.add('aparecer');
    }
    if(gluten == 'gluten') {
      // tabela_gluten.classList.remove('remover');
      tabela_gluten.classList.add('aparecer');
    }
    if(vegetariano == null && vegano == null && lactose == null && gluten == null) {
      tabela_normal.classList.add('aparecer')
    }

    if(sexo == 'masculino') {
      m_basal = 66 + (13.8*peso) + (5*altura) - (6.8*idade)
    }
    else if(sexo == 'feminino') {
      m_basal = 655 + (9.6*peso) + (1.8*altura) - (4.7*idade)
    }
    if(atividade == 'baixa') {
      gasto = m_basal + 500
    }
    else if(atividade == 'media') {
      gasto = m_basal + 1000
    }
    else if(atividade == 'intensa') {
      gasto = m_basal + 1500
    }
    if(objetivo == 'emagrecer') {
      calorias = gasto * 0.8
    }
    else if(objetivo == 'hipertrofia') {
      calorias = gasto * 1.2
    }
    proteinakcal = (peso * 2.5) * 4
    gordurakcal = (peso * 1) * 9
    restokcal = (calorias - proteinakcal - gordurakcal)
    proteinagramas = (peso * 2)
    gorduragramas = (peso * 0.8)
    carboidratogramas = (restokcal / 4)

    let output = exibir_resultado();
    document.querySelector('.results').innerHTML = output;
    
    document.querySelector('form').reset();

    esconderForm();
    div_tabelas.classList.remove('remover');
    aparecerBotao();
};

const form = document.querySelector('.form');
const btnCalcNov = document.querySelector('.btn-calc-nov');
const tabela_vegetariano = document.querySelector('.tabela-vegetariano');
const tabela_vegano = document.querySelector('.tabela-vegano');
const tabela_lactose = document.querySelector('.tabela-lactose');
const tabela_gluten = document.querySelector('.tabela-gluten');
const tabela_normal = document.querySelector('.tabela-normal')
const div_tabelas = document.querySelector('.tabelas');

function esconderForm() {
  form.classList.add('remover');
};

function aparecerBotao() {
  btnCalcNov.classList.add('aparecer');
};

btnCalcNov.addEventListener('click', () => {
  form.classList.remove('remover');
  btnCalcNov.classList.remove('aparecer');
  tabela_vegetariano.classList.remove('aparecer');
  tabela_vegano.classList.remove('aparecer');
  tabela_lactose.classList.remove('aparecer');
  tabela_gluten.classList.remove('aparecer');
  tabela_normal.classList.remove('aparecer');
  div_tabelas.classList.add('remover');
  document.querySelector('.results').innerHTML = null;
});

calcular();
  