<template>

<section class="relative h-screen py-20 2xl:py-40 overflow-hidden">
  <img class="hidden lg:block absolute inset-0 mt-32" src="assets/lines/line-mountain.svg" alt="">
  <img class="hidden lg:block absolute inset-y-0 right-0 -mr-40 -mt-32" src="assets/lines/line-right-long.svg" alt="">
  <div class="relative container px-4 mx-auto">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div class="max-w-md">
		 
            <span class="text-lg text-gray-300 font-bold" data-config-id="label"><img src="https://tools.doongji.kr/assets/img/logo-login.png"></span>
            <h2 class="mt-8 mb-12 text-4xl font-bold font-heading text-white" data-config-id="header">둥지 BLACK VIP 서비스는 당신을 환영합니다.</h2>
            <p class="text-lg text-gray-200">
              <span data-config-id="desc1">스마트 포트폴리오를 생성하려면 로그인하십시오.</span>
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-4">
          <div class="px-6 lg:px-20 py-12 lg:py-12 bg-realgray rounded-lg">
            <form action="app.html">
              <h3 class="mb-10 text-2xl text-white font-bold font-heading" data-config-id="form-header">중개사 로그인</h3>
              <div class="flex items-center pl-6 mb-3 bg-white rounded-full">
                <span class="inline-block pr-3 py-2 border-r border-gray-50">
                  <svg class="w-5 h-5" width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z" fill="black"></path>
                    <path d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z" fill="black"></path>
                    <rect x="15" y="15" width="5" height="1" rx="0.5" fill="black"></rect><rect x="17" y="18" width="5" height="1" rx="0.5" transform="rotate(-90 17 18)" fill="black"></rect>
                  </svg>
                </span>
                <input id="user" class="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="text" placeholder="ID / Email" required>
              </div>
              <div class="flex items-center pl-6 mb-3 bg-white rounded-full">
                <span class="inline-block pr-3 py-2 border-r border-gray-50">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" width="20" height="21" fill="none" viewBox="0 0 24 24" stroke="#000000">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
                </span>
                <input id="number" class="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="number" placeholder="전화번호" required>
              </div>

              <div class="inline-flex mb-10">
                <p class="mt-4 text-sm text-gray-200" data-config-id="terms">로그인하면 둥지의 이용 약관 및 개인 정보 보호 정책에 동의하는 것입니다.</p>
              </div>
              <button class="py-4 w-full hover:bg-black text-white font-bold rounded-full transition duration-200" data-config-id="primary-action" type="submit"  style="background-color: #cead6b;">로그인</button>
            </form>
            <p class="mt-8 text-gray-200">둥지부동산 / 01067849180</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
	
}
</script>
<style>
      body{
        background: #232526;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      .bg-realgray{
        background-color: #4d4e4f;
      }
</style>