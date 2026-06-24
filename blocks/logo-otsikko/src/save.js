import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { title, imageUrl } = attributes;

    return (
        <div { ...useBlockProps.save() }>
            { imageUrl && <img src={ imageUrl } alt={ title } /> }
            { title && <h2>{ title }</h2> }
        </div>
    );
}