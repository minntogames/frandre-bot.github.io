// ウィンドウ幅に応じてヘッダーテキストを切り替える関数
function toggleHeaderText() {
    const headerTextDesktop = document.querySelector('.desktop-text');
    const headerTextMobile = document.querySelector('.mobile-text');
    const windowWidth = window.innerWidth;

    if (windowWidth < 700) { // 768px未満の幅をモバイルと判定
        headerTextDesktop.style.display = 'none';
        headerTextMobile.style.display = 'inline';
    } else {
        headerTextDesktop.style.display = 'inline';
        headerTextMobile.style.display = 'none';
    }
}

// ウィンドウサイズが変更されたときに関数を実行
window.addEventListener('resize', toggleHeaderText);

// 初期表示時にも関数を実行
toggleHeaderText();

function last() {
  const myDivElements = document.querySelectorAll('.lastupdate');
  
  const newText = "last Updated: ";
  
  myDivElements.forEach(function (div) {
     div.textContent = `${newText}${div.textContent}`
  });

}
last() 
