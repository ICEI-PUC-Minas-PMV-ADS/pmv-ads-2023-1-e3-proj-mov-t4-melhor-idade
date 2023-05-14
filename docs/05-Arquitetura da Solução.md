# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-melhor-idade/blob/main/docs/04-Projeto%20de%20Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas.

![Melhor Idade- Classes  (2)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-melhor-idade/assets/100734910/02178d7f-5344-4d02-a28c-5bb68a5f58d9)

Figura 27 - Diagrama de classes

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades se relacionam entre si na aplicação.

![Untitled Diagram](https://user-images.githubusercontent.com/100742971/228888019-93c88dd9-4a50-4392-a1ea-a389628c8deb.png)

Figura 28 - Modelo entidade relacionamento

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

![Projeto de BD](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-melhor-idade/assets/100447878/1d04b440-1b70-4b5d-8ee6-c023f7f73927)


Figura 29 - Esquema relacional com as restrições de integridade

## Modelo Físico

Arquivo melhoridade.sql contendo os scripts de criação das tabelas do banco de dados, incluído na pasta <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-melhor-idade/tree/main/src">src\bd</a>.

## Tecnologias Utilizadas

As tecnologias listadas abaixo serão utilizadas para a implementação da solução.

* Expo Dev
* React
* React Native
* React Native Paper
* JSON
* JavaScript XML (JSX)

![Interacao](https://user-images.githubusercontent.com/100447878/227193733-c98bb22a-0916-4cce-b06c-5e0e3e3a8e1a.gif)

Figura 30 - Interação do usuário com o sistema

## Qualidade de Software

![Beige Minimalist Timeline Diagram Graph (1)](https://user-images.githubusercontent.com/100734910/224740162-b1e98ace-0fb5-46f1-af7a-52edf3474eea.png)

Figura 31 - Qualidade do software

### Subcaracterísticas:
> - Completude funcional: O software efetivamente possibilita executar as funções que são apropriadas.<br>
> - Funcionalidade apropriada: Indica qual o grau em que as funções do sistema facilitam a realização de tarefas e objetivos para os quais o sistema foi especificado.<br>
> - Comportamento em relação ao tempo: Mede o tempo que o software leva para processar suas funções.<br>
> - Coexistência: Avalia o grau no qual o produto pode desempenhar as funções requeridas eficientemente enquanto compartilha ambiente e recursos comuns com outros produtos sem impacto negativo nos outros produtos. <br>
> - Inteligibilidade: Tem relação com o grau de facilidade que um usuário tem em entender os conceitos chave do software e assim tornar-se competente no seu uso.<br>
> - Apropriação reconhecível: Mede o grau em que os usuários reconhecem que o produto é apropriado para suas necessidades. <br>
> - Estética de interface com usuário: Avalia o grau em que a interface com o usuário proporciona prazer e uma interação satisfatória. <br>
> - Maturidade: Medida da freqüência com que um software apresenta defeitos. <br>
> - Integridade: Avalia o grau em que os dados e funções do sistema são protegidos contra acesso por pessoas ou sistemas não autorizados. <br>
> - Confidencialidade: Avalia o grau em que as informações e funções do sistema estejam acessíveis por quem tenha a devida autorização para isso. <br>
> - Analisabilidade: Quando permite encontrar defeitos (depurar) facilmente quando erros ou falhas ocorrem.
> - Instalabilidade: Avalia a facilidade de se instalar o software.


## Métricas

![image](https://user-images.githubusercontent.com/100734910/227335601-7396da59-8913-4d50-9d8f-d97cb93a8008.png)

Figura 32 - Métricas de software
