const b_left = window.screenX;
const b_top = window.screenY;

const p_left = b_left + 100;
const p_top = b_top + 100;
// 팝업창을 열기 위한 함수
// 이 함수는 팝업창을 열 때 호출됩니다.
// function openPopup() {
//   window.open(
//     'popup.html',
//     'popupWindow',
//     `width=400,height=400,left=${p_left},top=${p_top},scrollbars=yes`
//   );
// }

function openPopup() {
  window.open(
    'popup.html',
    'popupWindow',
    `width=400, height=400,left=${p_left},top=${p_top}`
  );
}
