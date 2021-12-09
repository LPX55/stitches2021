<template>
<section>
  <div id="nav-scroll" class="py-6 px-4 lg:px-10 bg-gray-800" style="position:sticky;top:0;z-index:150;height:72px;">
  <nav class="relative flex justify-between items-center">
    <a class="text-2xl text-white font-bold" href="#" data-config-id="brand">
      <img class="h-7" src="https://chef-studio.kr/dj/logo-white.png" alt="" width="auto">
    </a>
    <button class="p-2 navbar-burger">
      <svg class="w-10 h-3" width="39" height="13" viewbox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39" height="2" rx="1" fill="#C4C4C4"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect></svg>
    </button>
  </nav>
  <div class="hidden navbar-menu relative z-50">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
    <nav class="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-8 bg-white overflow-y-auto">
      <div class="flex items-center mb-16 pr-6">
        <a class="mx-auto text-2xl text-gray-800 font-bold" href="#" data-config-id="brand">
          <img class="h-10 text-center" src="https://chef-studio.kr/dj/logo-black2.png" alt="" width="auto">
        </a>
      </div>
      <div>
        <ul>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#" data-config-id="link1">Nav Menu 1</a></li>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#" data-config-id="link2">Nav Menu 2</a></li>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#" data-config-id="link3">Nav Menu 3</a></li>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#" data-config-id="link4">Nav Menu 4</a></li>
        </ul>
      </div>
      <div class="mt-auto px-10">
        <div class="pt-6"><a class="block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full" href="#" data-config-id="secondary-action">투어 예약하기</a><a class="block py-4 px-12 text-white text-center font-bold bg-gray-500 hover:bg-black  rounded-full transition duration-200" href="#" data-config-id="primary-action">문의하기</a></div>
        <p class="mt-6 mb-4 text-lg text-center">
          <span data-config-id="copy">2021 &copy; Doongji. All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
</div>

<div v-html="JSON.parse(htmlStr)"></div>
</section>
</template>

<script>

export default {
	name: 'SavedPortfolio',

    layout: 'portfolio',
	async asyncData({ $axios, route }) {

		const portfolio = await $axios.$get(`SavedPortfolios/findOne?where=(uuid%2Ceq%2C${route.params.id})`)
		return portfolio
	},
    data() {
        return {
            localUser: {},
			// htmlString: JSON.parse(htmlStr),
			portID: this.$route.params.id,
			portfolio: this.portfolio,
			loadedportfolio: this.portfolio
        }
    },
	mounted () {
	this.$nextTick(function () {
		this.localUser = JSON.parse(this.user)
		this.changeText()
	})
	},
	 beforeMount(){
			
		},
	methods: {
		async loadUsers(){
		const loadedportfolio = await this.portfolio;
		this.loadedportfolio = loadedportfolio
		},
		changeText () {
			this.message = this.message.replace("{{localUser.Name}}", this.localUser.Name);    
		}
	},
}

  // Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        // eslint-disable-next-line no-var
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        // eslint-disable-next-line no-var
        // eslint-disable-next-line no-redeclare
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-scroll").style.top = "0";
  } else {
    document.getElementById("nav-scroll").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
</script>
