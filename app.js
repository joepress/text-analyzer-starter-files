function getWordCount(words){
	var getWordCount = {};
	for(var i =0; i < words.length;i++){
		wordCount[words[i]]++;
	}
	return wordCount.length;
}

function getUniqueWordCount(words){
	var uniqueWord = {};
	for (var i = 0; i < words.length;i++){
		if (words[i] in uniqueWord){
			uniqueWord[words[i]]++;
	}else{
		uniqueWord[words[i]] = 1;
	}
}
return uniqueWord.length;
}

function getAvgWordlength(words){
	var totalLength = words.join('').length;
	return (totalLength / words.length);
}

/*function getAvgSentenceLength(words){
	var totalSentences = 
}*/

function analyzeText(text){
	
	var wordCount = getWordCount(words);
	
	var uniqueWordCount = getUniqueWordCount(words);
	
	var avgWordLength = GetAvgWordLength(words);
	
	$('.js-wordCount').append(wordCount);
	$('.js-uniqueWord').append(uniqueWordCount);
	$('.js-avgWordLength').append(avgWordLength);
	$('.text-report').removeClass('hidden');
}


$(document).ready(function(){
	$('.js-textForm').submit(function(event){
		event.preventDefault();
	 var userText = $('#user-text').val();
	 analyzeText(userText);
		});
});


