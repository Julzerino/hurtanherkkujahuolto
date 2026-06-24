import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { url, imageUrl } = attributes;

	const content = (
		<>
			{imageUrl && (
				<img src={imageUrl} alt="" />
			)}
		</>
	);

	return (
		<div {...useBlockProps.save()}>
			{url ? (
				<a href={url}>
					{content}
				</a>
			) : (
				content
			)}
		</div>
	);
}