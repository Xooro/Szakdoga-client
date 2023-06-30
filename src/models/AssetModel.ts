
import { Metadata } from "./MetadataModel";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export class Asset{
    Id:number;
    UserId:number;
    Name: string;
    ParentFolderId:number | null;
    Type:string;
    Metadata:Metadata[];
    Icon:IconProp;

    constructor(id:number,userId:number,name:string,parentFolderId:number|null,type:string, metadata:Metadata[], icon:IconProp){
        this.Id = id;
        this.UserId = userId;
        this.Name = name;
        this.ParentFolderId = parentFolderId;
        this.Type = type;
        this.Metadata = metadata;
        this.Icon = icon;
    }
 }