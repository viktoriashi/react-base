import React from 'react';
import PassForm from "./components/PassForm";
import { type } from 'os';
import girlIcon from './images/girl.png';

export type Item = {
  id: number 
  title: string
}

export interface Pass {
  price: number
  title: string
  period: string
  options: Array<Item>
}

const dayPass:Pass = {
  price: 20,
  title: 'Day Pass',
  period: 'day',
  options: [    
    {id: 1, title: '8 hours usage of our coworking space'},
    {id: 2, title: 'Access to All our rooms'} 
  ]
}

const monthlyPass:Pass = {
  price: 380,
  title: 'Monthly Pass',
  period: 'month',
  options: [
    {id: 1, title: '8 hours usage of our coworking space'},
    {id: 2, title: 'Access to All our rooms'},
    {id: 3, title: 'Dedicated Desk'},
    {id: 4, title: 'Free Business Address'},
    {id: 5, title: 'Free Lunch 1x a day'},
  ]
}

export function printPassType(title: string) {
  console.log(title)
}


const App: React.FC = () => {
  return (
    <div className="wrapper">
      <h1 className="heading">Transparent Pricing For You</h1>
      <div className="forms">
        <div className="box">
              <div className="box__text-description">
                  <h1 className="box__text">Save More</h1>
                  <h1 className="box__bold-text">With Goodplans.</h1>
                  <div className="box__main-text">Choose a plan and get onboard in minutes. Then get $100 credits for your next payment.</div>
              </div>
              <img src={girlIcon} className="box__image"></img>
          </div>
        <PassForm passType = {dayPass}></PassForm>
        <PassForm passType = {monthlyPass}></PassForm>
      </div>
    </div>
  );
}

export default App;
