const subGalleryData = {
    BuzzCut: [
        "Cortes/BuzzCut.png",
        "Cortes/buzz cut/buzz cut 1.png",
        "Cortes/buzz cut/buzz cut 2.jpg",
        "Cortes/buzz cut/buzz cut 3.jpg",
    ],
    FadeMullet: [
        "Cortes/FadeMullet.jpg",
        "Cortes/fade mullet/fade mullet.png",
        "Cortes/fade mullet/fade mullet 2.jpg",
    ],
    CrewCut: [
        "Cortes/CrewCut.png",
        "Cortes/crew cut/crew cut 1.png",
    ],
    FadeCut: [
        "Cortes/FadeCut.jpg",
        "Cortes/fade cut/fade cut 1.jpg",
        "Cortes/fade cut/fade cut 2.jpg",
    
    ],
    Undercut: [
        "Cortes/Undercut.jpg",
        "Cortes/undercut/undercut 1.jpg",
        "Cortes/undercut/undercut2.jpg",
    ],
    Pompadour: [
        "Cortes/Pompadour.jpg",
        "Cortes/pompadour/pompadour 1.jpg",
        "Cortes/pompadour/pompadour 2.jpg",
        "Cortes/pompadour/pompadour 3.jpg",
        "Cortes/pompadour/pompadour 4.jpg",
    ],
    Quiff: [
        "Cortes/Quiff.jpg",
        "Cortes/quiff/quiff1.jpg",
        "Cortes/quiff/quiff2.jpg",
        "Cortes/quiff/quiff3.jpg",
    ],
    FrenchCrop: [
        "Cortes/FrenchCrop.jpg",
        "Cortes/french crop/french crop1.png",
        "Cortes/french crop/french crop 2.png",
        "Cortes/french crop/french crop3.png",
    ],
    CaesarCut: [
        "Cortes/CaesarCut.png",
        "Cortes/caesar cut/caesar cut 1.png",
    ],
    SidePart: [
        "Cortes/SidePart.jpg",
        "Cortes/side part/side part 1.jpg",
        "Cortes/side part/side part 2.jpg",
    ],
    TaperCut: [
        "Cortes/TaperCut.png",
        "Cortes/taper cut/taper cut 1.jpg",
        "Cortes/taper cut/taper cut 2.jpg",
    ],
    TaperFade: [
        "Cortes/TaperFade.jpg",
        "Cortes/taper fade/taperfade1.jpg",
        "Cortes/taper fade/taperfade2.jpg",
    ],
    IvyLeague: [
        "Cortes/IvyLeague.jpg",
        "Cortes/ivy league/ivy league 1.jpg",
        "Cortes/ivy league/ivy league 2.jpg",
    ],
    Mullet: [
        "Cortes/Mullet.png",
        "Cortes/mullet/mullet 1.jpg",
        "Cortes/mullet/mullet 2.jpg",
    ],
    TexturedCrop: [
        "Cortes/TexturedCrop.jpg",
        "Cortes/textured crop/textured crop 1.jpg",
        "Cortes/textured crop/textured crop2.jpg.png",
    ],
    SlickBack: [
        "Cortes/SlickBack.jpg",
        "Cortes/slick back/slick back 1.jpg",
        "Cortes/slick back/slick back 2.jpg",
    ],
    BroFlow: [
        "Cortes/BroFlow.jpg",
        "Cortes/bro flow/bro flow 1.jpg",
        "Cortes/bro flow/bro flow 2.jpg",
    ],
    SpikyHair: [
        "Cortes/SpikyHair.png",
        "Cortes/spiky hair/spiky hair 1.jpg",
        "Cortes/spiky hair/spiky hair 2.jpg",
        "Cortes/spiky hair/spiky hair 3.jpg",
    ],
    ManBun: [
        "Cortes/ManBun.png",
        "Cortes/man bun/man bun 1.jpg",
        "Cortes/man bun/manbun 2.jpg", 
    ],
    HighAndTight: [
        "Cortes/HighAndTight.jpg",
        "Cortes/high and tight/high and tight 1.jpg",
        "Cortes/high and tight/high and tight 2.jpg",
    ],
    FauxHawk: [
        "Cortes/FauxHawk.jpg",
        "Cortes/faux hawk/faux hawk1.jpg",
        "Cortes/faux hawk/faux hawk3.jpg",
    ],
    Mohawk: [
        "Cortes/Mohawk.jpg",
        "Cortes/mohawk/mohawk 1.jpg",
        "Cortes/mohawk/mohawk 2.jpg",
        "Cortes/mohawk/mohawk 3.jpg",
    ],
    Mohicano: [
        "Cortes/Mohicano.jpg",
        "Cortes/mohicano/mohicano 1.jpg",
        "Cortes/mohicano/mohicano 2.jpg",
    ],
    SemiHongo: [
        "Cortes/SemiHongo.jpg",
        "Cortes/semi hongo/semi hongo 1.jpg",
        "Cortes/semi hongo/semi hongo 2.jpg",
        "Cortes/semi hongo/semi hongo 3.jpg",
    ],
};


let currentCut = '';
let currentIndex = 0;

function showSubGallery(cut) {
    currentCut = cut;
    currentIndex = 0;
    updateSubGalleryImage();
    const subGallery = document.getElementById('subGallery');
    subGallery.classList.remove('hidden');
}

function updateSubGalleryImage() {
    const subGalleryContent = document.getElementById('subGalleryContent');
    const images = subGalleryData[currentCut];
    subGalleryContent.innerHTML = `<img src="${images[currentIndex]}" alt="${currentCut}">`;
}

function changeImage(direction) {
    const images = subGalleryData[currentCut];
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateSubGalleryImage();
}

function closeSubGallery() {
    const subGallery = document.getElementById('subGallery');
    subGallery.classList.add('hidden');
}

