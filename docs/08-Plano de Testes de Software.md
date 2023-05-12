# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-melhor-idade/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-melhor-idade/blob/main/docs/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Apresentamos abaixo os cenários de testes elaborados para a realização dos testes da aplicação móvel, demonstrando os requisitos funcionais sendo satisfeitos.
 
| **Caso de Teste** 	| **CT-01 – Cadastrar perfil de usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - A aplicação móvel deve permitir ao usuário cadastrar uma conta. |
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos 	| - Acessar o aplicativo móvel <br> - Clicar em “Cadastro” na tela inicial <br> - Preencher os campos obrigatórios <br> - Clicar em "Cadastrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|Fluxo Alternativo | **Fluxo Alternativo 1:** <br> - Usuário inseriu um e-mail já cadastrado <br> - Mensagem de alerta: E-mail já cadastrado <br> - Deverá inserir outro e-mail não cadastrado para continuar. <br>**Fluxo Alternativo 2:** <br> - Usuário não preencheu todos os campos obrigatórios <br> - Mensagem de alerta: Favor preencher os campos obrigatórios<br> - Deverá preencher corretamente todos os campos obrigatórios para continuar. <br>**Fluxo Alternativo 3:** <br> - Usuário inseriu no campo "Confirmar sua senha" uma senha diferente do campo anterior <br> - Mensagem de alerta: As senhas não são iguais. Tente novamente. <br> - Deverá inserir corretamente a senha para continuar. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Efetuar login** 	|
|	Requisito Associado 	| RF-002 - A aplicação móvel deve permitir ao usuário cadastrado logar em sua conta.  |
| Objetivo do Teste 	| Verificar se o usuário consegue efetuar o login. |
| Passos 	| - Acessar o aplicativo móvel <br> - Clicar em “Entrar” na tela inicial <br> - Preencher os campos obrigatórios <br> - Clicar em "Entrar" |
|Critério de Êxito | - O login foi realizado com sucesso. |
|Fluxo Alternativo | **Fluxo Alternativo 1:** <br> - Usuário inseriu um e-mail ou senha inválidos <br> - Mensagem de alerta: "E-mail ou senha inválidos!" <br> - Deverá inserir uma senha e/ou e-mail válido <br>**Fluxo Alternativo 2:** <br> - Usuário não preencheu todos os campos obrigatórios <br> - Mensagem de alerta: Favor preencher os campos obrigatórios<br> - Deverá preencher corretamente todos os campos obrigatórios para continuar. |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Sair da conta** 	|
|	Requisito Associado 	| RF-003 -A aplicação móvel deve permitir ao usuário cadastrado sair da sua conta.  |
| Objetivo do Teste 	| Verificar se o usuário consegue sair de sua conta. |
| Passos 	| - Acessar o aplicativo móvel <br> - Efetuar o login na tela inicial <br> - Acessar “Perfil” <br> - Clicar no botão “Sair da conta” |
|Critério de Êxito | - O usuário consegue sair de sua conta. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Registro de medicamentos** 	|
|	Requisito Associado 	| RF-004 - A aplicação móvel deve permitir ao usuário inserir o(s) nome(s) e a dosagem do(s) medicamento(s) que está tomando.  |
| Objetivo do Teste 	| Verificar se o usuário consegue inserir os dados dos medicamentos que está tomando. |
| Passos 	| - Acessar o aplicativo móvel <br> - Efetuar o login na tela inicial <br> - Acessar “Medicamentos” <br> - Preencher os campos obrigatórios <br> - Salvar os dados em “Salvar” |
|Critério de Êxito | - O registro do(s) medicamento(s) foi realizado com sucesso.  |
|Fluxo Alternativo | **Fluxo Alternativo 1:** <br> - Usuário não preencheu todos os campos obrigatórios <br> - Mensagem de alerta: Favor preencher os campos obrigatórios<br> - Deverá preencher corretamente todos os campos obrigatórios para registrar. |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Registro de consumo de água** 	|
|	Requisito Associado 	| RF-005 - A aplicação móvel deve permitir ao usuário registrar a quantidade de água que tomou durante o dia.  |
| Objetivo do Teste 	| Verificar se o usuário consegue registrar a quantidade de água que tomou durante o dia.  |
| Passos 	| - Acessar o aplicativo móvel <br> - Efetuar o login na tela inicial <br> - Acessar “Água” no menu <br> - Clicar no botão com o símbolo "+" (mais) <br> - Preencher os campos obrigatórios <br> - Salvar os dados em “Salvar” |
|Critério de Êxito | - O registro de consumo de água foi realizado com sucesso.  |
|Fluxo Alternativo | **Fluxo Alternativo 1:** <br> - Usuário não preencheu todos os campos obrigatórios <br> - Mensagem de alerta: Favor preencher os campos obrigatórios<br> - Deverá preencher corretamente todos os campos obrigatórios para registrar. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Registro de atividades físicas** 	|
|	Requisito Associado 	| RF-006 - A aplicação móvel deve permitir ao usuário registrar qual(is) atividade(s) física(s) fez durante o dia e por quanto tempo. |
| Objetivo do Teste 	| Verificar se o usuário consegue registrar diariamente suas atividades físicas e tempo das atividades físicas.  |
| Passos 	| - Acessar o aplicativo móvel <br> - Efetuar o login na tela inicial <br> - Acessar “Atividade Física” <br> - Preencher os campos obrigatórios <br> - Salvar os dados em “Salvar” |
|Critério de Êxito | - O registro da(s) atividade(s) física(s) foi realizado com sucesso.   |
|Fluxo Alternativo | **Fluxo Alternativo 1:** <br> - Usuário não preencheu todos os campos obrigatórios <br> - Mensagem de alerta: Favor preencher os campos obrigatórios<br> - Deverá preencher corretamente todos os campos obrigatórios para registrar. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Check-up** 	|
|	Requisito Associado 	| RF-007 - A aplicação móvel deve permitir ao usuário registrar a data do último check-up e a data aproximada do próximo. |
| Objetivo do Teste 	| Verificar se o usuário consegue registrar seu check-up. |
| Passos 	|  - Efetuar o login na tela inicial <br> - Acessar “check-up” <br> - Preencher os campos obrigatórios <br> - Salvar os dados em “Salvar”|
|Critério de Êxito |  - O registro de check-up foi realizado com sucesso. |
|Fluxo Alternativo | **Fluxo Alternativo 1:** <br> - Usuário não preencheu todos os campos obrigatórios <br> - Mensagem de alerta: Favor preencher os campos obrigatórios<br> - Deverá preencher corretamente todos os campos obrigatórios para registrar. |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Compartilhar informações** 	|
|	Requisito Associado 	| RF-008 - A aplicação móvel deve permitir que o usuário compartilhe as informações registradas na aplicação. |
| Objetivo do Teste 	| Verificar se o usuário consegue compartilhar informações registradas no aplicativo.  |
| Passos 	| **Relatório geral:** <br> - Efetuar o login na tela inicial <br> - Acessar “Perfil” <br> - Clicar no ícone de compartilhar <br> - Selecionar a forma de compartilhamento <br> **Relatório individual** <br> - Efetuar o login na tela inicial <br> - Acessar qual relatório deseja compartilhar (Consumo de água, atividades físicas ou check-up) <br> - Na parte de relatórios , clicar no ícone de compartilhar <br> - Selecionar a forma de compartilhamento  |
|Critério de Êxito | - Relatório compartilhado com sucesso.   |
|  	|  	|
| **Caso de Teste** 	| **CT-09 – Instrução de uso** 	|
|	Requisito Associado 	| RF-009 -A aplicação móvel deve disponibilizar intruções para a utilização do aplicativo. 
| Objetivo do Teste 	| Verificar se o usuário consegue utilizar a funcionalidade de instrução de uso.  |
| Passos 	| **Relatório geral:** <br> - Efetuar o login na tela inicial <br> - Acessar “Atividade Física/Remédios/Check-up/Água” <br> - Clicar no ícone de instrução de uso <br> 
|Critério de Êxito | - Instrução de uso informada com sucesso.   |
|  	|  	|
