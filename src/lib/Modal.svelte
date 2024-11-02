<script>
let { modalStatus } = $props();
const close = () => (modalStatus = false);

let divClass = 'relative bg-white rounded-lg shadow dark:bg-blue-700';
let headDivClass = 'flex justify-between items-center p-5 rounded-t border-b dark:border-blue-600';
let h3Class = 'text-xl font-medium text-blue-900 dark:text-white';
let buttonClass =
	'text-blue-400 bg-transparent hover:bg-blue-200 hover:text-blue-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-blue-600 dark:hover:text-white';
</script>

{#if modalStatus}
	<!-- Small Modal Component -->
	<div
		id="how-to-play"
		role="dialog"
		aria-modal="true"
		class="fixed left-0 right-0 top-20 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
	>
		<div class="relative h-full w-full max-w-md px-4 md:h-auto">
			<!-- Modal content -->
			<div class={divClass}>
				<!-- Modal header -->
				<div class={headDivClass}>
					<h3 class={h3Class}>How to play</h3>
					<button type="button" class={buttonClass} onclick={close} aria-label="Close modal">
						<svg
							class="h-5 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
				</div>
				<!-- Modal body -->
				<div class="space-y-6 p-6">
					<ul class="mb-4 list-inside space-y-1 text-left text-gray-500 dark:text-gray-400">
						<li class="flex items-center">
							<svg
								class="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500 dark:text-green-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg> Click "Change Level" to select your difficulty.
						</li>
						<li class="flex items-center">
							<svg
								class="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500 dark:text-green-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg> Player 1 clicks "Start" or continues clicking to find a Norwegian word to explain.
						</li>
						<li class="flex items-center">
							<svg
								class="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500 dark:text-green-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg> Player 2 guesses the word or asks questions in Norwegian until guessing correctly.
						</li>
						<li class="flex items-center">
							<svg
								class="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500 dark:text-green-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg> Take turns.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
{/if}
