function getWords(words){
	var getWordCount = {};
	for(var i =0; i < words.length;i++){
		getWordCount[words[i]]++;
	}
	return getWordCount.length;
}

function getUniqueWordCount(words){
	var uniqueWords = [];
  for (var i=0; i <words.length; i++) {
    if (uniqueWords.indexOf(words[i]) === -1) {
      uniqueWords.push(words[i]);
    }
  }
  return uniqueWords.length;
}
	
function getAvgWordLength(words){
	var totalLength = words.join('').length;
	return (totalLength / words.length).toFixed(2);
}

function getTokens(rawString) {

  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function getSentenceLength(string){
	return string.toString().toLowerCase().split(/[.,?!-]+/).filter(Boolean).sort().length;
}

function getAvgSentenceLength(string){
	var numOfSentence = getSentenceLength(string);
	return  numOfSentence.toFixed(2);
}



function analyzeText(words){
	
	var uniqueWordCount = getUniqueWordCount(words);
	
	var avgWordLength = getAvgWordLength(words);
	
	var avgSentenceLength = getAvgSentenceLength(words);
	
	$('.js-wordCount').append(words.length);
	$('.js-uniqueWord').append(uniqueWordCount);
	$('.js-avgWordLength').append(avgWordLength + " characters") ;
	$('.js-avgSentenceLength').append(avgSentenceLength + " words")
	$('.text-report').removeClass('hidden');
}


$(document).ready(function(){
	$('.js-textForm').submit(function(event){
		event.preventDefault();
	 var userText = $('#user-text').val();
	 analyzeText(getTokens(userText));
		});
});































