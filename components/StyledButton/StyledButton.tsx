import styles from './StyledButton.styles'

import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { COLORS } from '@constants'
import { StyledText } from '../StyledText'

type StyledButtonProps = TouchableOpacityProps & {
  label?: string,
  icon?: React.ComponentProps<typeof Ionicons>['name'],
  size?: 'default' | 'large' | 'small'
  variant?: 'primary' | 'secondary' | 'delete'
}

const StyledButton: FC<StyledButtonProps> = ({
  label,
  icon,
  size = 'default',
  variant = 'primary',
  disabled,
  ...props
}) => {
  const textVariant = (() => {
    if (size === 'large') return 'heading'
    return 'small'
  })()

  return (
    <TouchableOpacity
      style={[
        styles.base,
        disabled ? styles.disabled : null,
        // sizes
        size === 'small' ? styles.small : null,
        size === 'large' ? styles.large : null,
        // variants
        variant === 'secondary' ? styles.secondary : null,
        variant === 'delete' ? styles.delete : null,
      ]}
      disabled={disabled}
      {...props}
    >
      {label && <StyledText variant={textVariant}>{label}</StyledText>}
      {icon && <Ionicons name={icon} size={20} color={COLORS.PRIMARY_TEXT} />}
    </TouchableOpacity>
  )
}

export { StyledButton }
