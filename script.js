const perguntas = [
  {
      pergunta: "Qual dos seguintes serviços da AWS é uma solução de banco de dados gerenciado?",
      respostas: [
          "Amazon S3",
          "Amazon RDS",
          "Amazon EC2"
      ],
      correta: 1,
  },
  {
      pergunta: "Qual serviço da AWS é usado para fornecer conteúdo estático para usuários finais com baixa latência?",
      respostas: [
          "Amazon S3",
          "Amazon EC2",
          "Amazon RDS"
      ],
      correta: 0,
  },
  {
      pergunta: "Qual serviço da AWS é usado para hospedar aplicativos da web escaláveis e altamente disponíveis?",
      respostas: [
          "Amazon S3",
          "Amazon EC2",
          "AWS Lambda"
      ],
      correta: 1,
  },
  {
      pergunta: "Quais são os componentes principais do modelo de responsabilidade compartilhada da AWS?",
      respostas: [
          "AWS Lambda e Amazon S3",
          "AWS Management Console e AWS CLI",
          "Controle do cliente e controle da AWS"
      ],
      correta: 2,
  },
  {
      pergunta: "Qual serviço da AWS é usado para criar e gerenciar redes virtuais privadas?",
      respostas: [
          "Amazon VPC",
          "Amazon RDS",
          "Amazon EC2"
      ],
      correta: 0,
  },
  {
      pergunta: "Qual serviço da AWS fornece armazenamento de objetos altamente escalável e durável?",
      respostas: [
          "Amazon EC2",
          "Amazon RDS",
          "Amazon S3"
      ],
      correta: 2,
  },
  {
      pergunta: "Qual serviço da AWS é usado para dimensionar automaticamente recursos de computação?",
      respostas: [
          "Amazon S3",
          "Amazon EC2",
          "AWS Auto Scaling"
      ],
      correta: 2,
  },
  {
      pergunta: "Qual serviço da AWS é usado para executar código sem provisionar ou gerenciar servidores?",
      respostas: [
          "Amazon EC2",
          "Amazon RDS",
          "AWS Lambda"
      ],
      correta: 2,
  },
  {
      pergunta: "Qual serviço da AWS fornece um banco de dados NoSQL totalmente gerenciado?",
      respostas: [
          "Amazon RDS",
          "Amazon DynamoDB",
          "Amazon EC2"
      ],
      correta: 1,
  },
  {
      pergunta: "Qual serviço da AWS é usado para enviar e-mails em massa?",
      respostas: [
          "Amazon S3",
          "Amazon SES",
          "Amazon EC2"
      ],
      correta: 1,
  },
  {
      pergunta: "Qual serviço da AWS é usado para monitorar e coletar métricas sobre os recursos da AWS?",
      respostas: [
          "Amazon CloudWatch",
          "Amazon S3",
          "Amazon RDS"
      ],
      correta: 0,
  },
  {
      pergunta: "Qual serviço da AWS fornece uma solução de banco de dados relacional totalmente gerenciada?",
      respostas: [
          "Amazon S3",
          "Amazon EC2",
          "Amazon RDS"
      ],
      correta: 2,
  },
  {
      pergunta: "Qual serviço da AWS é usado para armazenar e proteger chaves de criptografia?",
      respostas: [
          "AWS KMS",
          "Amazon EC2",
          "Amazon S3"
      ],
      correta: 0,
  },
  {
      pergunta: "Qual serviço da AWS fornece uma plataforma para criar, implantar e gerenciar aplicativos em contêineres?",
      respostas: [
          "Amazon ECS",
          "Amazon S3",
          "Amazon RDS"
      ],
      correta: 0,
  },
  {
      pergunta: "Qual serviço da AWS é usado para criar e gerenciar bancos de dados de gráficos?",
      respostas: [
          "Amazon RDS",
          "Amazon Neptune",
          "Amazon S3"
      ],
      correta: 1,
  },
  {
      pergunta: "Qual serviço da AWS é usado para importar e exportar grandes volumes de dados para e da AWS?",
      respostas: [
          "Amazon S3",
          "AWS Snowball",
          "Amazon RDS"
      ],
      correta: 1,
  },
  {
      pergunta: "Qual serviço da AWS é usado para orquestrar e automatizar processos de integração de dados?",
      respostas: [
          "Amazon Kinesis",
          "AWS Glue",
          "Amazon RDS"
      ],
      correta: 1,
  },

  {
    pergunta: "Qual serviço da AWS é usado para configurar redes de entrega de conteúdo (CDNs) para distribuir conteúdo de forma eficiente aos usuários finais?",
    respostas: [
        "Amazon S3",
        "Amazon CloudFront",
        "Amazon Route 53"
    ],
    correta: 1,
},
{
    pergunta: "Qual serviço da AWS é usado para implantar aplicativos em uma infraestrutura de nuvem gerenciada?",
    respostas: [
        "AWS Elastic Beanstalk",
        "Amazon EC2",
        "AWS Lambda"
    ],
    correta: 0,
},
{
    pergunta: "Qual serviço da AWS é usado para fornecer armazenamento de dados altamente escalável e seguro na nuvem?",
    respostas: [
        "Amazon S3",
        "Amazon RDS",
        "AWS DynamoDB"
    ],
    correta: 0,
}


];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta // true ou false

    corretas.delete(item)
     if(estaCorreta){
      corretas.add(item)
     }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  // coloca a pergunta na tela
  quiz.appendChild(quizItem);
}
