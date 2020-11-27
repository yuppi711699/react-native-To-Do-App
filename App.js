import React, { useState } from 'react';
// import { Avatar, Accessory, Text, Button, ThemeProvider } from 'react-native-elements';
import {StyleSheet, Text, ScrollView, View, FlatList} from 'react-native';
import {Navbar} from './src/Navbar';
import { AddTodo } from './src/AddToDo';
import {Todo} from './src/Todo'



export default function App(){
  const [todos, setTodos] = useState([
    {id:3, title:'test'},
    {id:2, title:'test'},
    {id:1, title:'test'},
    {id:4, title:'test'},
    // {id:5, title:'test'},
    // {id:6, title:'test'},
    // {id:7, title:'test'},
    // {id:8, title:'test'},
    // {id:9, title:'test'},
    // {id:11, title:'test'},
    // {id:10, title:'test'},
    // {id:12, title:'test'},
    // {id:13, title:'test'},
    // {id:14, title:'test1'}
  ])

  const addTodo = (title) => {
    // const newTodo={
    //   id: Date.now().toString(),
    //   title: title
    // }
    // setTodos(todos.concat([newTodo]))
  //   setTodos((prevTodos)=>{
  //     return [
  //       ...prevTodos,
  //       newTodo
  //     ]
  //   })
  // }
    setTodos(prev => [
        ...prev, 
        {
          id: Date.now().toString(),
          title
      }
    ])
  }

  const removeTodo = id =>{
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  return (
    <View >

      <Navbar title="To do app!"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/> 
        <FlatList 
        keyExtractor={(item=>item.id.toString())}
          data={todos}
          renderItem={({item})=> (<Todo todo={item} onRemove={removeTodo}/>)}
        />
        {/* <ScrollView> //вместо FlatList
          { todos.map(todo => ( 
            <Todo todo={todo} key={todo.id}/>
          )) }
        </ScrollView> */}
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({//google how change styles in component
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
    // flex: 1,
    // flexDirection: 'row',
    // backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
  // text: {
  //   color: '#fff',
  //   fontSize: 26
  // }
})
// const App = () => {
//   return (
//     <ThemeProvider>
// <Button
//   title="Button with icon object"
// />
// <Text h1 style={{
//   color: 'green',
//   backgroundColor: 'red'
// }}> Dot of Input</Text>
// <Button
//   // icon={{
//   //   name: "arrow-right",
//   //   size: 15,
//   //   color: "white"
//   // }}
//   style={{
//     color: 'blue',
//     backgroundColor: 'red'
//   }}
//   title="Button with icon object"
// />
// <Avatar
//   rounded
//   source={{
//     uri:
//       'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//   }}
// />
// <Avatar
//   source={{
//     uri:
//       'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//   }}
//   >
//   {/* <Accessory /> */}
// </Avatar>
//     </ThemeProvider>
//   );
// };


///////////////////////////////////////////////////////
// const App = () => {
//   return (
//     <ThemeProvider>
//       <Button title="Hey!" />
//     </ThemeProvider>
//   );
// }; 



// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
// export default class AnatomyExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button transparent>
//               <Icon name='menu' />
//             </Button>
//           </Left>
//           <Body>
//             <Title>Header</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content>
//           <Text>
//             This is Content Section
//           </Text>
//         </Content>
//         <Footer>
//           <FooterTab>
//             <Button full>
//               <Text>Footer</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//     );
//   }
// }
