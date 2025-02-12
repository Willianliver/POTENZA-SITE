Adições da versão 0.0.27 - 28
 - Correção do bug antigo das categorias, anteriormente as vezes quando era clicado na categoria, havia um redirecionado para o outro site da politica comercial.
 O que foi feito:

 Verificação de existência: Antes de modificar os dados, o código verifica se categories e categories.children existem.

 Remoção do domínio: A expressão regex ^https?:\/\/[^/]+ remove qualquer domínio (http://algumsite.com ou https://outrosite.com), deixando apenas o caminho relativo (/categoria/produto).

 Evita sobrescrita de URLs erradas: Dessa forma, o código sempre redireciona corretamente dentro do ambiente do próprio site.

Adições da versão 0.0.26
 -Bolinhas de categorias inspiradas nos destaques do instagram

(13/01/2025) - Aprimorei o layout e trabalhei na responsividade das categorias,mudei o ícone de transição, efetuei testes para ver se as categorias estavam sendo direcionadas corretamente, versão pronta para ser publicada.


(04/01/2025)- Fazendo o Get das categorias para os destaques, puxando nome e link da categoria
- Adicionando o modelo responsivo onde para dispositivos mobiles é criado um carrossel para visualizar todas as categorias.
-Modelo de rolagem infinita com uma seta para rolar para o lado
-Definição de quantidade de bolinhas a serem exibidas no layout

Erros a serem arrumados:
-Algo desconfigurou o layout no Desktop e isso fez que todos os componentes fossem para o lado esquerdo
-Colocar outro ícone de rolagem mais atraente e amigável e adicionar a opção de poder rolar deslizando e não somente com as setas



(03/01/2025)- Adicionando primeiro bloco personalizado em react
        - Destaques inspirados no instagram, com o objetivo de explorar mlhor os produtos além das categorias.


Adições da versão 0.0.25
 -Nova vitrine de produtos (1° posição na loja) | vitrine 4

Adições da versão 0.0.24
- Infocard Banner
- auto play no banner da home

Adições da versão 0.0.23
- Adição das Avaliações em todos os produtos avaliações