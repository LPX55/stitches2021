<template>
	
<section class="py-4">

      <div>
        <table class="table-auto w-full">
          <thead>
            <tr class="text-xs text-gray-500 text-left" data-config-id="row0">
              <th class="flex items-center pl-6 py-4 font-medium">
				  
                <a class="flex items-center" href="#">
                  <span data-config-id="2-col1-1">Name</span>
               
                </a>
              </th>
              <th class="py-4 font-medium">
                <a class="flex items-center" href="#">
                  <span data-config-id="2-col1-2">Address</span>
                 
                </a>
              </th>              
			  <th class="py-4 font-medium">
                <a class="flex items-center" href="#">
                  <span data-config-id="2-col1-2">Size</span>
                 
                </a>
              </th>
              <th class="py-4 font-medium">
                <a class="flex items-center" href="#">
                  <span data-config-id="2-col1-3">Price</span>
                </a>
              </th>
              <th class="py-4 font-medium">
                <a class="flex items-center" href="#">
                  <span data-config-id="2-col1-4">Type</span>
              
                </a>
              </th>
              <th class="py-4 font-medium">
                <a class="flex items-center" href="#">
                  <span data-config-id="2-col1-5">Date</span>
                </a>
              </th>             
			   <th class="py-4 font-medium">
                <a class="flex items-center" href="#">
                  <span data-config-id="2-col1-5">Share</span>
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="listing in listings" :key="listing.index" class="text-xs bg-gray-50" data-config-id="row-1" @submit="submitHandler">
              <td class="flex items-center py-5 px-6 font-medium">
                <input v-model="listingArray.index" class="mr-3"  type="checkbox" name="listingID" :value="listing.Id" checked>
                <p data-config-id="2-col2-1">{{ listing.Name }}</p>
              </td>
              <td class="font-medium" data-config-id="2-col2-2">{{ listing.ZibunAddress }}</td>
              <td class="font-medium" data-config-id="2-col2-2">{{ listing.PrivateAreaP }}</td>
              <td class="font-medium" data-config-id="2-col2-3">{{ listing.Price }}</td>
              <td class="font-medium" data-config-id="2-col2-3">
               {{ listing.TradeType }}
              </td>
              <td data-config-id="2-col2-5">{{ listing.UpdateDate |  luxon("yyyy-MM-dd") }}</td>          
			      <td data-config-id="2-col2-5" class="flex items-center">
					  <input class="text-center" type="checkbox" checked name="" id=""></td>
            </tr>
          </tbody>
        </table>
		<hr class="my-4">
		<button type="submit" class="w-auto px-6 py-4 border ml-4 border-gray-400 text-white border-box rounded leading-none bg-tgray-500 text-xs hover:bg-tgray-700" @click="submitHandler(listings)"><span class="formulate-input-element--submit--label">다음: 포트폴리오 생성 시작
</span></button>
      </div>
