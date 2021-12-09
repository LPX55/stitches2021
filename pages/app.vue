<template>

  <div id="target" class="overflow-hidden">

    <section
      class="main-section fixed bottom-0 top-0 overflow-y-auto bg-white p-8 w-2/3"
    >

      <div class="mx-2 mb-3 js-filter pl-3 border-black">

        <button
          v-for="{ title, filter } in buttons"
          :key="filter"
          class="sm:px-6 py-3 w-1/2 sm:w-auto text-gray-500 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-black tracking-wider"
          @click="itemFilter = filter"
        >
          {{ title }}
        </button>
      </div>
      <div
        v-dragula="items"
        :style="gHeight ? 'height: ' + gHeight : ''"
        class="flex flex-wrap flex-col items-start justify-start js-snippets"
        drake="first"
      >
        <figure
          v-for="item in items"
          v-show="itemFilter === 'js-snippet' || itemFilter === item.type"
          :key="item.image"
          class="js-snippet w-full p-2"
        >
          <img
            :src="`/images/${item.image}.png`"
            alt=""
            class="border border-gray-300 cursor-move hover:shadow transition-normal hover:translate-y-1 hover:border-black"
          />
        </figure>
      </div>
    </section>
    <section
      class="main-section bg-gray-300 p-8 pb-0 w-1/3 flex flex-col fixed top-0 bottom-0 right-0"
    >
      <header class="mb-4">
        <button
          class="shadow text-center py-3 px-4 bg-gold-500 w-full hover:text-tgray-200 text-white js-download transition-normal"
          @click="generateHtml"
        >
          스마트 포트폴리오 만들기
        </button>
      </header>
      <div
        v-dragula="itemsDest"
        drake="first"
        class="flex flex-col flex-1 border js-droppable border-gray-300 overflow-y-auto"
      >
        <figure
          v-for="item in itemsDest"
          v-show="!hiddenItemIds.includes(item.id)"
          :key="item.id"
          class="js-snippet w-full p-2 vue-element relative"
        >
          <div
            class='remove-button bg-white hidden absolute top-0 left-0 js-delete-btn px-4 py-2 shadow'
            @click="removeItem(item.id)"
          ><i class='far fa-trash-alt pointer-events-none'></i></div>
          <img
            :src="`/images/${item.image}.png`"
            alt=""
            class="border border-gray-300 cursor-move hover:shadow transition-normal hover:translate-y-1 hover:border-black"
          />
        </figure>
      </div>

      <div class="bg-white hidden fixed js-delete-btn px-4 py-2 shadow">
        Delete <i class="far fa-trash-alt pointer-events-none"></i>
      </div>
    </section>
  </div>
</template>

