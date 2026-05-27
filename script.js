const body = document.body;

function daftar() {
  const reguser = document.getElementById('user').value;
  const regpw = document.getElementById('pw').value;
  const regdate = document.getElementById('regmail').value;
  const regmail = document.getElementById('email').value;
  const hasil = document.getElementById('reghasil');

  if (reguser == '' || regpw == '' || regdate == '' || regmail == '') {
    hasil.innerText = 'isi formulir!';
    hasil.style.color = 'red';
    return;
  }

  localStorage.setItem('username', reguser);
  localStorage.setItem('password', regpw);
  localStorage.setItem('tanggal', regdate);
  localStorage.setItem('email', regmail);

  hasil.innerText = 'daftar berhasil';
  hasil.style.color = 'green';
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 2000);
}

function login() {
  const loguser = document.getElementById('loguser').value;
  const logpw = document.getElementById('logpw').value;
  const hasil2 = document.getElementById('loghasil');

  if (loguser == '' || logpw == '') {
    hasil2.innerText = 'isi formulir!';
    hasil2.style.color = 'red';
    return;
  }

  const loginuser = localStorage.getItem('username');
  const loginpw = localStorage.getItem('password');

  if (loginuser == null) {
    hasil2.innerText = 'akun tidak ditemukan';
    hasil2.style.color = 'yellow';
    return;
  }

  if (loguser == loginuser && logpw == loginpw) {
    hasil2.innerText = 'login berhasil';
    hasil2.style.color = 'green';
    setTimeout(() => {
      window.location.href = 'beranda.html';
    }, 2000);
  } else {
    hasil2.innerText = 'username atau password salah';
    hasil2.style.color = 'red';
  }
}
