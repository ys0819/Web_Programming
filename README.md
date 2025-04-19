# 멘토링 4주차

## ✍️ 영타 연습  
[한컴 타자 연습](https://www.hancomtaja.com/ko)

---

## 📁 프로젝트 시작
1. 폴더 생성 후  `main.html` 파일 생성
2. 왼쪽 파일 목록에서 `main.html` 파일 **우클릭 → Open with Live Server**
3. 코드 수정 후 **실시간 반영이 안 될 경우:** `Ctrl + S`로 저장

---

## 🧾 main.html 코드 예시

```html
<!DOCTYPE html>
<html>
  <head>
    <title>글씨 꾸미기</title>
  </head>
  <body>
    <h1>글씨 정렬 바꾸기</h1>
    <p style="text-align: left">왼쪽</p>
    <p style="text-align: center">가운데</p>
    <p style="text-align: right">오른쪽</p>

    <h1>글씨 크기 바꾸기</h1>
    <p style="font-size: 48px">큰 글씨</p>
    <p style="font-size: 24px">보통 글씨</p>
    <p style="font-size: 8px">작은 글씨</p>

    <h1>글씨 굵기 바꾸기</h1>
    <p style="font-weight: 800">두꺼운 글씨</p>
    <p style="font-weight: 500">보통 글씨</p>
    <p style="font-weight: 300">얇은 글씨</p>

  </body>
</html>

```

main.html 실행 결과

<img width="497" alt="스크린샷 2025-04-19 오후 12 57 00" src="https://github.com/user-attachments/assets/905a2493-ef12-4471-95ce-c1aaad10c950" />



---
## 📚 오늘 배운 속성 목록
| 속성 | 설명 | 기타 |
|———|———|———|
| `text-align` | 글씨 정렬 지정 | left, center, right(지정하지 않으면 자동으로 왼쪽 정렬)|
| `font-size` | 글씨 크기 지정 | 40px, 24px(숫자가 클 수록 글씨가 커짐)|
| `font-weight` | 글씨 굵기 지정 | 800, 500(숫자가 클 수록 글씨가 커짐, 100~900)|
