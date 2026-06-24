import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
  const { title, imageId, imageUrl } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Block settings', 'logo-otsikko' ) } initialOpen={ true }>
          <TextControl
            label={ __( 'Otsikko', 'logo-otsikko' ) }
            value={ title }
            onChange={ ( newTitle ) => setAttributes( { title: newTitle } ) }
          />

          <MediaUploadCheck>
            <MediaUpload
              onSelect={ ( media ) => setAttributes( { imageId: media.id, imageUrl: media.url } ) }
              allowedTypes={ [ 'image' ] }
              value={ imageId }
              render={ ( { open } ) => (
                <Button onClick={ open } variant="primary">
                  { imageUrl ? __( 'Vaihda kuva', 'logo-otsikko' ) : __( 'Valitse kuva', 'logo-otsikko' ) }
                </Button>
              ) }
            />
          </MediaUploadCheck>
        </PanelBody>
      </InspectorControls>

      <div { ...useBlockProps() }>
        { imageUrl && <img src={ imageUrl } alt={ title } style={ { maxWidth: '100%' } } /> }
        <h2>{ title || __( 'Tähän tulee otsikko', 'logo-otsikko' ) }</h2>
      </div>
    </>
  );
}
