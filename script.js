function chunkString(str, chunkLength) {
  if (!str) return [];

  const chunks = [];
  for (let i = 0; i < str.length; i += chunkLength) {
    chunks.push(str.slice(i, i + chunkLength));
  }
  return chunks;
}

// Example usage:
console.log(chunkString("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));         // ["12", "34", "5"]
console.log(chunkString("abc", 5));           // ["abc"]
console.log(chunkString(null, 3));            // []
