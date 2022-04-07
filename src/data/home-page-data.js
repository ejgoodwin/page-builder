const testData = [
	{
		background: '',
		color: '#26262a',
		component: 'hero',
		classes: 'pb-homepage-hero',
		items: [
			{
				heading: 'Page builder',
				text: 'Build pages quickly and easily',
				image: 'hero-image.svg',
				buttons: [
					{
						label: 'Creat a new page',
						link: '/page-builder',
						classes: 'button--primary'
					},
					{
						label: 'Example page',
						link: '/example-page',
						classes: 'button--secondary'
					}
				]
			}
		]
	},
	{
		background: '#2D344D',
		color: '#fff',
		component: 'card',
		classes: 'no-border',
		items: [
			{
				heading: 'Simple interface',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			},
			{
				heading: 'Pre-made components',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			},
			{
				heading: 'Copy and paste code',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			}
		]
	},
	{
		component: 'cta-block',
		classes: 'cta-block--left pb-homepage-cta-block-left',
		items: [
			{
				heading: "Heading about product",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				image: 'https://via.placeholder.com/600x350'
			}
		]
	},
	{
		background: '',
		color: 'white',
		component: 'text-block',
		classes: 'text-block--center pb-text-block-cta',
		items: [
			{
				heading: "Create pages with an easy to use page builder",
				buttons: [
					{
						label: 'Create new page',
						link: '/page-builder',
						classes: 'button--secondary'
					}
				]
			}
		]
	}
];

export default testData;