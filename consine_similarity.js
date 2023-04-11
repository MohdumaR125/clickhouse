function cosineSimilarity(sentence1, sentence2) {
  // Tokenize the sentences
  let tokens1 = sentence1.toLowerCase().split(/\W+/);
  let tokens2 = sentence2.toLowerCase().split(/\W+/);

  // Create a set of all unique words
  let uniqueWords = new Set([...tokens1, ...tokens2]);

  // Create vectors for each sentence
  let vector1 = createVector(tokens1, uniqueWords);
  let vector2 = createVector(tokens2, uniqueWords);

  // Calculate the dot product
  let dotProduct = calculateDotProduct(vector1, vector2);

  // Calculate the magnitudes
  let magnitude1 = calculateMagnitude(vector1);
  let magnitude2 = calculateMagnitude(vector2);

  // Calculate the cosine similarity
  let cosineSimilarity = dotProduct / (magnitude1 * magnitude2);

  return cosineSimilarity;
}

function createVector(tokens, uniqueWords) {
  let vector = {};

  // Initialize vector with all dimensions set to 0
  for (let word of uniqueWords) {
    vector[word] = 0;
  }

  // Count the frequency of each word in the tokens
  for (let token of tokens) {
    vector[token]++;
  }

  return vector;
}

function calculateDotProduct(vector1, vector2) {
  let dotProduct = 0;

  // Calculate the dot product of each dimension
  for (let word in vector1) {
    dotProduct += vector1[word] * vector2[word];
  }

  return dotProduct;
}

function calculateMagnitude(vector) {
  let sumOfSquares = 0;

  // Calculate the sum of the squares of each dimension
  for (let word in vector) {
    sumOfSquares += vector[word] ** 2;
  }

  // Calculate the square root of the sum of squares
  let magnitude = Math.sqrt(sumOfSquares);

  return magnitude;
}
let sentence1 =
  "The cat sat on the mat do you know the word can be ery big but that does not mean we cant write big sentence.";
let sentence2 =
  "yes sure we can write big question but the idea behind it would be very big so what to do whean you have big number to qwrite you wrute anything";

let similarity = cosineSimilarity(sentence1, sentence2);

console.log(similarity);
