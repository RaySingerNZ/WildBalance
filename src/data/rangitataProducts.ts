import frontHoodUpMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_FrontHoodUp_Alpine.jpg';
import frontHoodDownMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_FrontHoodDown_Alpine.jpg';
import backHoodUpMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_BackHoodUp_Alpine.jpg';
import backHoodDownMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_BackHoodDown_Alpine.jpg';
import sideCloseUpMenBeech from '../assets/img/products/Mens_RangitataHoodie_BeechGreenAndTussock/WildBalance_Mens200_SideCloseUp_Alpine.jpg';

import frontHoodUpMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_MensRangitata_Greywacke_FrontHoodUp_Alpine.jpg';
import frontHoodDownMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_MensRangitata_Greywacke_FrontHoodDown_Alpine.jpg';
import backHoodUpMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_MensRangitata_Greywacke_BackHoodUp_Alpine.jpg';
import backHoodDownMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_MensRangitata_Greywacke_BackHoodDown_Alpine.jpg';
import sideCloseUpMenGreywacke from '../assets/img/products/Mens_RangitataHoodie_GreywackeAndBlack/WildBalance_MensRangitata_Greywacke_SideCloseUp_Alpine.jpg';

import frontHoodUpWomenBeech from '../assets/img/products/Womens_RangitataHoodie_BeechGreenAndTussock/WildBalance_WomensRangitata_BeechGreenAndTussock_FrontHoodUp_Alpine.jpg';
import frontHoodDownWomenBeech from '../assets/img/products/Womens_RangitataHoodie_BeechGreenAndTussock/WildBalance_WomensRangitata_BeechGreenAndTussock_FrontHoodDown_Alpine.jpg';
import backHoodUpWomenBeech from '../assets/img/products/Womens_RangitataHoodie_BeechGreenAndTussock/WildBalance_WomensRangitata_BeechGreenAndTussock_BackHoodUp_Alpine.jpg';
import backHoodDownWomenBeech from '../assets/img/products/Womens_RangitataHoodie_BeechGreenAndTussock/WildBalance_WomensRangitata_BeechGreenAndTussock_BackHoodDown_Alpine.jpg';
import sideCloseUpWomenBeech from '../assets/img/products/Womens_RangitataHoodie_BeechGreenAndTussock/WildBalance_WomensRangitata_BeechGreenAndTussock_SideCloseUp_Alpine.jpg';

import frontHoodUpWomenGreywacke from '../assets/img/products/Womens_RangitataHoodie_GreywackeAndBlack/WildBalance_WomensRangitata_Greywacke_FrontHoodUp_Alpine.jpg';
import frontHoodDownWomenGreywacke from '../assets/img/products/Womens_RangitataHoodie_GreywackeAndBlack/WildBalance_WomensRangitata_Greywacke_FrontHoodDown_Alpine.jpg';
import backHoodUpWomenGreywacke from '../assets/img/products/Womens_RangitataHoodie_GreywackeAndBlack/WildBalance_WomensRangitata_Greywacke_BackHoodUp_Alpine.jpg';
import backHoodDownWomenGreywacke from '../assets/img/products/Womens_RangitataHoodie_GreywackeAndBlack/WildBalance_WomensRangitata_Greywacke_BackHoodDown_Alpine.jpg';
import sideCloseUpWomenGreywacke from '../assets/img/products/Womens_RangitataHoodie_GreywackeAndBlack/WildBalance_WomensRangitata_Greywacke_SideCloseUp_Alpine.jpg';

export interface GalleryImage {
	alt: string;
	desktopSrc: string;
	mobileSrc: string;
}

export interface StoryImage extends GalleryImage {}

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
	storyImages: {
		primary: StoryImage;
		secondary: StoryImage;
		side: StoryImage;
	};
	summaryLead: string;
	summaryParagraphs: string[];
}

const commonDescription =
	'Made to order in Christchurch, New Zealand. Designed and sewn by passionate outdoors people for real alpine adventure.';

