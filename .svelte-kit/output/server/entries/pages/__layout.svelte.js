import { g as getContext, c as create_ssr_component, a as add_attribute, e as escape, b as subscribe, d as each, v as validate_component } from "../../chunks/index-f8a463c7.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss([
    `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
    `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
    rotate && `rotate(${rotate}${rotateUnit})`
  ], " ");
}
var fa_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".spin.svelte-1w3t65e{-webkit-animation:svelte-1w3t65e-spin 2s 0s infinite linear;animation:svelte-1w3t65e-spin 2s 0s infinite linear}.pulse.svelte-1w3t65e{-webkit-animation:svelte-1w3t65e-spin 1s infinite steps(8);animation:svelte-1w3t65e-spin 1s infinite steps(8)}@-webkit-keyframes svelte-1w3t65e-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes svelte-1w3t65e-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}")();
const css$1 = {
  code: ".spin.svelte-1w3t65e{-webkit-animation:svelte-1w3t65e-spin 2s 0s infinite linear;animation:svelte-1w3t65e-spin 2s 0s infinite linear}.pulse.svelte-1w3t65e{-webkit-animation:svelte-1w3t65e-spin 1s infinite steps(8);animation:svelte-1w3t65e-spin 1s infinite steps(8)}@-webkit-keyframes svelte-1w3t65e-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes svelte-1w3t65e-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$1);
  i = icon && icon.icon || [0, 0, "", [], ""];
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id, 0)} class="${[
    "svelte-fa " + escape(clazz) + " svelte-1w3t65e",
    (pulse ? "pulse" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", s, 0)} viewBox="${"0 0 " + escape(i[0]) + " " + escape(i[1])}" aria-hidden="${"true"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"><g transform="${"translate(" + escape(i[0] / 2) + " " + escape(i[1] / 2) + ")"}" transform-origin="${escape(i[0] / 4) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2) + " " + escape(i[1] / -2) + ")"}"></path>` : `
          <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2) + " " + escape(i[1] / -2) + ")"}"></path>
          <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2) + " " + escape(i[1] / -2) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
var Fa$1 = Fa;
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
var faBurger = {
  prefix: "fas",
  iconName: "burger",
  icon: [512, 512, ["hamburger"], "f805", "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"]
};
var faHamburger = faBurger;
var faCartShopping = {
  prefix: "fas",
  iconName: "cart-shopping",
  icon: [576, 512, [128722, "shopping-cart"], "f07a", "M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"]
};
var faShoppingCart = faCartShopping;
var Navbar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');\n.nav-link-active.svelte-w84zbm{--tw-bg-opacity:1;background-color:rgb(17 24 39 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}")();
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');.nav-link-active.svelte-w84zbm{--tw-bg-opacity:1;background-color:rgb(17 24 39 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const nav = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Keranjang", path: "/keranjang" }
  ];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"w-full h-full bg-yellow-300 box-border p-5 md:p-3"}"><nav class="${"w-full h-full flex items-center justify-between md:justify-start md:gap-3"}"><div><a class="${"font-pacifico text-2xl"}" href="${"/"}">Concad Restaurant</a></div>
		<ul class="${[
    "flex flex-col absolute top-0 bg-yellow-400 mt-[70px] left-0 h-max w-full gap-1 p-1 transition duration-150 ease-in-out -z-10 md:flex-row md:relative md:z-30 md:translate-y-0 md:mt-0 md:bg-transparent md:w-max",
    "-translate-y-80"
  ].join(" ").trim()}">${each(nav, (item) => {
    return `<li class="${[
      "w-full h-max hover:bg-gray-800 rounded-md hover:text-white " + escape(item.title === "Keranjang" ? "text-red-700" : "text-gray-900") + " svelte-w84zbm",
      $page.url.pathname === item.path ? "nav-link-active" : ""
    ].join(" ").trim()}"><a${add_attribute("href", item.path, 0)} class="${"w-full md:text-center"}"><div class="${"w-full h-full p-3 md:py-1"}">${item.title === "Keranjang" ? `${validate_component(Fa$1, "Fa").$$render($$result, { icon: faShoppingCart, size: "lg" }, {}, {})}` : `${escape(item.title)}`}
						</div></a>
				</li>`;
  })}</ul>
		<button class="${"text-red-800 md:hidden"}">${validate_component(Fa$1, "Fa").$$render($$result, { icon: faHamburger, size: "lg" }, {}, {})}</button></nav></div>

