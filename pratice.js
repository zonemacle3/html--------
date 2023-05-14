/*
var title1 = "컴퓨터와 it기술의 이해";
var title2 = "소셜미디어의 이해와 활용 ";
var title3 = "멀티미디어 배움터 2.0";

document.write("<caption> 베스트셀러 </caption>");
document.write("<tr>");
document.write("<th> 순위 </th>")
document.write("<th> 제목 </th>")
document.write("</tr>");
document.write("<tr> <td> 1 </td> <td> " + title1 + "</td> </tr>");
document.write("<tr> <td> 2 </td> <td> " + title2 + "</td> </tr>");
document.write("<tr> <td> 3 </td> <td> " + title3 + "</td> </tr>");
*/
// alert("html5 프로그래밍 \n웹 사이트로 이동합니다.");

//var answer = confirm("주문한 서적을 결제하시겠습니까?");
//document.write("answer = " + answer + "<br>");

//var answer = prompt("서적 제목을 입력해 주세요.", "모바일 멀티미디어");
//document.write("answer = " + answer + "<br>");

/*
document.write("<caption> 책 주문 입력 내용 </caption>");
document.write("<tr>");
document.write("<th> 제목 </th>");
document.write("</tr>");

var book1 = "1 : 컴퓨터와 it기술의 이해";
var book2 = "2 : 소셜미디어의 이해와 활용";
var book3 = "3 : 멀티미디어 배움터 2.0";

var book_list = book1 + "\n" + book2 + "\n" + book3;
var choice = prompt("책 번호를 입력하세요...\n" + book_list);

if (choice == "1") {
    title = book1;
}
else if (choice == "2"){
    title = book2;
}
else if (choice == 3){
    title = book3;
}
else{
    document.write("리스트에 없는 책을 선택");
    title = "";
}

document.write("<tr>");
document.write("<td>" + title + "</td>");
document.write("</tr>");
*/

/*
document.write("<caption> 책 주문 입력 내용 </caption>");
document.write("<tr>");
document.write("<th> 제목 </th>");
document.write("</th>");

var book1 = "IT : 컴퓨터와 it기술의 이해";
var book2 = "sns : 소셜미디어의 이해와 활용";
var book3 = "multimedia : 멀티미디어 배움터";

var book_list = book1 + "\n" + book2 + "\n" + book3;
var choice = prompt("키워드를 입력하세요...\n" + book_list, "");

switch (choice) {
    case "IT":
        title = book1;
        break;
    case "sns":
        title = book2;
        break;
    case "multimedia":
        title = book3;
        break;
    default:
        alert("리스트에 없는 책을 선택했습니다.");
        break;
}

document.write("<tr>");
document.write("<td>" + title + "</td>");
document.write("</tr>");
*/

// 피보나치 수열 
/*
document.write("<tr>");
document.write("<td> value </td>");

fib1 = 1;
fib2 = 1;
while(fib2 < 1000) {
    document.write("<td>");
    document.write(fib2);
    document.write("</td>");
    tmp = fib1 + fib2;
    fib1 = fib2;
    fib2 = tmp;
}
document.write("<tr>");

// tmp (2)= 1+1
// fib1 (1) = fib2 (1)
// fib2 (1) = tmp (2) // fib1 (1) fib2 (2) tmp (2)
//
// tmp (3)= fib1 (1) + fib2 (2)
// fib1 (1) = fib2 (2)
// fib2 (2) = tmp (3) // fib1 (2) fib2(3) tmp(3)
//
// tmp (5) = fib1 (2) + fib2 (3)
// fib1 (2) = fib2 (3)
// fib2 (3) = tmp (5) // == fib1 (3) fib2 (5) tmp (5)
*/