</section>
</template>
<script>
export default {
	data(){
		return{
				listings: [
  {
    "Id": "00baf6dd-1bfd-46a0-8002-59468d4de4ce",
    "TradeType": 2,
    "Price": 60000,
    "Monthly": null,
    "Floor": "11",
    "TotalFloor": "24",
    "Room": 3,
    "Memo": "",
    "CreateDate": "2021-06-25T16:19:01.000Z",
    "ManagerId": "47d5daf5-4bba-4641-92a9-13b357851dc0",
    "AddressId": null,
    "Type": 5,
    "Link": "언덕위에 있어서 경치가 좋은 매물입니다",
    "ItemId": "88806-2106004",
    "RoadAddress": "경기 광명시 가림일로 101",
    "ZibunAddress": "경기 광명시 철산동 625",
    "PlaceName": null,
    "Region1depthName": null,
    "Region2depthName": null,
    "Region3depthName": null,
    "Status": 0,
    "Name": "도덕파크타운2단지아파트",
    "PrivateAreaP": 24,
    "PrivateAreaM": 79.2,
    "PublicAreaP": 27,
    "PublicAreaM": 89.1,
    "BathRoom": 2,
    "Direction": 3,
    "ViewCount": 1,
    "UpdateDate": "2021-06-25T16:19:01.000Z",
    "Lat": 37.47019831757382,
    "Lng": 126.86571422195452,
    "ManageFee": 200000,
    "ManageFeeElectronic": null,
    "ManageFeeGas": null,
    "ManageFeeWater": null,
    "ManageFeeInternet": null,
    "ManageFeeTV": null,
    "Parking": 1,
    "Elevator": 1,
    "Loan": 1,
    "Pet": null,
    "OwnerName": null,
    "OwnerPhone": null,
    "TenantName": null,
    "TenantPhone": null,
    "ManagerName": null,
    "ManagerPhone": null,
    "OptionAir": null,
    "OptionRefrig": null,
    "OptionWasher": null,
    "OptionGas": null,
    "OptionInduct": null,
    "OptionMicrowave": null,
    "OptionBook": null,
    "OptionBed": null,
    "OptionCloth": 1,
    "OptionBoot": 1,
    "OptionSync": null,
    "OriginalId": null,
    "IncomeText": null
  },
  {
    "Id": "1764e5af-d716-4a66-b6de-a161fea39b56",
    "TradeType": 3,
    "Price": 20000,
    "Monthly": 350,
    "Floor": "3",
    "TotalFloor": "15",
    "Room": 1,
    "Memo": "",
    "CreateDate": "2021-06-14T08:47:03.000Z",
    "ManagerId": "47d5daf5-4bba-4641-92a9-13b357851dc0",
    "AddressId": null,
    "Type": 6,
    "Link": "뷰 좋은 곳 항상 잘 팔리는곳",
    "ItemId": "88806-2106001",
    "RoadAddress": "서울특별시 중구 세종대로16길 22",
    "ZibunAddress": "서울 중구 북창동 17-2",
    "PlaceName": null,
    "Region1depthName": "서울",
    "Region2depthName": "중구",
    "Region3depthName": "북창동",
    "Status": 0,
    "Name": "연세치과",
    "PrivateAreaP": 57,
    "PrivateAreaM": 188.1,
    "PublicAreaP": 32,
    "PublicAreaM": 105.6,
    "BathRoom": 1,
    "Direction": 3,
    "ViewCount": 3,
    "UpdateDate": "2021-06-25T16:14:15.000Z",
    "Lat": 37.5630538,
    "Lng": 126.9780905,
    "ManageFee": null,
    "ManageFeeElectronic": null,
    "ManageFeeGas": null,
    "ManageFeeWater": null,
    "ManageFeeInternet": null,
    "ManageFeeTV": null,
    "Parking": null,
    "Elevator": null,
    "Loan": null,
    "Pet": null,
    "OwnerName": null,
    "OwnerPhone": null,
    "TenantName": null,
    "TenantPhone": null,
    "ManagerName": null,
    "ManagerPhone": null,
    "OptionAir": null,
    "OptionRefrig": null,
    "OptionWasher": null,
    "OptionGas": null,
    "OptionInduct": null,
    "OptionMicrowave": null,
    "OptionBook": null,
    "OptionBed": null,
    "OptionCloth": null,
    "OptionBoot": null,
    "OptionSync": null,
    "OriginalId": null,
    "IncomeText": null
  },
  {
    "Id": "26b67a8e-fda4-454d-85f1-a258c986f078",
    "TradeType": 3,
    "Price": 2000,
    "Monthly": 120,
    "Floor": "15",
    "TotalFloor": "25",
    "Room": 1,
    "Memo": "수요 많은 파크하비오 입니다.\n젊은층 분들에게 훨씬 인기가 많아 금방 매물이 나갈것 같아요",
    "CreateDate": "2021-06-25T16:11:52.000Z",
    "ManagerId": "47d5daf5-4bba-4641-92a9-13b357851dc0",
    "AddressId": null,
    "Type": 4,
    "Link": "인기 좋은 급 매물입니다",
    "ItemId": "88806-2106003",
    "RoadAddress": "서울 송파구 송파대로 111",
    "ZibunAddress": "서울 송파구 문정동 618",
    "PlaceName": null,
    "Region1depthName": null,
    "Region2depthName": null,
    "Region3depthName": null,
    "Status": 0,
    "Name": "송파파크하비오푸르지오오피스텔",
    "PrivateAreaP": 15,
    "PrivateAreaM": 49.5,
    "PublicAreaP": 9.09,
    "PublicAreaM": 30,
    "BathRoom": 1,
    "Direction": 3,
    "ViewCount": 2,
    "UpdateDate": "2021-06-25T16:11:52.000Z",
    "Lat": 37.47971076036868,
    "Lng": 127.12480132351254,
    "ManageFee": 150000,
    "ManageFeeElectronic": 1,
    "ManageFeeGas": 1,
    "ManageFeeWater": 1,
    "ManageFeeInternet": 1,
    "ManageFeeTV": 1,
    "Parking": 1,
    "Elevator": 1,
    "Loan": null,
    "Pet": null,
    "OwnerName": null,
    "OwnerPhone": null,
    "TenantName": null,
    "TenantPhone": null,
    "ManagerName": null,
    "ManagerPhone": null,
    "OptionAir": 1,
    "OptionRefrig": 1,
    "OptionWasher": 1,
    "OptionGas": 0,
    "OptionInduct": 1,
    "OptionMicrowave": 1,
    "OptionBook": null,
    "OptionBed": 0,
    "OptionCloth": 1,
    "OptionBoot": 1,
    "OptionSync": null,
    "OriginalId": null,
    "IncomeText": null
  },
  {
    "Id": "7423c379-15f0-4dee-b4a6-7f376f14413f",
    "TradeType": 1,
    "Price": 190000,
    "Monthly": null,
    "Floor": "7",
    "TotalFloor": "32",
    "Room": 4,
    "Memo": "",
    "CreateDate": "2021-06-25T16:20:15.000Z",
    "ManagerId": "47d5daf5-4bba-4641-92a9-13b357851dc0",
    "AddressId": null,
    "Type": 5,
    "Link": "교통 접근성 좋은 4대문 안에 있는 매물",
    "ItemId": "88806-2106005",
    "RoadAddress": "서울 중구 서소문로9길 28",
    "ZibunAddress": "서울 중구 순화동 217",
    "PlaceName": null,
    "Region1depthName": null,
    "Region2depthName": null,
    "Region3depthName": null,
    "Status": 0,
    "Name": "덕수궁롯데캐슬오피스텔",
    "PrivateAreaP": 43,
    "PrivateAreaM": 141.9,
    "PublicAreaP": 50,
    "PublicAreaM": 165,
    "BathRoom": 2,
    "Direction": 5,
    "ViewCount": 12,
    "UpdateDate": "2021-06-25T16:20:15.000Z",
    "Lat": 37.563236441462,
    "Lng": 126.97033643868892,
    "ManageFee": 350000,
    "ManageFeeElectronic": null,
    "ManageFeeGas": null,
    "ManageFeeWater": null,
    "ManageFeeInternet": null,
    "ManageFeeTV": null,
    "Parking": 1,
    "Elevator": 1,
    "Loan": null,
    "Pet": null,
    "OwnerName": null,
    "OwnerPhone": null,
    "TenantName": null,
    "TenantPhone": null,
    "ManagerName": null,
    "ManagerPhone": null,
    "OptionAir": null,
    "OptionRefrig": null,
    "OptionWasher": null,
    "OptionGas": null,
    "OptionInduct": null,
    "OptionMicrowave": null,
    "OptionBook": null,
    "OptionBed": null,
    "OptionCloth": 1,
    "OptionBoot": 1,
    "OptionSync": null,
    "OriginalId": null,
    "IncomeText": null
  },
  {
    "Id": "8b4948be-faba-40fa-b243-fb07eb15ac72",
    "TradeType": 1,
    "Price": 170000,
    "Monthly": null,
    "Floor": "17",
    "TotalFloor": "32",
    "Room": 3,
    "Memo": "",
    "CreateDate": "2021-06-16T16:10:05.000Z",
    "ManagerId": "47d5daf5-4bba-4641-92a9-13b357851dc0",
    "AddressId": null,
    "Type": 5,
    "Link": "동탄 핫한 매물입니다 젊은 신혼부부 인기매물",
    "ItemId": "88806-2106002",
    "RoadAddress": "경기 화성시 동탄대로9길 19",
    "ZibunAddress": "경기 화성시 송동 693",
    "PlaceName": null,
    "Region1depthName": "서울",
    "Region2depthName": "용산구",
    "Region3depthName": "이태원동",
    "Status": 0,
    "Name": "동탄2하우스디더레이크아파트",
    "PrivateAreaP": 32,
    "PrivateAreaM": 105.6,
    "PublicAreaP": 27,
    "PublicAreaM": 89.1,
    "BathRoom": 2,
    "Direction": 4,
    "ViewCount": 10,
    "UpdateDate": "2021-06-25T16:13:21.000Z",
    "Lat": 37.17396472107375,
    "Lng": 127.10401032811814,
    "ManageFee": 300000,
    "ManageFeeElectronic": 0,
    "ManageFeeGas": 0,
    "ManageFeeWater": 0,
    "ManageFeeInternet": null,
    "ManageFeeTV": null,
    "Parking": 0,
    "Elevator": 1,
    "Loan": null,
    "Pet": null,
    "OwnerName": null,
    "OwnerPhone": null,
    "TenantName": null,
    "TenantPhone": null,
    "ManagerName": null,
    "ManagerPhone": null,
    "OptionAir": 0,
    "OptionRefrig": null,
    "OptionWasher": 0,
    "OptionGas": 1,
    "OptionInduct": null,
    "OptionMicrowave": null,
    "OptionBook": null,
    "OptionBed": null,
    "OptionCloth": 1,
    "OptionBoot": 1,
    "OptionSync": 1,
    "OriginalId": null,
    "IncomeText": null
  }
],
				listingArray: [],
				allSelected: false,
		}
	},
	    methods: {
        selectAll() {
            this.listingArray = [];

            if (!this.allSelected) {
                for (this.listing in this.listings) {
                    this.listingArray.push(this.listings[this.listing].Id);
                }
            }
        },

    async submitHandler (data) {
      await this.$localForage.setItem('selListings', data)
      this.$router.push('/app')
    },
  
    }
}
</script>