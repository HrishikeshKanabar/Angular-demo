enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine=90,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        console.log(PrintMedia.Magazine);
        return PrintMedia.Magazine;
    }
}


let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine