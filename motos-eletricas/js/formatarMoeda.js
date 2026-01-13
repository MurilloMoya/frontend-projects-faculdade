export function formatarMoeda(valor) {
  const vl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
  return vl;
}
