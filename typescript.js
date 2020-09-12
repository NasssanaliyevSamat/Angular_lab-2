function insert(num) {
    var element = document.getElementById("text_area");
    element.value += num;
}
function Clear() {
    var element = document.getElementById("text_area");
    element.value = "";
}
function Back() {
    var element = document.getElementById("text_area");
    element.value = element.value.substring(0, element.value.length - 1);
}
var next = 1;
var flag_1 = false;
var flag_2 = false;
function Equal() {
    var element = document.getElementById("text_area");
    var buffer = element.value;
    var label_1 = document.getElementById("last_1");
    var label_2 = document.getElementById("last_2");
    var label_3 = document.getElementById("last_3");
    if (element) {
        element.value = eval(element.value);
    }
    var lb_buff = buffer + "=" + element.value;
    if (flag_1) {
        label_3.value = label_2.value;
        label_2.value = label_1.value;
        flag_1 = false;
    }
    if (next == 1) {
        label_1.value = lb_buff;
    }
    if (next == 2) {
        if (flag_2) {
            label_3.value = label_2.value;
            flag_2 = false;
        }
        label_2.value = label_1.value;
        label_1.value = lb_buff;
    }
    if (next == 3) {
        label_3.value = label_2.value;
        label_2.value = label_1.value;
        label_1.value = lb_buff;
    }
    next++;
    if (next == 4) {
        next = 1;
        flag_1 = true;
        flag_2 = true;
    }
}
