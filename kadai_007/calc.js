// 変数numに1以上のランダムな整数を代入する
let num = Math.floor(Math.random() * 100) + 1;

// 変数numが3と5の倍数の場合は「3と5の倍数です」と表示される
if (num % 15 === 0) {
  console.log('3と5の倍数です');
}

// 変数numが3の倍数の場合は「3の倍数です」と表示される
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

// 変数numが5の倍数の場合は「5の倍数です」と表示される
else if (num % 5 === 0) {
  console.log('5の倍数です');
}


//以外の場合は変数numを出力する
else {
  console.log(num);
}
