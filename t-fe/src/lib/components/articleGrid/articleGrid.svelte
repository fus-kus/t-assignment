<script lang="ts">
	import type { Article } from '$lib/models/article';
	import ArticleC from '../article/articleComponent.svelte';
	// export let articles: Article[];
	let articles: Article = [
		{
			id: 1,
			name: 'Article 1',
			description: 'This is a test description for Article 1.',
			priceAmount: '19.99',
			priceCurrency: 'EUR',
			categories: [
				{ id: 1, name: 'Technology' },
				{ id: 2, name: 'Gadgets' }
			]
		},
		{
			id: 2,
			name: 'Article 2',
			description: 'This is a test description for Article 2.',
			priceAmount: '15.50',
			priceCurrency: 'USD',
			categories: [
				{ id: 3, name: 'Books' },
				{ id: 4, name: 'Education' }
			]
		},
		{
			id: 3,
			name: 'Article 3',
			description: 'This is a test description for Article 3.',
			priceAmount: '12.00',
			priceCurrency: 'GBP',
			categories: [
				{ id: 5, name: 'Fashion' },
				{ id: 6, name: 'Accessories' }
			]
		},
		{
			id: 4,
			name: 'Article 4',
			description: 'This is a test description for Article 4.',
			priceAmount: '22.49',
			priceCurrency: 'EUR',
			categories: [
				{ id: 7, name: 'Home & Garden' },
				{ id: 8, name: 'Furniture' }
			]
		},
		{
			id: 5,
			name: 'Article 5',
			description: 'This is a test description for Article 5.',
			priceAmount: '8.75',
			priceCurrency: 'USD',
			categories: [
				{ id: 9, name: 'Sports' },
				{ id: 10, name: 'Fitness' }
			]
		}
	];
</script>

<div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#each articles as article}
		<ArticleC {article} />
	{/each}
</div>
