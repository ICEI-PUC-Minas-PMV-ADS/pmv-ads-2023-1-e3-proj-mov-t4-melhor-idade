
# Metodologia

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-melhor-idade/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Documentação de Especificação</a></span>

Esta seção descreve as ferramentas utilizadas pela equipe para a manutenção dos códigos e demais artefatos e sua organização para a execução das tarefas do projeto.

## Relação de Ambientes de Trabalho

Os artefatos do projeto serão desenvolvidos a partir das plataformas listadas abaixo, apresentadas com o seu propósito.

| AMBIENTE | PLATAFORMA |LINK DE ACESSO                 |
|--------------------|--------------------------------------------------------------------------------|----------------------------------------|
|Repositório de código fonte | GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-melhor-idade/tree/main/docs |
|Documentos do projeto  | GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-melhor-idade |
|Diagramas | Lucidchart | https://www.lucidchart.com/pages/pt |
|Projeto de interface e wireframes | Marvel | --link-- |
|Gerenciamento do projeto  | GitHub | https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/225 |

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-melhor-idade/tree/main/docs) foi utilizado para hospedagem do repositório.

Para a gestão do código fonte será utilizado um processo baseado no Gitflow, mostrado na figura abaixo, que permite que a equipe trabalhe com correções de problemas ou atualizações sem a interrupção do trabalho em andamento (ATLASSIAN BITBUCKET, [<i>s. d.</i>]).

![Gitflow](https://user-images.githubusercontent.com/100447878/224438616-057b263d-cb67-4f75-bacd-339024012816.png)

Figura 14 - Fluxo de controle do código fonte com Git

O projeto utilizará os seguintes nomes de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

## Etiquetas

As tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:

- Bug: Erro no código
- Documentation: Atualização da documentação
- Enhancement: novo recurso ou aprimoramento
- Help wanted: atenção necessária
- Test: testes

![Issues](https://user-images.githubusercontent.com/100447878/224440373-d6259dd0-2a90-47fe-b126-29a1a3e7af6e.png)

Figura 15 - Tela do esquema de cores e categorias


## Gerenciamento de Projeto

A metodologia ágil escolhida para o desenvolvimento deste projeto foi o SCRUM, pois como citam Amaral, Fleury e Isoni (2019, p. 68), seus benefícios são a

“visão clara dos resultados a entregar; ritmo e disciplina necessários à execução; definição de papéis e responsabilidades dos integrantes do projeto (Scrum Owner, Scrum Master e Team); empoderamento dos membros da equipe de projetos para atingir o desafio; conhecimento distribuído e compartilhado de forma colaborativa; ambiência favorável para crítica às ideias e não às pessoas.”

### Divisão de Papéis

A equipe está organizada da seguinte maneira:
- Scrum Master: Daiane Campos Procópio;
- Product Owner: Mateus Curcino De Lima;
- Equipe de Desenvolvimento: Fernanda Augusta de Barcelos Coura, Guilherme Faustini de Azevedo, Juliana Calazans Rodrigues de Magalhães e Rúbia Karina Prado Costa.

### Processo

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o GitHub, estruturado com as seguintes listas: 

<ul>
  <li>Product Backlog: recebe as tarefas a serem trabalhadas e representa o Backlog do produto. Todas as atividades identificadas no decorrer do projeto são incorporadas a esta lista.</li>
  <li>To Do: esta lista representa o Sprint Backlog que está sendo trabalhado.</li>
  <li>In progress: lista das tarefas iniciadas.</li>
  <li>Done: nesta lista são colocadas as tarefas finalizadas e as que passaram pelos testes e controle de qualidade, prontas para serem entregues aos usuários.</li>
 </ul>

O quadro kanban do grupo no GitHub está disponível no link https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/225 e é apresentado, no estado atual, na figura abaixo:

![Kanban](https://user-images.githubusercontent.com/100447878/223799311-1c1e2aa4-ddd1-48f9-ad20-3a1241ad3d5b.png)
Figura 14 - Tela do kanban no GitHub utilizada pelo grupo</figcaption>


### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código: Visual Studio Code
- Ferramenta de gerenciamento: Github
- Ferramenta de comunicação: Microsoft Teams
- Ferramenta de desenho de tela (_wireframing_): Marvel

O editor de código, Visual Studio Code, foi escolhido porque ele possui uma integração com o sistema de versão. A ferramenta de gerenciamento do Github foi selecionada pela flexibilidade para criar fluxos de trabalho personalizados que atendam às necessidades da equipe. A ferramenta de comunicação, Microsoft Teams, foi selecionada por ser a mesma utilizada nas reuniões com o professor orientador e product owner do projeto. Por fim, para criar os desenhos de tela, utilizamos a ferramenta Marvel por melhor captar as necessidades da nossa solução.
