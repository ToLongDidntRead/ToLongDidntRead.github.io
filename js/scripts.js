var button = document.getElementById("enter_button");
var input_text = $("#input").val();
var output_text = $("#output_sentiment_type_positive");
var output_concepts = $("#output_concepts");
var output_text_negative = $("#output_sentiment_type");
var output_text_sentiment = $("#output_sentiment");
var output_text_topic_posistive = $("#output_sentiment_topic_positive");
var output_text_topic_negative = $("#output_sentiment_topic_negative");
var apikey = "921638d2-08e2-4192-b827-edfa0c3a08d5";
/*$("#enter_button").click(function(e) {
});*/
var reload = function(){
  location.reload();
}
var main = function(){
  
var URL_Sentiment = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text="+$("#input").val()+"&apikey=" + apikey;
	
	$.ajax({
          type: 'POST',
          url: URL_Sentiment,
          dataType: 'json',
          success: processJSON,
          error: function(e)
          {
          		console.log(e + "sdfsdf")
          }    
      });
  var URL_Sentiment = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text="+$("#input").val()+"&apikey=" + apikey;
  
  $.ajax({
          type: 'POST',
          url: URL_Sentiment,
          dataType: 'json',
          success: processJSON4,
          error: function(e)
          {
              console.log(e + "sdfsdf")
          }    
      });
	console.log($("#input").val())
	var URL_Concept = "https://api.havenondemand.com/1/api/sync/identifylanguage/v1?text="+ $("#input").val() +"&apikey=" + apikey;
 	$.ajax({
          type: 'POST',
          url: URL_Concept,
          dataType: 'json',
          success: processJSON2,
          error: function(e)
          {
          		console.log(e + "sdfsdf")
          }    
      });
 	var URL_Concept = "https://api.havenondemand.com/1/api/sync/extractconcepts/v1?text="+ $("#input").val() +"&apikey=" + apikey;
 	$.ajax({
          type: 'POST',
          url: URL_Concept,
          dataType: 'json',
          success: processJSON3,
          error: function(e)
          {
          		console.log(e + "sdfsdf")
          }    
      });
 }

function processJSON(json){
	/*console.log(json.positive[0])
	console.log(json.negative[0].sentiment)
	console.log(json["aggregate"]["sentiment"])*/
	$("#output_sentiment").text("Sentiment is: " + json["aggregate"]["sentiment"])
	$("#output_sentiment_score").text("Sentiment percetage is: " + json["aggregate"]["score"]*100)

  if (json.negative[0].sentiment == undefined) {
    console.log(json.negative[0].sentiment)
      $("#output_sentiment_type").text("Common negative sentiment: null")
  }else{
    $("#output_sentiment_type").text("Common negative sentiment: " + json.negative[0].sentiment)
  }
	
}
function processJSON2(json){
	//console.log(json["language"])
	$("#output_language").text("Language is: " + json["language"])
}
function processJSON3(json){
	//console.log(json.concepts[1].concept)
    if (json.concepts[0].concept == undefined) {
      $("#output_concepts").text("Concept is: null")
  }else{
    $("#output_concepts").text("Concept is: " + json.concepts[0].concept)
  }
}
function processJSON4(json){
  if (json.positive[0].sentiment == undefined) {
      $("#output_sentiment_type_positive").text("Common positive sentiment: null")
  }else{
    $("#output_sentiment_type_positive").text("Common positive sentiment: " + json.positive[0].sentiment)
 }
}