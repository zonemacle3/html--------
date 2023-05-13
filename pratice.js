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




























































