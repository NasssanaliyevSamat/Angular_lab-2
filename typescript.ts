
function insert(num:string) { // принимаем строку


	let element = <HTMLInputElement>document.getElementById("text_area");
	element.value += num;

}

function Clear(){
	let element = <HTMLInputElement>document.getElementById("text_area");
	element.value = "";
}

function Back(){
	var element = <HTMLInputElement>document.getElementById("text_area");
	element.value = element.value.substring(0, element.value.length-1);
}
let next : number = 1;
let flag_1 : boolean = false;
let flag_2: boolean = false;
function Equal(){
	
	var element = <HTMLInputElement>document.getElementById("text_area");
	var buffer: string = element.value;
	var label_1 = <HTMLInputElement>document.getElementById("last_1");
	var label_2 = <HTMLInputElement>document.getElementById("last_2");
	var label_3 = <HTMLInputElement>document.getElementById("last_3");
	if(element){
		element.value = eval(element.value);
	}
	var lb_buff : string = buffer + "=" + element.value;
	
	if(flag_1){
		label_3.value = label_2.value;
		label_2.value = label_1.value;
		flag_1 = false;

	}
	if(next == 1){
		label_1.value = lb_buff;
	}
	if(next == 2){
		if(flag_2){
			label_3.value = label_2.value;
			flag_2 = false;
		}
		label_2.value = label_1.value;
		label_1.value = lb_buff;
	}
	if(next == 3){
		label_3.value = label_2.value;
		label_2.value = label_1.value;
		label_1.value = lb_buff;

	}
	
	next ++;
	if (next == 4){
		next = 1;
		flag_1 = true;
		flag_2 = true;
	}
}

