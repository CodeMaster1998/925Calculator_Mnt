import React, {useState} from 'react'
import CalculateButton from "./components/CalculateButton";
import CalculatedAmounts from "./components/CalculatedAmounts";
import Layout from "./components/Layout";
import NumericInput from "./components/NumericInput";
import SliderInput from "./components/SliderInput";
import { Helmet } from 'react-helmet';

function App() {
  const [initAmount, setInitAmount] = useState(0)
  const [monthlyContribution, setmonthlyContribution] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [years, setYears] = useState(0)
  const [finalValue, setFinalValue] = useState(null)

  function calculateCompoundInterest() {
    let total = parseInt(initAmount)
    let annualContribution = parseInt(monthlyContribution) * 12
    for(let i = 0; i< parseInt(years); i++){
      total += annualContribution   //same as total = total + annualContribution //no need to parseInt as it was set above (line 17)
      console.log(total)
      total *= 1 + parseInt(interestRate) / 100 //same as total = total * (1 + interestRate/100)
    }
    setFinalValue(total)
    console.log(total);
  }

  function reset(){
    setInitAmount(0)
    setInterestRate(0)
    setYears(0)
    setmonthlyContribution(0)
    setFinalValue(0)
  }

  return (
    <Layout>
      <Helmet>
                <meta charSet="utf-8" />
                <title>925 Calculator</title>
                <meta name="description" content="Compund Interest Calculator"/>
                <meta name="description" content="Investment Calculator"/>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {finalValue ? (
        <CalculatedAmounts finalValue={finalValue} years={years} monthlyContribution={monthlyContribution} reset={reset} initAmount={initAmount}/>
      ) :(
        <>
          <NumericInput title={'Initial Amount'} symbol={'R'} value={initAmount} setValue={setInitAmount}/>
          <NumericInput title={'Monthly Contribution'} symbol={'R'} value={monthlyContribution} setValue={setmonthlyContribution}/>
          <NumericInput title={'Interest Rate' } symbol={'%'} value={interestRate} setValue={setInterestRate}/>
          <SliderInput title={'Number of Years' } value={years} setValue={setYears}/>
          <CalculateButton evaluate={calculateCompoundInterest}/>
        </>
      )}
    </Layout>
  );
}

export default App;
