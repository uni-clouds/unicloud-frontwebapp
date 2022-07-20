import { RenderFlagProps } from './types'

export default function RenderFlag(props: RenderFlagProps) {
	const { code, name } = props

  return (
		<picture>
			<source
				type='image/webp'
				srcSet={`https://flagcdn.com/w20/${code}.webp,
        https://flagcdn.com/w40/${code}.webp 2x,`}
			/>
			<source type='image/png' srcSet={`https://flagcdn.com/${code}.svg`} />
			<img
				src={`https://flagcdn.com/w20/${code}.webp`}
				className='w-6'
				alt={name}
			/>
		</picture>
	)
}
