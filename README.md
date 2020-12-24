# Yoda-Quotes
**Yoda-Quotes** is a simple app for Fitbit OS that generates a pseudo-random quote from an array of 45 Yoda quotes. This app currently uses [Fitbit SDK V4.2.0](https://github.com/Fitbit). **Yoda-Quotes** is available for install from the Fitbit App Gallery: [Yoda-Quotes](https://gallery.fitbit.com/details/001f0feb-9bf0-49db-88ed-10010b4e862b). **Yoda-Quotes** is not compatible with Fitbit SDK 5.0 for Fitbit Versa 3 and Fitbit Sense.

## Devices
**Yoda-Quotes** is built for Fitbit Devices: Ionic (348x250), Versa (300x300), Versa 2 (300x300), and Versa Lite (300x300).

<p align="left">
  <img width="175" height="175" src=./screenshots/yoda-quotes-versa.png>
  <img width="175" height="175" src=./screenshots/yoda-quotes-versa-lite.png>
  <img width="175" height="175" src=./screenshots/yoda-quotes-versa-1.png>
  <img width="175" height="175" src=./screenshots/yoda-quotes-versa-2.png>
</p>

## Compatibility
**Yoda-Quotes** is not compatible with Fitbit SDK 5.0 for Fitbit Versa 3 and Fitbit Sense.

## Build
**Pre-requisites:**
* Install [Node.js](https://nodejs.org/en/download/) 8.x+ on macOS, Windows or Linux.
* ```git clone https://github.com/princessleia1/yoda-quotes.git ```
* Edit package.json file and add the Fitbit CLI dependencies:
```
"devDependencies": {
   "@fitbit/sdk": "^4.2.0",
   "@fitbit/sdk-cli": "^1.7.0"
}
```
* Developer Bridge on Mobile Device and Fitbit Device connected.

## Install
Using Fitbit SDK CLI Tool via ```Console```:

```
npm add @fitbit/sdk
npm add @fitbit/sdk-cli
npx fitbit-build generate-appid
npx fitbit-build
npx fitbit
fitbit$ install
```
## Attribution
**Yoda-Quotes** Image [Yoda-star-wars-jedi-she-makes-1091030](https://pixabay.com/illustrations/yoda-star-wars-jedi-she-makes-1091030/) Attribution [Comfreak](https://pixabay.com/users/comfreak-51581/) | Simplified [Pixabay License](https://pixabay.com/service/license/).

## License
**Yoda-Quotes** App is licensed under the terms of the [GPL-3.0 License](/LICENSE). 

<p align="middle">
<img width="80" height="80" src=./resources/icon.png>
</p>
