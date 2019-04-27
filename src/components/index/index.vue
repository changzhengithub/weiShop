<template>
  <!-- s  首页-->
  <section class="index">
    <div class="index-banner">
      <swiper class="banner-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide><img src="../../assets/image/banner.png"></swiper-slide>
        <swiper-slide><img src="../../assets/image/banner.png"></swiper-slide>
        <swiper-slide><img src="../../assets/image/banner.png"></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="index-summary">
      <div class="summary-badge"><span>活动促销</span></div>
      <p class="summary-title"><span>卡姿兰气场细闪石榴珠红色·润采诱光唇</span> <span>07#石榴朱红</span></p>
      <div class="summary-price">
        <span>￥155</span>
        <span>已售3581</span>
      </div>
    </div>
    <div class="index-service">
      <div class="service-list">
        <div class="list-item">
          <div class="item-icon"><img src="../../assets/image/service.png"></div>
          <span>全国包邮</span>
        </div>
        <div class="list-item">
          <div class="item-icon"><img src="../../assets/image/service.png"></div>
          <span>假一赔三</span>
        </div>
        <div class="list-item">
          <div class="item-icon"><img src="../../assets/image/service.png"></div>
          <span>7天退换货 </span>
        </div>
        <div class="list-item">
          <div class="item-icon"><img src="../../assets/image/service.png"></div>
          <span>货到付款 </span>
        </div>
      </div>
      <div class="service-text"><span>全国包邮·下单不用先掏钱·货到满意后再付款</span></div>
    </div>
    <div class="index-detail">
      <div class="detail-title">
        <div class="title-text"><span>商品详情</span></div>
      </div>
      <ul class="detail-photos">
        <li class="photos-item">
          <img src="../../assets/image/detail01.png">
        </li>
        <li class="photos-item">
          <img src="../../assets/image/detail02.png">
        </li>
        <li class="photos-item">
          <img src="../../assets/image/detail03.png">
        </li>
        <li class="photos-item">
          <img src="../../assets/image/detail04.png">
        </li>
      </ul>
      <div class="detail-tip">
        <div class="tip-title">
          <span>抢购描述-电话订购请告知客服产品款号</span>
        </div>
        <p class="tip-describe">1.新款色号不做特价活动</p>
        <p class="tip-describe">2.全国包邮，货到付款,7天无理由退换货！</p>
        <p class="tip-describe">3.发现非正品，商家承担来回运费，真正放心购物！</p>
        <p class="tip-describe"><span>电话订购：</span><span>请拨打在线客服座机0551-5565668或18905585656即可订购。</span></p>
      </div>
    </div>
    <div class="index-order" ref="order">
      <div class="order-title"><span>订单信息</span></div>
      <div class="order-info">
        <div class="info-img"><img src="../../assets/image/detail05.png" alt="商品"></div>
        <div class="info-detail">
          <p class="detail-name"><span>【限时活动】</span><span>气场细闪石榴珠红色·润采诱光唇膏口红</span></p>
          <p class="detail-price">￥{{paramsIndex != null ? shopInfo.shopParams[paramsIndex].univalence : shopInfo.shopPrice}}</p>
        </div>
      </div>
      <div class="order-params">
        <div class="params-title"><span>色号</span></div>
        <div class="params-list">
          <div class="list-item" :class="{active: paramsIndex == index}" v-for="(item, index) in shopInfo.shopParams" :key="index" @click="selectParam(index)"><span>{{item.params}}</span></div>
        </div>
      </div>
      <div class="order-params">
        <div class="params-title"><span>尺寸</span></div>
        <div class="params-list">
          <div class="list-item" :class="{active: sizeIndex == index}" v-for="(item, index) in shopInfo.sizeParamList" :key="index" @click="selectSize(index)"><span>{{item}}</span></div>
        </div>
      </div>
      <div class="order-num">
        <div class="num-title"><span>购买数量</span></div>
        <div class="num-switch">
          <div class="switch-cut" @click="cutBuyNum"><span>-</span></div>
          <div class="switch-text"><span>{{buyNum}}</span></div>
          <div class="switch-add" @click="addBuyNum"><span>+</span></div>
        </div>
      </div>
    </div>
    <div class="index-receive">
      <div class="receive-title"><span>收货信息</span></div>
      <div class="receive-list">
        <div class="list-item">
          <div class="item-title"><span>收货人</span></div>
          <div class="item-detail">
            <input type="text" v-model="receiveName" placeholder="请填写姓名">
          </div>
        </div>
        <div class="list-item">
          <div class="item-title"><span>联系方式</span></div>
          <div class="item-detail">
            <input type="number" v-model="receivePhone" placeholder="请填写手机号码">
          </div>
        </div>
        <div class="list-item">
          <div class="item-title"><span>地区</span></div>
          <div class="item-detail">
            <div class="detial-address"  @click="openProvince">
              <div class="address-title" :class="{active: province != '省份'}">{{province}}</div>
              <div class="address-select" v-if="provinceShow">
                <div class="select-area" :class="{active: addressIndex == index}" v-for="(province, index) in provinceList" :key="index" @click.stop="getProvince(province, index)"><span>{{province}}</span></div>
              </div>
            </div>
            <div class="detial-address" @click="openCity">
              <div class="address-title" :class="{active: city != '城市'}">{{city}}</div>
              <div class="address-select" v-if="cityShow">
                <div class="select-area" :class="{active: addressIndex == index}" v-for="(city, index) in cityList" :key="index" @click.stop="getCity(city, index)"><span>{{city}}</span></div>
              </div>
            </div>
            <div class="detial-address" @click="openArea">
              <div class="address-title" :class="{active: area != '区域'}">{{area}}</div>
              <div class="address-last" v-if="areaShow">
                <div class="last-area" :class="{active: addressIndex == index}" v-for="(area, index) in areaList" :key="index" @click.stop="getArea(area, index)"><span>{{area}}</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <div class="item-title"><span>详细地址</span></div>
          <div class="item-detail">
            <input type="text" v-model="receiveAddress" placeholder="请填写详细地址">
          </div>
        </div>
        <div class="list-item">
          <div class="item-title"><span>买家留言</span></div>
          <div class="item-detail">
            <input type="text" v-model="leaveMessage" placeholder="(选填)备注您的要求">
          </div>
        </div>
      </div>
      <div class="receive-empower">
        <div class="empower-select">
          <img src="../../assets/image/select.png">
        </div>
        <div class="empower-text"><span>授权该商家发送与此订单相关的短信通知</span></div>
      </div>
    </div>
    <div class="index-tel">
      <div class="tel-detail">
        <p class="detail-title">合肥市某某有限公司</p>
        <p class="detail-text">电话订购：0551-5565668</p>
      </div>
      <div class="tel-btn">
        <a :href="'tel:' + '0551-5565668'"><img src="../../assets/image/tel.png" alt="tel"></a>
      </div>
    </div>
    <div class="index-buy">
      <div class="but-info" v-if="totalNumShow"><span>货到付款：</span><span>￥{{orderNum}}</span></div>
      <div class="but-right" :class="{active: totalNumShow}" @click="gotoPage('order')"><span>立即购买</span></div>
    </div>
    <!-- <section class="index-modal">
      <div class="modal-select">
        <ul class="select-list">
          <li class="list-item" :class="{active: false}" v-for="(item, index) in itemList" :key="index" @click.stop="selectItem(item)">
            <div class="select-area"><span>{{item}}</span></div>
          </li>
        </ul>
      </div>
    </section> -->
  </section>
  <!-- e  首页-->
