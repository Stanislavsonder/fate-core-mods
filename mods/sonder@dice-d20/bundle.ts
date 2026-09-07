import { defineFateMod } from '@fate-app/mod-types'
import D20Dice from './src/d20'

export default defineFateMod({
	dice: {
		shapes: [D20Dice]
	}
})
