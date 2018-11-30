const {createStore}= Redux;
const todo= document.getElementById("todo");
const todoButton= document.getElementById("todoButton");
const dataList= document.getElementById("dataList");

const AddTodo = [];
const dataTodo=[];
changeFormat = (e)=>{
	console.log("changeFormat",e);
	return e.className="checked";
};
const checkfunc=(e)=>{
	e.className= e.checked ? "checked": "domValue";
 console.log(e,e.value,e.checked, "clicked");
};

const deleteFunc = (e)=>{
	console.log("data list",dataList.innerHTML);
	dataList.innerHTML="";
	let data = dataTodo.filter(r=>r!== e.name).join("");
	dataList.innerHTML=data;
	
	
};
const checkFunc = (dom)=>{
	return `<div class="listContainer"><div><input class="checksome" type="checkbox" onchange="checkfunc(this)" value=${dom} ><span class="domValue">${dom}</span></div><button onclick="deleteFunc(this)" name=${dom}>Delete</button></div>` ;
};
todoButton.addEventListener("click",(listener)=>{
	const innertodo = todo.value;
	AddTodo.push(checkFunc(innertodo));
	dataTodo.push(innertodo);
	dataList.innerHTML= AddTodo.join("");
	console.log(dataList.innerHTML);
	console.log("adding some changes",listener,innertodo);
});

