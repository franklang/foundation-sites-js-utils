// Foundation 6 MediaQuery info function
function zfMediaQueryInfo() {
  /*
   * Get current size
   */
  var currentSize = Foundation.MediaQuery.current;  
  console.log('Current: ' + currentSize);
  
  /*
   * Global variables
   * Store breakpoints for either Mobile or Desktop views
   */
  var bpMobile = ['small', 'medium'];
  var bpDesktop = ['large', 'xlarge', 'xxlarge'];  

  /*
   * If current breakpoint is Mobile, else is Desktop
   */
  if($.inArray(Foundation.MediaQuery.current, bpMobile) != -1){
    console.log('Mobile!');
  } else {
    console.log('Desktop!');
  }
  
  /*
   * On breakpoint change - not to be mistaken with $(window).on('resize')
   */
  $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
    console.log('From: ' + oldSize + ' to: ' + newSize);

    var medium2small = oldSize == 'medium' && newSize == 'small';
    var medium2large = oldSize == 'medium' && newSize == 'large';
    
    if(medium2small){
     console.log('from MEDIUM to SMALL');
    }
    if(medium2large){
     console.log('from MEDIUM to LARGE');
    }
  });
}
zfMediaQueryInfo();