<script>
import imagesLoaded from "imagesloaded";
export default {
  data() {
    return {
      layout: 'default',
      itemFilter: 'js-snippet',
      drag: false,
      gHeight: '',
      portID: this.$uuid.v4(),
      hiddenItemIds: [],
      itemsDest: [],
      items: [
        { image: 'cover-1', width: '1/1', type: 'st-cover' },
        { image: 'blog-2', width: '1/1', type: 'st-cover' },
        { image: 'intro-1', width: '1/1', type: 'st-intro' },
        { image: 'intro-2', width: '1/1', type: 'st-intro' },
        { image: 'cta-1', width: '1/1', type: 'st-cta' },
        { image: 'cta-2', width: '1/1', type: 'st-cta' },
        { image: 'cta-3', width: '1/1', type: 'st-cta' },  
        { image: 'cta-4', width: '1/1', type: 'st-cta' },
        { image: 'ecommerce-1', width: '1/1', type: 'st-ecommerce' },
        { image: 'ecommerce-2', width: '1/1', type: 'st-ecommerce' },
        { image: 'ecommerce-3', width: '1/1', type: 'st-ecommerce' },
        { image: 'feature-1', width: '1/1', type: 'st-feature' },
        { image: 'feature-2', width: '1/1', type: 'st-feature' },
        { image: 'feature-3', width: '1/1', type: 'st-feature' },
        { image: 'feature-4', width: '1/1', type: 'st-feature' },
        { image: 'feature-5', width: '1/1', type: 'st-feature' },
        { image: 'feature-6', width: '1/1', type: 'st-feature' },
        { image: 'feature-7', width: '1/1', type: 'st-feature' },
        { image: 'feature-8', width: '1/1', type: 'st-feature' },
        { image: 'footer-1', width: '1/1', type: 'st-footer' },
        { image: 'footer-2', width: '1/1', type: 'st-footer' },
        { image: 'footer-3', width: '1/1', type: 'st-footer' },
        { image: 'footer-4', width: '1/1', type: 'st-footer' },
        { image: 'footer-5', width: '1/1', type: 'st-footer' },
        { image: 'gallery-1', width: '1/1', type: 'st-gallery' },
        { image: 'gallery-2', width: '1/1', type: 'st-gallery' },
        { image: 'gallery-3', width: '1/1', type: 'st-gallery' },
        { image: 'header-1', width: '1/1', type: 'st-header' },
        { image: 'header-2', width: '1/1', type: 'st-header' },
        { image: 'header-3', width: '1/1', type: 'st-header' },
        { image: 'header-4', width: '1/1', type: 'st-header' },
        { image: 'hero-1', width: '1/1', type: 'st-hero' },
        { image: 'hero-2', width: '1/1', type: 'st-hero' },
        { image: 'hero-3', width: '1/1', type: 'st-hero' },
        { image: 'hero-4', width: '1/1', type: 'st-hero' },
        { image: 'hero-5', width: '1/1', type: 'st-hero' },
        { image: 'pricing-1', width: '1/1', type: 'st-pricing' },
        { image: 'pricing-2', width: '1/1', type: 'st-pricing' },
        { image: 'pricing-3', width: '1/1', type: 'st-pricing' },
        { image: 'statistic-1', width: '1/1', type: 'st-statistic' },
        { image: 'statistic-2', width: '1/1', type: 'st-statistic' },
        { image: 'statistic-3', width: '1/1', type: 'st-statistic' },
        { image: 'step-1', width: '1/1', type: 'st-step' },
        { image: 'step-2', width: '1/1', type: 'st-step' },
        { image: 'step-3', width: '1/1', type: 'st-step' },
        { image: 'team-1', width: '1/1', type: 'st-team' },
        { image: 'team-2', width: '1/1', type: 'st-team' },
        { image: 'team-3', width: '1/1', type: 'st-team' },
        { image: 'testimonial-1', width: '1/1', type: 'st-testimonial' },
        { image: 'testimonial-2', width: '1/1', type: 'st-testimonial' },
        { image: 'testimonial-3', width: '1/1', type: 'st-testimonial' },
      ],
    }
  },
  computed: {
    list() {
      return this.itemsDest
        .filter(item => !this.hiddenItemIds.includes(item.id))
        .map(item => item.image)
    },
    buttons() {
      return [
        { title: '모두 보기', filter: 'js-snippet' },
        { title: '1. 표지', filter: 'st-cover' },
        { title: '2. 중개사 소개', filter: 'st-intro' },
        { title: '3. 매물 리스트', filter: 'st-content' },
        { title: '4. 기타', filter: 'st-cta' },
        { title: '5. 둥지 소개', filter: 'st-ecommerce' },
      ]
    },
  },
  watch: {
    itemsDest(items, oldItems) {
      this.itemsDest.forEach((item) => {
        if (!item.id) {
          item.id = Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, 5)
          const badElement = document.querySelector(
            '.js-droppable > .js-snippet:not(.vue-element)'
          )
          badElement.remove()
        }
      })
    },
  },
  created() {
    if (this.$dragula) {
      const service = this.$dragula.$service
      service.options('first', {
        revertOnSpill: true,
        copySortSource: false,
        copy(el, source) {
          return source.classList.contains('js-snippets')
        },
        accepts(el, target, source, sibling) {
          return !target.classList.contains('js-snippets')
        },
      })
    }
  
  },
  mounted() {
    if (typeof window !== 'undefined') {
      const snippets = document.querySelector(".js-snippets");
      ['resize', 'load'].forEach((event) => {
        window.addEventListener(event, () => {
          imagesLoaded(snippets, () => {
            this.masonry('.js-snippets', '.js-snippet', 0, 1 , 2, 1)
          })
        })
      })
      imagesLoaded(snippets, () => {
        this.masonry('.js-snippets', '.js-snippet', 0, 1, 2, 1)
      })
    }
    localStorage.removeItem('tempHTML');

  },
  methods: {
    generateHtml() {
      if (this.list && this.list.length) {
        this.$download(this.list)
        this.portID = this.$uuid.v4()
        this.uploadPortfolio()
      }
    },
    removeItem(itemId) {
      this.hiddenItemIds = [...this.hiddenItemIds, itemId]
    },
    async uploadPortfolio(){
      await this.$localForage.removeItem('puuid')
      const htmlStr = localStorage.getItem('tempHTML')
      const managerId = await this.$localForage.getItem('manID')
      const user = await this.$localForage.getItem('user')
      const uuid = this.portID
      const listings = await this.$localForage.getItem('selListings')
      const title = 'Title'
      await this.$localForage.setItem('puuid', uuid)

      const postData = {
        // eslint-disable-next-line object-shorthand
        managerId: managerId,
        // eslint-disable-next-line object-shorthand
        htmlStr: htmlStr,
        // eslint-disable-next-line object-shorthand
        user: JSON.stringify(user),
        // eslint-disable-next-line object-shorthand
        listings: JSON.stringify(listings),
         // eslint-disable-next-line object-shorthand
        title: title,
        // eslint-disable-next-line object-shorthand
        uuid: uuid
      }
      console.log(postData)
      this.submitHandler(postData)
    },
    async submitHandler (data) {
      await this.$axios.post('SavedPortfolios', data)
      // eslint-disable-next-line no-undef
      // const suuid = await this.$localForage.getItem(puuid)
      this.$router.push('/saved/' + this.portID)
    },
    masonry(grid, gridCell, gridGutter, dGridCol, tGridCol, mGridCol) {
      const gc = document.querySelectorAll(gridCell)
      const gcLength = gc.length
      let gHeight = 0
      for (let i = 0; i < gcLength; ++i) {
        gHeight += gc[i].offsetHeight + parseInt(gridGutter)
      }
      if (window.screen.width >= 1024) {
        this.gHeight =
          gHeight / dGridCol + gHeight / (gcLength + 1) + 100 + 'px'
      } else if (window.screen.width < 1024 && window.screen.width >= 768) {
        this.gHeight = gHeight / tGridCol + gHeight / (gcLength + 1) + 'px'
      } else {
        this.gHeight = gHeight / mGridCol + gHeight / (gcLength + 1) + 'px'
      }
    },
  },
}
</script>

<style lang="scss">
.main-section{
  margin-top:60px;
}
.drag-image {
}
.js-droppable > .js-snippet {
  width: 100%;
  padding: 0;
}

.js-droppable > .js-snippet:hover > .js-delete-btn {
  display: block;
}

.js-droppable > .js-snippet > img:hover {
  transform: none;
  border-color: #dae1e7;
}
.menu-button::after {
  content: " ";
  display: inline-block;
}
.remove-button {
  z-index: 100;
}
</style>
