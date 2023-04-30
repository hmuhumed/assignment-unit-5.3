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
console.log(addToCollection('Lil Wayne', 'Tha Carter V', 2018));
console.log(addToCollection('6lack', 'Free 6lack', 2016));
console.log(addToCollection('Polo G', 'Hall Of Fame', 2021));
console.log(addToCollection('Roddy Ricch', 'Please Excuse Me For Being Antisocial', 2019));
console.log(addToCollection('The Beatles', 'Abbey Road', 1969));

function showCollection(){
    console.log('My favorite albums: ' , Collection.length)
    for (i = 0 ; i < Collection.length ; i++)
    console.log(Collection[i].title, 'by' , Collection[i].artist, 'published in year' , Collection[i].yearPublished);

};

showCollection(Collection);