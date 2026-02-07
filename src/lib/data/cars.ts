export type Car = {
	id: string;
	slug: string;
	brand: string;
    category: string,
	model: string;
	year: number;
	pricePerDay?: number; 
	transmission: 'auto' | 'manual';
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
			'Mercedes Classe A 2025 en finition élégante. Compacte, moderne et confortable, idéale pour la ville comme pour les longs trajets.',
		images: ["/cars/classe-a/avg.jpg","/cars/classe-a/avd.jpg","/cars/classe-a/cote.jpg","/cars/classe-a/arg.jpg","/cars/classe-a/ard.jpg","/cars/classe-a/interieur.jpg","/cars/classe-a/avant.jpg","/cars/classe-a/arriere.jpg",]
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
			'BMW Série 1 Pack M Sport Pro au look sportif et dynamique. Finition haut de gamme, tenue de route précise et design affirmé.',
		images: ["/cars/bmw-serie-1/avd.jpg","/cars/bmw-serie-1/ard.jpeg","/cars/bmw-serie-1/interieur.jpg","/cars/bmw-serie-1/cote.jpg","/cars/bmw-serie-1/arriere.jpg","/cars/bmw-serie-1/avant.jpeg","/cars/bmw-serie-1/arg.jpg","/cars/bmw-serie-1/feuav.jpg",]
	},

	{
		id: 'polo-6',
		slug: 'volkswagen-polo-6-r-line',
		brand: 'Volkswagen',
        category: 'citadine',
		model: 'Polo 6 R-Line',
		year: 2024,
		transmission: 'auto',
		fuel: 'essence',
		color: 'Noir brillant',
		image: '/cars/polo-6.jpg',
		description:
			'Volkswagen Polo 6 R-Line 2024, sportive et élégante. Parfaite pour une conduite urbaine confortable avec un style dynamique.',
		images:["/cars/polo-6.jpg"]
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
		image: '/cars/peugeot-208.jpg',
		description:
			'Peugeot 208 GT au design moderne et sportif. Compacte, agile et agréable à conduire, idéale pour le quotidien.',
		images:["/cars/peugeot-208.jpg"]
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
		image: '/cars/clio-5-hybrid.jpg',
		description:
			'Renault Clio 5 Hybrid alliant économie et confort. Parfaite pour une conduite fluide et silencieuse en ville.',
			images:["/cars/clio-5-hybrid.jpg"]

	},

	{
		id: 'clio-5-manual',
		slug: 'renault-clio-5-bleu-nuit',
		brand: 'Renault',
		model: 'Clio 5',
        category: 'citadine',
		year: 2019,
		transmission: 'manual',
		fuel: 'essence',
		color: 'Bleu nuit',
		image: '/cars/clio-5-bleu.jpg',
		description:
			'Renault Clio 5 boîte manuelle en bleu nuit. Véhicule fiable et polyvalent, idéal pour tous types de trajets.',
		images:["/cars/clio-5-bleu.jpg"]
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
			'Toyota Yaris Cross hybride, SUV compact moderne et économique. Confort et fiabilité pour un usage quotidien.',
			images:["/cars/yaris-cross.jpg"]

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
		image: '/cars/rs6.jpg',
		description:
			'Audi RS6, break ultra sportif combinant puissance et luxe. Un véhicule d’exception pour les amateurs de performance.',
			images:["/cars/yaris-cross.jpg"]

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
			'Audi RS3 full option en noir mat. Sportivité extrême, design agressif et performances exceptionnelles.',
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
			'Renault Clio 5 Alpine en bleu, finition sportive et élégante inspirée du savoir-faire Alpine.',
			images:["/cars/clio5-alpine-bleu/avg.webp"]

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
			'Renault Clio 5 Alpine gris, design racé et confort moderne pour une conduite dynamique.',
			images:["/cars/yaris-cross.jpg"]

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
			" etc etc pas oublier d'ajouter la description",
			images:["/cars/lamborghini-urus/avg.webp"]

	},
]