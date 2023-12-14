<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  let {size = ctx.size || 24, role = ctx.role || 'img', ariaLabel = 'flag of no', ...attributes} = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-no"
  width={size}
  height={size}
  {...attributes}
  {role}
  aria-label={ariaLabel}
  {onclick}
  {onkeydown}
  {onkeyup}
  {onfocus}
  {onblur}
  {onmouseenter}
  {onmouseleave}
  {onmouseover}
  {onmouseout}
  viewBox="0 0 640 480"
>
  <path fill="#ed2939" d="M0 0h640v480H0z" />
  <path fill="#fff" d="M180 0h120v480H180z" />
  <path fill="#fff" d="M0 180h640v120H0z" />
  <path fill="#002664" d="M210 0h60v480h-60z" />
  <path fill="#002664" d="M0 210h640v60H0z" />
</svg>

