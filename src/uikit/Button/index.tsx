import {lazy} from "react";
import {getComponentDeviceType} from "../../utils";

const platform = getComponentDeviceType();

export const AppButton = lazy(() => import(`./${platform}/Button.${platform}`));