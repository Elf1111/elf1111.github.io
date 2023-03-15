$(function() {
  $('.question button').click(function() {
    var question = $('.question input').val();
    if (question.length > 0) {
      $.post('https://api.openai.com/v1/engine/davinci-codex/completions', JSON.stringify({
        prompt: question,
        max_tokens: 1024,
        temperature: 0.7
      }), function(data) {
        $('.answer p').text(data.choices[0].text);
      }, 'json');
    }
  });
});
