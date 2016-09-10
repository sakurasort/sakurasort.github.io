function OpenWnd() {
  var oWindow = window.open("", ""); 
  with (oWindow.document) {
    write("<html>");
    write("<head>");
    write("<title>BABYMETAL Song Sort: Raw Text Results<\/title>");
    write("<style>");
		write("body { background-color: #000; color: #7C0919; font-family: \"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,\"游ゴシック\",YuGothic,\"ヒラギノ角ゴ ProN W3\",\"Hiragino Kaku Gothic ProN\",\"メイリオ\",Meiryo,sans-serif; font-size: 15px; }");
		write("<\/style>");
    write("<\/head>");
    write("<body>");
    write(csort5);
    write("<hr>");
    write("<input type='button' value='Close' onclick='window.close()'>");
    write("<hr>");		
		write("<\/body>");
    write("<\/html>");
    close(); 
  }
}