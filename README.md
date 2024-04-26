# Loja simples

## :computer: Sobre
- Desafio proposto pela ROCKETSEAT no módulo 4 da Trilha Ignite.
- Layout de uma loja, consumindo os dados diretamente da Stribe
- Fiz uma implementação adicional, onde foi incluído um sistema de carrinho de compras que permite adicionar e remover itens selecionados.

### Resolução:
- Durante a execução desse projeto, ainda estávamos na fase Next 12, o que implicava o uso de SSR (Server-side Rendering) e SSG (Static Site Generation). Ambos os conceitos do Next foram empregados para otimizar o desempenho da aplicação. Contávamos com uma espécie de "servidor" do Next para realizar essas atividades, garantindo uma experiência mais fluida para o usuário. Dentro desse servidor (API), eram realizadas chamadas para recuperar dados do Stripe, garantindo uma integração direta e eficiente entre a loja online e a plataforma de pagamentos.
- Utilizei o Stitches (CSS in js) e Keen-slider (Carrossel "Slide")
- Para gerenciar toda a lógica do carrinho de compras para o Stripe, utilizei a biblioteca 'use-shopping-cart'. Ao clicar em comprar, o usuário é redirecionado para o checkout da Stripe, onde pode finalizar a compra do produto. Dependendo do retorno desse checkout, há um redirecionamento específico para a página de sucesso ou de erro, garantindo uma experiência fluída e informativa para o usuário.


 ## :rocket: Techs 
 
 * Next.js
 * TypeScript
 * Keen-slider
 * Stripe
 * use-shopping-cart
 * Axios
 * Vite
 

## Projeto

<div align="center">
  <img alt="Layout" src="https://github.com/wwilliamsantana/shopping-Ignite/assets/84254929/35c72c81-163d-49af-8350-3793dcee2b83" width="80%">
<hr>
  <img alt="Layout" src="https://github.com/wwilliamsantana/shopping-Ignite/assets/84254929/7d5cc4a6-1b6d-41ed-b683-7710fcf51486" width="80%">
<hr>
  <img alt="Layout" src="https://github.com/wwilliamsantana/shopping-Ignite/assets/84254929/755c887f-2236-487b-9ccb-736dce0b670a" width="80%">
<hr>
  <img alt="Layout" src="https://github.com/wwilliamsantana/shopping-Ignite/assets/84254929/2093095e-1bab-4021-bd6d-9a202670f9cc" width="80%">
</div>

<hr>
<hr>

## Implementação extra. Onde foi realizado mudanças no layout do projeto.

<div align="center">
  <img alt="Layout" src="https://github.com/wwilliamsantana/shop-shirt-ig/assets/84254929/a181b6e3-d28c-4140-86ad-5228a12a6f86" width="80%">
<hr>
  <img alt="Layout" src="https://github.com/wwilliamsantana/shop-shirt-ig/assets/84254929/b70420d8-b364-4cef-9c84-a4f31fb361e5" width="80%">
</div>



