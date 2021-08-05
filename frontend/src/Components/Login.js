import React from "react";
class Login extends React.Component {
  constructor(){
    super();
    
    this.calculateBMI = this.calculateBMI.bind(this);
  }

 

  calculateBMI(){
    if (this.props.data.weight && this.props.data.heightFeet && this.props.data.heightInch){
      // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
      let INCHES_IN_FEET = 12;

      var height = Number(this.props.data.heightFeet);
          // convert feet to inches
          height *= INCHES_IN_FEET;
          // add the inches input field
          height += Number(this.props.data.heightInch);

      let weight = this.props.data.weight;

      var bmi = (weight / (height * height)) * 703;
          bmi = bmi.toFixed(2);
        console.log(bmi)
      return bmi;
    }
  }

  getBMIResults(bmi){
    let bmiResults = {
      label: '',
      alertClass: '',
    };
    
    if (bmi <= 18.5){
      bmiResults.label = 'Underweight';
      bmiResults.alertClass = 'alert-danger';
    } 
    else if (bmi <= 24.9) {
      bmiResults.label = 'Normal weight';
      bmiResults.alertClass = 'alert-success';
    }
    else if (bmi <= 29.9){
      bmiResults.label = 'Overweight';
      bmiResults.alertClass = 'alert-warning';
    }
    else if (bmi >= 30) {
      bmiResults.label = 'Obesity';
      bmiResults.alertClass = 'alert-danger';
    } else {
      bmiResults.label = 'BMI';
      bmiResults.alertClass = 'alert-primary';
    }

    return bmiResults;
  }

  render() {
    //console.log(this.props)
    let bmi = this.calculateBMI();
    let results = this.getBMIResults(bmi);

    return (
      <div className="App container shadow p-3 border">
        <div className="row ">
          <div className="col-xs-12 ">
            <h1>BMI Calculator</h1>
            <p>Enter your weight and height below.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <form>
            <div className="form-group">
                <legend>User Name</legend>
                <div className="row">
                  <div className="col-xs-12">
                    <input className="form-control" id="bmiWeight" type="text"  value={ this.props.data.username } name="username" onChange={ this.props.handleChange } />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <legend>Weight</legend>
                <div className="row">
                  <div className="col-xs-12">
                    <input className="form-control" id="bmiWeight" type="number" min="1" max="1000" value={ this.props.data.weight } name="weight" onChange={ this.props.handleChange } />
                    <label className="control-label" htmlFor="bmiWeight">lb</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <legend>Height</legend>
                <div className="row">
                  <div className="col-xs-3 col-lg-6">
                    <input className="form-control" id="bmiHeightFeet" type="number" min="1" max="12" value={ this.props.data.heightFeet } name="heightFeet" onChange={ this.props.handleChange } />
                    <label className="control-label" htmlFor="bmiHeightFeet">ft</label>
                  </div>
                  <div className="col-xs-3 col-lg-6">
                    <input className="form-control" id="bmiHeightInch" type="number" min="0" max="12" value={ this.props.data.heightInch } name="heightInch" onChange={ this.props.handleChange } />
                    <label className="control-label" htmlFor="bmiHeightInch">in</label>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-sm-6">
            <br></br>
            <BmiDisplay bmi={bmi} label={results.label} alertClass={results.alertClass} />
          </div>

        </div>
      </div>
    );
  }
}

function BmiDisplay(props){
  return (
    <div className={"bmi-result alert " + props.alertClass}>
      <div>{ props.bmi || '--.-' }</div>
      <div>{ props.label }</div>
    </div> 
  )
}


export default Login;