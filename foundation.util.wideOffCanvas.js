jQuery(document).ready(function(){

  //
  // Set wider (than standard 250px) width for right off-canvas, starting from a specific
  // breakpoint to be set as 'rightOffCanvasStart' variable value (see below).

  // Get some useful values first
  var globalWidth = Foundation.Box.GetDimensions(document.getElementById('globalWidth'));
  var pageSideMarginWidth = (globalWidth.parentDims.width - globalWidth.width)/2;
  var baseOffCanvasRightWidth = globalWidth.parentDims.width/2.33333;
  var offCanvasRightWidth = pageSideMarginWidth + baseOffCanvasRightWidth;

  // IMPORTANT: Set a breakpoint from which larger width
  // for right off-canvas will start being effective
  var largerRightOffCanvasStartBreakpoint = 'medium';


  // Set right off-canvas specific width
  function setOffCanvasRightWidth() {
    $('#offCanvasRight').css({
      'width': offCanvasRightWidth,
      '-webkit-transform': 'translateX(' + offCanvasRightWidth + 'px)',
      '-ms-transform': 'translateX(' + offCanvasRightWidth + 'px)',
      'transform': 'translateX(' + offCanvasRightWidth + 'px)'
    });
  }

  // Set page left indent value (page slides to the left when right off-canvas opens)
  function setPageLeftIndentValue() {
    $('#offCanvasRight').on('opened.zf.offcanvas', function() {
      $('#page-wrapper').css({
        '-webkit-transform': 'translateX(-' + baseOffCanvasRightWidth + 'px)',
        '-ms-transform': 'translateX(-' + baseOffCanvasRightWidth + 'px)',
        'transform': 'translateX(-' + baseOffCanvasRightWidth + 'px)'
      });
    }).on('closed.zf.offcanvas', function() {
      $('#page-wrapper').attr('style', '');
    });        
  }

  if (Foundation.MediaQuery.atLeast(largerRightOffCanvasStartBreakpoint)) {
    setOffCanvasRightWidth();
    setPageLeftIndentValue();
  }    

  $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
    var globalWidth = Foundation.Box.GetDimensions(document.getElementById('globalWidth'));

    if (Foundation.MediaQuery.atLeast(largerRightOffCanvasStartBreakpoint)) {
      setOffCanvasRightWidth();
      setPageLeftIndentValue();
    }
  });
});
