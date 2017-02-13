# nativescript-angular-webview-crypto

[![npm](https://img.shields.io/npm/v/nativescript-angular-webview-crypto.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/nativescript-angular-webview-crypto)

This brings `window.Crypto` to your Angular2 NativeScript application. It does this
by communicating with a hidden WebView, which performs the actual
computation.

It extends [`nativescript-webview-crypto`](https://github.com/saulshanabrook/nativescript-webview-crypto), which in turn extends
[`webview-crypto`](https://github.com/saulshanabrook/webview-crypto).

*This project is funded by [Burke Software and Consulting LLC](http://burkesoftware.com/) for [passit](http://passit.io/). We are available for hire for any improvement and integration needs on this project. Open an issue to start a conversation or email info @ burke software dot come.*


## Install

This requires being [setup properly with NativeScript](http://docs.nativescript.org/start/quick-setup)
first. Then install this as a plugin:

```bash
tns plugin add nativescript-angular-webview-crypto
```

## Usage

Rendering the `polyfill-crypto` component will start up a WebView to
transparently proxy all the `crypto` calls to. `crypto` is a global variable,
to match the Web Cryptography API. To register the `polyfill-crypto` component,
just import this package.

```typescript
import { Component, OnInit } from "@angular/core";
import 'nativescript-angular-webview-crypto';

@Component({
    selector: "ns-app",
    template: `
        <polyfill-crypto></polyfill-crypto>
    `
 })
export class AppComponent implements OnInit {
	ngOnInit() {
		const array = new Uint32Array(10);
		console.log(array)
		// getRandomValues is asynchronous
		// https://github.com/saulshanabrook/webview-crypto#getrandomvalues
		crypto.getRandomValues(array);
		(array as any)._promise.then(_ => console.log(array))
	}
}

```

The component will be hidden, but needs to be rendered for `crypto` to work.

You can look at an [example repo](https://github.com/saulshanabrook/nativescript-angular-webview-crypto-example)
running [this example for symmetric encryption](https://blog.engelke.com/2014/06/22/symmetric-cryptography-in-the-browser-part-1/)
in NativeScript.
