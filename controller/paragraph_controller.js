const Typo = require("typo-js");
const dictionary = new Typo("en_US");
const { WordTokenizer } = require("natural");
  const tokenizer = new WordTokenizer();
const spellcheck = (req,res)=>{
try {
    const review = req.body.review
    const tokenizedReview = tokenizer.tokenize(review);
   const mistake = []
   const sugest = []
    tokenizedReview.forEach(function(text){
    const isspellcheck = dictionary.check(text);
  if(isspellcheck == false){
        const suggestions = dictionary.suggest(text);
        sugest.push(suggestions)
       mistake.push(text);
  } 
    });
    res.status(200).json({
        response:[{'misspelt word':mistake},{"suggestions":sugest}]
      }) 
} catch (error) {
    console.log(error.message)
    res.status(400).json({
        status:'failed',
        message:error.message
      }) 
}
}

module.exports = { spellcheck }