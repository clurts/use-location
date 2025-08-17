# use-location

## __Installation__

To install using npm: 
```
npm i @clurts/use-location
``` 
To install using yarn:
```
yarn add @clurts/use-location
```

## __Usage__
Import the useLocation hook:
```js
import useLocation from "@clurts/use-location"
```

In your component use as follows: 
```js
const [isLocating, position, error] = useLocation()
```

## __Api__
__isLocating__: *boolean* - indicates wehter or not your postion is being retrieved currently.

__position__: *object* - containing geolocation information

Properties on the position object: 
| Property | Description |
| --- | ----------- |
| lat | Returns the current position latitude |
| long | Returns the current position longitude |

__error__: *string* - error messages if access to location data is blocked or geolocation is not supported by the browser.

## __TypeScript Support__

This package provides full TypeScript type definitions out of the box. When used in TypeScript projects, types are automatically inferred:

```ts
import useLocation, { Location, LocationResult } from "@clurts/use-location";

const [isLocating, position, error]: LocationResult = useLocation();
// position: Location
```

- `Location` type:
  ```ts
  type Location = {
    lat: number | null;
    long: number | null;
  };
  ```
- `LocationResult` type:
  ```ts
  type LocationResult = [boolean, Location, string | null];
  ```

No additional configuration is needed. Type definitions are included in the published package.