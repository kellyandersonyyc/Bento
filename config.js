// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Kelly',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '1e8ac7e249667ce2cd77f39408188406', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Crossword',
			icon: 'edit',
			link: 'https://www.nytimes.com/crosswords',
		},
		{
			id: '2',
			name: 'Amazon',
			icon: 'shopping-cart',
			link: 'https://www.amazon.ca/',
		},
		{
			id: '3',
			name: 'YNAB',
			icon: 'piggy-bank',
			link: 'https://app.youneedabudget.com/d224b721-4217-422f-bd4d-009d8bba9b95/budget',
		},
		{
			id: '4',
			name: 'Sportsurge',
			icon: 'dribbble',
			link: 'https://v2.sportsurge.net/',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'bot',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '7',
			name: 'Wordle',
			icon: 'youtube',
			link: 'https://www.powerlanguage.co.uk/wordle/',
		},
		{
			id: '8',
			name: 'Facebook',
			icon: 'facebook',
			link: 'https://www.facebook.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'bust',
			id: '1',
			links: [
				{
					name: 'AirBnb',
					link: 'https://www.airbnb.ca/',
				},
				{
					name: 'iOverlander',
					link: 'https://www.ioverlander.com/',
				},
				{
					name: 'Polarsteps',
					link: 'https://www.polarsteps.com/',
				},
				{
					name: 'Booking',
					link: 'https://www.booking.com/',
				},
			],
		},
		{
			icon: 'terminal',
			id: '1',
			links: [
				{
					name: 'Asana',
					link: 'https://app.asana.com/',
				},
				{
					name: 'ClickUp',
					link: 'https://app.clickup.com/',
				},
				{
					name: 'Figma',
					link: 'https://www.figma.com/file/auZpPPqTmNBmZnaDXCOE6l/Site-Designs?node-id=0%3A1',
				},
				{
					name: 'Campoodle',
					link: 'https://xd.adobe.com/view/ca73c9e8-31ad-4d5c-8fae-22ad358bad75-9f20/screen/1f4ded4b-887e-426e-a013-6c0263cd39db/specs/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'terminal',
			id: '1',
			links: [
				{
					name: 'Asana',
					link: 'https://app.asana.com/',
				},
				{
					name: 'ClickUp',
					link: 'https://app.clickup.com/',
				},
				{
					name: 'Figma',
					link: 'https://www.figma.com/file/auZpPPqTmNBmZnaDXCOE6l/Site-Designs?node-id=0%3A1',
				},
				{
					name: 'Campoodle',
					link: 'https://xd.adobe.com/view/ca73c9e8-31ad-4d5c-8fae-22ad358bad75-9f20/screen/1f4ded4b-887e-426e-a013-6c0263cd39db/specs/',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
