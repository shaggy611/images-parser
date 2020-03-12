let xhr = new XMLHttpRequest();
let url_begin = 'http://94.232.213.147:8668/parse?url=https://prnt.sc/';
let rand = makeid();
let url_target = url_begin + rand;
let complete_string;
let img_for_html;
let outer_div = document.querySelector('.paste_img');
console.log(url_target);
xhr.open('GET', url_target, true);


xhr.send();

// тело ответа {"сообщение": "Привет, мир!"}
xhr.onload = function Get_Page() {
  let responseObj = xhr.response;
  let begin_str = responseObj.indexOf('"https://');
  let end_str = responseObj.indexOf('.png"')
  console.log(begin_str);
  console.log(end_str);
  complete_string = responseObj.substring(begin_str, end_str);
  img_for_html = complete_string + '.png';
  console.log(img_for_html);
outer_div.innerHTML = '<img src=' + img_for_html + '">';
};

function makeid() {
  var text = "";
  /*var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";*/
	var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}



/*
let xhr_img = new XMLHttpRequest();
xhr_img.open('GET', Get_Page);
xhr_img.send();
xhr_img.onload = function () {
	outer_div.innerHTML = '<img src=' + img_for_html + '">';
}
*/
