export function capitalizeFirstLetter(word){
   const wordLowerCase = word.toLowerCase();
   return wordLowerCase.chartAt(0).toUpperCase() + wordLowerCase.slice(1)
}