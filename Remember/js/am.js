let anim_Img = document.getElementById("Sun_id");
//  (변수)                        // (태그 id 선택자)

// let tab = document.getElementById("tab");

// anim_Img.addEventListener("click", function() {

//     setTimeout(function() {
//         tab.style.display= "block";
//         tab.style.animation= "tab_slide 1.5s ease-out forwards";
//     });
// });

document.getElementById("Sun_id").addEventListener("click", function () {
                 // (태그 id 선택자)            // (클릭 시 함수 실행)

      anim_Img.style.width= "auto";     // 너비를 자동으로 설정
      anim_Img.style.height= "400px";   // 높이를 400px으로 설정
      anim_Img.style.transform="translate(-500px, 55px)";  // -500px만큼 왼쪽으로 이동하고 55px만큼 높이 이동
      anim_Img.style.transition="all 1.5s";  // 이동할 때 1.5s시간동안 이동
});
