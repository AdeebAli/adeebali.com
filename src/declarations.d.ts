declare type SvgImage = import('next/image').StaticImageData;

declare module '*.svg' {
	const content: SvgImage;
	export default content;
}
