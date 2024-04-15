$(function() {
    $('#dochome').click(function() {
        $('#doccontent-placeholder').load('../documentation/dochome.html');
        history.pushState({}, '', '../documentation/dochome.html');
    });
   
    $('#docelectronbuild').click(function() {
        $('#doccontent-placeholder').load('../documentation/electronbuild.html');
        history.pushState({}, '', '../documentation/electronbuild.html');
    });
   
    $('#docsteamsteamos').click(function() {
        $('#doccontent-placeholder').load('../documentation/steamsteamos.html');
        history.pushState({}, '', '../documentation/steamsteamos.html');
    });
   });
   