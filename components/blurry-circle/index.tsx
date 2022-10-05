import { component$, useClientEffect$, useStore } from '@builder.io/qwik';

export default component$(() => {
	const store = useStore({
		colors: [
			'bg-sky-500',
			'bg-teal-500',
			'bg-green-500',
			'bg-amber-500',
			'bg-rose-500',
			'bg-pink-500',
			'bg-fuchsia-500',
			'bg-violet-500',
			'bg-indigo-500',
			'bg-blue-500',
		],
		activeColor: 0,
	});

	useClientEffect$(() => {
		const timer = setInterval(() => {
			if (store.activeColor === store.colors.length - 1) {
				store.activeColor = 0;
			} else {
				store.activeColor++;
			}
		}, 1500);
		return () => {
			clearInterval(timer);
		};
	});
	return (
		<div class="w-screen flex justify-center">
			<div
				class={`rounded-full h-[600px] w-[600px] transition-colors duration-1000 ${
					store.colors[store.activeColor]
				}  blur-[300px] absolute -bottom-80`}
			></div>
		</div>
	);
});