/*
document.write("<h3> 책 주문 입력 내용 </h3>");

var book1 = "IT: 컴퓨터와 IT기술의 이해";
var book2 = "SNS: 소셜미디어의 이해와 활용";
var book3 = "multimedia: 멀티미디어 배움터";

var n = prompt("주문할 책 수량을 입력하세요.", "1");

for(i=0;i<n;i++){
    var book_list = book1 + "\n" + book2 + "\n" + book3;
    var choice = prompt("책 제목을 선택하세요...\n" + book_list, " ");

if(choice == "it"){
    title = book1;
}
else if(choice == "sns"){
    title = book2;
}
else if(choice == "multimedia"){
    title = book3;
}
else {
    alert("다른걸 입력하셨습니다.");
    title = "";
}

document.write("[" + (i+1) + "]" + title + "<br/>"); // 결과창 [숫자] 값만 영향을 줌 
}
*/
/*
document.write("<tr>");
document.write("<td> value </td>");

fib1 = 1;
fib2 = 1;
do{
    document.write("<td>");
    document.write(fib2);
    document.write("</td>");
    tmp = fib1 + fib2;
    fib1 = fib2;
    fib2 = tmp;
} while ( fib2<1000)
document.write("</tr>")
*/
/*
var a = eval("2+3*4+4");
document.write("evaluation result of a = "+a+"<br/>");
document.write("value of \"123.45\" = "+ parseInt("123.45") + "<br/>");
document.write("value of \"123.45\" = "+ parseFloat("123.45") + "<br/>");
*/
/*
function show_alert(){
    alert("5 seconds passed");
}
function show_message(){
    document.write("3 second passed");
}

setTimeout(show_alert, 5000);
setTimeout(show_message, 3000);
*/

/*
var today = new Date() // new 연산자를 사용해서 객체를 생성 (date()객체를 사용하기 위해 new date()를 생성함 )
var y = today.getFullYear(); // 컴퓨터 시계가 제공하는 연도
var m = today.getMonth()+1; // 메소드의 반환값이 0~11까지라 +1을 더해줌 
var d = today.getDate(); // 일 

document.write("오늘 날짜 : " + y + "년" + m + "월" + d + "일<br/>");

var start = new Date(); // 
var t1 = start.getTime();

var sum = 0;
for(i=0;i<1000000;i++)
{
   sum += i;
}

var end = new Date();
var t2 = end.getTime();

document.write("1에서 1000000까지 더하는데 걸린 시간: " + (t2-t1) + "ms<br/>");
document.write("<br/>");
document.write("sin(60도) = " + Math.sin(Math.PI/3) + "<br/>"); // math객체를 사용하기 위해선 메소드 앞에 math를 붙여야함 
document.write("ceil(4.3) = " + Math.ceil(4.3) +"<br/>");
document.write("floor(4.3 = " + Math.floor(4.3) + "<br/>");
document.write("round(4.3 = " + Math.round(4.3) + "<br/>");
*/

/* array 배열 
var book_arr = new Array("멀티미디어 배움터2.0", "생능출판사", "최윤철, 임순범", 25000, 442);

// 배열의 내용 
// book_arr[0] = "멀티미디어 배움터2.0"
// book_arr[1] = "생능출판사"
// ....

var book_arr2 = ["멀티미디어 배움터2.0", "생능출판사", "최윤철, 임순범", 25000, 442];

var arr100 = new Array(100); // 요소 개수가 100인 배열 생성 
*/

// array배열 2 
var arr = new Array("one", 2, "3", 4, "five");

arr[6] = 6;
arr[7] = "seven";
arr[9] = "3+6";
// arr = ["one", 2, "3", 4, "five", undefined, 6, "seven", undefined, "3+6"]

document.write("length of array: " + arr.length + "<br/>");

document.write("arr = [");
for(i=0;i<arr.length;i++) document.write(" "+ arr[i] + "");
document.write("] <br/> ");

arr.length = 3;
document.write("length of array : " + arr.length + "<br/>");

document.write("arr = [");
for(i=0;i<arr.length;i++) document.write(" "+ arr[i] + "");
document.write("] <br/>");

document.write("arr[" + 100 + "]: " + arr[100] + "<br/>");
document.write("length of array: " + arr.length + "<br/>");

arr[100] = 100;
document.write("arr[" + 100 + "]:" + arr[100] + "<br/>");
document.write("length of array : " + arr.length + "<br/>");


































