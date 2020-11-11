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

// Q7 以下のボタンがクリックされた時、
// クリックされたボタンに「on」というクラスがついていれば、
// 「on」というクラスを外す
// 「on」というクラスがついていなければ「on」というクラスをつける

$('#q7-btn').on('click',function(){
	$(this).toggleClass('on');

});

// Q8　沖縄がクリックされた時、
// ddタグの要素をスライドで表示する、
// ※ siblingsとslideToggleを使用する。


$('#q8-btn').on('click',function(){
	$(this)
	.siblings()
	.slideToggle();

});

// Q9　以下のボタンがクリックされた時、
// ページの最上部に戻る
// ※ animateを使用

$('#q9-btn').on('click',function(){
	$('body, html').animate({ scrollTop:0},500);

});

// Q10 表示ボタンがクリックされた時、
// オレンジの玉を表示
// 非表示ボタンがクリックされた時、
// オレンジの玉を非表示
// ※ animateを使用

$('.q10-show-btn').on('click',function(){
	$('.q10-target').fadeIn(1000);
});

$('.q10-hide-btn').on('click',function(){
	$('.q10-target').fadeOut(1500);
});

// Q11 「Q11」という文字まで画面がスクロールされたら、
// オレンジの玉をFadeInする
// ※jQueryのfadeInメソッドは使用しない
// ※hideクラスを外すことでfadeInさせる

$(window).on('scroll',function(){
	let q11_position = $('#q11').offset().top;

	let wh = $(window).height();

	let now_position = $(window).scrollTop();

	if (q11_position <= wh + now_position){
		$('.q11-target').removeClass('hide');
	}else{
		$('.q11-target').addClass('hide');
	}
});



// Q12 以下のボタンがクリックされた時、
// オレンジの玉が画面からはみ出してる場合は
// 右方向に移動させる。
// 画面内にある場合は、
// 左方向に移動させる。
// ※hideクラスの取り外しで実現化
// hideクラスの内容はCSSを参照

$('#q12-btn').on('click',function(){
	$('.q12-target').toggleClass('hide');
});

});
