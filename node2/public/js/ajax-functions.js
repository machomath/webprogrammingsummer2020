export function postAJAX(url, data, success, failure) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.onload = function () {
      if(xhr.status === 200){
        success(xhr.responseText);
      }else{
        failure(xhr.status)
      }
  };
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // xhttp.send("fname=Henry&lname=Ford");
  xhr.send(data);
}