</template>

<script>
import Toast from '../common/toast/toast.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { provinces as provinceList, cities } from '../../class/address.class.js'
import Http from '../../class/Http.class.js'
import Storage from '../../class/Storage.class.js'
import Check from '../../class/Check.class.js'
export default {
  name: 'IndexComponent',
  data () {
    return {
      swiperOption: {
        loop:true,
        autoplayDisableOnInteraction: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        autoplay : {
          disableOnInteraction: false,
          delay: 3000
        },
        observer: true,
        speed: 300,
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'index-pagination-bullet',
          bulletActiveClass: 'index-pagination-bullet-active'
        }
      },
      receiveName: '',
      receivePhone: '',
      receiveAddress: '',
      leaveMessage: '',
      province: '省份',
      city: '城市',
      area: '区域',
      provinceShow: false,
      cityShow: false,
      areaShow: false,
      addressList: cities,
      provinceList: provinceList,
      cityList: ['城市'],
      areaList: ['区域'],
      paramsIndex: null,
      sizeIndex: null,
      sizeParam: '',
      buyNum: 1,
      shopInfo: {
        shopName: '卡姿兰气场细闪石榴珠红色·润采诱光唇',
        shopPrice: '111',
        shopParams: [
          {
            params: '2#橙子慕思橙子慕思',
            univalence: '155'
          },{
            params: '3#橙子慕思',
            univalence: '156'
          },{
            params: '4#慕思',
            univalence: '157'
          },{
            params: '5#橙子慕思',
            univalence: '158'
          },{
            params: '6#橙子慕思',
            univalence: '159'
          },{
            params: '7#橙子慕思橙子慕思',
            univalence: '160'
          },{
            params: '8#橙子',
            univalence: '152'
          },{
            params: '9#橙子慕',
            univalence: '154'
          }
        ],
        sizeParamList: ['39', '40', '41', '42', '43', '44', '45']
      },
      orderNum: '',
      telToastShow: false,
      currentTop: 0,
      totalNumShow: false,
      addressIndex: null
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.orderNum = this.shopInfo.shopPrice
    // this.init()
  },
  mounted () {
  },
  methods: {
    init () {
      this.getData()
    },
    getData () {
      Http.send({
        url: '',
        data: {}
      }).success(data => {
        this.$router.push({
          name: page
        })

      }).fail(data => {
        this.$toast(data.message)
      })
    },
    selectParam (index) {
      this.paramsIndex = index
      this.orderNum = parseInt(this.shopInfo.shopParams[index].univalence) * this.buyNum
      if (this.sizeIndex !== null) this.totalNumShow = true
    },
    selectSize (index) {
      this.sizeIndex = index
      this.sizeParam = this.shopInfo.sizeParamList[index]
      if (this.paramsIndex !== null) this.totalNumShow = true
    },
    cutBuyNum () {
      if (this.buyNum === 1) return
      this.buyNum--
      if (this.paramsIndex !== null) this.orderNum = parseInt(this.shopInfo.shopParams[this.paramsIndex].univalence) * this.buyNum
    },
    addBuyNum () {
      this.buyNum++
      if (this.paramsIndex !== null) this.orderNum = parseInt(this.shopInfo.shopParams[this.paramsIndex].univalence) * this.buyNum
    },
    telService () {
      this.telToastShow = true
    },
    closeService () {
      this.telToastShow = false
    },
    cancelTel () {
      this.telToastShow = false
    },
    sureTel () {
      this.telToastShow = false
    },
    openProvince () {
      this.provinceShow = !this.provinceShow
      this.addressIndex = null
      this.cityShow = false
      this.areaShow = false
    },
    openCity () {
      this.cityShow = !this.cityShow
      this.addressIndex = null
      this.provinceShow = false
      this.areaShow = false
    },
    openArea () {
      this.areaShow = !this.areaShow
      this.addressIndex = null
      this.provinceShow = false
      this.cityShow = false
    },
    getProvince (province, index) {
      this.addressIndex = index
      this.provinceShow = false
      if (this.province === province) return
      this.province = province
      let cityList = []
      for (const key in this.addressList[province]) {
        cityList.push(key)
      }
      this.cityList = cityList
      this.areaList = ['区域']
      this.city = '城市'
      this.area = '区域'
    },
    getCity (city, index) {
      this.addressIndex = index
      this.cityShow = !this.cityShow
      if (this.city === city) return
      if (city === '城市') return
      this.city = city
      this.areaList = this.addressList[this.province][city] ? this.addressList[this.province][city] : ['区域']
      this.area = '区域'
    },
    getArea (area, index) {
      this.addressIndex = index
      this.areaShow = !this.areaShow
      this.area = area
    },
    gotoPage (page) {
      if (this.paramsIndex === null || this.sizeIndex === null) {
        this.scroll()
        Toast({
          content: '请选择参数'
        })
        return
      }
      if (!Check.name(this.receiveName)) return
      if (!Check.phone(this.receivePhone)) return
      if (!this.province || this.province === '省份') {
        Toast({
          content: '请输入地址'
        })
        return
      }
      if (!this.city || this.city === '城市') {
        Toast({
          content: '请输入地址'
        })
        return
      }
      if (this.areaList[0] !== '区域' && this.area === '区域') {
        Toast({
          content: '请输入地址'
        })
        return
      }
      if (!this.receiveAddress) return
      this.$router.replace({
        name: page
      })
      // this.requestOrder()
    },
    requestOrder () {
      Http.send({
        url: '',
        data: {}
      }).success(data => {
        this.$router.push({
          name: page
        })
      }).fail(data => {
        this.$toast(data.message)
      })
    },
    scroll () {
      let goalTop = this.$refs.order.offsetTop
      this.currentTop = document.documentElement.scrollTop || document.body.scrollTop
      let direction = 1
      let speed = 15
      let animation = setInterval(() => {
        if (Math.abs(this.currentTop - goalTop) <= 8) {
          clearInterval(animation)
          this.currentTop = goalTop
        } else {
          if (goalTop < this.currentTop) {
            direction = -1
          } else if (goalTop > this.currentTop) {
            direction = 1
          }
          this.currentTop += direction * speed
        }
        document.body.scrollTop = this.currentTop
        document.documentElement.scrollTop = this.currentTop
      }, 3)
    }
  },
  computed: {
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    }  
  }
}
</script>

<style lang="sass">
@import "./index.scss";
</style>
