export function toDate(input: string): string {
  // Remove qualquer caractere não numérico
  const numeros = input.replace(/\D/g, '');

  // Limita o número de dígitos a 8
  const limite = numeros.slice(0, 8);

  // Formata o número no padrão "DD/MM/AAAA"
  if (limite.length === 0) {
    return '';
  }
  if (limite.length <= 2) {
    return limite;
  } else if (limite.length <= 4) {
    return `${limite.slice(0, 2)}/${limite.slice(2)}`;
  } else {
    return `${limite.slice(0, 2)}/${limite.slice(2, 4)}/${limite.slice(4)}`;
  }
}

export function fromDate(input: string): string {
  // Remove qualquer caractere que não seja numérico (como a barra /)
  return input.replace(/\D/g, '');
}

