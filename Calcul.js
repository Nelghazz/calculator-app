import React, { Component } from 'react' 


class Calcul extends Component {
 constructor(){
    super();
    this.state={
      result : ""
    }
    this.refA = React.createRef();
    this.refB = React.createRef(); 
 }
render(){
    return(
        <>
            <div className='text-center' > 
                <h1> Calcul </h1>
            number 1 :  <input type='number' name='num1' ref={this.refA} className='form-control'/>
            number 2 :  <input type='number' name='num2' ref={this.refB} className='form-control' />
            <button className='btn btn-primary m-2 ' onClick={this.addition}> addition </button>
            <button className='btn btn-danger m-2 ' onClick={this.sus}>substraction </button>
            <button className='btn btn-secondary m-2 ' onClick={this.division}> division </button>
            <button className='btn btn-success m-2 ' onClick={this.sqrt}> sqrt </button>
            <button className='btn btn-success m-2 ' onClick={this.clear}> clear </button>



            <h2>result : {this.state.result} </h2>

                </div>
        </>
    )
}

addition = () => { 
    let a = Number(this.refA.current.value) + Number(this.refB.current.value) ;
    this.setState({result : a }) ;
}
sus=()=>{ 
    let b = this.refA.current.value - this.refB.current.value ;
    this.setState({result : b});
 }
 division= () =>{ 
   let c = this.refA.current.value / this.refB.current.value ;
    this.refB === 0 ? alert("diviseur = 0 impossible de diviser") :  this.setState({result : c})  ; 
 }
sqrt = () => {
    let d = Math.sqrt(this.refA.current.value);
    this.setState({result : d }) ; 
}
clear = () => {
    this.setState({result : this.result })
}



}
export default Calcul;