const express = require('express')
const app = express()


app.set('view engine', 'ejs')

app.get('/', (req, res) => {


;
   /* let data = {
        text: '<h1 style="color:red">Hellow</h1>'
        } */
       

   let data = [{
        name: 'Burt Lanniser',
        age: 56,
        hobbies:['reading', ' polo']
      },
       {
           name: "Tobe Nwinge",
           age:27,
           hobbies:['writing', ' pressing flowers']
       },
       {
           name: "Miguel Atwood",
           age: undefined,
           hobbies:['music', ' mediatation']
       },
       {
           name: "Hieu Ngyen",
           age:33,
           hobbies: undefined
       },
       {
           name: undefined,
           age:undefined,
           hobbies:undefined
       }
   ]  
   res.render('test', { data :data})
   
    
}) 
   




console.log('Server just started')
app.listen(1002);