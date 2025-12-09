const fossilienDaten = {
    't-rex': {
        name: 'Tyrannosaurus Rex',
        beschreibung: 'Der "König der Tyrannenechsen" war einer der größten Fleischfresser, die je gelebt haben. Er lebte in der späten Kreidezeit und ist berühmt für seine massiven Kiefer und extrem kurzen Arme.',
        fossilisation: 'Häufig in sandigen oder schlammigen Sedimenten gefunden. Knochen wurden schnell mit Sediment bedeckt, was die Versteinerung begünstigte.',
        bild: 't-rex-skelett.jpg', 
        video: 'https://sketchfab.com/models/cc1d129e5ff3438db295177c13fa643d/embed' // Sketchfab URL T-Rex
    },
    'brontosaurus': {
        name: 'Brontosaurus',
        beschreibung: 'Ein riesiger, langhalsiger Sauropode und Pflanzenfresser aus dem Jura. Er konnte bis zu 22 Meter lang werden und gehört zu den größten Landtieren aller Zeiten.',
        fossilisation: 'Massive Knochen, oft in der Nähe von Flussbetten oder Seen gefunden, wo sie schnell eingebettet wurden. Die große Knochenmasse begünstigte die Erhaltung.',
        bild: 'brontosaurus-fossil.jpg',
        video: 'https://sketchfab.com/models/33c3bf78196b4e81a3706a132423236a/embed' // Sketchfab URL Brontosaurus
    },
    'mosasaurus': {
        name: 'Mosasaurus',
        beschreibung: 'Riesiger mariner Fleischfresser aus der Kreidezeit. Keine Dinosaurier, sondern große Meerechsen mit einem krokodilähnlichen Schädel, die die Ozeane dominierten.',
        fossilisation: 'Gefunden in Sedimenten ehemaliger Meere. Der Kadaver sank auf den Meeresboden und wurde von Schlamm oder Sand bedeckt, was Sauerstoff ausschloss und die Verwesung verlangsamte.',
        bild: 'mosasaurus-fossil.jpg',
        video: 'https://sketchfab.com/models/c440563c9ad149308fe6cbe70ea1d92f/embed' // Sketchfab URL Mosasaurus
    },
    'pterodaktylus': {
        name: 'Pterodaktylus',
        beschreibung: 'Ein kleinerer Flugsaurier (Pterosaurier) aus dem Jura mit einem langen, spitzen Schnabel. Gilt als eines der ersten entdeckten Flugsaurier-Fossilien.',
        fossilisation: 'Oft gefunden in feinkörnigem Plattenkalk (z.B. Solnhofen). Die feinen Sedimente ermöglichten die Erhaltung dünner Knochen und sogar von Weichteilabdrücken.',
        bild: 'pterodaktylus-fossil.jpg',
        video: 'https://sketchfab.com/models/60470d84cf794571bb8678dbb497cbbc/embed' // Sketchfab URL Pterodaktylus
    },
    'allosaurus': {
        name: 'Allosaurus',
        beschreibung: 'Einer der dominanten Fleischfresser des oberen Jura. Großer Theropode mit kräftigen Hinterbeinen und Knochenkämmen über den Augen. Er gilt als "Vorgänger" des T-Rex.',
        fossilisation: 'Zahlreiche Funde in der Morrison-Formation (USA). Die Knochen wurden oft durch Flüsse transportiert und dann schnell in tonigem Sediment abgelagert.',
        bild: 'allosaurus-fossil.jpg',
        video: 'https://sketchfab.com/models/8b9d63f63e7544c58a0587802e5ae2d8/embed' // Sketchfab URL Allosaurus
    },
    'ammonit': {
        name: 'Ammonit',
        beschreibung: 'Ausgestorbene Kopffüßer mit einem komplexen, spiralförmigen Gehäuse. Sie lebten vom Devon bis zur Kreidezeit und sind wichtige Leitfossilien zur Altersbestimmung.',
        fossilisation: 'Wegen ihrer robusten, kalkhaltigen Schale sehr häufig in Sedimentgesteinen der Meeresböden zu finden. Die Schalen wurden schnell in Kalkschlamm eingebettet.',
        bild: 'ammonit-fossil.jpg',
        video: 'https://sketchfab.com/models/c6b231ea7c1a4335b07b03da0ad3cec3/embed' // Sketchfab URL Ammonit (NEU)
    }
    // HIER WEITERE FOSSILIEN HINZUFÜGEN! (bis zu 20)
};


function zeigeFossil(fossilId) {
    const daten = fossilienDaten[fossilId];
    const displayElement = document.getElementById('fossil-details');

    if (daten) {
        displayElement.innerHTML = `
            <div class="fossil-details-panel">
                <h2>Exponat: ${daten.name}</h2>
                <div class="fossil-content">
                    <div class="media-area">
                        <img src="./bilder/${daten.bild}" alt="Fossil von ${daten.name}">
                        <iframe 
                            src="${daten.video}" 
                            title="3D-Modell von ${daten.name}" 
                            allow="autoplay; fullscreen; xr-spatial-tracking" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="text-info">
                        <h3>Was Du wissen musst:</h3>
                        <p>${daten.beschreibung}</p>
                        <h3>Der Weg zum Fossil:</h3>
                        <p>${daten.fossilisation}</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        displayElement.innerHTML = '<p class="error-message">Fossil nicht in der Datenbank gefunden.</p>';
    }
}
// Optional: Funktion beim Laden der Seite aufrufen
document.addEventListener('DOMContentLoaded', () => {
    // Hier können Sie später eine Funktion einfügen, die z.B. das erste Fossil 
    // automatisch lädt, wenn Sie keine Willkommensseite mehr möchten.
});