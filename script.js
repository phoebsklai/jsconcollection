let pageTitleElement;
let outputGridElement;
let projectDisplayElement;


let musicCollection = [
  {
    "itemTitle" : "olivia rodrigo",
    "category" : "female",
    "id" : "olivia",
    "newAlbum" : "recent album - sour",
    "description" : "Olivia Rodrigo is a 3 time Grammy award winning artist. She is a singer- songwriter and actor. Olivia Rodrigo found fame on the TV show 'High School Musical: The Musical: The Series' before releasing her No. 1 hit single Drivers License in 2021.",
    "image" : "https://yt3.ggpht.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "itemTitle" : "conan gray",
    "category" : "male",
    "id" : "conan",
    "newAlbum" :"recent album - kid krow",
    "description" : "Conan Gray is an American singer and songwriter. Raised in California and Georgetown, Texas, he began uploading vlogs, covers and original songs to YouTube as a teenager. Gray signed a record deal with Republic Records in 2018, where he released his debut EP Sunset Season. Top songs (according to me) include heather, the story, and wish you were sober.",
    "image" : "https://yt3.ggpht.com/gMO0WsckiQPI6NlWKCq51VJeMxY7GWiRkBgkyPalySBVKI41LR6-Dehlj8WDm6KHY1h07C1-Puc=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    "itemTitle" : "billie eilish",
    "category" : "female",
    "id" : "billie",
    "newAlbum" : "recent album - happier than ever",
    "description" : "Billie Eilish is an American singer-songwriter who first gained recognition in 2015 for the song Ocean Eyes and became, in 2020, the youngest person ever to win a Grammy for album of the year. Top songs (according to me) include ocean eyes, happier than ever, and halley’s comet.",
    "image" : "https://srhslariat.com/wp-content/uploads/2022/02/BE-HTE-Title-Cover.jpg"
  },
  {
    "itemTitle" : "doja cat",
    "category" : "female",
    "id" : "dojacat",
    "newAlbum" : "recent album - planet her",
    "description" : "Doja Cat is an American rapper, singer, songwriter, and record producer. Born and raised in Los Angeles, she began making and releasing music on SoundCloud as a teenager. Top songs (according to me) include ain’t shit, women, and kiss me more",
    "image" : "https://i.scdn.co/image/ab67616d0000b2734df3245f26298a1579ecc321"
  },
  {
    "itemTitle" : "justin bieber",
    "category" : "male",
    "id" : "justin",
    "newAlbum" : "recent album - justice",
    "description" : "Justin Bieber is a Canadian singer. He was discovered by American record executive Scooter Braun and signed with RBMG Records in 2008, gaining recognition with the release of his debut seven-track EP My World and soon establishing himself as a teen idol. Top songs  (according to me) include Lifetime and Ghost.",
    "image" : "https://media.pitchfork.com/photos/6058ad261f9ee7d62be45061/1:1/w_600/Justin%20Bieber:%20Justice.jpeg"
  },
  {
    "itemTitle" : "taylor swift",
    "category" : "female",
    "id" : "taylor",
    "newAlbum" : "recent album - red (taylor's version)",
    "description" : "Taylor Swift is an American singer-songwriter. Her discography spans multiple genres, and her narrative songwriting, which is often inspired by her personal life, has received widespread media coverage and critical praise. Top songs (according to me) include all too well (10 minute version), enchanted, and love story.",
    "image" : "https://media.pitchfork.com/photos/618c3ab295b32339a9955837/1:1/w_600/Taylor-Swift-Red-Taylors-Version.jpeg"
  },
  {
    "itemTitle" : "tate mcrae",
    "category" : "female",
    "id" : "tate",
    "newAlbum" : "recent single - chaotic",
    "description" : "Tate McRae is a Canadian singer and dancer. At the age of thirteen, she gained prominence as the first Canadian finalist on the American reality TV show So You Think You Can Dance. She is currently going to open up for Shawn Mendes new tour. Top songs (according to me) include she’s all I wanna be, you broke me first, and chaotic.",
    "image" : "https://upload.wikimedia.org/wikipedia/en/3/35/She%27s_All_I_Wanna_Be_Cover_Art.jpg"
  },
  {
    "itemTitle" : "harry styles",
    "category" : "male",
    "id" : "harry",
    "newAlbum" : "recent single - as it was",
    "description" : "Harry Styles is an English singer, songwriter and actor. His musical career began in 2010 as a solo contestant on the British music competition series The X Factor where he ended up becoming a part of a band called One Direction. Top songs (according to me) include as it was and fine line.",
    "image" : "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/w_1600%2Cc_limit/FINAL%2520%2520PFHH-notextwlogo.jpg"
  },
  {
    "itemTitle" : "giveon",
    "category" : "male",
    "id" : "giveon",
    "newAlbum" : "recent ep - when it's all said and done",
    "description" : "Giveon is an American R&B singer and songwriter. He rose to prominence with his collaboration with Drake on their 2020 single, Chicago Freestyle.Top songs  (according to me) include stuck on you, like I want you, and favorite mistake.",
    "image" : "https://miro.medium.com/max/1000/1*hu_gnhGpfGVvgW2mfOrVRQ@2x.jpeg"
  },
];

document.addEventListener("DOMContentLoaded", function(){


  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection != "item") {
    if (urlSection == "female") {
      pageTitleElement.innerText = "female artists:";
    }
    else if (urlSection == "male") {
      pageTitleElement.innerText = "male artists:";
    }

    for (let i = 0; i < musicCollection.length; i++) {
      if (musicCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
        createProjectPreview(musicCollection[i]);
      }
    }

  }

  else {
    for (let i = 0; i < musicCollection.length; i++) {
      if (musicCollection[i]["id"] == urlID) {
        createProjectPage(musicCollection[i]);
      }
    }
  }

});

function createProjectPreview(incomingJSON){

  let newPreviewLink = document.createElement("A");
  newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"];

  let newPreviewElement = document.createElement("DIV");
  newPreviewLink.appendChild(newPreviewElement);

  let newTitle = document.createElement("P");
  newTitle.classList.add("previewTitle");
  newTitle.innerText = incomingJSON["itemTitle"];
  newPreviewElement.appendChild(newTitle);

  let newThumbnail = document.createElement("IMG");
  newThumbnail.classList.add("thumbnail");
  newThumbnail.src = incomingJSON["image"];
  newPreviewElement.appendChild(newThumbnail);

let newPreviewAlbum = document.createElement("P");
  newPreviewAlbum.classList.add("albumTitle");
  newPreviewAlbum.innerText = incomingJSON["newAlbum"];
  newPreviewElement.appendChild(newPreviewAlbum);

  outputGridElement.appendChild(newPreviewLink);

}

function createProjectPage(incomingJSON) {

  let newProjectElement = document.createElement("DIV");

  let newTitle = document.createElement("P");
  newTitle.classList.add("itemTitle");
  newTitle.innerText = incomingJSON["itemTitle"];
  newProjectElement.appendChild(newTitle);

  let newMainImage = document.createElement("IMG");
  newMainImage.classList.add("mainImage");
  newMainImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newMainImage);

  let newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  projectDisplayElement.appendChild(newProjectElement);

}
