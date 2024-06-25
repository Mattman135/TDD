function caesarCipher(str, shift) {
  const n = shift > 0 ? shift : 26 + (shift % 26)
  return [...str]
    .map((l, i) => {
      const c = str.charCodeAt(i)
      if (c >= 65 && c <= 90)
        return String.fromCharCode(((c - 65 + n) % 26) + 65)
      if (c >= 97 && c <= 122)
        return String.fromCharCode(((c - 97 + n) % 26) + 97)
      return l
    })
    .join("")
}

module.exports = caesarCipher
