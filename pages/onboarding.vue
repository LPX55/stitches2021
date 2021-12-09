<template>
<section class="bg-gray-100">
  <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-16">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:py-12 lg:col-span-2">
        <h1 class="text-lg font-bold">안녕하세요! 둥지의 "스마트 포트폴리오" 오신 것을 환영합니다.</h1>
		<hr class="my-4">
		<p class="max-w-lg text-md font-medium">
         시작하기 전에 오른쪽에 보이는 정보가 정확한지 확인해주세요. 또한, 당신의 고객이 포트폴리오에서 볼수있는 개인화된 환영 메시지를 입력하세요.
        </p>		
		<p class="max-w-lg text-md font-medium mt-4">
         이 정보는 나중에 언제든지 변경될 수 있으므로 지금 바로 완벽하게 만드는 것에 대해 걱정하지 마십시오.
        </p>
		<hr class="my-4">
        <div class="mt-8">

          <p class="mt-2 not-italic">문의 사항이나 문제가 있으면 고객센터에 문의하세요.</p>
          <a href="" class="text-2xl font-bold text-gold-500">1577-9489</a>

        </div>
      </div>

      <div class="px-8 py-4 bg-white rounded-lg shadow-lg lg:px-12 lg:py-4 lg:col-span-3">
      <FormsOnboard />
      </div>
    </div>
  </div>
</section>

</template>
<script>
export default {
	layout: 'onboarding',
	data(){
		return{
			localUser: [],
			step: 0
		}
	},
	async fetch() {
    	this.localUser = await this.$localForage.getItem('user')
  	},
	mounted () {
	this.$nextTick(function () {
		if(this.localUser === null){
			this.step = 0
		} else if(this.localUser.Step === 1){
			this.step = 1
		}
	})
	},
  methods: {
    // async submitHandler (data) {
    //   await this.$axios.post('ManagersMeta', data)
    //   await this.$localForage.setItem('user', data)
    //   await this.$localForage.setItem('manID', data.managerId)
    // },
  }
	
}
</script>