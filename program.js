l = 189;
stop = false;

function push(){ 
    l--
    var obj = event.target;
    obj.disabled = true;
    document.getElementById('value').innerText = l
    if(l<=0){
        stop=true;
        result()
    }
}

var num = 0;
var speed = 1000;
setInterval(function(){
    if(!stop){
        document.getElementById("time").innerText = num;
        num++;
    }
},speed);

function result(){
    // id属性で要素を取得
    var textbox_element = document.getElementById('content');

    // 新しいHTML要素を作成
    var new_element = document.createElement('h2');
    new_element.textContent = 'あなたのTIME : ' + num;

    // 指定した要素の中の末尾に挿入
    textbox_element.appendChild(new_element);
}