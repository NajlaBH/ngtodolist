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

  //task number
  taskid:number=0;

  //tasks sum up
  taskSum:number=0;

  constructor() { }

  ngOnInit(): void {
   this.isShown = false; 
  }

  //Able/disable button clear all
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
	    //tasklist
	    this.spliceIt('No tasks yet :)',this.taskList);
	    this.taskList.push(this.inputTask);
	    //clearall btn
	    this.isShown=true;
	    //tasksum
	    this.taskSum=this.taskList.length;
    }else if (this.inputTask == ""){
	    alert("Please add your task in the empty field.")
    }else if (this.taskList.length >2){
	    this.isShown=true;
    }else{
	    if(this.taskList=[]){
		    this.taskList=['No tasks yet :)'];
		    this.taskSum=0;
	    }
    }
  }

  //Delete task
  deleteTask(e:string,indx:number) {
	this.taskList.forEach((element,index)=>{
        if(element==e) this.taskList.splice(index,1);
        });
        this.taskSum=this.taskSum - 1;
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
     this.taskid=0;
     this.taskSum=0;
  }
}
