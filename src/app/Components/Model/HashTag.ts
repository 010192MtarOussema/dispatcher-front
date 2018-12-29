export class HashTag {

    public  id :String;
    public  text :String;
    public  createdAt : Date;
    public  fromUser  : String;
    public  profileImageUrl : String;
    public  toUserId : number;
    public  inReplyToStatusId : number;
    public  inReplyToUserId  : number;
    public  inReplyToScreenName : number;
    public  fromUserId : number;
    public  languageCode : String;
    public  source : String;
    public  retweetCount : number;
    public  retweeted : boolean;
    public  retweetedStatus : HashTag;
    public  favorited : boolean;
    public  favoriteCount : number;

    public  entities : Object;
    public  user : Object;

}