import frontHoodUpMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_FrontHoodUp_Alpine.jpg';
import frontHoodDownMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_FrontHoodDown_Alpine.jpg';
import backHoodUpMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_BackHoodUp_Alpine.jpg';
import backHoodDownMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_BackHoodDown_Alpine.jpg';
import sideCloseUpMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_SideCloseUp_Alpine.jpg';
import glassingHiddenMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_GlassingHidden_Alpine.jpg';
import glassingCloseUpMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_GlassingCloseUp_Alpine.jpg';
import backHoodieWalkingMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_BackHoodieWalking_Alpine.jpg';

import blackGreywackeStandingMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_Mens200_BlackGreywackeBlackDye_Standing.jpg';
import blackGreywackeCrouchMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_Mens200_BlackGreywackeBlackDye_Crouch.jpg';
import blackGreywackeWalkingMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_Mens200_BlackGreywackeBlackDye_Walking.jpg';

import frontHoodDownWomenGreywacke from '../assets/img/products/Womens_RangitataHoodie_GreywackeAndBlack/WildBalance_WomensRangitata_Greywacke_FrontHoodDown_Alpine.jpg';
import frontHoodDownWomenBeech from '../assets/img/products/Womens_RangitataHoodie_BeechGreenAndTussock/WildBalance_WomensRangitata_BeechGreen_FrontHoodDown_Alpine.jpg';

export interface GalleryImage {
	alt: string;
	desktopSrc: string;
	mobileSrc: string;
}

export interface ProductPageData {
	bulletPoints: string[];
	colourwayLabel: string;
	description: string;
	fitLabel: string;
	galleryImages: GalleryImage[];
	pageTitle: string;
	priceLabel: string;
	productName: string;
	schemaDescription: string;
	schemaName: string;
	summaryLead: string;
	summaryParagraphs: string[];
}

// Edit these blocks to give each colourway its own product description and page copy.
// Each block is used for both the men's and women's fit in that colourway.
const beechCopy = {
	description:
		'Built for cold starts, breathable on long climbs, and warm while glassing the tops. Made from 200gsm pure merino wool, the lightweight fabric helps regulate temperature, moves moisture away from the skin, and stays comfortable as conditions change. Wear it on its own or layer it up. A generous hood gives extra coverage from the sun or when the weather turns, while the long sleeves add protection without the bulk of a heavier mid-layer. The fit is flexible, adaptable and made to move without getting in the way. Each hoodie is made to order in Christchurch, designed and sewn by people who spend time in the same country it’s made for. Engineered for the high country, the Tussock and Beech Green tones of this hoodie match the native sub-alpine scrub to help you stay concealed while glassing. The natural merino fabric eliminates the synthetic UV glow that game animals easily spot, while the contrasting block-coloured sleeves break up your outline against the hillside. We only have a limited amount of Beech Green and Tussock fabric, so we’re making just 20 hoodies in these colours. If you’d like one, hit ‘Place Order’. We’ll get in touch to confirm your size and delivery details before taking payment and starting your hoodie.',
	priceLabel: 'Price: $195 NZD',
	summaryLead: 'Built for cold starts, breathable on long climbs, and warm while glassing the tops.',
	summaryParagraphs: [
		'Made from 200gsm pure merino wool, the lightweight fabric helps regulate temperature, moves moisture away from the skin, and stays comfortable as conditions change. Wear it on its own or layer it up.',
		'A generous hood gives extra coverage from the sun or when the weather turns, while the long sleeves add protection without the bulk of a heavier mid-layer. The fit is flexible, adaptable and made to move without getting in the way.',
		'Each hoodie is made to order in Christchurch, designed and sewn by people who spend time in the same country it’s made for.',
		'Engineered for the high country, the Tussock and Beech Green tones of this hoodie match the native sub-alpine scrub to help you stay concealed while glassing. The natural merino fabric eliminates the synthetic UV glow that game animals easily spot, while the contrasting block-coloured sleeves break up your outline against the hillside.',
		'We only have a limited amount of Beech Green and Tussock fabric, so we’re making just 20 hoodies in these colours.',
		'If you’d like one, hit ‘Place Order’. We’ll get in touch to confirm your size and delivery details before taking payment and starting your hoodie.',
	],
};

