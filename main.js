const {createStore}= Redux;
const todo= document.getElementById("todo");
const todoButton= document.getElementById("todoButton");
const dataList= document.getElementById("dataList");

const AddTodo = [];
const dataTodo=[];

const checkfunc=(e)=>{
	e.className= e.checked ? "checked": "domValue";
};

const deleteFunc = (e)=>{
	dataList.innerHTML="";
	let data = dataTodo.filter(r=>r!== e.name).join("");
	dataList.innerHTML=data;
	
};
const checkFunc = (dom)=>{
	return `<li><div class="listContainer"><div><input class="checksome" type="checkbox" onchange="checkfunc(this)" value=${dom} ><span class="domValue">${dom}</span></div><button onclick="deleteFunc(this)" name=${dom}>Delete</button></div></li>` ;
};
todoButton.addEventListener("click",(listener)=>{
	const innertodo = todo.value;
	AddTodo.push(checkFunc(innertodo));
	dataTodo.push(innertodo);
	dataList.innerHTML= AddTodo.join("");
	console.log(dataList.innerHTML);
	console.log("adding some changes",listener,innertodo);
});