`;
});
var app = /* @__PURE__ */ (() => "\n@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');/* fira-mono-cyrillic-ext-400-normal*/@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}/* fira-mono-cyrillic-400-normal*/@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}/* fira-mono-greek-ext-400-normal*/@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+1F00-1FFF;\n}/* fira-mono-greek-400-normal*/@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+0370-03FF;\n}/* fira-mono-latin-ext-400-normal*/@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}/* fira-mono-latin-400-normal*/@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}:root {\n	font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu;\n}body {\n	font-family: 'Righteous', cursive;\n}/* ! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}::before,\n::after {\n  --tw-content: '';\n}/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/html {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/body {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/hr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/abbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}/*\nRemove the default font size and weight for headings.\n*/h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/a {\n  color: inherit;\n  text-decoration: inherit;\n}/*\nAdd the correct font weight in Edge and Safari.\n*/b,\nstrong {\n  font-weight: bolder;\n}/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/code,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}/*\nAdd the correct font size in all browsers.\n*/small {\n  font-size: 80%;\n}/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}sub {\n  bottom: -0.25em;\n}sup {\n  top: -0.5em;\n}/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/table {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/button,\nselect {\n  text-transform: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/button,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}/*\nUse the modern Firefox focus style for all focusable elements.\n*/:-moz-focusring {\n  outline: auto;\n}/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/:-moz-ui-invalid {\n  box-shadow: none;\n}/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/progress {\n  vertical-align: baseline;\n}/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/::-webkit-search-decoration {\n  -webkit-appearance: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}/*\nAdd the correct display in Chrome and Safari.\n*/summary {\n  display: list-item;\n}/*\nRemoves the default spacing and border for appropriate elements.\n*/blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}fieldset {\n  margin: 0;\n  padding: 0;\n}legend {\n  padding: 0;\n}ol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}/*\nPrevent resizing textareas horizontally by default.\n*/textarea {\n  resize: vertical;\n}/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/input::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}input::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}/*\nSet the default cursor for buttons.\n*/button,\n[role=\"button\"] {\n  cursor: pointer;\n}/*\nMake sure disabled buttons don't get the pointer cursor.\n*/:disabled {\n  cursor: default;\n}/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/img,\nvideo {\n  max-width: 100%;\n  height: auto;\n}*, ::before, ::after{\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}::-webkit-backdrop{\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}::backdrop{\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}body{\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 240 138 / var(--tw-bg-opacity));\n}.sr-only{\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}.absolute{\n  position: absolute;\n}.relative{\n  position: relative;\n}.top-0{\n  top: 0px;\n}.left-0{\n  left: 0px;\n}.right-0{\n  right: 0px;\n}.-z-10{\n  z-index: -10;\n}.z-20{\n  z-index: 20;\n}.col-span-2{\n  grid-column: span 2 / span 2;\n}.row-span-2{\n  grid-row: span 2 / span 2;\n}.m-1{\n  margin: 0.25rem;\n}.m-auto{\n  margin: auto;\n}.mx-auto{\n  margin-left: auto;\n  margin-right: auto;\n}.mt-\\[70px\\]{\n  margin-top: 70px;\n}.ml-10{\n  margin-left: 2.5rem;\n}.ml-4{\n  margin-left: 1rem;\n}.ml-3{\n  margin-left: 0.75rem;\n}.mt-2{\n  margin-top: 0.5rem;\n}.-mr-2{\n  margin-right: -0.5rem;\n}.ml-auto{\n  margin-left: auto;\n}.mt-3{\n  margin-top: 0.75rem;\n}.mt-16{\n  margin-top: 4rem;\n}.mt-5{\n  margin-top: 1.25rem;\n}.mb-2{\n  margin-bottom: 0.5rem;\n}.mt-14{\n  margin-top: 3.5rem;\n}.mb-3{\n  margin-bottom: 0.75rem;\n}.mr-auto{\n  margin-right: auto;\n}.mt-1{\n  margin-top: 0.25rem;\n}.box-border{\n  box-sizing: border-box;\n}.block{\n  display: block;\n}.flex{\n  display: flex;\n}.inline-flex{\n  display: inline-flex;\n}.grid{\n  display: grid;\n}.hidden{\n  display: none;\n}.h-full{\n  height: 100%;\n}.h-max{\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}.h-16{\n  height: 4rem;\n}.h-6{\n  height: 1.5rem;\n}.h-8{\n  height: 2rem;\n}.h-10{\n  height: 2.5rem;\n}.h-14{\n  height: 3.5rem;\n}.h-screen{\n  height: 100vh;\n}.min-h-full{\n  min-height: 100%;\n}.min-h-screen{\n  min-height: 100vh;\n}.w-full{\n  width: 100%;\n}.w-6{\n  width: 1.5rem;\n}.w-8{\n  width: 2rem;\n}.w-48{\n  width: 12rem;\n}.w-10{\n  width: 2.5rem;\n}.min-w-0{\n  min-width: 0px;\n}.max-w-7xl{\n  max-width: 80rem;\n}.max-w-xs{\n  max-width: 20rem;\n}.flex-auto{\n  flex: 1 1 auto;\n}.flex-shrink-0{\n  flex-shrink: 0;\n}.origin-top-right{\n  transform-origin: top right;\n}.-translate-y-80{\n  --tw-translate-y: -20rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.scale-0{\n  --tw-scale-x: 0;\n  --tw-scale-y: 0;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.cursor-pointer{\n  cursor: pointer;\n}.grid-cols-1{\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}.flex-col{\n  flex-direction: column;\n}.flex-wrap{\n  flex-wrap: wrap;\n}.items-center{\n  align-items: center;\n}.justify-center{\n  justify-content: center;\n}.justify-between{\n  justify-content: space-between;\n}.justify-evenly{\n  justify-content: space-evenly;\n}.gap-1{\n  gap: 0.25rem;\n}.gap-2{\n  gap: 0.5rem;\n}.gap-4{\n  gap: 1rem;\n}.gap-x-3\\.5{\n  -moz-column-gap: 0.875rem;\n       column-gap: 0.875rem;\n}.gap-x-3{\n  -moz-column-gap: 0.75rem;\n       column-gap: 0.75rem;\n}.space-x-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}.space-y-1 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}.overflow-hidden{\n  overflow: hidden;\n}.rounded-md{\n  border-radius: 0.375rem;\n}.rounded-full{\n  border-radius: 9999px;\n}.rounded{\n  border-radius: 0.25rem;\n}.border-t{\n  border-top-width: 1px;\n}.border-gray-700{\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n}.bg-yellow-300{\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 224 71 / var(--tw-bg-opacity));\n}.bg-yellow-400{\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 204 21 / var(--tw-bg-opacity));\n}.bg-gray-800{\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}.bg-white{\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}.bg-gray-900{\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}.bg-green-600{\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\n}.bg-jumbotronCover{\n  background-image: url('img/menu/jumbotron.jpg');\n}.bg-gradient-to-t{\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n}.from-yellow-200{\n  --tw-gradient-from: #fef08a;\n  --tw-gradient-to: rgb(254 240 138 / 0);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}.via-violet-500\\/20{\n  --tw-gradient-to: rgb(139 92 246 / 0);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(139 92 246 / 0.2), var(--tw-gradient-to);\n}.to-gray-500\\/50{\n  --tw-gradient-to: rgb(107 114 128 / 0.5);\n}.bg-cover{\n  background-size: cover;\n}.bg-no-repeat{\n  background-repeat: no-repeat;\n}.object-fill{\n  -o-object-fit: fill;\n     object-fit: fill;\n}.p-5{\n  padding: 1.25rem;\n}.p-1{\n  padding: 0.25rem;\n}.p-3{\n  padding: 0.75rem;\n}.p-2{\n  padding: 0.5rem;\n}.px-4{\n  padding-left: 1rem;\n  padding-right: 1rem;\n}.px-3{\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}.py-2{\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}.py-1{\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}.px-2{\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}.px-5{\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}.py-3{\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}.pt-2{\n  padding-top: 0.5rem;\n}.pb-3{\n  padding-bottom: 0.75rem;\n}.pt-4{\n  padding-top: 1rem;\n}.text-center{\n  text-align: center;\n}.font-pacifico{\n  font-family: Pacifico;\n}.text-2xl{\n  font-size: 1.5rem;\n  line-height: 2rem;\n}.text-3xl{\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}.text-sm{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}.text-base{\n  font-size: 1rem;\n  line-height: 1.5rem;\n}.text-xl{\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}.text-lg{\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}.font-semibold{\n  font-weight: 600;\n}.font-medium{\n  font-weight: 500;\n}.font-normal{\n  font-weight: 400;\n}.font-bold{\n  font-weight: 700;\n}.leading-none{\n  line-height: 1;\n}.text-red-700{\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity));\n}.text-gray-900{\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}.text-red-800{\n  --tw-text-opacity: 1;\n  color: rgb(153 27 27 / var(--tw-text-opacity));\n}.text-gray-400{\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}.text-gray-700{\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}.text-white{\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}.text-gray-800{\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}.underline{\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}.shadow-lg{\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.shadow{\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.shadow-sm{\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.shadow-md{\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.ring-1{\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}.ring-black{\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));\n}.ring-opacity-5{\n  --tw-ring-opacity: 0.05;\n}.transition{\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}.duration-150{\n  transition-duration: 150ms;\n}.duration-300{\n  transition-duration: 300ms;\n}.ease-in-out{\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}.hover\\:bg-gray-800:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}.hover\\:bg-gray-700:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}.hover\\:bg-red-400:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\n}.hover\\:bg-gradient-to-r:hover{\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}.hover\\:from-orange-500:hover{\n  --tw-gradient-from: #f97316;\n  --tw-gradient-to: rgb(249 115 22 / 0);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}.hover\\:to-pink-500:hover{\n  --tw-gradient-to: #ec4899;\n}.hover\\:text-white:hover{\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}.hover\\:text-gray-900:hover{\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}.focus\\:outline-none:focus{\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.focus\\:ring-2:focus{\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}.focus\\:ring-white:focus{\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}.focus\\:ring-gray-400:focus{\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));\n}.focus\\:ring-offset-2:focus{\n  --tw-ring-offset-width: 2px;\n}.focus\\:ring-offset-gray-800:focus{\n  --tw-ring-offset-color: #1f2937;\n}.focus\\:ring-offset-white:focus{\n  --tw-ring-offset-color: #fff;\n}@media (min-width: 640px){.sm\\:w-auto{\n    width: auto;\n  }.sm\\:grid-cols-2{\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }.sm\\:flex-row{\n    flex-direction: row;\n  }.sm\\:gap-3{\n    gap: 0.75rem;\n  }.sm\\:px-6{\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }.sm\\:px-3{\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }.sm\\:text-5xl{\n    font-size: 3rem;\n    line-height: 1;\n  }\n}@media (min-width: 768px){.md\\:fixed{\n    position: fixed;\n  }.md\\:relative{\n    position: relative;\n  }.md\\:top-0{\n    top: 0px;\n  }.md\\:z-30{\n    z-index: 30;\n  }.md\\:mt-0{\n    margin-top: 0px;\n  }.md\\:ml-6{\n    margin-left: 1.5rem;\n  }.md\\:block{\n    display: block;\n  }.md\\:hidden{\n    display: none;\n  }.md\\:w-max{\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n  }.md\\:w-full{\n    width: 100%;\n  }.md\\:translate-y-0{\n    --tw-translate-y: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }.md\\:grid-cols-4{\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }.md\\:flex-row{\n    flex-direction: row;\n  }.md\\:justify-start{\n    justify-content: flex-start;\n  }.md\\:gap-3{\n    gap: 0.75rem;\n  }.md\\:bg-transparent{\n    background-color: transparent;\n  }.md\\:p-3{\n    padding: 0.75rem;\n  }.md\\:py-1{\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n  }.md\\:text-center{\n    text-align: center;\n  }\n}@media (min-width: 1024px){.lg\\:mb-0{\n    margin-bottom: 0px;\n  }.lg\\:px-8{\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }.lg\\:px-0{\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n")();
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape($page.url.pathname === "/" ? "HOME" : (_a = $page.routeId) == null ? void 0 : _a.toUpperCase())}</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-1xha79y">`, ""}

<div class="${"flex flex-col justify-between min-h-screen"}"><header class="${"md:fixed md:w-full md:top-0 absolute w-full top-0 left-0 z-20"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</header>
	<main class="${"layout mt-16"}">${slots.default ? slots.default({}) : ``}</main>
	<footer class="${"w-full h-14 bg-yellow-300 shadow flex"}"><p class="${"m-auto flex font-semibold text-gray-800"}">Copyright 2022 - <a class="${"font-normal"}" href="${"/"}">carlosiano.com</a></p></footer>
</div>`;
});
export { _layout as default };
