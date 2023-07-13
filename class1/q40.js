function make_album(artist, tittle, song) {
    this.artist = artist;
    this.tittle = tittle;
    if (song != undefined) {
        this.song = song;
    }
}
var album1 = new make_album("Atif aslam", "tu jo hai mera", "");
console.log(album1);
var album2 = new make_album("sonu", "tu jo hai mera jaan", "");
console.log(album2);
var album3 = new make_album("ali zafar", "ankh mai nasa hai", "jazbat");
console.log(album3);
