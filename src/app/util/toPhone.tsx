export function toPhone(input: string): string {
  // Remove qualquer caractere não numérico
  const numeros = input.replace(/\D/g, '')

  // Limita o número de dígitos a 11
  const limite = numeros.slice(0, 11)

  // Formata o número no padrão "(DD) 00000-0000"
  if (limite.length === 0) {
    return ''
  }
  if (limite.length <= 2) {
    return `(${limite}`
  } else if (limite.length <= 7) {
    return `(${limite.slice(0, 2)}) ${limite.slice(2)}`
  } else {
    return `(${limite.slice(0, 2)}) ${limite.slice(2, 7)}-${limite.slice(7)}`
  }
}

export function fromPhone(input: string): string {
  // Remove qualquer caractere que não seja numérico
  return input.replace(/\D/g, '')
}
