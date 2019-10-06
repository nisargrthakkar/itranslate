
# iTranslate

**I have used below mentioned main technologies for given task**

 - [Next Js](https://github.com/zeit/next.js/) (React Js SSR framework)
	 - I used Next Js because it is providing server-side rending in react. I know in the given task Next Js is not required. But as per my experience, while preparing the real product SSR will surely help. 
 -  [Styled-Components](https://github.com/styled-components/styled-components) (CSS in JS)
	 - It is CSS In JS. It helps to load page-wise CSS & to create a theme. 


## Summary of the work completed 

 1. Word-based translation mainly based on key-value pair of JSON (sentence based translation can be done if required) 
 2. Created one main component file  (Since it's a small task,  this has not been further divided much) 
3. For Language change dropdown UL-LI structure used.  For better user experience selection of arrow key or keyboard keypress search can be used, Looking at the limited time this has not been included in the current task but I can surely incorporate it if required. 
4.  Since Header Footer is hidden in the sketch file and Image file, so the same has not been implemented.

**Note: Kindly let me know if you need any further explanation or clarification.** 


## Kindly follow below mentioned steps to  run the project

 - Go into the project directory
	>  cd  ..../itranslate
- Run following command (This Command help to install all dependency package)
	> yarn install 
- Now run project can run in two modes 
	- Development Mode by following command
		> yarn run start
	 - Run the project in production mode with two steps
		- To make a production build
     		>yarn run build
		- To Run build - In a Linux system
			>yarn run serve
		- To Run in Window 
			>yarn run serve:win
