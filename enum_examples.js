var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 90] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 91] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        console.log(PrintMedia.Magazine);
        return PrintMedia.Magazine;
    }
}
var mediaType = getMedia('Forbes'); // returns Magazine