const greywackeCopy = {
	description:
		'Built for cold starts, breathable on long climbs, and warm while glassing the tops. Made from 200gsm pure merino wool, the lightweight fabric helps regulate temperature, moves moisture away from the skin, and stays comfortable as conditions change. Wear it on its own or layer it up. A generous hood gives extra coverage from the sun or when the weather turns, while the long sleeves add protection without the bulk of a heavier mid-layer. The fit is flexible, adaptable and made to move without getting in the way. Each hoodie is made to order in Christchurch, designed and sewn by people who spend time in the same country it’s made for. Each Greywacke hoodie has a custom shibori dye job. The pattern creates natural camouflage that helps break up your outline to animals. Each garment is completely unique. If you’d like one, hit ‘Place Order’. We’ll get in touch to confirm your size and delivery details before taking payment and starting your hoodie.',
	priceLabel: 'Price: $245 NZD',
	summaryLead: 'Built for cold starts, breathable on long climbs, and warm while glassing the tops.',
	summaryParagraphs: [
		'Made from 200gsm pure merino wool, the lightweight fabric helps regulate temperature, moves moisture away from the skin, and stays comfortable as conditions change. Wear it on its own or layer it up.',
		'A generous hood gives extra coverage from the sun or when the weather turns, while the long sleeves add protection without the bulk of a heavier mid-layer. The fit is flexible, adaptable and made to move without getting in the way.',
		'Each hoodie is made to order in Christchurch, designed and sewn by people who spend time in the same country it’s made for.',
		'Each Greywacke hoodie has a custom shibori dye job. The pattern creates natural camouflage that helps break up your outline to animals. Each garment is completely unique.',
		'If you’d like one, hit ‘Place Order’. We’ll get in touch to confirm your size and delivery details before taking payment and starting your hoodie.',
	],
};

const commonBulletPoints = [
	'200gsm merino wool',
	'Lightweight, breathable and naturally temperature-regulating',
	'Long sleeves with extended cuffs',
	'Designed for layering',
	'Custom made to fit you perfectly in Christchurch, New Zealand',
];

const createProduct = (
	pageTitle: string,
	productName: string,
	fitLabel: string,
	colourwayLabel: string,
	gallery: {
		frontDown: GalleryImage;
		second?: GalleryImage;
		frontUp?: GalleryImage;
		side?: GalleryImage;
		extraImages?: GalleryImage[];
		backDown?: GalleryImage;
		afterBackDown?: GalleryImage[];
		backUp?: GalleryImage;
	},
	copy: { description: string; priceLabel: string; summaryLead: string; summaryParagraphs: string[] },
): ProductPageData => ({
	bulletPoints: commonBulletPoints,
	colourwayLabel,
	description: copy.description,
	fitLabel,
	galleryImages: [
		gallery.frontDown,
		...(gallery.second ? [gallery.second] : []),
		...(gallery.frontUp ? [gallery.frontUp] : []),
		...(gallery.side ? [gallery.side] : []),
		...(gallery.extraImages ?? []),
		...(gallery.backDown ? [gallery.backDown] : []),
		...(gallery.afterBackDown ?? []),
		...(gallery.backUp ? [gallery.backUp] : []),
	],
	pageTitle,
	priceLabel: copy.priceLabel,
	productName,
	schemaDescription: `${copy.description} ${colourwayLabel}.`,
	schemaName: `${productName} - ${fitLabel} - ${colourwayLabel}`,
	summaryLead: copy.summaryLead,
	summaryParagraphs: copy.summaryParagraphs,
});

