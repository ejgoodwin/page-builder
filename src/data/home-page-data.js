const testData = [
	{
		background: '#EDF8FD',
		color: '#26262a',
		component: 'hero',
		classes: '',
		items: [
			{
				heading: 'Page builder',
				text: 'Build pages quickly and easily',
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
		classes: 'cta-block--left',
		items: [
			{
				heading: "Heading about product",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				image: 'https://placeimg.com/640/400/any'
			}
		]
	},
	{
		background: 'linear-gradient(90deg, rgba(5,123,186,1) 40%, rgba(41,193,221,1) 100%)',
		color: 'white',
		component: 'text-block',
		classes: 'text-block--center',
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