// Foundation 6 MediaQuery info function
function zfMediaQueryInfo() {
  var currentSize = Foundation.MediaQuery.current;
  console.log('Current: ' + currentSize);

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
