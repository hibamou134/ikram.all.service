import { ServiceItem, StaffItem, SectorItem, Testimonial, FaqItem, GalleryItem, MethodStep } from '../types';

import heroImg from '../assets/images/hero_cleaning_team_1785942124579.jpg';
import marbleImg from '../assets/images/marble_crystallization_1785942139928.jpg';
import staffImg from '../assets/images/housekeeping_staff_1785942154778.jpg';
import logoImg from '../assets/images/ikram_logo_1786044540174.jpg';
import svcCanapesImg from '../assets/images/svc_canapes_1786044564942.jpg';
import svcMarbreImg from '../assets/images/svc_marbre_crystallisation_1786044578831.jpg';
import svcFenetresImg from '../assets/images/svc_fenetres_1786044592581.jpg';
import svcTapisImg from '../assets/images/svc_tapis_1786044606672.jpg';
import riadImg from '../assets/images/riad_traditionnel_1786045631115.jpg';
import fauteuilsImg from '../assets/images/nettoyage_fauteuils_1786045642088.jpg';
import grandMenageImg from '../assets/images/grand_menage_1786045651863.jpg';

export const COMPANY_INFO = {
  name: "Ikram All Service",
  logo: logoImg,
  phone: "0653 35 03 04",
  phoneFormatted: "+212 6 53 35 03 04",
  whatsappNumber: "212653350304",
  whatsappUrl: "https://wa.me/212653350304?text=Bonjour%20Ikram%20All%20Service,%20je%20souhaite%20demander%20un%20rendez-vous.",
  location: "Marrakech et alentours",
  address: "Boulevard Mohamed V, Guéliz, Marrakech, Maroc",
  email: "contact@ikramallservice.ma",
  instagram: "https://www.instagram.com/ikram.all.service/",
  instagramHandle: "@ikram.all.service",
  workingHours: "7j/7 - 08h00 à 20h00",
  googleMapUrl: "https://maps.app.goo.gl/ki5UGNpxurkfJmMRA",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.11195679237!2d-8.08272995!3d31.63462965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sMarrakesh!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "nettoyage-general",
    title: "Nettoyage général",
    category: "cleaning",
    description: "Entretien complet régulier ou ponctuel de vos espaces de vie et de travail pour une hygiène irréprochable.",
    iconName: "Sparkles",
    image: heroImg,
    features: ["Dépoussiérage méticuleux", "Désinfection surfaces", "Aspiration & lavage sols", "Nettoyage sanitaires"],
    popular: true,
  },
  {
    id: "grand-menage",
    title: "Grand ménage",
    category: "cleaning",
    description: "Nettoyage en profondeur post-travaux, emménagement, déménagement ou remise à neuf saisonnière de votre villa ou appartement.",
    iconName: "Home",
    image: grandMenageImg,
    features: ["Détartrage complet", "Dégraissage cuisine", "Nettoyage portes & plinthes", "Désinfection globale"],
    popular: true,
  },
  {
    id: "nettoyage-fenetres",
    title: "Nettoyage des fenêtres",
    category: "cleaning",
    description: "Lavage professionnel des vitres, baies vitrées et châssis pour une transparence parfaite sans trace.",
    iconName: "Sun",
    image: svcFenetresImg,
    features: ["Vitres intérieures & extérieures", "Nettoyage cadres & rails", "Traitement anti-traces", "Accès en hauteur"],
  },
  {
    id: "nettoyage-canapes",
    title: "Nettoyage des canapés",
    category: "specialized",
    description: "Shampouinage par injection-extraction de vos canapés en tissu ou cuir pour éliminer taches, acariens et mauvaises odeurs.",
    iconName: "Armchair",
    image: svcCanapesImg,
    features: ["Détachage ciblé", "Shampouinage à chaud", "Traitement anti-bactérien", "Séchage rapide"],
    popular: true,
  },
  {
    id: "nettoyage-tapis",
    title: "Nettoyage des tapis",
    category: "specialized",
    description: "Nettoyage délicat et désinfection profonde des tapis modernes et artisanaux marocains tout en préservant leurs fibres.",
    iconName: "Layers",
    image: svcTapisImg,
    features: ["Aspiration haute puissance", "Shampouinage doux", "Ravinement des couleurs", "Désodorisation"],
  },
  {
    id: "nettoyage-matelas",
    title: "Nettoyage des matelas",
    category: "specialized",
    description: "Traitement anti-acariens et désinfection en profondeur de la literie pour garantir un sommeil sain et hygiénique.",
    iconName: "Bed",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    features: ["Élimination des acariens", "Traitement des aureoles", "Désinfection UV/Vapeur", "Anti-allergènes"],
  },
  {
    id: "nettoyage-chaises",
    title: "Nettoyage des chaises & fauteuils",
    category: "specialized",
    description: "Rénovation, détachage et shampouinage de vos fauteuils, chaises rembourrées, canapés individuels et assises de salon.",
    iconName: "SquareDot",
    image: fauteuilsImg,
    features: ["Nettoyage tissu, velours & cuir", "Infiltration produit actif détachant", "Rénovation des assises", "Séchage rapide optimisé"],
  },
  {
    id: "cristallisation-marbre",
    title: "Cristallisation du marbre",
    category: "marble",
    description: "Traitement thermo-chimique redonnant la dureté, la brillance d'origine et la protection contre les rayures à vos sols en marbre.",
    iconName: "Gem",
    image: svcMarbreImg,
    features: ["Action micro-cristallisante", "Dureté renforcée", "Protection contre l'usure", "Finition brillante haute résistance"],
    popular: true,
  },
  {
    id: "poncage-marbre",
    title: "Ponçage du marbre",
    category: "marble",
    description: "Restauration en profondeur par ponçage diamanté pour éliminer les griffes, effritements et dénivelés de vos marbres.",
    iconName: "Disc",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    features: ["Ponçage à l'eau sans poussière", "Élimination des rayures profondes", "Planéité parfaite", "Préparation à la cristallisation"],
  },
  {
    id: "polissage-au-sel",
    title: "Polissage au sel",
    category: "marble",
    description: "Méthode traditionnelle haut de gamme au sel et à l'acide doux pour affiner le grain et sublimer la clarté naturelle de la pierre.",
    iconName: "Sparkle",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    features: ["Sublimation des veines", "Finition veloutée ultra-lisse", "Révélation de la couleur", "Technique d'artisan d'art"],
  },
  {
    id: "effet-miroir-marbre",
    title: "Effet miroir pour marbre",
    category: "marble",
    description: "Finition ultime apportant une réflexion parfaite de la lumière et une brillance spectaculaire digne des grands palais marrakchis.",
    iconName: "Maximize2",
    image: marbleImg,
    features: ["Reflet miroir cristallin", "Effet déperlant hydrofuge", "Luminosité maximale", "Rendu luxueux d'exception"],
    popular: true,
  },
];

