const {createStore}= Redux;
const todo= document.getElementById("todo");
const todoButton= document.getElementById("todoButton");
const dataList= document.getElementById("dataList");

const AddTodo = [];
const checkfunc=(e)=>{

};
const checkFunc = (dom)=>{
	return `<div><div><input type="checkbox" onchange="checkfunc(e)" value=${dom}/>${dom}</div><button></button></div>` ;
};
todoButton.addEventListener("click",(listener)=>{
	const innertodo = todo.value;
	AddTodo.push(checkFunc(innertodo));
	dataList.innerHTML= AddTodo.join("");
	console.log(dataList.innerHTML);
	console.log("adding some changes",listener,innertodo);
});

