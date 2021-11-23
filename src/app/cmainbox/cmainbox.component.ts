import { Component, OnInit } from '@angular/core'; 


@Component({
  selector: 'app-cmainbox',
  templateUrl: './cmainbox.component.html',
  styleUrls: ['./cmainbox.component.css']
})
export class CmainboxComponent implements OnInit {

  //Declaration
  
  //Get the input task
  inputTask:string="";
  //Get the task list
  taskList:string[]=['No tasks yet :)'];
  //Get the task index
  idx:number=0;



  constructor() { }

  ngOnInit(): void {
  }

  
  //Delete no tasks yet ...
  spliceIt(element: string,stringArray:string[]){
    stringArray.forEach((value,index)=>{
        if(value==element) stringArray.splice(index,1);
    });
  }


  //Add task to the list
  addToTaskList(){
    //console.log('it does nothing',this.inputTask);
    if(this.inputTask != "Please add your task here." && this.inputTask != ""){
	    this.spliceIt('No tasks yet :)',this.taskList);
	    this.taskList.push(this.inputTask);
    }else if (this.inputTask == ""){
	    alert("Please add your task in the empty field.")
    }else{
	    if(this.taskList=[]){
		    this.taskList=['No tasks yet :)'];
	    }
    }
  }

  //Delete task
  deleteTask(indx:number) {
        this.taskList.splice(indx, 1);
  }

}
