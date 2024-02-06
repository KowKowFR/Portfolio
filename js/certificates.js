const certificationsContainer = document.querySelector('.certificates__container');
const modal = document.getElementById('certificates-modal');
const modalContent = document.querySelector('.modal-content');

// Tableau d'objets contenant les informations des certifications (comme précédemment)
const certificationsData = [
  {
    imgSrc: "img/Certification CyberSécurité.png",
    altText: "",
    title: "Introduction CyberSécurité",
    details: "Un cours Introduction à la CyberSécurité de Cisco couvre les principes fondamentaux de la sécurité informatique, y compris les menaces, les vulnérabilités et les technologies de sécurité. Il aborde également des sujets tels que la gestion des identités et des accès, les politiques de sécurité, la sécurité réseau, la sécurité des applications et la gestion des incidents de sécurité. La certification associée, Cisco Certified CyberOps Associate, vise à valider les compétences en cybersécurité et peut être obtenue en passant un ou plusieurs examens.",
    link_certif: "https://www.netacad.com/fr/courses/cybersecurity/introduction-cybersecurity",
    link_diplome: "https://www.credly.com/badges/9e8bd9db-e282-4883-8733-c5f4c084c726",
  },

  {
    imgSrc: "img/Certification Pre Security.png",
    altText: "Certification Pre Security",
    title: "Pre Security",
    details: "Ce parcours d'apprentissage vous apprendra les connaissances techniques prérequises pour vous lancer dans la cybersécurité. Pour attaquer ou défendre une technologie, vous devez d’abord apprendre comment cette technologie fonctionne. Le parcours d’apprentissage Pré-Sécurité est une manière conviviale et ludique pour les débutants d’apprendre les bases. Votre parcours d’apprentissage en cybersécurité commence ici !",
    link_certif: "https://tryhackme.com/",
    link_diplome: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-IW4LRYFLWB.png",
  },

  {
    imgSrc: "img/Certification TCPIP.png",
    altText: "Certification TCP/IP",
    title: "Certification TCP/IP",
    details: "Dans ce cours, vous allez apprendre à créer votre propre réseau informatique et à utiliser l'outil de simulation Cisco Packet Tracer. Vous découvrirez également les modèles OSI et TCP/IP, qui vous permettront de prendre du recul sur votre pratique.",
    link_certif: "https://openclassrooms.com/fr/courses/6944606-concevez-votre-reseau-tcp-ip",
    link_diplome: "https://openclassrooms.com/fr/courses/6944606-concevez-votre-reseau-tcp-ip",
  },

  {
    imgSrc: "img/Certification HTML.png",
    altText: "Certification HTML / CSS",
    title: "Certification HTML / CSS",
    details: "Vous y apprendrez à structurer vos pages et à coder les balises de bases, cela notamment en faisant attention à la syntaxe ou en utilisant des images. Ensuite, ce sont les bases du langage CSS que vous découvrirez. Comme pour le codage en HTML, vous apprendrez à structurer une page et coder les balises de bases. Vous apprendrez par la suite à architecturer votre site web. Pour terminer votre apprentissage en ligne, vous bénéficierez d'un bonus qui vous expliquera comment inspecter et modifier le code HTML et CSS d'une page web sur Google Chrome. Après avoir suivi cette formation en ligne, vous aurez donc acquis les bases nécessaires pour vous lancer dans la création d'un site web sans passer par l'intermédiaire d'un intermédiaire, plateforme ou particulier, spécialisé dans le développement de sites internets.",
    link_certif: "https://www.skilleos.com/cours/apprendre-html-css-en-ligne-debutant#chapters",
    link_diplome: "https://static.skilleos.com/export/certificats/Certificat-ApprendreleslangagesHTMLetCSS-Corentin-TUJAGUE.pdf",
  },

  {
    imgSrc: "img/Certification MOOC ANSSI.png",
    altText: "Certification MOOC ANSSI",
    title: "Certification MOOC ANSSI",
    details: "Vous y trouverez l’ensemble des informations pour vous initier à la cybersécurité, approfondir vos connaissances, et ainsi agir efficacement sur la protection de vos outils numériques. Ce dispositif est accessible gratuitement. Le suivi intégral de ce dispositif vous fera bénéficier d’une attestation de réussite.",
    link_certif: "https://secnumacademie.gouv.fr/",
    link_diplome: "img/MOOC.pdf",
  },

  {
    imgSrc: "img/Certification Firewall.png",
    altText: "Certification Firewall",
    title: "Certification Firewall",
    details: "Dans ce cours, je vous propose de vous donner les premières armes pour empêcher leurs attaques en installant et configurant un firewall pour sécuriser votre réseau. Vous apprendrez aussi à créer une connexion sécurisée entre deux entreprises pour que personne ne puisse intercepter et lire les données qu’elles s’échangent.",
    link_certif: "https://openclassrooms.com/fr/courses/1946106-securisez-votre-reseau-grace-aux-vpn-et-firewall",
    link_diplome: "https://openclassrooms.com/fr/courses/1946106-securisez-votre-reseau-grace-aux-vpn-et-firewall",
  },

];

// Parcourez le tableau et créez des éléments HTML pour chaque certification
certificationsData.forEach(certification => {
  const certificationElement = document.createElement('div');
  certificationElement.classList.add('certificates__item');

  const imgElement = document.createElement('img');
  imgElement.src = certification.imgSrc;

  const titleElement = document.createElement('p');
  titleElement.textContent = certification.title;

  certificationElement.appendChild(imgElement);
  certificationElement.appendChild(titleElement);
  certificationsContainer.appendChild(certificationElement);
});

// Gestionnaire d'événements pour ouvrir le modal
certificationsContainer.addEventListener('click', (e) => {
    const certificationElement = e.target.closest('.certificates__item');
    
    if (certificationElement) {
      // Récupérez l'index de la certification cliquée
      const index = Array.from(certificationElement.parentNode.children).indexOf(certificationElement);
      
      // Utilisez l'index pour accéder aux informations de la certification
      const certification = certificationsData[index];
      
      // Mettez à jour le contenu du modal avec les informations de la certification
      modalContent.innerHTML = `
        <img class="modal__img" src="${certification.imgSrc}" alt="${certification.altText}" class="modal__img">
        <h2 class="modal__title">${certification.title}</h2>
        <p class="modal__text">${certification.details}</p>
        <a href="${certification.link_diplome}" class="modal__link" target="_blank">Voir le certificat</a>
        <a href="${certification.link_certif}" class="modal__link" target="_blank">En savoir plus</a>
      `;
    
      modal.style.display = 'block';
    }
  });
// Gestionnaire d'événements pour fermer le modal en cliquant en dehors de la boîte modale
window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
});