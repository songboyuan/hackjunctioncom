import React, { useState } from 'react'
import { Image as CloudinaryImage } from 'cloudinary-react'
import './style.scss'

const Image = ({ image = {}, alt, className, width, height, crop = 'fill', gravity = 'center', onLoad }) => {

	const [loaded, setLoaded] = useState(false)

	if (image !== null && image.public_id) {
		return (
			<CloudinaryImage
				className={`Image ${className} ${loaded ? '' : 'Image-loading'}`}
				alt={alt}
				width={width}
				height={height}
				publicId={image.public_id}
				crop={crop}
				gravity={gravity}
				onLoad={() => setLoaded(true)}
			/>
		)
	}

	return (
		<img
			src={image !== null && image.url ? image.url : require('../../assets/images/default_image.jpg')}
			alt={alt}
			className={`Image ${className} ${loaded ? '' : 'Image-loading'}`}
			width={width}
			height={height}
			onLoad={() => setLoaded(true)}
		/>
	)
}

export default Image