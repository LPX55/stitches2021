<template>
	<section>
	<CommonPreheader />
    <Nuxt />
	</section>
</template>


<script>
    export default {
		name: 'Onboarding',
        components: {
            CommonPreheader: () => import('@/components/common/preheader'),
        },

        head() {
            return {
            }
        },
    };
</script>

<style>
.nuxt-link-exact-active{
    color: #0B2A97;
    background: rgba(11, 42, 151, 0.1);
}
.bg-dj-gold{
	background: #CEAD6B;
}
</style>