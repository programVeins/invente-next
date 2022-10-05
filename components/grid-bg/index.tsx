import { component$ } from '@builder.io/qwik';
export default component$(() => {
	return (
		<div class="absolute blur-[0.04rem]  lg:h-screen">
			<img
				src="/vectors/gridbg.svg"
				class="h-[100vh] scale-150 md:scale-100 lg:h-full lg:w-screen"
			/>
		</div>
	);
});
