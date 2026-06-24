import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { imageUrl } = attributes;

	return (
		<div class="etusivun-hero" {...useBlockProps.save()}>
			{imageUrl && (
				<img src={imageUrl} alt="" />
			)}
		</div>
	);
}