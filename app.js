const tab_item = document.getElementsByClassName("tab-item");
const tab_content = document.getElementsByClassName("tab-content");



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








