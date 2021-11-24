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

  //check user typing
  userIsTyping = false;

  //add clear all button
  isShown: boolean = false ;

  constructor() { }

  ngOnInit(): void {
   this.isShown = false; 
  }

  toggleShow() {
  	this.isShown = ! this.isShown;
  }

  //Delete no tasks yet ...
  spliceIt(element: string,stringArray:string[]){
    stringArray.forEach((value,index)=>{
        if(value==element) stringArray.splice(index,1);
    });
  }


  //Add task to the list
  addToTaskList(){
    this.userIsTyping=false;
    //console.log('it does nothing',this.inputTask);
    if(this.inputTask != "Please add your task here." && this.inputTask != ""){
	    this.spliceIt('No tasks yet :)',this.taskList);
	    this.taskList.push(this.inputTask);
	    this.isShown=true;
    }else if (this.inputTask == ""){
	    alert("Please add your task in the empty field.")
    }else if (this.taskList.length >2){
	    this.isShown=true;
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

  //Entry key event
  onKeydown(event:any) {
    if (event.key === "Enter"){
      //alert("Enter is pressed");
      this.addToTaskList();
    }else{
      this.userIsTyping = true;
    }
  }

  //Delete all tasks
  clearAll(){
     this.taskList=[];
  }
}