export const STAFF_SERVICES: StaffItem[] = [
  {
    id: "femme-de-menage",
    title: "Femme de ménage",
    role: "Entretien résidentiel & hôtelier",
    description: "Personnel qualifié pour l'entretien quotidien de villas, riads et appartements à Marrakech. Ponctuelle, discrète et rigoureuse.",
    iconName: "UserCheck",
    image: staffImg,
    attributes: ["Contrats vérifiés & casier judiciaire vierge", "Savoir-faire produits & textiles", "Discrétion absolue & fiabilité"],
    badge: "Sélectif 100%"
  },
  {
    id: "nounou",
    title: "Nounou & Babysitter",
    role: "Garde d'enfants qualifiée",
    description: "Garde d'enfants professionnelle et attentive pour prendre soin de vos tout-petits en toute sécurité et confiance.",
    iconName: "Heart",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    attributes: ["Expérience avec jeunes enfants", "Notions de premiers secours", "Activités éveil & bienveillance"],
    badge: "Confiance & Sécurité"
  },
  {
    id: "garde-malade",
    title: "Garde malade",
    role: "Assistance & accompagnement à domicile",
    description: "Personnel formé pour accompagner les personnes âgées ou convalescentes avec douceur, respect et vigilance 24/7 ou selon vos besoins.",
    iconName: "ShieldPlus",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    attributes: ["Assistance aux soins quotidiens", "Écoute attentive & empathie", "Gestion des horaires de médication"],
    badge: "Soin spécialisé"
  },
  {
    id: "cuisiniere",
    title: "Cuisinière",
    role: "Gastronomie marocaine & internationale",
    description: "Cuisinières expérimentées maîtrisant la cuisine marocaine traditionnelle (tajines, couscous, pastillas) ainsi que les menus internationaux.",
    iconName: "ChefHat",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    attributes: ["Spécialités marrakchies & recettes raffinées", "Gestion des courses & hygiène stricte", "Menus personnalisables"],
    badge: "Saveurs d'Excellence"
  },
  {
    id: "chauffeur",
    title: "Chauffeur privé",
    role: "Transport VIP & déplacements quotidiens",
    description: "Chauffeurs professionnels, courtois et très bien informés sur la ville de Marrakech et ses environs pour vos trajets en toute tranquillité.",
    iconName: "Car",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    attributes: ["Conduite souple & prudente", "Connaissance parfaite du réseau routier", "Véhicules soignés & courtoisie"],
    badge: "Transport VIP"
  },
  {
    id: "jardinier",
    title: "Jardinier & Pépiniériste",
    role: "Entretien d'espaces verts & piscines",
    description: "Entretien méticuleux de vos jardins de villa, taille de palmiers, arrosage, plantation de fleurs et soin des espaces verts marrakchis.",
    iconName: "Flower2",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    attributes: ["Taille d'arbres & rosiers", "Systèmes d'irrigation goutte-à-goutte", "Traitement phytosanitaire écologique"],
    badge: "Espaces Verts"
  },
];