export const rangitataProducts = {
	mensBeech: createProduct(
		'Rangitata Merino Hoodie - Men\'s Fit - Beech Green / Tussock | Wild Balance',
		'Rangitata Merino Hoodie',
		'Men’s Fit',
		'Beech Green / Tussock',
		{
			frontDown: {
				alt: 'Wild Balance men’s Rangitata hoodie front view with hood up in Beech Green and Tussock.',
				desktopSrc: frontHoodUpMenBeech.src,
				mobileSrc: frontHoodUpMenBeech.src,
			},
			second: {
				alt: 'Wild Balance men’s Rangitata hoodie hidden glassing view in Beech Green and Tussock.',
				desktopSrc: glassingHiddenMenBeech.src,
				mobileSrc: glassingHiddenMenBeech.src,
			},
			frontUp: {
				alt: 'Wild Balance men’s Rangitata hoodie front view with hood down in Beech Green and Tussock.',
				desktopSrc: frontHoodDownMenBeech.src,
				mobileSrc: frontHoodDownMenBeech.src,
			},
			side: {
				alt: 'Wild Balance men’s Rangitata hoodie side close-up in Beech Green and Tussock.',
				desktopSrc: sideCloseUpMenBeech.src,
				mobileSrc: sideCloseUpMenBeech.src,
			},
			extraImages: [
				{
					alt: 'Wild Balance men’s Rangitata hoodie glassing close-up in Beech Green and Tussock.',
					desktopSrc: glassingCloseUpMenBeech.src,
					mobileSrc: glassingCloseUpMenBeech.src,
				},
			],
			backDown: {
				alt: 'Wild Balance men’s Rangitata hoodie back view with hood down in Beech Green and Tussock.',
				desktopSrc: backHoodDownMenBeech.src,
				mobileSrc: backHoodDownMenBeech.src,
			},
			afterBackDown: [
				{
					alt: 'Wild Balance men’s Rangitata hoodie back walking view in Beech Green and Tussock.',
					desktopSrc: backHoodieWalkingMenBeech.src,
					mobileSrc: backHoodieWalkingMenBeech.src,
				},
			],
			backUp: {
				alt: 'Wild Balance men’s Rangitata hoodie back view with hood up in Beech Green and Tussock.',
				desktopSrc: backHoodUpMenBeech.src,
				mobileSrc: backHoodUpMenBeech.src,
			},
		},
		beechCopy,
	),
	mensGreywacke: createProduct(
		'Rangitata Merino Hoodie - Men\'s Fit - Greywacke / Black Dye | Wild Balance',
		'Rangitata Merino Hoodie',
		'Men’s Fit',
		'Greywacke / Black Dye',
		{
			frontDown: {
				alt: 'Wild Balance men’s Rangitata hoodie walking view in Greywacke and Black Dye.',
				desktopSrc: blackGreywackeWalkingMenGreywacke.src,
				mobileSrc: blackGreywackeWalkingMenGreywacke.src,
			},
			frontUp: {
				alt: 'Wild Balance men’s Rangitata hoodie crouching view in Greywacke and Black Dye.',
				desktopSrc: blackGreywackeCrouchMenGreywacke.src,
				mobileSrc: blackGreywackeCrouchMenGreywacke.src,
			},
			backDown: {
				alt: 'Wild Balance men’s Rangitata hoodie standing view in Greywacke and Black Dye.',
				desktopSrc: blackGreywackeStandingMenGreywacke.src,
				mobileSrc: blackGreywackeStandingMenGreywacke.src,
			},
		},
		greywackeCopy,
	),
	womensBeech: createProduct(
		'Rangitata Merino Hoodie - Women\'s Fit - Beech Green / Tussock | Wild Balance',
		'Rangitata Merino Hoodie',
		'Women’s Fit',
		'Beech Green / Tussock',
		{
			frontDown: {
				alt: 'Wild Balance women’s Rangitata hoodie front view in Beech Green and Tussock.',
				desktopSrc: frontHoodDownWomenBeech.src,
				mobileSrc: frontHoodDownWomenBeech.src,
			},
		},
		beechCopy,
	),
	womensGreywacke: createProduct(
		'Rangitata Merino Hoodie - Women\'s Fit - Greywacke / Black Shibori | Wild Balance',
		'Rangitata Merino Hoodie',
		'Women’s Fit',
		'Greywacke / Black / Shibori Dye',
		{
			frontDown: {
				alt: 'Wild Balance women’s Rangitata hoodie front view in Greywacke and Black Shibori.',
				desktopSrc: frontHoodDownWomenGreywacke.src,
				mobileSrc: frontHoodDownWomenGreywacke.src,
			},
		},
		greywackeCopy,
	),
} as const;
