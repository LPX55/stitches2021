<template>
<section v-html="portfolio.uuid" ></section>
</template>

<script>
export default {
    layout: 'portfolio',
    async asyncData({
        $axios
    }) {
        const portfolio = await $axios.$get('SavedPortfolios/findOne?where=(uuid%2Ceq%2Cd2cf9468-2913-4dad-841c-4fa251a50168)')
        return {
            portfolio
        }
    },
    data() {
        return {
            localUser: [],
			htmlString: JSON.parse(this.portfolio.htmlStr)
        }
    }
}
</script>