export const WHY_US_REASONS = [
  {
    title: "Équipe professionnelle",
    description: "Chaque agent est rigoureusement sélectionné, formé aux meilleures techniques d'entretien et encadré par des superviseurs exigeants.",
    iconName: "Users"
  },
  {
    title: "Personnel expérimenté",
    description: "Des collaborateurs bénéficiant d'une solide expérience dans l'hôtellerie de luxe, les grandes demeures et les entreprises de Marrakech.",
    iconName: "Award"
  },
  {
    title: "Produits de qualité",
    description: "Utilisation exclusive de formules nettoyantes de qualité supérieure, garantissant une efficacité maximale sans détériorer les surfaces.",
    iconName: "Sparkles"
  },
  {
    title: "Produits écologiques",
    description: "Priorité accordée aux produits biodégradables et hypoallergéniques pour préserver votre santé, celle de vos enfants et de vos animaux.",
    iconName: "Leaf"
  },
  {
    title: "Matériel professionnel",
    description: "Machines à poncer le marbre monobrosse haute vitesse, injecteurs-extracteurs industriels et équipements de pointe.",
    iconName: "Wrench"
  },
  {
    title: "Satisfaction garantie",
    description: "Un contrôle qualité minutieux après chaque intervention. En cas d'insatisfaction, nous réintervenons rapidement sans supplément.",
    iconName: "CheckCircle2"
  },
  {
    title: "Contrat clair et sécurisé",
    description: "Devis transparents sans frais cachés, engagements contractuels respectés et assurances responsabilité civile professionnelle.",
    iconName: "FileCheck"
  },
  {
    title: "Placement garanti",
    description: "Remplacement rapide et sans surcoût du personnel de maison en cas d'incompatibilité ou d'absence imprévue.",
    iconName: "UserCheck"
  }
];

