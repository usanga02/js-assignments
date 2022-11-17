/*
1.   Write a function to that will take to parameters and print out the sum on the screen using alert()
2.   Define a Person class that can be used to create person objects such that:
    (i) It will take in the person's firstname and surname and age
    (ii) It will print the person's fullname when a function called person.fullName is called
    (iii) It will print out "Adult" if the person is 18 or older and print Child if the person is below 18
3.  Write any example of a nested array (3 Dimensional Array) and a nested object
4.  Create a branch off this repo and push your updates to it
*/


//NUMBER 1 ('FUNCTION WITH 2 PARAMETERS THAT PRINTS OUT THE SUM')
function sum(x, y) {
      return x + y
     }
    alert (2+2)

    


    
      // NUMBER 2 ('PERSON OBJECT THAT PRINTS FULLnAME')

        const Person = {
          firstName: 'Wisdom',
          surName: 'Festus',
          Age:  18,
          fullName: function () {
            return `${this.firstName} ${this.surName}`
                   
        }

       }
     
    
      console.log(Person.fullName())


         // (2 (iii))

      let Age = 18;

      if(Age >= 18){
        console.log('Adult')
      }else{
        console.log('child')
      }



      // NESTED ARRAY AND OBJECT

     let famiLy = [{father:{firstName: 'John', middleName: 'Mike', lastName: 'Awesome'}, age: 40, gender: 'M'},
                 {mother:{firstName: 'Mary', middleName: 'Anna', lastName: 'Dumebi'}, age: 30, gender: 'F'},
                 {child:{firstName: 'peter', middleName: 'kings', lastName: 'frank'}, age: 20, gender: 'M'},]

                 console.log(famiLy)




    // Another possible example of nested array and objects

          let ourNames = [
             {
              person1: 'father',  
              names: ['John', 'Mike', 'Awesome'],
              age: 40,
              gender: 'M'
              
             },

            { person2: 'Mother',
              names: ['Mary','Anna','dumebi'],
              age: 30,
              gender: 'F'
            },

            { person2: 'child',
            names: ['paul','Wisdom','Frank', {age:[20]},{gender:['M']}],
            age: 30,
              gender: 'M'
          }
            
          ]     

          console.log(ourNames[1].names)