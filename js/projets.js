const projets = [
    { 
        id: 1, 
        titre: "Projet 1", 
        img: "img/Certification CyberSécurité.png", 
        tags: ["E4", "Développement"] 
    },
    { 
        id: 2, 
        titre: "Projet 2", 
        img: "img/Certification CyberSécurité.png", 
        tags: ["E4", "Développement"] 
    },
    { 
        id: 3, 
        titre: "Projet 3", 
        img: "img/Certification CyberSécurité.png", 
        tags: ["E4", "Développement"] 
    },
    { 
        id: 4, 
        titre: "Projet 4", 
        img: "img/Certification CyberSécurité.png", 
        tags: ["E4", "Développement"] 
    },
    { 
        id: 5, 
        titre: "Projet 5", 
        img: "img/Certification CyberSécurité.png", 
        tags: ["E4", "Développement"] 
    },
];

function afficherProjets(listeDeProjets) {
    const container = document.querySelector('.projets__container');
    container.innerHTML = ''; // Nettoie le conteneur avant d'ajouter de nouveaux projets

    listeDeProjets.forEach(projet => {
        const projetElement = document.createElement('div');
        let tagsHTML = ''; // Prépare le HTML pour les tags
        projet.tags.forEach(tag => {
            tagsHTML += `<p class="tag">${tag}</p>`; // Crée un `<p>` pour chaque tag
        });

        projetElement.innerHTML = `
            <img src="${projet.img}" alt="projets" class="projets__item__img"></img>
            <h3 class="projets__item__title">${projet.titre}</h3>
            ${tagsHTML}        
        `;
        container.appendChild(projetElement);
    });
}


// Afficher tous les projets initialement
afficherProjets(projets);

document.querySelector('#button__all').addEventListener('click', () => afficherProjets(projets));

document.querySelector('#button__e4').addEventListener('click', () => {
    const projetsFiltres = projets.filter(projet => projet.tags.includes('E4'));
    afficherProjets(projetsFiltres);
});

document.querySelector('#button__e5').addEventListener('click', () => {
    const projetsFiltres = projets.filter(projet => projet.tags.includes('E5'));
    afficherProjets(projetsFiltres);
});

document.querySelector('#button__dev').addEventListener('click', () => {
    const projetsFiltres = projets.filter(projet => projet.tags.includes('Développement'));
    afficherProjets(projetsFiltres);
});

document.querySelector('#button__doc').addEventListener('click', () => {
    const projetsFiltres = projets.filter(projet => projet.tags.includes('Documentation'));
    afficherProjets(projetsFiltres);
});

document.querySelector('.projets__search').addEventListener('input', function(e) {
    const termeDeRecherche = e.target.value.toLowerCase();
    const projetsFiltres = projets.filter(projet => 
        projet.titre.toLowerCase().includes(termeDeRecherche) ||
        projet.tags.some(tag => tag.toLowerCase().includes(termeDeRecherche)) // Vérifie si un des tags contient le terme de recherche
    );
    afficherProjets(projetsFiltres);
});