export const SECTORS: SectorItem[] = [
  {
    id: "appartements",
    title: "Appartements",
    subtitle: "Du studio au penthouse de luxe",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    features: ["Abonnements hebdomadaires/mensuels", "Nettoyage baies vitrées", "Désinfection sanitaire"]
  },
  {
    id: "villas",
    title: "Villas de Luxe",
    subtitle: "Résidences privées & domaines",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    features: ["Traitement marbre & terrasses", "Équipe dédiée multi-agents", "Nettoyage baies & balcons"]
  },
  {
    id: "bureaux",
    title: "Bureaux & Locaux",
    subtitle: "Sièges sociaux, cabinets & boutiques",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    features: ["Intervention hors heures de bureau", "Désinfection claviers & postes", "Gestion des poubelles & recyclage"]
  },
  {
    id: "airbnb",
    title: "Location Airbnb",
    subtitle: "Gestion hôtelière & check-in express",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    features: ["Changement de linge rapide", "Reassort produits d'accueil", "Rapport photo avant/après"]
  },
  {
    id: "riads",
    title: "Riads de la Médina",
    subtitle: "Maars, zelliges, tadelakt & fontaines",
    image: riadImg,
    features: ["Soin spécialisé tadelakt & zellige", "Entretien patios & terrasses", "Restauration marbre traditionnel"]
  }
];

