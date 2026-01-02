import styles from './Header.styles'

import { FC } from 'react'
import { View } from 'react-native'

import { StyledText } from '@components'
import { getFullFormattedDate } from '@helpers'

type HeaderProps = {
  totalTodos: number,
  completedTodos: number,
}

const Header: FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  const formattedDate = getFullFormattedDate(new Date())

  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledText variant='title'>Todo App</StyledText>
        <StyledText variant='subtitle'>{formattedDate}</StyledText>
      </View>
      <StyledText>Completed {completedTodos} / {totalTodos}</StyledText>
    </View>
  )
}

export { Header }
