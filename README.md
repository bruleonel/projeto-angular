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