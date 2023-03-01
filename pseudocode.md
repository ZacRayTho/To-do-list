Questions

HTML/CSS  
TodoList  
<ul> of <TodoItem />  
TodoItem  
Delete Button X  
Checkbox - update state from todo to todone  
Text of the todo  
Classes added based on todo status   
Header  
Input textbox  
Add button definitely  
Hit enter and that also adds (stretch) - Could have  
onChange event for my input?  
Buttons (All/Active/Completed)  
<Button text=”All”> 
OnClick Event to update some state somewhere  
Count / Items Left  
Getting a count of the items in the state that are still left to do  
Check All (Should Have)  
Clear Completed button (deletes all to-done)  
Button to complete all (should have)  
Changes all to-dones to to-dos / completed to active  
React Component Hierarchy  
Index.js  
|-- App.js  
|---- currentView (state)  
|---- todos (state)  
|--- filter todos based on the currentView before rendering  
|---- return (  
<Header>  
	<Input>  
		<button>  
	<TodoList todos>
		Loop through todos to render  
		<TodoItem>  
			Checkbox  
			Text  
			DeleteButton  
  


## Variables
STATE  
Todo item   
Text: laundry  
Done: false // status: ‘todo’  
Id: Maybe use Date.now()  
Todos - Array of Todo Item   
Saw an example of something similar in the wizards/elixirs/houses  
To show count, we can use length of the visible todos to show there.  
CurrentView  
String for view (‘active’, ‘all’, ‘completed’)  

## Functions  


## Procedures
INIT

	PAGE LOADS
	Todos sould be [] with length 0
	CurrentView is set to ‘all’ - or ‘active’ or whatever our first state
	Input box loads
	Tabs load
	




