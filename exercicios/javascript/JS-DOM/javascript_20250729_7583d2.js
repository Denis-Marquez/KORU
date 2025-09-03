// Remove um elemento específico de seu pai
const elementoParaRemover = document.getElementById("elementoARemover");
if (elementoParaRemover && elementoParaRemover.parentElement) {
  elementoParaRemover.parentElement.removeChild(elementoParaRemover);
}