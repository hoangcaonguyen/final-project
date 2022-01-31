function ChangeContents(index) {

    for (let i = 0; i < tab_item.length; i++) {
        tab_item[i].classList.remove("active");
        tab_content[i].classList.remove("active");
    }

    tab_item[index].classList.add("active");
    tab_content[index].classList.add("active");
}

// xứ lý đăng nhập, đăng ký tại hàm comfirm()
function comfirm() {
    document.getElementById("main").style.display = "block";
    document.getElementById("confirm").style.display = "none";
}


// xử lý hiện thị form nhập dữ liệu
function isFormActive(block, none) {
    document.getElementById(block).style.display = "block";
    document.getElementById(none).style.display = "none";
}