export const METHOD_STEPS: MethodStep[] = [
  {
    step: 1,
    title: "Contact",
    description: "Prise de contact rapide par téléphone, WhatsApp ou directement sur notre site.",
    iconName: "PhoneCall"
  },
  {
    step: 2,
    title: "Analyse du besoin",
    description: "Évaluation précise de vos locaux, des surfaces à traiter ou des critères du personnel recherché.",
    iconName: "ClipboardList"
  },
  {
    step: 3,
    title: "Intervention",
    description: "Déploiement de nos équipes avec matériel professionnel ou mise en place immédiate du personnel.",
    iconName: "Zap"
  },
  {
    step: 4,
    title: "Contrôle qualité",
    description: "Inspection minutieuse des travaux réalisés selon une grille d'exigence hôtelière.",
    iconName: "ShieldCheck"
  },
  {
    step: 5,
    title: "Satisfaction du client",
    description: "Validation finale avec le client et suivi personnalisé pour garantir un résultat impeccable.",
    iconName: "Smile"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Cristallisation marbre effet miroir",
    category: "marbre",
    image: marbleImg,
    caption: "Restauration spectaculaire d'un sol en marbre blanc dans une villa à l'Hivernage."
  },
  {
    id: "gal-2",
    title: "Nettoyage canapé & shampouinage",
    category: "canapes",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    caption: "Détachage et revitalisation d'un canapé d'angle haut de gamme."
  },
  {
    id: "gal-3",
    title: "Nettoyage baies vitrées de villa",
    category: "vitres",
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=800&q=80",
    caption: "Lavage sans trace des baies vitrées donnant sur la palmeraie."
  },
  {
    id: "gal-4",
    title: "Personnel de maison qualifié",
    category: "personnel",
    image: staffImg,
    caption: "Une gouvernante d'expérience préparant une suite avec rigueur."
  },
  {
    id: "gal-5",
    title: "Nettoyage de Riad historique",
    category: "riads",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80",
    caption: "Entretien délicat du zellige et du tadelakt dans la Médina."
  },
  {
    id: "gal-6",
    title: "Grand ménage post-travaux villa",
    category: "nettoyage",
    image: heroImg,
    caption: "Remise à neuf complète d'une demeure moderne."
  },
  {
    id: "gal-7",
    title: "Polissage au sel du marbre",
    category: "marbre",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    caption: "Polissage traditionnel au sel révélant la finesse des veines du marbre."
  },
  {
    id: "gal-8",
    title: "Shampouinage tapis marocain",
    category: "canapes",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
    caption: "Traitement spécialisé pour la laine des tapis faits main."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    roleTag: "Propriétaire de villa",
    location: "Palmeraie, Marrakech",
    rating: 5,
    comment: "Ikram All Service a réalisé un travail incroyable sur le marbre de notre hall d'entrée. L'effet miroir est tout simplement saisissant. L'équipe est ponctuelle, polie et d'une efficacité exemplaire.",
    serviceUsed: "Cristallisation & Effet Miroir Marbre",
    date: "Il y a 2 semaines"
  },
  {
    id: "test-2",
    roleTag: "Responsable Airbnb",
    location: "Guéliz, Marrakech",
    rating: 5,
    comment: "Je gère 8 appartements en location courte durée. La réactivité d'Ikram All Service entre deux réservations est irréprochable. Mes voyageurs soulignent systématiquement la propreté parfaite dans leurs commentaires.",
    serviceUsed: "Gestion Ménage Airbnb Express",
    date: "Il y a 1 mois"
  },
  {
    id: "test-3",
    roleTag: "Entreprise locale",
    location: "Zone Industrielle Sidi Ghanem",
    rating: 5,
    comment: "Nous avons fait appel à leurs services pour le nettoyage hebdomadaire de nos bureaux et le shampouinage des chaises de réunion. Prestation impeccable, respect des règles et tarif très compétitif.",
    serviceUsed: "Nettoyage Locaux & Chaises",
    date: "Il y a 3 semaines"
  },
  {
    id: "test-4",
    roleTag: "Client satisfait",
    location: "Hivernage, Marrakech",
    rating: 5,
    comment: "Nous avons recruté une cuisinière et une femme de ménage par leur biais. Le personnel proposé était parfaitement qualifié, discret et très professionnel. Un vrai soulagement pour notre famille.",
    serviceUsed: "Placement Cuisinière & Gouvernante",
    date: "Il y a 1 mois"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Quels services proposez-vous ?",
    answer: "Nous proposons une gamme complète de services : nettoyage général, grand ménage, nettoyage de baies vitrées, shampouinage de canapés, tapis, matelas et chaises, ainsi que la rénovation spécialisée du marbre (ponçage, polissage au sel, cristallisation, effet miroir). Nous assurons également le placement de personnel de maison qualifié (femmes de ménage, nounous, gardes malades, cuisinières, chauffeurs, jardiniers).",
    category: "Services"
  },
  {
    id: "faq-2",
    question: "Intervenez-vous à domicile ?",
    answer: "Oui, absolument ! Nous intervenons directement à votre domicile (villas, appartements, riads) sur l'ensemble de Marrakech et ses environs. Nos équipes apportent tout le matériel et les produits professionnels nécessaires.",
    category: "Intervention"
  },
  {
    id: "faq-3",
    question: "Intervenez-vous dans les bureaux ?",
    answer: "Oui, nous proposons des prestations adaptées aux professionnels : bureaux, sièges sociaux, boutiques, restaurants, riads-hôtels et cabinets. Nous pouvons intervenir en dehors des heures d'ouverture pour ne pas perturber votre activité.",
    category: "Intervention"
  },
  {
    id: "faq-4",
    question: "Comment réserver un service ou demander un rendez-vous ?",
    answer: "Vous pouvez effectuer une demande de rendez-vous en quelques secondes via le bouton 'Demander un rendez-vous' sur notre site, par message WhatsApp direct au 0653 35 03 04, ou par appel téléphonique direct. Notre équipe vous répond immédiatement.",
    category: "Rendez-vous"
  },
  {
    id: "faq-5",
    question: "Travaillez-vous à Marrakech uniquement ?",
    answer: "Notre zone d'intervention principale couvre Marrakech (Guéliz, Hivernage, Palmeraie, Targa, Agdal, Médina, Route de l'Ourika, Route d'Amezmiz, Route de Fès) ainsi que toutes les communes environnantes.",
    category: "Zone"
  },
  {
    id: "faq-6",
    question: "Quelles sont les garanties pour le placement de personnel ?",
    answer: "Tout notre personnel de maison fait l'objet d'un contrôle rigoureux (vérification d'identité, références antérieures vérifiées, dossier administratif complet). De plus, nous garantissons le remplacement sous 48h sans frais en cas d'incompatibilité.",
    category: "Personnel"
  }
];
