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
  taskList:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  spliceIt(element: string,stringArray:string[]){
    stringArray.forEach((value,index)=>{
        if(value==element) stringArray.splice(index,1);
    });
  }
  addToTaskList(){
    //console.log('it does nothing',this.inputTask);
    if(this.inputTask != "Please add your task here." && this.inputTask != ""){
	    this.spliceIt('No tasks yet :)',this.taskList);
	    this.taskList.push(this.inputTask);
    }else{
	    if(this.taskList=[]){
		    this.taskList=['No tasks yet :)'];
	    }
    }
  }

}
