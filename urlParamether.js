// get URL paramether value in LWC of salesforce community
//url.searchParams return array of parameter with its value

let url = new URL(window.location.href);
let c = url.searchParams.get(paramName);
