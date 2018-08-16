//for youtube
var Youtube = /** @class */ (function () {
    function Youtube(url, title, id, views, channel, likes, dislikes, description, length, captions) {
        var _this = this;
        this.getTitleName = function () {
            console.log("Title Name: " + _this.title);
        };
        this.getVideoUrl = function () {
            console.log("Video URL: " + _this.url);
        };
        this.getVideoId = function () {
            console.log("VideoId: " + _this.id);
        };
        this.getNumberOfViews = function () {
            console.log("View count: " + _this.views);
        };
        this.getChannelName = function () {
            console.log("Channel Name: " + _this.channel);
        };
        this.getNumberOfLikes = function () {
            console.log("Likes count: " + _this.likes);
        };
        this.getNumberOfDislikes = function () {
            console.log("Dislikes count: " + _this.dislikes);
        };
        this.getVideoDescription = function () {
            console.log("Video Description: " + _this.description);
        };
        this.getVideoLength = function () {
            console.log("Video length: " + _this.length);
        };
        this.getCaptions = function () {
            console.log("Available captions: ");
            for (var i = 0; i < _this.captions.length; i++) {
                console.log(_this.captions[i] + ",");
            }
        };
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
    return Youtube;
}());
var youtObject = new Youtube("https://www.youtube.com/watch?v=DRS_PpOrUZ4", "Drake - In My Feelings", "DRS_PpOrUZ4", 73172301, "Drake", 2500000, 98000, "In My Feelings (Official Video) A FILM BY KARENA EVANS", "7min,59sec", ["English", "Spanish"]);
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
