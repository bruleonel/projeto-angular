# Exercícios:
### OBS:. O exercício da semana 1 está em outro repositório

<a href="https://github.com/bruleonel/angular">Clique aqui para ver o código</a>

<h3>Componente | Exercício | Semana 2 | Angular | aula 1</h3>

![semana2-1-gif](https://user-images.githubusercontent.com/104650333/228373826-7e27e6c2-0b3f-4a44-b927-a23de41fb464.gif)

<a href="https://github.com/bruleonel/projeto-angular/tree/main/semana2/exercicio-aula1-angular" text-decoration="none">Clique aqui 
para ver o código</a>

<h3>Módulos | Exercício | Semana 2 | Angular | aula 2</h3>

![semana2-gif](https://user-images.githubusercontent.com/104650333/228374020-bfd0d714-0e04-406c-a8ee-c4c68ce14904.gif)

Esse exercício foi feito antes da aula, na verdade é da semana 3. Eu refiz abaixo.
<br>
<a href="https://github.com/bruleonel/projeto-angular/tree/main/semana2/exercicio-aula2-gestao-de-funcionarios">Clique aqui para ver o código</a>

<h3>Typescript | Exercício | Semana 2</h3>

<a href="https://github.com/bruleonel/projeto-angular/tree/main/semana2
/typescript" text-decoration="none">Clique aqui para ver o código</a>

Aqui eu pensei em criar uma tabela, porém não quis extrapolar o que foi 
solicitado.

<h3>Exercício | Semana 3</h3>

![exercício-semana3](https://user-images.githubusercontent.com/104650333/228103976-cf4007fc-42e7-4c42-b1d4-13a0b448d6db.gif)

<a href="https://github.com/bruleonel/projeto-angular/tree/main/semana3/gestao-de-colaboradores" text-decoration=
"none">Clique aqui para ver o código</a>

<h3>Exercício | Semana 4</h3>

![semana4-gif (1)](https://user-images.githubusercontent.com/104650333/228101794-6dc0bcf0-28b1-4ecf-982e-425c047a1df6.gif)

<a href="https://github.com/bruleonel/projeto-angular/tree/main/semana4/mjv-cosmeticos" text-decoration=
"none">Clique aqui para ver o código</a>


<h3>Exercício | Semana 5</h3>

### Pipes
![pipes-gif](https://user-images.githubusercontent.com/104650333/230955784-b3898f01-ac44-4971-bf89-a150f4149757.gif)

### Routing
![login-gif](https://user-images.githubusercontent.com/104650333/230955977-971caa88-aa86-4dda-9bc4-d84328ab4863.gif)

### Typescript
<a href="https://github.com/bruleonel/projeto-angular/tree/main/semana5/typescript" text-decoration=
"none">Clique aqui para ver o código</a>

### Código da semana
<a href="https://github.com/bruleonel/projeto-angular/tree/main/semana5" text-decoration=
"none">Clique aqui para ver o código</a>

# Projeto Angular

Este projeto foi criado para acompanhamento do curso de Angular com a 
empresa MJV. Aqui deixarei registrado anotações importantantes e 
também meus exercícios separados por semana.

## Observações:
Ao criar o projeto angular ele vem com as configurações padrão, você 
pode criar componetes (pastas) para "montar" sua aplicação, como
por exemplo: Header.

Esse compenete poder ser compartilhado com outros componentes para 
facilidar no desenvolvimento. Não esquça de passar a rota dos 
componentes criados 
que fica no documento TS pra o app.component.html que será o responsável
 por carregar o projeto.
### Para baixar o Agular Cli usei:
- npm intall -g @angular/cli

### Erro: 'ng' não é reconhecido como um comando interno ou externo, um 
programa operável ou um arquivo em lotes.

Resolvi esse problema excluindo o nodeJs e instalando novamente. Após 
isso desintalei o angular e limpei o cache com os comandos:

npm uninstall -g angular-cli
npm uninstall --save-dev angular-cli
npm cache clean

Depois reinicei o pc e instalei o angular cli novamente:
npm install -g @angular/cli

### Para criar um projeto:
- ng new <nome>

### Para instalar dependencias quando você da um fork:
- nmp install

## Módulos

### O que são?
Os Modules gerenciam os components e é com eles que nós podemos modularizar
nossa aplicação. Resumindo, bem a grosso modo: É como se o Module fosse 
um cômodo e os Components os móveis que preenchem aquele cômodo.
Com os módulos você cria seções para a mesma aplicação. 

### Comando: 
- ng generate module <nome>

### Quando criar o módulo não esqueça de importar:
Dentro da pasta app.modules.ts >
Exemplo:<br>

![importando-gif](https://user-images.githubusercontent.com/104650333/228377257-94f0b623-df3f-419d-bbb8-4134e575362c.gif)

### E não esqueça de exportar:
Dentro da pasta <nome>  modules.ts >
Exemplo:<br>

![exportando-gif](https://user-images.githubusercontent.com/104650333/228377642-182bfacf-b14f-4416-8648-6aec836aa804.gif)


## Pra finalizar:
Vá dentro dos componetes exportados e copie a rota no arquivo TS pra colar
 no app.componet.html

Exemplo de rota: <app-header></app-header><br>
![app-rota-gif](https://user-images.githubusercontent.com/104650333/228377877-02868714-cd98-4445-b3b3-8da9bea8fca2.gif)


## Interpolação
Para fazer interpolação de TypeScript com HTML:
- Crie as variáveis dentro do arquivo TS, depois coloque detro das tags 
no arquivo HTML

Exemplo:

![interpolacao-gif](https://user-images.githubusercontent.com/104650333/228379567-cc2ee2bf-5590-4eef-b106-11e261daccc2.gif)

## Pipes:
- ng g pipe shared/pipes/phone
Material de consulta:
<a href="https://angular.io/guide/pipes" text-decoration=
"none">Angular Document</a>
 
## Routing
- Serve para trocas de página da aplicação
 
Para começar crie um projeto com ng new nomeProjeto>
Escolha utilizar o routing>
Repare que isso gerará um arquivo chamado routing:
 
![app-routing-gif](https://user-images.githubusercontent.com/104650333/230959418-144eaa0a-8fce-4d8d-baaf-d154337e243b.gif)

Agora no app componet não pode apagar tudo, lá terá uma rota: <!--<router-outlet>-->
 
 ### OBS: Um exemplo de como é feito está aqui nesse projeto na semana 5, criei a pasta login, depois a pasta login/componets depois o módulo de login, depois foi criado a pasta login/pages (sem a tag app rota porque será via routing) depois foi digitado o comando para criação da pages.
 
Crie seus  módulos> Para criar as páginas digite o comando: ng g c caminho/nomepagina --skip-selector>depois de criado você deve exportá-la>no app importe o modulo da página no app módule> no app routing crie as rotas de navegação:
 
![paginas-gif](https://user-images.githubusercontent.com/104650333/230962568-89f3bf13-186c-438a-8672-b821a1f12afe.gif)
 
Agora pra arrumar pelo menu de navegação:
Dentro da page coloque o header(ele será responsável pela navegação das pages), conteúdo e footer (lembre-se que são componentes != de pages):
 
![home-gif](https://user-images.githubusercontent.com/104650333/230965623-6e154b52-7953-4bf5-8f95-b925c7ea3e81.gif)
 
 Dentro do header que será compartilhado com todas as pages crie uma função que recebe a url e importe o router.
 
```ruby
    navigateByUrl(url: string) {
      this.router.navigateByUrl(url);
    }
```
 
 ![import](https://user-images.githubusercontent.com/104650333/230967548-f734d012-ab77-41ed-969f-607aa7c02233.gif)
 
 Depois dento da tag HTML em header crie a condição com a troca:
 
 ![nvg-gif](https://user-images.githubusercontent.com/104650333/230968703-2b8aef5a-4717-4787-81d8-deb183714803.gif)
 
 A segunta maneira é entrar no shared module e importar o routerModule e depois colocar o [routerLink]:

![routerLink-gif](https://user-images.githubusercontent.com/104650333/230969713-f32aa714-4829-424a-b2b9-9ed3145b7ddb.gif)

 
## Para rodar o projeto:
- ng serve -o

## Para criar um component:
- ng g component <nome>

## Diretivas
- ng g d <nome>


