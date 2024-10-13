import { json } from '@sveltejs/kit';
import { lista } from '$lib/worda-list.js';

export function GET() {
	return json(lista);
}
