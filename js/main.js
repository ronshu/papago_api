/* ====== Common GET Request Function ====== */
// const url = new URL(window.location.href);
async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      //! : 아니라면
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

// function selectIn() {
//   var inSelect = document.getElementById('inLang');
// }
// console.log(selectIn);

// 여기가 from, to 변수 처리할 부분!!! textarea에 영어 입력하고, 번역하기 버튼 누르면 한글로 번역됨!
// 번역하는 함수

// 1. 선택한 언어를 콘솔에 불러온다
const inSelect = document.getElementById('inSelect');
const outSelect = document.getElementById('outSelect');

const fromTextarea = document.getElementById('inText');
const toTextarea = document.getElementById('outText');
const transBtn = document.querySelector('.trans-btn');
// const resetBtn = document.querySelector('.reset-btn');

// selectedArr(배열) = 번역할 문자 , in언어, out언어
const selectedArr = [];
// const selectedObj = { from: 'aaa', to: '', txt: '' };
const selectedObj = { from: 'en', to: 'ko', txt: '' };
console.log(selectedObj);

inSelect.addEventListener('change', function () {
  let inSelectedValue = inSelect.options[inSelect.selectedIndex].value;
  console.log(inSelectedValue);
  // selectedArr.push(inSelectedValue);
  // console.log(selectedArr);
  selectedObj.from = '';
  // console.log(selectedObj.from);
  selectedObj.from = inSelectedValue;
  console.log(selectedObj);
});

outSelect.addEventListener('change', function () {
  let outSelectedValue = outSelect.options[outSelect.selectedIndex].value;
  console.log(outSelectedValue);
  // selectedArr.push(outSelectedValue);
  // console.log(selectedArr);
  selectedObj.to = '';
  selectedObj.to = outSelectedValue;
  console.log(selectedObj);
});

// console.log(selectedArr);

// 2. 콘솔에서 불러온 언어를
async function getData(selectedData) {
  //selectedData는 함수 사용하는 인수임. forEach에서 큰거 ,작은거 나누는 것처럼. 그래서 선언 안 해도 실행이 되는 것이다.
  //console.log(selectedData);
  // const txtValue = fromTextarea.value;
  // const url = `./php/controller.php?from=${selectedData.from}&to=${selectedData.to}&txt=${selectedData.txt}`;
  const url = `https://api.mymemory.translated.net/get?q=${selectedData.txt}&langpair=${selectedData.from}|${selectedData.to}`;
  console.log(url);

  // //naveropenapi.apigw.ntruss.com/nmt/v1/translation
  // // url 주소에는 절대 공백이 들어가면 안된다.
  // 주소 : https://yts.mx/api#list_movies > http get 첫번재 줄 복붙?쿼리=값&쿼리&값

  try {
    //데이터 요청 및 응답시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    console.log(data);
    // 불러온 텍스트를 outText인 textarea 태그에 나타내 준다.
    toTextarea.value = data.responseData.translatedText;
    // toTextarea.value = data.result.translatedText;
  } catch (error) {
    //실패 할 경우 두번째 코드 블럭으로 이동
    console.log('Error : ', error);
  }
}

// 3.클릭하면 번역한다
// 번역된 언어 :  message.result.translatedText
// 번역된 언어를 클래스가 outText 인 택스트영역에 나타내게 하기
transBtn.addEventListener('click', function () {
  const txtValue = fromTextarea.value;
  selectedObj.txt = '';
  selectedObj.txt = txtValue;
  console.log(selectedObj);
  getData(selectedObj);
});

// 4. 스위치버튼 클릭하면 언어바꾸기
// const changeBtn = document.querySelector('.lang-change');
// changeBtn.addEventListener('click', function () {
//   const currentInLanguage = inSelect.value;
//   const currentOutLanguage = outSelect.value;

//   // async function translateLanguage() {
//   //   const fromTextValue = fromTextarea.value;
//   // 현재 선택된 언어 값을 서로 교환
//   inSelect.value = currentOutLanguage;
//   outSelect.value = currentInLanguage;

// const inSelect = document.getElementById('.inSelect');
// inSelect = inSelect.options[inSelect.selectedIndex].value;
// 창호선생님 조언 : 어트리뷰트 속성이용해서 바꿔라. https://www.codingfactory.net/10419

// setAttribute 클래스 이름도
// 속성이름(클래스 또는 아이디)
// 셋어트리뷰트. 아이디. 두번째 파라미터로 . 인
// });

// - - - - - - - -
// let outSelectedValue = outSelect.options[outSelect.selectedIndex].value;
// console.log(outSelectedValue);
// // selectedArr.push(outSelectedValue);
// // console.log(selectedArr);
// selectedObj.to = '';
// selectedObj.to = outSelectedValue;
// console.log(selectedObj);
