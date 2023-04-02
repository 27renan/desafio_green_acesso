// Função para formatar data para padrão brasileiro.
function formatDate(value) {
  //let date = new Date(value);
  return new Date(value).toLocaleDateString('pt-BR');
}

export { formatDate };
