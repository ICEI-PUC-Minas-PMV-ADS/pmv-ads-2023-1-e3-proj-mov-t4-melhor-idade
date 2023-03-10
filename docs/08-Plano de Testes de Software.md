# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresentamos abaixo os cenários de testes elaborados para a realização dos testes da aplicação móvel, demonstrando os requisitos funcionais sendo satisfeitos.
 
| **Caso de Teste** 	| **CT-01 – Cadastrar perfil de usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - A aplicação móvel deve permitir ao usuário cadastrar uma conta. |
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos 	| - Acessar o aplicativo móvel <br> - Clicar em “Cadastro” na tela inicial <br> - Preencher os campos obrigatórios <br> - Clicar em "Cadastrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Efetuar login** 	|
|	Requisito Associado 	| RF-002 - A aplicação móvel deve permitir ao usuário cadastrado logar em sua conta.  |
| Objetivo do Teste 	| Verificar se o usuário consegue efetuar o login. |
| Passos 	| - Acessar o aplicativo móvel <br> - Clicar em “Login” na tela inicial <br> - Preencher os campos obrigatórios <br> - Clicar em "Entrar" |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Gerenciar Conta** 	|
|	Requisito Associado 	| RF-003 - A aplicação móvel deve permitir ao usuário cadastrado gerenciar sua conta.  |
| Objetivo do Teste 	| Verificar se o usuário consegue gerenciar sua conta. |
| Passos 	| - Acessar o aplicativo móvel <br> - Efetuar o login na tela inicial <br> - Acessar “Perfil” <br> - Clicar no botão “Gerenciar conta/Editar” <br> - Salvar alterações em “Salvar” |
|Critério de Êxito | - O usuário consegue gerenciar conta. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Registro de medicamentos** 	|
|	Requisito Associado 	| RF-004 - A aplicação móvel deve permitir ao usuário inserir o(s) nome(s) e a dosagem do(s) medicamento(s) que está tomando.  |
| Objetivo do Teste 	| Verificar se o usuário consegue inserir os dados dos medicamentos que está tomando. |
| Passos 	| - Acessar o aplicativo móvel <br> - Efetuar o login na tela inicial <br> - Acessar “Remédios/Medicamentos” <br> - Preencher os campos obrigatórios <br> - Salvar os dados em “Salvar” |
|Critério de Êxito | - O registro do(s) medicamento(s) foi realizado com sucesso.  |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Registro de consumo de água** 	|
|	Requisito Associado 	| RF-005 - A aplicação móvel deve permitir ao usuário registrar a quantidade de água que tomou durante o dia.  |
| Objetivo do Teste 	| Verificar se o usuário consegue registrar a quantidade de água que tomou durante o dia.  |
| Passos 	| - Acessar o aplicativo móvel <br> - Efetuar o login na tela inicial <br> - Acessar “Consumo de água” <br> - Preencher os campos obrigatórios <br> - Salvar os dados em “Salvar” |
|Critério de Êxito | - O registro de consumo de água foi realizado com sucesso.  |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Registro de atividades físicas** 	|
|	Requisito Associado 	| RF-006 - A aplicação móvel deve permitir ao usuário registrar qual(is) atividade(s) física(s) fez durante o dia e por quanto tempo. |
| Objetivo do Teste 	| Verificar se o usuário consegue registrar diariamente suas atividades físicas e tempo das atividades físicas.  |
| Passos 	| - Acessar o aplicativo móvel <br> - Efetuar o login na tela inicial <br> - Acessar “Exercícios” <br> - Preencher os campos obrigatórios <br> - Salvar os dados em “Salvar” |
|Critério de Êxito | - O registro da(s) atividade(s) física(s) foi realizado com sucesso.   |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Notificações** 	|
|	Requisito Associado 	| RF-007 - A aplicação móvel deve notificar o usuário quando este deve tomar seus medicamentos, tomar água e a data do próximo check-up. |
| Objetivo do Teste 	| Verificar se o usuário recebe as notificações corretamente. |
| Passos 	| **1ª forma:** <br> - O usuário ter efetuado o login  <br> **2ª forma:** <br> - Efetuar o login na tela inicial <br> - Acessar “notificações” <br> |
|Critério de Êxito |  **1ª forma:** <br> - O usuário irá receber automaticamente as notificações do aplicativo referente a medicamentos, água e check-up. <br> **2ª forma:** <br> - O usuário ao acessar notificações, irá aparecer todas as notificações recebidas no aplicativo referente a medicamentos, água e check-up. <br>   |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Compartilhar informações** 	|
|	Requisito Associado 	| RF-008 - A aplicação móvel deve permitir que o usuário compartilhe as informações registradas na aplicação. |
| Objetivo do Teste 	| Verificar se o usuário consegue compartilhar informações registradas no aplicativo.  |
| Passos 	| **De usuário para usuário:** <br> - Efetuar o login na tela inicial <br> - Acessar “Perfil” <br> - Clicar em “Compartilhar informações” <br> - Selecionar um usuário que deseja receber as informações <br> - Clicar em “Compartilhar” <br> **Por e-mail** <br> - Efetuar o login na tela inicial <br> - Acessar “Perfil” <br> - Clicar em “Compartilhar informações” <br> - Clicar em "E-mail" <br> - Preencher o e-mail <br> - Clicar em “Compartilhar”  |
|Critério de Êxito | - Perfil compartilhado com sucesso.   |
|  	|  	|
