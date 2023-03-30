var tanya = true;
while (tanya) {
  var p = prompt('pilih: gajah, semut, orang');

  var comp = Math.random();

  if (comp < 0.34) {
    comp = 'gajah';
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
  } else {
    comp = 'semut';
  }

  //menetukan Rules
  var hasil = '';

  if (p == comp) {
    hasil = 'SERI';
  } else if (p == 'gajah') {
    hasil = comp === 'orang' ? 'MENANG' : 'KALAH';
  } else if (p == 'orang') {
    hasil = comp === 'gajah' ? 'KALAH' : 'MENANG';
  } else if (p == 'semut') {
    hasil = comp === 'orang' ? 'KALAH' : 'MENANG';
  } else {
    hasil = 'memasukkan pilihan yang salah';
  }
  //tampilkan hasilnya
  alert(
    'kamu memilih:' +
      p +
      'dan komputer memilih:' +
      comp +
      '\nmaka hasilnya :' +
      hasil
  );

  tanya = confirm('lagi?');
}

alert('terima kasih sudah bermain');
