import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { TouchableOpacity } from 'react-native'

import { COLORS } from '@constants'

type StyledCheckboxProps = {
  checked: boolean,
  onCheck: () => void,
}

const StyledCheckbox: FC<StyledCheckboxProps> = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <Ionicons
        name={checked ? 'checkmark-circle' : 'ellipse-outline'}
        size={24}
        color={checked ? COLORS.SUCCESS : COLORS.PRIMARY_BORDER}
      />
    </TouchableOpacity>
  )
}

export { StyledCheckbox }
