<template>
<div>
  <div>
    <p v-if="dog">멍멍</p>
    <p v-else>왈왈</p>
    <v-btn @click="dog = !dog">얍!</v-btn>
  </div>

  <v-divider class="ma-3"></v-divider>

  <div>
    {{ count }} -> {{ count3=count*3 }}
    <v-btn @click="count ++">클릭</v-btn>
    {{ isLargerThanTen }}
    <p>Reversed Message : "{{ aa() }}"</p>
  </div>
  <div>
    <p>countee : {{ countee }}</p>
    <p>countee2 : {{ countee2 }}</p>
    <p>computed : {{ double }}</p>
    <p>methods : {{ triple() }}</p>
    <v-btn @click="countee++">클릭!!!</v-btn>
    <v-btn @click="countee2++">클릭@@@</v-btn>
  </div>
  <v-divider class="ma-3"></v-divider>
  <form name="sw_write_form" method="post" enctype="multipart/form-data" action="">
    <input type="file" name="file[]" size="50" class="input_write" multiple="multiple" />
    <a href="javascript:sw_file_add(50, 'class=input_write');">파일 추가</a>
    <!-- 여기에 추가가 된다. -->
    <div id="sw_file_add_form" style="background-color: red;"></div>
  </form>
  <v-divider class="ma-3"></v-divider>
  <div>
    <input type="file" multiple>
  </div>
  <div>
    <v-textarea class="ma-5" v-model="name"></v-textarea>
    {{ name }}
  </div>

  <v-divider class="ma-3"></v-divider>

</div>
</template>

<script>
export default {
  name: "VuePractice",
  props: {

  },
  data () {
    return {
      dog: true,
      count: 0,
      count3: 0,
      countee: 0,
      countee2: 0,
      message: "apple",
      name: "EUNNBEE",
    }
  },
  computed: {
    isLargerThanTen: function () {
      return this.count3 > 10 ? "10보다 큽니다." : "10보다 작거나 같습니다."
    },
    double: function () {
      console.log('Computed')
      return this.countee * 2
    },
  },
  methods: {
    aa: function () {
      /*문자 거꾸로 출력되는거*/
      return this.message.split('').reverse().join('')
    },
    triple: function () {
      console.log('methods')
      return this.countee * 3
    },
    sw_file_add: function (size, ext) {
      let uf = ''
      eval('sw_file_add_form' + uf).innerHTML += "<input type=file name=file[] size='" + size + "' " + ext + "><div id='sw_file_add_form" + (uf+1) + "'></div>"
      uf++
    }
  },
}
</script>

<style scoped>

</style>