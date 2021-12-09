<template>
  <FormulateForm
    v-slot="{ isLoading }"
    v-model="user"
    class="onboard-form"
    @submit="submitHandler"
  >

    <div class="double-wide">
    

    <FormulateInput
      name="Name"
      label="성함"
      input-class="w-full px-3 py-2 border border-gray-400 border-box rounded leading-none focus:border-gold-500 outline-none"

    />
    <FormulateInput
      name="Email"
      type="text"
      label="이매일 주소"
      placeholder="name@naver.com"
     
      input-class="w-full px-3 py-2 border border-gray-400 border-box rounded leading-none focus:border-gold-500 outline-none"

    />
    </div>
    <div class="double-wide">
      <FormulateInput
        name="OfficeName"
        type="text"
        label="사무실 명"
       
      input-class="w-full px-3 py-2 border border-gray-400 border-box rounded leading-none focus:border-gold-500 outline-none"

      />    
        <FormulateInput
        name="OfficeAddress"
        type="text"
        label="사무실 주소"
      
      input-class="w-full px-3 py-2 border border-gray-400 border-box rounded leading-none focus:border-gold-500 outline-none"

      />

    </div>
    <FormulateInput
      name="Phone"
      type="tel"
      label="전화번호"
      input-class="w-full px-3 py-2 border border-gray-400 border-box rounded leading-none focus:border-gold-500 outline-none"
    />       
    <FormulateInput
      name="Message"
      type="textarea"
      label="포트폴리오 환영 메시지"
      input-class="w-full h-24 px-3 py-2 border border-gray-400 border-box rounded leading-none focus:border-gold-500 outline-none"

    />    
    <FormulateInput
      type="submit"
      :disabled="isLoading"
      :label="isLoading ? '제출 중...' : '다음: 매물 관리'"
      element-class="nextBtn"
      input-class="w-auto px-6 py-4 border border-gray-400 text-white border-box rounded leading-none bg-tgray-500 text-xs hover:bg-tgray-700"
    />
    <FormulateInput
      name="ManagerId"
      type="hidden"
      input-class="hidden"
    />            
    <FormulateInput
      name="Id"
      type="hidden"
      input-class="hidden"
    />
    <FormulateInput
      name="Step"
      value="1"
      type="hidden"
      input-class="hidden"
    />    
    <pre
      class="code"
      v-text="user"
    />
  </FormulateForm>
</template>

<script>
export default {
  // props: ['user'],
  	async asyncData({ $axios, $localForage }) {

		const user = await $axios.$get(`Managers?where=(Phone%2Ceq%2C${localStorage.getItem("phoneNo")})`).data
    console.log(user)
    await $localForage.setItem('user', user)
		return user.flat()
	},
  data () {
    return {
			user: {
        CreateDate: "2021-09-07T13:44:42.000Z",
        Email: "hsyoon@offjectplus.com",
        Grade: 100,
        Id: "640b3898-cd44-4915-b691-4eff57d81ea6",
        ManagerId: "39455",
        Name: "윤한섭",
        OfficeAddress: "555 Jungang-ro 463",
        OfficeName: "Offject",
        Phone: "01090123298",
      },
      postData: {}
    }
  },
    created() {
    // this.user = this.user
    // this.item.name = this.flat.name
    // ...
  },
  mounted() {
},
  methods: {
    async submitHandler (data) {
      await this.$axios.post('ManagersMeta', data)
      await this.$localForage.setItem('user', data)
      await this.$localForage.setItem('manID', data.Id)
      this.$router.push('/onboarding-2')
    },
  }
}
</script>

<style scoped>
.onboard-form {
  padding: 1em 1.5em;
  border: none;
  max-width: 100%;
  box-sizing: border-box;
}
label {
    font-size: 14px;
    color: #aaaaaa !important;
}
.form-title {
  margin-top: 0;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - .5em);
    margin-bottom:5px;
  }
  .double-wide .formulate-input:first-child {
    margin-right: .5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: .5em;
  }
}
.formulate-input-element	 {
	@apply py-2 px-0 text-tgray-700;
  }
  .formulate-input	 {
	@apply py-2 px-0 text-tgray-700;
  }  
  .formulate-input-label {
	@apply py-2 text-sm text-tgray-500;
  } 
  input {
	@apply mt-0 focus:ring-gold-500 focus:border-gold-500 block w-full border-gold-300 ;
  } 
   textarea {
	@apply mt-0 block w-full;
  }   
  .formulate-input-error {
	@apply text-red-600 text-xs;
  }
  
button {
  @apply block text-white uppercase text-lg p-4 rounded;
}
  
</style>