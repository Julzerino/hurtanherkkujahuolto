import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls
} from '@wordpress/block-editor';

import {
	PanelBody,
	Button,
	TextControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { imageId, imageUrl } = attributes;

	const onSelectImage = (media) => {
		setAttributes({
			imageId: media.id,
			imageUrl: media.url,
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Etusivun hero">

					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={['image']}
							value={imageId}
							render={({ open }) => (
								<Button
									variant="primary"
									onClick={open}
								>
									{imageId
										? 'Korvaa kuva'
										: 'Valitse kuva'}
								</Button>
							)}
						/>
					</MediaUploadCheck>

				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				{imageUrl ? (
					<img src={imageUrl} alt="" />
				) : (
					<p>Valitse kuva sivupalkista</p>
				)}
			</div>
		</>
	);
}