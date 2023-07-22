import React, { useState } from 'react'
import { View, TextInput, StyleSheet, type KeyboardTypeOptions } from 'react-native'

interface SearchBarProps {
  placeholder: string
  value: string
  keyboardType?: KeyboardTypeOptions
  onSearch: (searchCriteria: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, value, keyboardType, onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState<string>(value)

  const handleSearch = (): void => {
    onSearch(searchCriteria)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchCriteria}
        keyboardType={keyboardType || 'default'}
        onChangeText={(text) => { setSearchCriteria(text) }}
        onSubmitEditing={handleSearch}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  }
})

export default SearchBar
