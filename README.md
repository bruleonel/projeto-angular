# Informações importantes:

## Para baixar o Agular Cli usei:
npm intall -g @angular/cli
## Erro: 'ng' não é reconhecido como um comando interno ou externo, um programa operável ou um arquivo em lotes.

Resolvi esse problema excluindo o nodeJs e instalando novamente. Após isso desintalei o angular e limpei o cache com os comandos:

npm uninstall -g angular-cli
npm uninstall --save-dev angular-cli
npm cache clean

Depois reinicei o pc e instalei o angular cli novamente:
npm install -g @angular/cli

## Para criar um projeto:
ng new <nome>

## Para instalar dependencias quando você da um fork:
nmp install

## Para criar módulo:
ng generate module <nome>
- Com os módulos você cria seções para a mesma aplicação
## Para rodar o projeto:
ng serve -o

## Para criar um component:
ng g component <nome>

## Observações:
Ao criar o projeto angular ele vem com as configurações padrão, você pode criar componetes (pastas) para "montar" sua aplicação, como
por exemplo: Header.

Esse compenete poder ser compartilhado com outros componentes para facilidar no desenvolvimento. Não esquça de passar a rota dos componentes criados 
que fica no documento TS pra o app.component.html que será o responsável por carregar o projeto.

<h1>Angular</h1>

<h3>Exercício | Semana 2 | Angular | aula 1</h3>
<video src="https://www.loom.com/share/7424eba99bc041d7a41463d654ddb200" width="500" controls></video>