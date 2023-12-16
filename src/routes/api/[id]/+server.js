import { json } from '@sveltejs/kit';
import { lista } from '$lib/worda-list.js';

export function GET (requestEvent) {
  const { params } = requestEvent;
  const { id } = params;
  const word = lista.find((word) => word.id === parseInt(id));
  return json(word)
}