import React from 'react'



class HomePage extends React.Component {

  // constructor(){
  //   super(); //must call parents constructor first 
  //   this.state = {
      
  //   }
  //    //we put this in the constrcutor because it will be used again and again to aceess the firestore

  //   //method 2 , we bind our functions to this (otherwise their 'this' value wull be uundefined when they are assigned to an event listenr or aany other var)
  //   // this.increaseQuantity = this.increaseQuantity.bind(this)}
  // }


  render(){

 

    return (
      <div>
        <div className="flex flex-col items-center container px-5  mx-auto bg-gray-100 h-40 ">
      
      
            
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">HOME</h2>
                <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
            

        </div>
      </div>
    );
  }

}

export default HomePage ;