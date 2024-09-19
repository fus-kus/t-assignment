<script lang="ts">
	import Button from '../ui/button/button.svelte';
	import Input from '../ui/input/input.svelte';
	import { Search } from 'lucide-svelte';
</script>

<div class="flex flex-row justify-center">
	<Input placeholder={'Search'} />
	<Button variant={'ghost'}><Search /></Button>
</div>
