export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","img/index.js","img/menu/coklat_panas.jpeg","img/menu/jumbotron.jpg","img/menu/jus_jeruk.jpg","img/menu/kopi_panas.jpg","img/menu/mie_ayam.jpeg","img/menu/mie_goreng.jpg","img/menu/mie_soto.jpg","img/menu/nasi_ayam.jpg","img/menu/nasi_goreng.jpg","img/menu/nasi_kuning.jpeg","img/menu/nasi_liwet.jpg","img/menu/nasi_uduk.jpg","img/menu/susu_kocok.jpeg","img/menu/teh_susu.jpg","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".js":"application/javascript",".jpeg":"image/jpeg",".jpg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-09f84e57.js","js":["start-09f84e57.js","chunks/index-e365c14d.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "keranjang",
				pattern: /^\/keranjang\/?$/,
				names: [],
				types: [],
				path: "/keranjang",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "menu",
				pattern: /^\/menu\/?$/,
				names: [],
				types: [],
				path: "/menu",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "profile",
				pattern: /^\/profile\/?$/,
				names: [],
				types: [],
				path: "/profile",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/logout",
				pattern: /^\/profile\/logout\/?$/,
				names: [],
				types: [],
				path: "/profile/logout",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/settings",
				pattern: /^\/profile\/settings\/?$/,
				names: [],
				types: [],
				path: "/profile/settings",
				shadow: null,
				a: [0,9],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
