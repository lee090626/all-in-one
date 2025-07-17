function loadPage(page) {
    const frame = document.getElementById('contentFrame');
    frame.src = page;
  
    frame.onload = () => {
      try {
        const doc = frame.contentDocument || frame.contentWindow.document;
        frame.style.height = doc.body.scrollHeight + 'px';
      } catch (e) {
        // 다른 출처일 경우 에러 처리
        console.warn('iframe height 조절 불가:', e);
        frame.style.height = '800px'; // 기본 높이
      }
    };
  }

function Moving() {
  document.getElementById("contentFrame").scrollIntoView({
    behavior: "smooth"})
}

function iframeSee() {
  document.getElementById("contentFrame").style.display = "block";
}