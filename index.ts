import {registerElement} from "nativescript-angular/element-registry";
import {WebViewCrypto} from "nativescript-webview-crypto";

registerElement("polyfill-crypto", () => WebViewCrypto);
