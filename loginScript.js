let account = {
    email: 'hoangcaonguyen1999@gmail.com',
    fullName: 'Hoàng Cao Nguyên',
    passWord: 'hoangcaonguyen1999',
    phoneNumber: '0987764770',
    address: 'hà đông, hà nội',
    dateOfBirth: '31/07/1999',
};

function login() {
    let email = document.getElementById("email").value;
    let passWord = document.getElementById("pass").value;
    if (email == "" && passWord == "") {
        alert(" chua nhap tai khoan mat khau!");
    } else {
        if (passWord.length > 8) {
            if (email.includes(" ") || passWord.includes(" ")) {
                alert("khong duoc chua space!!");
            } else {
                if (email === account.email && passWord === account.passWord) {
                    alert('abc');
                    window.location.replace("/Home/home.html");
                } else {
                    alert(" sai user name hoac password !");
                }
            }
        } else if (passWord.length < 8) {
            alert(" mat khau phai 8 ky tu tro len");
        }
    }
};