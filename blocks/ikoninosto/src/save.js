import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title, content, imageUrl } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="ikoninosto-inner">
				{imageUrl && (
					<img src={imageUrl} alt="" />
				)}	
				<h3>{title}</h3>
				<p>{content}</p>
			</div>
		</div>
	);
}