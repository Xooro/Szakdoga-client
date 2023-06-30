import { Component } from '@angular/core';
import { Asset } from 'src/models/AssetModel';
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent{
  public testList:Asset[];
  public shownList:Asset[];
  public faGreaterThan = faGreaterThan;
  
  ngOnInit(){
    this.testList = this.fillTestList();
    this.shownList = [];
    this.shownList.push(this.testList[0]);

    this.showContents(this.shownList[0]);
  }
  private fillTestList(){
    let filledList:Asset[] = [];

    filledList.push(new Asset(1,1,"Root",null,".dir", [], faFolder));
    filledList.push(new Asset(2,1,"Junks",1,".dir", [], faFolder));
    filledList.push(new Asset(3,1,"Docs",1,".dir", [], faFolder));
    filledList.push(new Asset(4,1,"Games",1,".dir", [], faFolder));

    filledList.push(new Asset(5,1,"Plastic Bag",2,".dir", [], faFolder));
    filledList.push(new Asset(6,1,"Pen",2,".txt", [], faFile));
    filledList.push(new Asset(7,1,"Monster can",2,".odm", [], faFile));
    
    filledList.push(new Asset(8,1,"Banana peel",5,".odm", [], faFile));
    
    filledList.push(new Asset(9,1,"Hi Krisztofer",3,".txt", [], faFile));


    return filledList;
  }

  public folderAction(folder:Asset){
    let index = this.shownList.findIndex((item) => item == folder);

    if(index+2 <= this.shownList.length){
      if (this.shownList[index+1].ParentFolderId == folder.Id) 
        this.hideContents(folder);else{
      this.showContents(folder);
    }
    }else{
      this.showContents(folder);
    }
  }

  public showContents(folder:Asset){
    let contents = this.findChildren(folder);

    let index = this.shownList.findIndex((item) => item == folder);
    this.shownList = this.shownList.slice(0,(index+1)).concat(contents,this.shownList.slice(index+1));

  }

  public hideContents(folder:Asset){
    let contents = this.findChildren(folder);

    let index = this.shownList.findIndex((item) => item == folder);
    this.shownList = this.shownList.slice(0,(index+1)).concat(this.shownList.slice(index+contents.length+1));
  }

  private findChildren(folder:Asset){
    let contents:Asset[] = [];
    this.testList.forEach(function (item) {
      if(item.ParentFolderId == folder.Id){
        contents.push(item);
      }
    });
    return contents;
  }
}

