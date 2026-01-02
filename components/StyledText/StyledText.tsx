import styles from './StyledText.styles'

import { FC } from 'react'
import { Text, TextProps } from 'react-native'

type StyledTextProps = TextProps & {
  variant?: 'primary' | 'title' | 'subtitle' | 'heading' | 'small',
}

const StyledText: FC<StyledTextProps> = ({ variant, style, ...props }) => {
  return (
      <Text
        style={[
          styles.base,
          variant === 'title' ? styles.title : null,
          variant === 'subtitle' ? styles.subtitle : null,
          variant === 'heading' ? styles.heading : null,
          variant === 'small' ? styles.small : null,
          style,
        ]}
        {...props}
      />
  )
}

export { StyledText }
