<?php
  // 네이버 Papago NMT 기계번역 Open API 예제

  // $client_id = "jd33k7mfvm"; // 네이버 개발자센터에서 발급받은 CLIENT ID
  // $client_secret = "gwtk5YNevb7CCS4Ww1q7C06GOO66daeuY6GTU5li";// 네이버 개발자센터에서 발급받은 CLIENT SECRET

  // 창호꺼
  $client_id = "ERCpcIetnBrD5EHrNN2K"; // 네이버 개발자센터에서 발급받은 CLIENT ID
  $client_secret = "2_Roq9sdbi";// 네이버 개발자센터에서 발급받은 CLIENT SECRET
  // $from = $_GET['from'];
  // $to = $_GET['to'];

  $from = "en";
  $to = "ko";
  $txt = "hello";

  $decodeTxt = urldecode($txt);

  $encText = urlencode($decodeTxt);
  $postvars = "source=".$from."&target=".$to."&text=".$encText;
  // "source": "{원본 언어 코드}",
  // "target": "{번역 결과 언어 코드}",
  // "text": "{번역할 text}"
  // 언어코드는 info.txt를 참조하세요.
 

  $url = "https://openapi.naver.com/v1/papago/n2mt";
  // 창호선생님 url : https://openapi.naver.com/v1/papago/n2mt
  // $url = "https://naveropenapi.apigw.ntruss.com/nmt/v1/translation";


  $is_post = true;
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, $is_post);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $postvars);
  $headers = array();
  $headers[] = "X-Naver-Client-Id: ".$client_id;
  $headers[] = "X-Naver-Client-Secret: ".$client_secret;
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  $response = curl_exec ($ch);
  $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  // echo "status_code:".$status_code."<br>";
  curl_close ($ch);
  if($status_code == 200) {
    echo $response;
  } else {
    echo "Error 내용:".$response;
  }
?>