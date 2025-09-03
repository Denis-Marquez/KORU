// Obtém o valor do atributo "href" do primeiro link na página
const primeiroLink = document.querySelector("a");
if (primeiroLink) {
  const href = primeiroLink.getAttribute("href");
  console.log("Valor do atributo href:", href);
}