//for youtube

class Youtube
{
url: string;
title: string;
id: string;
views: number;
channel: string;
likes: number;
dislikes: number;
description: string;
length: string;
captions: string[];

constructor(url:string, title:string, id:string, views:number, channel: string, likes: number,
dislikes: number, description: string, length: string, captions: string[] )
{
this.url = url;
this.title = title;
this.id = id;
this.views = views;
this.channel = channel;
this.likes = likes;
this.dislikes = dislikes;
this.description = description;
this.length = length;
this.captions = captions;
}

getTitleName = ()=>
{    
    console.log("Title Name: "+ this.title);
}

getVideoUrl = ()=>
{
    console.log("Video URL: "+ this.url);
}

getVideoId = ()=>
{
    console.log("VideoId: "+ this.id);
}

getNumberOfViews = ()=>
{
    console.log("View count: "+ this.views);
}

getChannelName = ()=>
{
    console.log("Channel Name: "+ this.channel);
}

getNumberOfLikes = ()=>
{  
    console.log("Likes count: "+this.likes);
}

getNumberOfDislikes = ()=>
{
    console.log("Dislikes count: "+ this.dislikes);
}

 getVideoDescription = ()=>
 {
    console.log("Video Description: "+ this.description);
 }

 getVideoLength = ()=>
 {
    console.log("Video length: "+ this.length);
 }

 getCaptions  = ()=>
 {
    console.log("Available captions: ");
    
    for(let i=0;i<this.captions.length;i++)
    {
        console.log(this.captions[i]+",");
    }

 }

}

let youtObject = new Youtube("https://www.youtube.com/watch?v=DRS_PpOrUZ4","Drake - In My Feelings","DRS_PpOrUZ4",73172301,"Drake",2500000,98000,"In My Feelings (Official Video) A FILM BY KARENA EVANS","7min,59sec",["English","Spanish"]);
youtObject.getCaptions();
youtObject.getChannelName();
youtObject.getNumberOfDislikes();
youtObject.getNumberOfLikes();
youtObject.getNumberOfViews();
youtObject.getTitleName();
youtObject.getVideoDescription();
youtObject.getVideoId();
youtObject.getVideoLength();
youtObject.getVideoUrl();