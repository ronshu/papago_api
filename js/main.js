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
const fromTextarea = document.querySelector('textarea');
const button = document.querySelector('button');
const inSelect = document.getElementById('inSelect');

// selectedArr(배열) = 번역할 문자 , in언어, out언어
const selectedArr = [];
const selectedObj = { from: 'aaa', to: '', txt: '' };
console.log(selectedObj);
inSelect.addEventListener('change', function () {
  let inSelectedValue = inSelect.options[inSelect.selectedIndex].value;
  console.log(inSelectedValue);
  selectedArr.push(inSelectedValue);
  console.log(selectedArr);
  selectedObj.from = '';
  console.log(selectedObj.from);
  selectedObj.from = inSelectedValue;
  console.log(selectedObj);
});

const outSelect = document.getElementById('outSelect');
outSelect.addEventListener('change', function () {
  let outSelectedValue = outSelect.options[outSelect.selectedIndex].value;
  console.log(outSelectedValue);
  selectedArr.push(outSelectedValue);
  console.log(selectedArr);
});

console.log(selectedArr);

// 2.콘솔에 불러온 언어를 수식에 대입한다.
async function getData(selectedData) {
  console.log(selectedData);
  // const txtValue = fromTextarea.value;
  const url = `./php/controller.php?from=${selectedArr[0]}&to=${selectedArr[1]}&txt=${selectedArr[2]}`;
  // const url = `./php/controller.php?txt=안녕하세요&from=ko&to=en`;

  console.log(url);

  // //naveropenapi.apigw.ntruss.com/nmt/v1/translation

  // // url 주소에는 절대 공백이 들어가면 안된다.
  // 주소 : https://yts.mx/api#list_movies > http get 첫번재 줄 복붙?쿼리=값&쿼리&값

  try {
    //데이터 요청 및 응답시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    console.log(data);
  } catch (error) {
    //실패 할 경우 두번째 코드 블럭으로 이동
    console.log('Error : ', error);
  }
}

// 3.클릭하면 번역한다

// 번역된 언어 :  message.result.translatedText
// 번역된 언어를 클래스가 outText 인 택스트영역에 나타내게

button.addEventListener('click', function () {
  const txtValue = fromTextarea.value;
  selectedArr.push(txtValue);
  // console.log(selectedArr);

  getData(selectedArr);
});

// 창호선생님 코드

// const fromTextValue = fromTextarea.value;

// async function translateLanguage() {
//   const fromTextValue = fromTextarea.value;

//   const inSelect = document.getElementById('.inSelect');
//   inSelect = inSelect.options[inSelect.selectedIndex].value;

//   // const outSelect = document.getElementById('.outSelect');
//   // outSelect = outSelect.options[outSelect.selectedIndex].value;
//   // const langFromPair = document
//   //   .querySelector('.inSelect')
//   //   .getAttribute('value');
//   // const langTopair = document.querySelector('.outSelect').getAttribute('value');

//   await fetch(
//     `/vtp/php/controller.php?txt=${fromTextValue}&from=${inSelect}&to=${outSelect}`
//   )
//     .then((data) => data.json())
//     .then((result) => {
//       console.log(result);
//       toTextArea.value = result.message.result.translatedText;
//       loaderRing.classList.remove('loading');
//     });
// }

// - - - - - - - -
