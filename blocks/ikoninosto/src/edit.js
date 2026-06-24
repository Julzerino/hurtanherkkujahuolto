import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls
} from '@wordpress/block-editor';

import {
	PanelBody,
	Button,
	TextControl,
	TextareaControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { title, content, imageId, imageUrl } = attributes;

	const onSelectImage = (media) => {
		setAttributes({
			imageId: media.id,
			imageUrl: media.url,
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Noston tiedot">

					<TextControl
						label="Noston otsikko"
						value={title}
						onChange={(value) =>
							setAttributes({ title: value })
						}
					/>

					<TextareaControl
						label="Kuvaus"
						help="Noston kuvaus, joka näytetään otsikon alla."
						value={ content }
						onChange={ ( value ) => setAttributes({ content: value }) }
					/>

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

				{title && (
					<h3>
						{title}
					</h3>
				)}
				{content && (
					<p>
						{content}
					</p>
				)}
			</div>
		</>
	);
}