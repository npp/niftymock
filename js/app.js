(function(window, $) {
  $(document).foundation();

  // PATH Click
  $('path.land').on('click', function(){
    var state = $(this).attr('title');
    alert(state);
  });


  // TEXT
  $('text.text').on('click', function(){
    var target = $(this).data('target');
    var state = $('#' + target);
    alert(state.attr('title'));
  });

  var state = null;

  // TEXT HOVER
  $('text.text-out').hover(
    function() {
      var target = $(this).data('target');
      state = $('#' + target);
      state.css({'fill-opacity': .7});
    },
    function() {
      state.removeAttr('style');
    }
  );
}).call(this, window, window.jQuery);
