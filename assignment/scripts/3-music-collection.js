console.log('***** Music Collection *****')

let Collection = [];

function addToCollection(title , artist , yearPublished){
    let album = {
        title: title ,
        artist: artist ,
        yearPublished: yearPublished ,
    }
    Collection.push(album) ;
return album;
};


console.log(addToCollection('My Turn', 'Lil Baby', 2020));
console.log(addToCollection('Tha Carter V' , 'Lil Wayne', 2018));
console.log(addToCollection('Free 6lack', '6lack', 2016));
console.log(addToCollection('Hall Of Fame' ,'Polo G', 2021));
console.log(addToCollection('Please Excuse Me For Being Antisocial', 'Roddy Ricch', 2019));
console.log(addToCollection('Abbey Road' ,'The Beatles', 1969));

function showCollection(){
    console.log('My favorite albums: ' , Collection.length)
    for (i = 0 ; i < Collection.length ; i++)
    console.log(Collection[i].title, 'by' , Collection[i].artist, 'published in year' , Collection[i].yearPublished);

};

showCollection(Collection);

function findByArtist(artist){
    let searchArray = [];
    for( let i = 0; i<Collection.length; i++){
        if( Collection[i].artist === artist){
            searchArray.push(Collection[i]);
        }
    }
    return searchArray;
}

console.log(findByArtist('Drake'));
console.log(findByArtist('6lack'));