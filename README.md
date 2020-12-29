# Fast4pdf

Fast4pdf is a CLI that convert, merge, split (and more...) pdf files.

## What it does

This CLI allow you to manipulate pdf using the API of [ilovepdf.com](https://www.ilovepdf.com/).  
See the Tools section to know what you can do.

## Installation

### Prerequisites

- [Developper account](https://developer.ilovepdf.com/signup) to get a Public key of the API.
- Nodejs

```bash
npm install -g fast4pdf
# or
yarn global add fast4pdf
```

## Getting started

Execute fast4pdf and enter your public API key.
![getting_started](https://media.giphy.com/media/LbP8wv1unkGJPrvS0N/giphy.gif)

## Tools

Currentlu the following tools are available :

- compress (Reduce file size while optimizing for maximal PDF quality)
- imagepdf (Convert JPG images to PDF in seconds. Easily adjust orientation and margins)
- merge (Combine PDFs)
- officepdf (Convert Word, Powerpoint and Excel to PDF)
- pdfa (Transform your PDF to PDF/A, the ISO-standardized version of PDF for long-term archiving. Your PDF will preserve formatting when accessed in the future)
- pdfjpg (Convert a PDF to JPG image)
- protect (Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access)
- repair (Repair a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repair tool)
- rotate (Rotate your PDF)
- split (Separate one page or a whole set for easy conversion into independent PDF files)
- unlock (Remove PDF password security, giving you the freedom to use your PDFs as you want)
- \_changeAPIKeys (Change your public API Key)

## Example

```bash
fast4pdf compress Compressed.pdf ToCompress.pdf
```

![enter image description here](https://media.giphy.com/media/fh8VVN6E7YXNlaWbap/giphy.gif)

## Licence

Distributed under the MIT license. See [`LICENSE.md`](https://github.com/Timeo1210/fast4pdf/blob/master/LICENSE.md) for more information.

## Links

This library is [published on NPM](https://www.npmjs.com/package/fast4pdf).
Check me on [Twitter](https://twitter.com/TimeoBoulhol)
