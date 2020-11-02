$(function(){

// Q1 クリックで要素のサイズを変更する
// ※クリックされたボタンに「small-btn」というクラスをつける

$('#q1-btn').on('click',function(){
	$(this).addClass('small-btn');
});

// Q2 ホバーで要素の透明度を変更する
// ※ボタンにマウスにカーソルが重なったらopacityを0.2にする

$('#q2-btn').on('mouseover',function(){
	$(this).css('opacity',0.2);
	$(this).css('color','red');
});

// Q3 ホバーで要素の透明度を変更する
// ※ボタンにマウスにカーソルが重なったらopacityを0.2にする
// マウスカーソルが離れたらopacityを1に戻す

$('#q3-btn')
	.on('mouseover',function(){
	$(this).css('opacity',0.2);
})
	.on('mouseleave',function(){
	$(this).css('opacity',1);

});

// Q4 以下のボタンがクリックされた時、 テキストを任意の文字に変更する。

$('#q4-btn').on('click',function(){
	$('#q4-text').text('変更完了');
});

// Q5 以下のボタンがクリックされた時、 テキストがオレンジの要素前に、以下の要素を追加する。
$('#q5-btn').on('click',function(){
	$('.orange').before('<li class="apple">りんご</li>');
});


// Q6 以下のボタンがクリックされた時、
// pタグ内の最後に以下の内容を追加

$('#q6-btn').on('click',function(){
	$('.q6-text').after('<p class="red">追加文字</p>');
});





});
