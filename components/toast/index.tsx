import { component$, Slot, useClientEffect$, useStore } from '@builder.io/qwik';

interface Props {
	type: 'success' | 'error' | 'warning' | 'loading';
	timeInMs?: number;
}
export default component$<Props>(({ type, timeInMs = 5000 }) => {
	const store = useStore({
		rendering: true,
	});

	useClientEffect$(() => {
		// Only runs in the client
		const timer = setTimeout(() => {
			store.rendering = false;
		}, timeInMs);
		return () => {
			clearInterval(timer);
		};
	});

	return (
		<div
			class={`${
				store.rendering ? 'opacity-100 ' : 'opacity-0 '
			} fixed z-50 px-3 py-10 text-white font-ubuntu transition-all duration-500 top-28 right-10 h-16 w-80 flex items-center justify-left shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-xl backdrop-blur-lg`}
		>
			{type == 'success' && (
				<ion-icon
					class="text-green-500 animate-pulse pr-2"
					size="large"
					name="checkmark-circle"
				></ion-icon>
			)}

			{type == 'error' && (
				<ion-icon
					class="text-red-500 animate-pulse pr-2"
					size="large"
					name="close-circle"
				></ion-icon>
			)}
			<Slot />
		</div>
	);
});
