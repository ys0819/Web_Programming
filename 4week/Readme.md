# 멘토링 4주차

## ✍️ 영타 연습  
[한컴 타자 연습](https://www.hancomtaja.com/ko)

---

## 📁 프로젝트 시작
1. 폴더 생성 후 같은 폴더에 `main.html`, ‘color.html’ 파일 생성
2. 왼쪽 파일 목록에서 `main.html` 파일 **우클릭 → Open with Live Server**
3. 코드 수정 후 **실시간 반영이 안 될 경우:** `Ctrl + S`로 저장

---

## 🧾 main.html 코드 예시

```html
<!DOCTYPE html>
<html>
<head>
    <title>나의 웹페이지</title>
</head>
<body >
    <h1>HTML 꾸미기</h1>
    <a href="color.html">
        <button>색 바꾸기</button>
      </a>
      <br><br>
      <a href="size.html">
        <button>글씨 크기 바꾸기</button>
      </a>
      <br><br>
      <a href="align.html">
        <button>정렬 바꾸기</button>
      </a>
</body>
</html>

```

## 🧾 color.html 코드 예시

```html
<!DOCTYPE html>
<html>
<head>
    <title>색 바꾸기</title>
</head>
<body >
    <a href="main.html">
        <button>이전</button>
      </a>

      <h1 style="color: orange;">글씨 색 바꾸기</h1>
    <p style="color: green;">초록색</p>
    <p style="color: blue;">파란색</p>
    <p style="color: red;">빨강색</p>
    <p style="color: yellow;">노란색</p>

</body>
</html>

```
main.html 실행 결과
<img width="360" alt="스크린샷 2025-04-15 오후 1 22 44" src="https://github.com/user-attachments/assets/d039acd3-c863-4da9-b772-a4900e4b4103" />

color.htm
<img width="357" alt="스크린샷 2025-04-15 오후 1 22 55" src="https://github.com/user-attachments/assets/93495555-9389-4e78-8285-6e3d29606d31" />

---

## 📚 오늘 배운 태그 목록

| 태그 | 설명 |
|------|------|
| `<button>` | 버튼 |
| `<a>` | 파일 넣기 (같은 폴더의 파일을 넣어야함) |

---
## 📚 오늘 배운 CSS 속성 
| 속성 | 설명 |
|------|------|
| `href` | 이동할 파일 이름 지정 |
| `color` | 글씨 색을 지정 |
