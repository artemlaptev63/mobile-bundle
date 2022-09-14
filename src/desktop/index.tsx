import React from 'react';
import {getSharedData} from "../shared";

export const App = () => <h1>Desktop app {getSharedData()}</h1>

console.log("desktop");