const commonSummaryParagraphs = [
	'Built for cold starts, breathable on long climbs, and warm while glassing the tops.',
	'Our 200gsm merino hoodie is pure, breathable merino wool, with a close but comfortable fit that works on its own or as part of a layering system.',
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

const commonPriceLabel = 'Price TBA';

const createProduct = (
	pageTitle: string,
	productName: string,
	fitLabel: string,
	colourwayLabel: string,
	gallery: {
		frontDown: GalleryImage;
		frontUp: GalleryImage;
		side: GalleryImage;
		backDown: GalleryImage;
		backUp: GalleryImage;
	},
): ProductPageData => ({
	bulletPoints: commonBulletPoints,
	colourwayLabel,
	description: commonDescription,
	fitLabel,
	galleryImages: [gallery.frontDown, gallery.frontUp, gallery.side, gallery.backDown, gallery.backUp],
	pageTitle,
	priceLabel: commonPriceLabel,
	productName,
	schemaDescription: `${commonDescription} ${colourwayLabel}.`,
	schemaName: `${productName} - ${fitLabel} - ${colourwayLabel}`,
	storyImages: {
		primary: gallery.frontDown,
		secondary: gallery.frontUp,
		side: gallery.side,
	},
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
				alt: 'Wild Balance men’s Rangitata hoodie front view with hood down in Beech Green and Tussock.',
				desktopSrc: frontHoodDownMenBeech.src,
				mobileSrc: frontHoodDownMenBeech.src,
			},
			frontUp: {
				alt: 'Wild Balance men’s Rangitata hoodie front view with hood up in Beech Green and Tussock.',
				desktopSrc: frontHoodUpMenBeech.src,
				mobileSrc: frontHoodUpMenBeech.src,
			},
			side: {
				alt: 'Wild Balance men’s Rangitata hoodie side close-up in Beech Green and Tussock.',
				desktopSrc: sideCloseUpMenBeech.src,
				mobileSrc: sideCloseUpMenBeech.src,
			},
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
		'Greywacke / Black Shibori',
		{
			frontDown: {
				alt: 'Wild Balance men’s Rangitata hoodie front view with hood down in Greywacke and Black Shibori.',
				desktopSrc: frontHoodDownMenGreywacke.src,
				mobileSrc: frontHoodDownMenGreywacke.src,
			},
			frontUp: {
				alt: 'Wild Balance men’s Rangitata hoodie front view with hood up in Greywacke and Black Shibori.',
				desktopSrc: frontHoodUpMenGreywacke.src,
				mobileSrc: frontHoodUpMenGreywacke.src,
			},
			side: {
				alt: 'Wild Balance men’s Rangitata hoodie side close-up in Greywacke and Black Shibori.',
				desktopSrc: sideCloseUpMenGreywacke.src,
				mobileSrc: sideCloseUpMenGreywacke.src,
			},
			backDown: {
				alt: 'Wild Balance men’s Rangitata hoodie back view with hood down in Greywacke and Black Shibori.',
				desktopSrc: backHoodDownMenGreywacke.src,
				mobileSrc: backHoodDownMenGreywacke.src,
			},
			backUp: {
				alt: 'Wild Balance men’s Rangitata hoodie back view with hood up in Greywacke and Black Shibori.',
				desktopSrc: backHoodUpMenGreywacke.src,
				mobileSrc: backHoodUpMenGreywacke.src,
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
				alt: 'Wild Balance women’s Rangitata hoodie front view with hood down in Beech Green and Tussock.',
				desktopSrc: frontHoodDownWomenBeech.src,
				mobileSrc: frontHoodDownWomenBeech.src,
			},
			frontUp: {
				alt: 'Wild Balance women’s Rangitata hoodie front view with hood up in Beech Green and Tussock.',
				desktopSrc: frontHoodUpWomenBeech.src,
				mobileSrc: frontHoodUpWomenBeech.src,
			},
			side: {
				alt: 'Wild Balance women’s Rangitata hoodie side close-up in Beech Green and Tussock.',
				desktopSrc: sideCloseUpWomenBeech.src,
				mobileSrc: sideCloseUpWomenBeech.src,
			},
			backDown: {
				alt: 'Wild Balance women’s Rangitata hoodie back view with hood down in Beech Green and Tussock.',
				desktopSrc: backHoodDownWomenBeech.src,
				mobileSrc: backHoodDownWomenBeech.src,
			},
			backUp: {
				alt: 'Wild Balance women’s Rangitata hoodie back view with hood up in Beech Green and Tussock.',
				desktopSrc: backHoodUpWomenBeech.src,
				mobileSrc: backHoodUpWomenBeech.src,
			},
		},
	),
	womensGreywacke: createProduct(
		'Rangitata Merino Hoodie - Women\'s Fit - Greywacke / Black Shibori | Wild Balance',
		'Rangitata Merino Hoodie',
		'Women’s Fit',
		'Greywacke / Black Shibori',
		{
			frontDown: {
				alt: 'Wild Balance women’s Rangitata hoodie front view with hood down in Greywacke and Black Shibori.',
				desktopSrc: frontHoodDownWomenGreywacke.src,
				mobileSrc: frontHoodDownWomenGreywacke.src,
			},
			frontUp: {
				alt: 'Wild Balance women’s Rangitata hoodie front view with hood up in Greywacke and Black Shibori.',
				desktopSrc: frontHoodUpWomenGreywacke.src,
				mobileSrc: frontHoodUpWomenGreywacke.src,
			},
			side: {
				alt: 'Wild Balance women’s Rangitata hoodie side close-up in Greywacke and Black Shibori.',
				desktopSrc: sideCloseUpWomenGreywacke.src,
				mobileSrc: sideCloseUpWomenGreywacke.src,
			},
			backDown: {
				alt: 'Wild Balance women’s Rangitata hoodie back view with hood down in Greywacke and Black Shibori.',
				desktopSrc: backHoodDownWomenGreywacke.src,
				mobileSrc: backHoodDownWomenGreywacke.src,
			},
			backUp: {
				alt: 'Wild Balance women’s Rangitata hoodie back view with hood up in Greywacke and Black Shibori.',
				desktopSrc: backHoodUpWomenGreywacke.src,
				mobileSrc: backHoodUpWomenGreywacke.src,
			},
		},
	),
} as const;
