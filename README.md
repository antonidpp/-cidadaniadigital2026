# 🌐 Portal de Cidadania Digital: IA, Deepfakes e o Combate à Desinformação

## 📄 1. Introdução e Contextualização do Projeto
Este projeto acadêmico foi desenvolvido como parte integrante do Plano de Recuperação Disciplinar do Componente Curricular de **Educação Digital e Computação: Programação e IA** do Ensino Médio (Período: 24 de Junho a 01 de Julho).

O avanço acelerado dos algoritmos de Aprendizado de Máquina (*Machine Learning*) e Redes Adversariais Generativas (GANs) democratizou a criação de mídias sintéticas. Embora tragam inovações para o entretenimento, essas tecnologias facilitam a proliferação de **Deepfakes** e campanhas de desinformação automatizada em escala industrial. 

Este portal web atua como uma ferramenta de **conscientização comunitária e alfabetização midiática**. Ele capacita o cidadão comum a reconhecer anomalias em conteúdos audiovisuais manipulados, mitigando os impactos psicossociais e políticos da perda de confiança na soberania da informação digital.

---

## 🎯 2. Escopo e Objetivos do Desafio Técnico
O objetivo central foi construir uma aplicação web totalmente funcional, responsiva e interativa a partir do zero, sem o auxílio de frameworks externos (Bootstrap, Tailwind, React, etc.), utilizando estritamente tecnologias nativas da Web:
*   **Educar a comunidade:** Fornecer indicadores visuais e auditivos práticos para a identificação de fraudes geradas por inteligência artificial.
*   **Engajamento Interativo:** Coletar dados e avaliar o nível de percepção crítica do usuário através de um simulador de testes (quiz).
*   **Acessibilidade Universal:** Implementar alternância dinâmica de contraste (Modo Escuro) para garantir conforto visual e inclusão.

---

## 💻 3. Arquitetura Tecnológica e Engenharia de Software

A aplicação foi estruturada seguindo o princípio de separação de responsabilidades (*Separation of Concerns*), dividida em três camadas principais:

### 🏛️ Camada de Estrutura (HTML5 Semântico)
O arquivo `index.html` rejeita o uso excessivo de divisões genéricas (`<div>`) em favor de uma árvore de elementos semânticos que otimiza a acessibilidade (leitores de tela) e o SEO:
*   `<header>`: Centraliza a identidade visual do portal e o controle global de acessibilidade.
*   `<main>`: Delimita o núcleo de conteúdo relevante da aplicação.
*   `<section>`: Agrupa de forma lógica a zona informativa (teoria) e a zona interativa (prática).
*   `<form>`, `<input>`, `<label>` e `<button>`: Formam uma estrutura robusta de captação de dados estruturados para o usuário.
*   `<footer>`: Contém as notas de direitos autorais, escopo pedagógico e metadados do projeto.

### 🎨 Camada de Estilização (CSS3 Avançado)
O arquivo `style.css` utiliza modernas técnicas de design fluido e controle de estado visual:
*   **Variáveis CSS (Custom Properties):** Centralização da paleta de cores no escopo `:root`, permitindo a mutabilidade temática (`--bg-primary`, `--bg-card`, etc.) com poucas linhas de código.
*   **Módulo Flexbox:** Utilizado para criar um alinhamento flexível, distribuição proporcional de espaços e centralização de componentes complexos.
*   **Media Queries (Responsividade):** Folha de estilo adaptativa para garantir que o portal mantenha legibilidade e usabilidade tanto em monitores desktop de alta resolução quanto em telas reduzidas de smartphones.

### ⚙️ Camada de Comportamento (JavaScript Vanilla)
O arquivo `script.js` opera de forma assíncrona orientada a eventos, manipulando a árvore do DOM (*Document Object Model*) sem dependências de terceiros:
*   **Gerenciamento de Estados:** Escuta eventos de clique para alternar classes do elemento `<body>`, redefinindo as propriedades de cor em tempo real.
*   **Interatividade e Validação:** Captura o evento `submit` do formulário, bloqueia o comportamento padrão de atualização de página (`preventDefault`), varre as opções selecionadas, executa algoritmos condicionais de pontuação e renderiza um feedback visual instantâneo para o usuário através da manipulação de propriedades de texto e visibilidade do CSS.

---

## 🤖 4. Engenharia de Prompts e Codificação Assistida por IA
Para o desenvolvimento ágil desta aplicação, foram aplicadas técnicas avançadas de engenharia de prompts utilizando Inteligência Artificial para refinar o código e as regras de negócio. Abaixo estão documentados os comandos exatos utilizados:

### Prompt 1: Arquitetura e Semântica (HTML5)
> *"Atue como um Engenheiro Front-End Sênior especializado em acessibilidade. Preciso da estrutura de uma página HTML5 semântica para um portal focado no combate a deepfakes. O código deve ser limpo, conter obrigatoriamente as tags header, main, section, form com inputs do tipo radio e labels associados corretamente por ID, e um footer escolar. Não use nenhuma biblioteca externa."*

### Prompt 2: Estilização e Temas Dinâmicos (CSS3)
> *"Crie um arquivo CSS moderno para uma página de conscientização digital. Utilize variáveis CSS (:root) para definir uma paleta de cores limpa (azul e cinza claro) e uma classe alternativa '.dark-mode' que inverta essas variáveis para tons escuros de azul e cinza. O layout principal deve ser construído inteiramente com Flexbox. Adicione também regras de responsividade com Media Queries para telas menores que 600px de largura de forma que o menu se alinhe verticalmente."*

### Prompt 3: Lógica de Negócios e Manipulação do DOM (JavaScript)
> *"Escreva um script em JavaScript Vanilla puro que gerencie duas interatividades em uma página web: 1) Um botão de alternância que adiciona ou remove a classe '.dark-mode' do elemento body ao ser clicado. 2) Um validador para um formulário de quiz com duas perguntas. O script deve interceptar o envio do formulário, impedir o reload da página, checar se as respostas corretas foram marcadas, calcular o score final e atualizar dinamicamente o texto e a cor de fundo de uma div de resultado oculta, revelando-a para o usuário."*

---

## 🛠️ 5. Instruções de Instalação e Execução Local

Para testar e rodar o projeto localmente em sua máquina, siga os passos abaixo:

1. **Clonar ou Baixar o Projeto:**
   Faça o download dos arquivos ou clone este repositório utilizando o terminal do seu computador:
   ```bash
   git clone https://github.com
   ```

2. **Organização dos Arquivos:**
   Certifique-se de que os três arquivos principais estão situados no mesmo diretório/pasta raiz:
   ```text
   ├── index.html
   ├── style.css
   └── script.js
   ```

3. **Execução:**
   Não há necessidade de instalar compiladores ou servidores locais (como Node.js). Basta dar um **duplo clique no arquivo `index.html`** para que ele abra automaticamente no navegador de sua preferência (Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari).

---

## 🏷️ 6. Metadados do Repositório
* **Componente Curricular:** Educação Digital e Computação: Programação e IA (Ensino Médio)
* **Status do Projeto:** Concluído para Avaliação (Nível 4)
* **Tag Obrigatória do Repositório:** `#cidadaniadigital2026`
* **Tecnologia Permitida:** Apenas HTML5, CSS3 e JavaScript Vanilla.
