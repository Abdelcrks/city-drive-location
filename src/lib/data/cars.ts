export type Car = {
	id: string;
	slug: string;
	brand: string;
    category: string,
	model: string;
	year: number;
	pricePerDay?: number; 
	transmission: 'auto' | 'manuelle';
	fuel?: 'diesel' | 'essence' | 'hybrid' | 'electric';
	color: string;
	image: string;
	description: string;
	images: string[]
};

export const cars: Car[] = [
	{
		id: 'g63',
		slug: 'mercedes-g63-amg',
		brand: 'Mercedes',
		model: 'Classe G63 AMG',
        category: 'sport',
		year: 2020,
		transmission: 'auto',
		fuel: 'essence',
		color: 'Gris Designo / Olive Metallic',
		pricePerDay: 300,
		image: '/cars/classe-g63/avg.jpg',
		description:
			'Mercedes Classe G63 AMG V8 Biturbo, un SUV de prestige au caractère affirmé. Intérieur cuir AMG, jantes 22 pouces et échappement AMG pour une expérience unique.',
		images : ["/cars/classe-g63/avg.jpg","/cars/classe-g63/avd.jpg","/cars/classe-g63/cote.jpg", "/cars/classe-g63/arg.jpg", "/cars/classe-g63/ard.jpg","/cars/classe-g63/interieur.avif"]
	},

	{
		id: 'classe-a-2025',
		slug: 'mercedes-classe-a-2025',
		brand: 'Mercedes',
        category: 'premium',
		model: 'Classe A',
		year: 2025,
		transmission: 'auto',
		fuel: 'essence',
		color: 'Noir brillant',
		image: '/cars/classe-a/avg.jpg',
		description:
			"Compacte, élégante et technologique, la Mercedes Classe A 2025 est idéale pour les déplacements urbains comme pour les longs trajets. Elle combine confort premium, design moderne et conduite fluide pour un usage quotidien tout en style.",
		images: ["/cars/classe-a/avg.jpg","/cars/classe-a/avd.jpg","/cars/classe-a/ard.jpg","/cars/classe-a/interieur.jpg"]
	},

	{
		id: 'bmw-serie-1',
		slug: 'bmw-serie-1-m-sport-pro',
		brand: 'BMW',
        category: 'premium',
		model: 'Série 1 M Sport Pro',
		year: 2025,
		transmission: 'auto',
		fuel: 'essence',
		color: 'Gris Nardo',
		image: '/cars/bmw-serie-1/avd.jpg',
		description:
			'Avec son pack M Sport Pro, la BMW Série 1 affiche un look résolument sportif et dynamique. Performances équilibrées, finitions haut de gamme et excellente tenue de route font de cette compacte un choix idéal pour une conduite plaisir au quotidien.',
		images: ["/cars/bmw-serie-1/avd.jpg","/cars/bmw-serie-1/avg.jpg","/cars/bmw-serie-1/ard.jpg","/cars/bmw-serie-1/interieur.jpg","/cars/bmw-serie-1/interieur2.jpg","/cars/bmw-serie-1/feuav.jpg",]
	},

	{
		id: 'polo-6',
		slug: 'volkswagen-polo-6-r-line-black',
		brand: 'Volkswagen',
        category: 'citadine',
		model: 'Polo 6 R-Line',
		year: 2025,
		transmission: 'auto',
		fuel: 'essence',
		color: 'Noir brillant',
		image: '/cars/polo6-black/avg.jpg',
		description:
			'Citadine sportive et élégante, la Volkswagen Polo 6 R-Line se distingue par son design affirmé et son confort de conduite. Parfaite pour la ville, elle offre une expérience moderne et agréable avec une touche de sportivité.',
		images:["/cars/polo6-black/avg.jpg","/cars/polo6-black/arg.jpg","/cars/polo6-black/ard.jpg", "/cars/polo6-black/roue.jpeg","/cars/polo6-black/interieur.jpg","/cars/polo6-black/interieur2.jpg"]
	},
	{
		id: 'polo-6',
		slug: 'volkswagen-polo-6-r-line-grey',
		brand: 'Volkswagen',
        category: 'citadine',
		model: 'Polo 6 R-Line',
		year: 2025,
		transmission: 'auto',
		fuel: 'essence',
		color: 'Gris',
		image: '/cars/polo6-gris/avd.jpg',
		description:
			'Citadine sportive et élégante, la Volkswagen Polo 6 R-Line se distingue par son design affirmé et son confort de conduite. Parfaite pour la ville, elle offre une expérience moderne et agréable avec une touche de sportivité.',
		images:["/cars/polo6-gris/avd.jpg","/cars/polo6-gris/ard.jpg","/cars/polo6-gris/interieur.jpg", "/cars/polo6-gris/interieur2.jpg"]
	},

	{
		id: 'peugeot-208',
		slug: 'peugeot-208-gt',
		brand: 'Peugeot',
        category: 'premium',
		model: '208 GT',
		year: 2022,
		transmission: 'auto',
		fuel: 'essence',
		color: 'Bleu',
		image: '/cars/peugeot-208-gt/avd.jpg',
		description:
			'La Peugeot 208 GT séduit par son design moderne et sportif. Agile et confortable, elle offre une conduite dynamique tout en restant parfaitement adaptée à un usage quotidien en ville ou sur route.',
		images:["/cars/peugeot-208-gt/avd.jpg","/cars/peugeot-208-gt/arg.jpg","/cars/peugeot-208-gt/cote.jpg","/cars/peugeot-208-gt/feu.jpg","/cars/peugeot-208-gt/feuarr.jpg", "/cars/peugeot-208-gt/interieur.jpg"]
	},

	{
		id: 'clio-5-hybrid',
		slug: 'renault-clio-5-hybrid',
		brand: 'Renault',
		model: 'Clio 5 Hybrid',
        category: 'citadine',
		year: 2020,
		transmission: 'auto',
		fuel: 'hybrid',
		color: 'Gris métallisé foncé',
		image: '/cars/clio-5-hybrid/avd.jpg',
		description:
			'Économique et silencieuse, la Renault Clio 5 Hybrid allie modernité et efficacité. Son moteur hybride assure une conduite fluide et confortable, idéale pour la ville tout en réduisant la consommation de carburant.',
			images:["/cars/clio-5-hybrid/avd.jpg","/cars/clio-5-hybrid/interieur.jpg"]

	},

	{
		id: 'clio-5-manual',
		slug: 'renault-clio-5-manuelle',
		brand: 'Renault',
		model: 'Clio 5',
        category: 'citadine',
		year: 2019,
		transmission: 'manuelle',
		fuel: 'essence',
		color: 'Bleu nuit',
		image: '/cars/clio-5-manuelle/avd.jpg',
		description:
			'Polyvalente et fiable, la Renault Clio 5 est un excellent choix pour tous types de trajets. Sa boîte manuelle offre une conduite maîtrisée et agréable, parfaite pour un usage quotidien.',
		images:["/cars/clio-5-manuelle/avd.jpg","/cars/clio-5-manuelle/interieur.jpg"]
	},

	{
		id: 'yaris-cross',
		slug: 'toyota-yaris-cross',
		brand: 'Toyota',
		model: 'Yaris Cross',
        category: 'citadine',
		year: 2025,
		transmission: 'auto',
		fuel: 'hybrid',
		color: 'Gris',
		image: '/cars/yaris-cross.jpg',
		description:
			'SUV compact hybride, la Toyota Yaris Cross combine fiabilité, confort et économie. Son format pratique et sa motorisation hybride en font un véhicule idéal pour la ville comme pour les escapades.',
			images:["/cars/yaris-cross.jpg"]

	},
	{
		id: 'yaris-gr',
		slug: 'toyota-yaris-gr',
		brand: 'Toyota',
		model: 'Yaris',
        category: 'citadine',
		year: 2024,
		transmission: 'auto',
		fuel: 'hybrid',
		color: 'Rouge',
		image: '/cars/yaris-gr/avd.jpg',
		description:
			'Moderne et efficiente, la Toyota Yaris hybride offre une conduite douce et économique. Compacte et maniable, elle est parfaitement adaptée aux déplacements urbains tout en restant confortable sur route.',
			images:["/cars/yaris-gr/avd.jpg","/cars/yaris-gr/ard.jpg","/cars/yaris-gr/interieur.jpg"]

	},

	{
		id: 'rs6',
		slug: 'audi-rs6',
		brand: 'Audi',
		model: 'RS6',
        category: 'sport',
		year: 2022,
		transmission: 'auto',
		fuel: 'essence',
		color: 'Blanc',
		image: '/cars/rs6-blanc/avd.jpg',
		description:
			'Véritable concentré de puissance et de luxe, l’Audi RS6 associe performances exceptionnelles et confort haut de gamme. Son design sportif et son moteur impressionnant en font un véhicule d’exception pour les amateurs de sensations fortes.',
			images:["/cars/rs6-blanc/avd.jpg","/cars/rs6-blanc/ard.jpg","/cars/rs6-blanc/arg.jpg","/cars/rs6-blanc/calandre.jpg","/cars/rs6-blanc/cote.jpg","/cars/rs6-blanc/interieur.jpg","/cars/rs6-blanc/interieur2.jpg","/cars/rs6-blanc/roue.jpg"]

	},

	{
		id: 'rs3',
		slug: 'audi-rs3',
		brand: 'Audi',
		model: 'RS3',
        category: 'sport',
		year: 2024,
		transmission: 'auto',
		fuel: 'essence',
		color: 'Noir mat',
		image: '/cars/rs3.jpg',
		description:
			'Sportive compacte au caractère affirmé, l’Audi RS3 offre des performances remarquables et un design agressif. Un modèle idéal pour ceux qui recherchent une expérience de conduite dynamique sans compromis sur le confort.',
			images:["/cars/yaris-cross.jpg"]

	},

	{
		id: 'clio-alpine-bleu',
		slug: 'renault-clio-5-alpine-bleu',
		brand: 'Renault',
		model: 'Clio 5 Alpine',
		year: 2024,
		transmission: 'auto',
        category: 'citadine',
		fuel: 'essence',
		color: 'Bleu Alpine',
		image: '/cars/clio5-alpine-bleu/avg.webp',
		description:
			'Inspirée du savoir-faire Alpine, cette Clio 5 se distingue par son design sportif et élégant. Elle offre une conduite dynamique tout en conservant le confort et la polyvalence d’une citadine moderne.',
			images:["/cars/clio5-alpine-bleu/avg.webp","/cars/clio5-alpine-bleu/avd.webp","/cars/clio5-alpine-bleu/ard.webp","/cars/clio5-alpine-bleu/arg.webp","/cars/clio5-alpine-bleu/avant.webp","/cars/clio5-alpine-bleu/arriere.webp","/cars/clio5-alpine-bleu/interieur.jpg",
				"/cars/clio5-alpine-bleu/interieur2.jpg","/cars/clio5-alpine-bleu/cote.webp"
			]

	},

	{
		id: 'clio-alpine-gris',
		slug: 'renault-clio-5-alpine-gris',
		brand: 'Renault',
		model: 'Clio 5 Alpine',
		year: 2024,
		transmission: 'auto',
        category: 'citadine',
		fuel: 'essence',
		color: 'Gris',
		image: '/cars/clio5-alpine-gris/avg.webp',
		description:
			'Inspirée du savoir-faire Alpine, cette Clio 5 se distingue par son design sportif et élégant. Elle offre une conduite dynamique tout en conservant le confort et la polyvalence d’une citadine moderne.',
			images:["/cars/clio5-alpine-gris/avg.webp","/cars/clio5-alpine-gris/avd.webp","/cars/clio5-alpine-gris/ard.webp","/cars/clio5-alpine-gris/arg.webp","/cars/clio5-alpine-gris/arriere.webp","/cars/clio5-alpine-gris/avant.webp",]

	},
    {
		id: 'lamborghini-urus',
		slug: 'lamborghini-urus',
		brand: 'Lamborghini',
		model: 'Urus',
		year: 2024,
		transmission: 'auto',
        category: 'sport',
		fuel: 'essence',
		color: 'Black',
		image: '/cars/lamborghini-urus/avg.webp',
		description:
			"SUV ultra-sportif de prestige, le Lamborghini Urus combine puissance impressionnante, luxe extrême et design agressif. Un véhicule d’exception destiné à ceux qui recherchent performance, exclusivité et sensations fortes.",
			images:["/cars/lamborghini-urus/avg.webp"]

	},
]