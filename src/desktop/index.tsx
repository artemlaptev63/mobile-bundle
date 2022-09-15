import React from 'react';
import {getSharedData} from "../shared";

export const App = () => <h1>Desktop app {getSharedData()} version 5</h1>

alert("desktop");