import frontHoodUpMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_FrontHoodUp_Alpine.jpg';
import frontHoodDownMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_FrontHoodDown_Alpine.jpg';
import backHoodUpMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_BackHoodUp_Alpine.jpg';
import backHoodDownMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_BackHoodDown_Alpine.jpg';
import sideCloseUpMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_SideCloseUp_Alpine.jpg';
import glassingHiddenMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_GlassingHidden_Alpine.jpg';
import glassingCloseUpMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_GlassingCloseUp_Alpine.jpg';
import backHoodieWalkingMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_BackHoodieWalking_Alpine.jpg';

import blackGreywackeStandingMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_Mens200_BlackGreywacke_Standing.jpg';
import blackGreywackeCrouchMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_Mens200_BlackGreywacke_Crouch.jpg';
import blackGreywackeGlassingMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_Mens200_BlackGreywacke_Glassing.jpg';
import blackGreywackeWalkingMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_Mens200_BlackGreywacke_Walking.jpg';
import blackGreywackeWalkieTalkieMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_Mens200_BlackGreywacke_WalkieTalkie.jpg';

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

const commonDescription =
	'Note: We are almost ready to launch! Still a couple of things to finish up including finalising pricing. We are pushing the website live so we can get feedback in the meantime. Description: Each hoodie is made to order in Christchurch, New Zealand. Designed and sewn by passionate outdoors people for real alpine adventure.';

const commonSummaryParagraphs = [
	'Built for cold starts, breathable on long climbs, and warm while glassing the tops.',
	'Our 200gsm merino hoodie is pure, breathable merino wool, sewn to your fit that works on its own or as part of a layering system.',
	'The lightweight fabric helps regulate temperature, moves moisture away from the skin, and stays comfortable across changing conditions.',
	'A generous hood gives extra coverage from the sun or when the weather turns, while the long sleeves provide protection without the bulk of a heavier mid-layer.',
];

const commonBulletPoints = [
	'200gsm merino wool',
	'Lightweight, breathable and naturally temperature-regulating',
	'Long sleeves with extended cuffs',
	'Designed for layering',
	'Custom made to fit you perfectly in Christchurch, New Zealand',
];

const commonPriceLabel = 'Price: $TBA';

const createProduct = (
	pageTitle: string,
	productName: string,
	fitLabel: string,
	colourwayLabel: string,
	gallery: {
		frontDown: GalleryImage;
		frontUp?: GalleryImage;
		side?: GalleryImage;
		extraImages?: GalleryImage[];
		backDown?: GalleryImage;
		backUp?: GalleryImage;
	},
): ProductPageData => ({
	bulletPoints: commonBulletPoints,
	colourwayLabel,
	description: commonDescription,
	fitLabel,
	galleryImages: [
		gallery.frontDown,
		...(gallery.frontUp ? [gallery.frontUp] : []),
		...(gallery.side ? [gallery.side] : []),
		...(gallery.extraImages ?? []),
		...(gallery.backDown ? [gallery.backDown] : []),
		...(gallery.backUp ? [gallery.backUp] : []),
	],
	pageTitle,
	priceLabel: commonPriceLabel,
	productName,
	schemaDescription: `${commonDescription} ${colourwayLabel}.`,
	schemaName: `${productName} - ${fitLabel} - ${colourwayLabel}`,
	summaryLead: commonDescription,
	summaryParagraphs: commonSummaryParagraphs,
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
					alt: 'Wild Balance men’s Rangitata hoodie hidden glassing view in Beech Green and Tussock.',
					desktopSrc: glassingHiddenMenBeech.src,
					mobileSrc: glassingHiddenMenBeech.src,
				},
				{
					alt: 'Wild Balance men’s Rangitata hoodie glassing close-up in Beech Green and Tussock.',
					desktopSrc: glassingCloseUpMenBeech.src,
					mobileSrc: glassingCloseUpMenBeech.src,
				},
				{
					alt: 'Wild Balance men’s Rangitata hoodie back walking view in Beech Green and Tussock.',
					desktopSrc: backHoodieWalkingMenBeech.src,
					mobileSrc: backHoodieWalkingMenBeech.src,
				},
			],
			backDown: {
				alt: 'Wild Balance men’s Rangitata hoodie back view with hood down in Beech Green and Tussock.',
				desktopSrc: backHoodDownMenBeech.src,
				mobileSrc: backHoodDownMenBeech.src,
			},
			backUp: {
				alt: 'Wild Balance men’s Rangitata hoodie back view with hood up in Beech Green and Tussock.',
				desktopSrc: backHoodUpMenBeech.src,
				mobileSrc: backHoodUpMenBeech.src,
			},
		},
	),
	mensGreywacke: createProduct(
		'Rangitata Merino Hoodie - Men\'s Fit - Greywacke / Black Shibori | Wild Balance',
		'Rangitata Merino Hoodie',
		'Men’s Fit',
		'Greywacke / Black / Shibori Dye',
		{
			frontDown: {
				alt: 'Wild Balance men’s Rangitata hoodie walking view in Greywacke and Black Shibori Dye.',
				desktopSrc: blackGreywackeWalkingMenGreywacke.src,
				mobileSrc: blackGreywackeWalkingMenGreywacke.src,
			},
			frontUp: {
				alt: 'Wild Balance men’s Rangitata hoodie crouching view in Greywacke and Black Shibori Dye.',
				desktopSrc: blackGreywackeCrouchMenGreywacke.src,
				mobileSrc: blackGreywackeCrouchMenGreywacke.src,
			},
			side: {
				alt: 'Wild Balance men’s Rangitata hoodie glassing view in Greywacke and Black Shibori Dye.',
				desktopSrc: blackGreywackeGlassingMenGreywacke.src,
				mobileSrc: blackGreywackeGlassingMenGreywacke.src,
			},
			extraImages: [
				{
					alt: 'Wild Balance men’s Rangitata hoodie walkie talkie view in Greywacke and Black Shibori Dye.',
					desktopSrc: blackGreywackeWalkieTalkieMenGreywacke.src,
					mobileSrc: blackGreywackeWalkieTalkieMenGreywacke.src,
				},
			],
			backDown: {
				alt: 'Wild Balance men’s Rangitata hoodie standing view in Greywacke and Black Shibori Dye.',
				desktopSrc: blackGreywackeStandingMenGreywacke.src,
				mobileSrc: blackGreywackeStandingMenGreywacke.src,
			},
		},
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
	),
} as const;
