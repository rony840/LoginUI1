import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
import { FormButton, FormField, Heading } from '../components/Components';
import Background from '../components/Background'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, removeTodo } from '../store/redux/actions/todoActions';

const Outstanding = () => {
  const insets = useSafeAreaInsets();
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();
  
  const [todoInput, setTodoInput] = useState('');

  const AddTodo = () => {
    if (todoInput.trim()) {
      console.log('button clicked: ', todoInput);
      dispatch(addTodo(todoInput));
    } else {
      console.log('button clicked but not added: ', todoInput);
    }
  };

  const handleRemoveTodo = (todo) => {
    dispatch(removeTodo(todo));  // Dispatch action to remove todo
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <Background style2={{ flex: 5 }} />

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Heading title={`Todo list`} style2={{ color: 'white', fontSize: 30 }} />
        </View>

        {/* Todo Input Field */}
        <FormField 
          title={'Enter your todo:'} 
          placeholder={'Buy Grocery'} 
          value={todoInput}
          onChange={setTodoInput}  // Update local state when user types
        />

        <FormButton title={'Add to do'} onPress={AddTodo} />

        {/* Todo List */}
        {todos.length > 0 && (
          <FlatList
            data={todos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.todoItem}>
                <View style={styles.todoTextContainer}>
                  <Heading title={item} style2={{ color: 'black', fontSize: 18 }} />
                </View>

                <View style={styles.removeButtonContainer}>
                  <FormButton 
                    title={'Remove'} 
                    onPress={() => handleRemoveTodo(item)} 
                    style={styles.removeButton} // Ensure button is styled
                  />
                </View>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  header: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  formContainer: {
    flex: 1,
    marginTop: '10%',
    justifyContent: 'center',
  },
  todoItem: {
    flexDirection: 'row', // Align the text and button horizontally
    alignItems: 'center', // Center the items vertically
    marginVertical: 10, // Space between todo items
    padding: 10, // Added padding around the todo item
    borderBottomWidth: 1, // Optional: To separate items visually
    borderBottomColor: '#ddd', // Optional: Light border color for visual separation
  },
  todoTextContainer: {
    flex: 1, // Takes available space
  },
  removeButtonContainer: {
    marginLeft: 10, // Space between todo text and button
    justifyContent: 'center',
  },
  removeButton: {
    backgroundColor: 'red', // Red background for the button
    paddingVertical: 8,  // Button height
    paddingHorizontal: 12, // Button width
    borderRadius: 5, // Rounded corners
  },
});

export default Outstanding;
