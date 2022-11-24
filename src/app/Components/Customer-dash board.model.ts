export class AdvertisementModel{
    Ad_ID: number=0;
    UserName: string='';
    Ad_Title: string='';
    Ad_Description: string='';
    PageNumber: string='';
    Category: string='';
    DateOfPost: string='';
    Price: string='';
}

export class CustomerModel{
    CID !:number;
    firstName:string='';
    lastName:string='';
    username:string='';
    emailId:string='';
    password:string='';
}

export class Feedback{
    Id:number=0;
    Name: string='';
    Email: string='';
    Subject: string='';
    Message: string='';
}