# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-melhor-idade/blob/main/docs/01-Documenta%C3%A7%C3%A3o%20de%20Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

|Nº                  | FOTO                               |DESCRIÇÃO                               |
|--------------------|------------------------------------|----------------------------------------|
|1|![image](https://user-images.githubusercontent.com/81182674/221312857-31cf60cf-f58f-4a02-be19-f1a3254dc6ae.png)|Maria Oliveira de Souza tem 66 anos, e é advogada aposentada. É casada há 33 anos, gosta muito de ler e de se exercitar. Tem uma grande dificuldade em lembrar de beber água, e gostaria que tivesse um aplicativo que enviasse notificações de hora em hora lembrando-a de se hidratar.|
|2|![image](https://user-images.githubusercontent.com/81182674/221312981-27fb5746-1dc8-4ad9-8b06-99cabc7848fa.png)|Elizabete Pereira Macedo tem 75 anos, e é pedagoga aposentada. É viúva, gosta muito de escrever e de cozinhar para seus netos, quando estes a visitam. Necessita de remédios para colesterol alto, hipertensão e osteoporose, mas sempre os toma nos horários incorretos ou se esquece de algum, o que prejudica seu tratamento. Gostaria que houvesse um meio que a lembrasse diariamente de tomá-los nos horários corretos.|
|3|![image](https://user-images.githubusercontent.com/81182674/221313242-d7619fc4-86d2-4731-a9ed-9aac12ff9d0d.png)|Marcos Nogueira Machado tem 55 anos e é médico geriatra. Gosta muito de viajar com sua família, estudar e cozinhar. Ama sua profissão, mas enfrenta uma grande dificuldade em conseguir que seus pacientes retornem anualmente para fazer o check-up. Gostaria que tivesse um meio que lembrasse com antecedência os seus pacientes e familiares para agendar a próxima consulta.|
|4|![image](https://user-images.githubusercontent.com/81182674/221313549-53930f50-59df-4924-ae0a-0b429ceb6164.png)|Pedro José Santos tem 76 anos e é contador aposentado. Ama pintar quadros, assistir filmes de suspense e brincar com seus netos. É sedentário, e por recomendações médicas deveria se exercitar ao menos 30 minutos por dia. Tem grande dificuldade de manter uma constância, e por isso gostaria que houvesse um meio que o lembrasse diariamente de se exercitar.|
|5|![image](https://user-images.githubusercontent.com/81182674/221313743-ae5d0439-5e85-457f-86f9-bc57f117e10d.png)|Cláudia Brandão de Souza tem 45 anos, é casada e tem 2 filhos. Ama viajar e cozinhar para a família. Se preocupa bastante com sua mãe, que já é idosa e mora sozinha. Sendo assim, gostaria que houvesse um meio que a permitisse ter um melhor controle da saúde da mesma.| 

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Maria Oliveira de Souza  | Lembrete de beber água                                 | Aumentar o consumo de água. |
|Maria Oliveira de Souza  | Registro diário do consumo de água                     | Registrar e incentivar a beber água diariamente. |
|Elizabete Pereira Macedo | Cadastrar o medicamento de uso próprio                 | Auxiliar na dosagem correta da medicação. |
|Elizabete Pereira Macedo | Lembrete do uso da medicação                           | Facilitar o uso da medicação no horário correto. |
|Marcos Nogueira Machado  | Lembrete do próximo check-up               | Auxiliar os pacientes e familiares com antecedência sobre o agendamento do próximo check-up.|
|Pedro José Santos        | Lembrete da prática de exercício físico                  | Lembrar de exercitar diariamente.|
|Cláudia Brandão de Souza | Acompanhar a distância a saúde de familiares idosos    | Facilitar o acompanhamento à distância da saúde da mãe. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente, o controle e cuidados relacionados com a saúde dos idosos exige que o próprio idoso lembre de seus compromissos como realizar check-ups médicos, fazer o uso de medicação, exercícios físicos, entre outros, criando uma dependência em relação a terceiros e familiares. Isso tudo é geralmente feito de forma manual, seja com anotações ou pela memória do próprio idoso.

### Descrição Geral da Proposta

A proposta do Melhor Idade é digitalizar todo o processo de acompanhamento, controle e registro médico, tornando mais fácil e eficaz para os idosos. Com o Melhor Idade, um familiar ou amigo poderá acompanhar a saúde do idoso de forma remota, auxiliando o mesmo com seus compromissos. Também será possível criar lembretes com alarmes para uso de medicamentos, consultas médicas e ingestão de água. O idoso poderá acompanhar tudo através de um registro de atividades.

### Processo 1 – Cadastro de usuário
![image](https://user-images.githubusercontent.com/100742971/221708499-84ffc05b-f775-41ce-8120-767b51998890.png)
Figura 2 - Processo de cadastro de usuário
### Processo 2 – Gerenciar Perfil
![image](https://user-images.githubusercontent.com/100742971/221708550-e878a977-7cef-4901-ad25-6a8c3e4db801.png)
Figura 3 - Processo de gerenciamento de perfil
### Processo 3 – Cadastrar remédio
![image](https://user-images.githubusercontent.com/100742971/221708621-f0cbb818-9d2e-47d8-adc2-f65dd0b9f8fd.png)
Figura 4 - Processo de cadastro de remédio
### Processo 4 – Registrar água
![image](https://user-images.githubusercontent.com/100742971/221708674-ae261d47-cc00-437e-93e3-75b6a5225949.png)
Figura 5 - Processo de registro de ingestão de água
### Processo 5 – Alarme remédio
![image](https://user-images.githubusercontent.com/100742971/221708719-9adaf1af-9d7e-4b97-9465-01c31c211bae.png)
Figura 6 - Processo de notificação para a ingestão de medicamentos
### Processo 6 – Compartilhar informações
![image](https://user-images.githubusercontent.com/100742971/221708773-1cbbaab5-ae6d-421c-a48f-be11c90032ef.png)
Figura 7 - Processo de compartilhamento de informações

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo.

| Indicador | Objetivos |     Descrição | Cálculo   | Fonte de dados | Perspectiva | Meta |
|-----------------|-----------|---------------------|--------------|-----------------|--------------|--------|
| Número de downloads do Aplicativo | Acompanhar o crescimento do aplicativo | Avaliar a quantidades de downloads do aplicativo | Número mensal de downloads| Playstore e Apple Store | Evolução do produto | Média de 100 downloads mensais |
|Avaliações do aplicativo           | Monitorar o nível de aceitação do aplicativo | Calcular a média de feedback dos usuários que utilizam o aplicativo | Nota média dada pelos usuários por período  | Playstore e Apple Store | Qualidade do produto | Avaliação média de 4 estrelas |
| Número de cadastros no aplicativo | Acompanhar o crescimento do acesso ao aplicativo | Avaliar a quantidade de cadastros dos usuários | Número mensal de cadastros| Banco de dados do aplicativo | Evolução do produto | Chegar próximo à quantidade de downloads efetuados por igual período |
| Número de cadastros no aplicativo em relação a população idosa | Acompanhar o crescimento do acesso ao aplicativo referente a população idosa | Avaliar a quantidade de cadastros dos usuários acima de 60 anos | Número de cadastros de usuários com a faixa etária a partir de 60 anos por período | Banco de dados do aplicativo | Engajamento do produto aos usuários idosos | Que a maior porcentagem dos cadastros tenha como público alvo a população idosa |   
| Eficiência| Avaliar se o aplicativo está cumprindo suas funções corretamente | Monitorar a eficiência do aplicativo em relação ao registro de informações dadas pelo usuário, notificações/lembretes e compartilhamento de relatórios |    | Banco de dados do aplicativo | Qualidade do produto | Sem taxa de erro |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação móvel deve permitir ao usuário cadastrar uma conta. | ALTA | 
|RF-002| A aplicação móvel deve permitir ao usuário cadastrado logar em sua conta. | ALTA | 
|RF-003| A aplicação móvel deve permitir ao usuário cadastrado gerenciar sua conta. | BAIXA | 
|RF-004| A aplicação móvel deve permitir ao usuário inserir o(s) nome(s) e a dosagem do(s) medicamento(s) que está tomando.   | MÉDIA |
|RF-005| A aplicação móvel deve permitir ao usuário registrar a quantidade de água que tomou durante o dia.   | BAIXA |
|RF-006| A aplicação móvel deve permitir ao usuário registrar qual(is) atividade(s) física(s) fez durante o dia e por quanto tempo.   | MÉDIA |
|RF-007| A aplicação móvel deve notificar o usuário quando este deve tomar seus medicamentos, tomar água e a data do próximo check-up.   | MÉDIA |
|RF-008| A aplicação móvel deve permitir que o usuário compartilhe as informações registradas na aplicação.   | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel. | ALTA | 

#### Técnica de priorização de requisitos

A técnica de priorização de requisitos utilizada foi a Escala de Três Níveis, com os valores "Alta", "Média" e "Baixa", associada ao quadrante de priorização, que estabeleu a importância e urgência dos requisitos.

<figure>
    <img src="https://user-images.githubusercontent.com/100447878/221410981-1cba85ae-03f7-4367-97a7-a198fb7453f4.png" style="width:600px;height:400px;">
    <figcaption>Figura 8 - Quadrante de priorização de requisitos</figcaption>
</figure>

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre letivo, não podendo extrapolar a data de 23/06/2023. |
|02| Não pode ser desenvolvido um módulo de backend.        |


## Diagrama de Casos de Uso

O diagrama contempla as principais ligações previstas entre casos de uso e atores, detalhando os Requisitos Funcionais da aplicação interativa.

![melhor idade](https://user-images.githubusercontent.com/100734910/222785833-e58b9bb8-5177-4f8d-a13b-68e66e937c68.png)



Figura 9 - Diagrama de casos de uso


# Matriz de Rastreabilidade

A matriz de rastreabilidade abaixo contempla todos os elementos relevantes que fazem parte do sistema de software.

![image](https://user-images.githubusercontent.com/100734910/222302756-93298a2d-82d3-4bec-8bba-4c5057111a10.png)


#### Siglas:
|Stakeholders - MS-EM-MM-PS-CS | 
RF-Requisitos Funcionais  | 
RFN- Requisitos não Funcionais | 
TC - Casos de Testes    |  
|M-Módulos  | 
DC-Diagrama de Classes   |

Figura 10 - Matriz de rastreabilidade

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas.

## Gerenciamento de Tempo

O diagrama abaixo nos permite gerenciar o tempo no projeto, a fim de estimar o tempo necessário para sua conclusão.

![Gerenciamento de tempo](https://user-images.githubusercontent.com/81182674/221701137-c7b2b10f-1c6a-4439-aa45-747066329192.png)
Figura 11 - Diagrama de gerenciamento de tempo do projeto

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Gerenciamento](https://user-images.githubusercontent.com/100447878/222730211-ee01ea0b-d340-4b8e-91ff-0c2dceae3bb1.png)
Figura 12 - Gerenciamento da equipe com a timeline do projeto

## Gestão de Orçamento

![Orçamento](https://user-images.githubusercontent.com/100447878/222771347-4a09daac-9702-4b74-85eb-7dfeb35a9339.png)
Figura 13 - Orçamento do projeto
