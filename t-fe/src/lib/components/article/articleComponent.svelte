<script lang="ts">
	import type { Article } from '$lib/models/article';
	import * as Card from '$lib/components/ui/card';

	export let article: Article;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{article.name}</Card.Title>
		<!-- <Card.Description>Card Description</Card.Description> -->
	</Card.Header>
	<Card.Content>
		<p>{article.description}</p>
		<ul>
			{#each article.categories as cat}
				<li>{cat.name}</li>
			{/each}
		</ul>
	</Card.Content>
	<Card.Footer>
		<a class="link">More details...</a></Card.Footer
	>
</Card.Root>
