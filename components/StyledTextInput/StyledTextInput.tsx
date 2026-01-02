import styles from './StyledTextInput.styles'

import { FC } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { COLORS } from '@constants'

type StyledTextInputProps = TextInputProps & {
  isError?: boolean,
}

const StyledTextInput: FC<StyledTextInputProps> = ({ isError, ...props }) => {
  return (
    <TextInput
      style={[
        styles.input,
        props.style,
        isError ? styles.error : null
      ]}
      placeholderTextColor={COLORS.PLACEHOLDER}
      {...props}
    />
  )
}

export { StyledTextInput }
