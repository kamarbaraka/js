// program to check whether password is strong

let passwd = 'Kamar2samy';

let caps = /[A-Z]/.test(passwd);
let low = /[a-z]/.test(passwd);
let num = /[1-9]/.test(passwd)

if ((passwd.length >= 8) && caps && low && num)
    console.log('strong passwd');
else
    console.log('weak passwd')
