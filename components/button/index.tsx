import { component$, Slot } from '@builder.io/qwik';

interface Props {
	action$?: () => void;
	sub?: boolean;
	classes?: string;
}

export default component$<Props>(({ action$, sub, classes }) => {
	return (
		<button
			preventDefault:click
			onClick$={action$}
			class={
				`transition-all hover:animate-none` +
				(sub
					? ''
					: ' animate-pulse hover:scale-110 hover:shadow-sky-600 hover:shadow-lg ') +
				`duration-500 bg-gradient-to-r from-cyan-400 to-sky-500 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-sky-400 shadow-sky-700 shadow-md  ease-out  rounded-md text-white py-2 px-10 font-azonix tracking-wider ` +
				classes
			}
		>
			<Slot />
		</button>
	);
});
