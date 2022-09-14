import React from 'react';
import {getSharedData} from "../shared";

export const App = () => <h1>Mobile app {getSharedData()}</h1>

console.log("mobile");