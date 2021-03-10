<template>
  <div>
    <h2>SMS 대량문자발송</h2>
    <div>
      <div class="sms_left" style="background-color: #37474F; width: 50%; float: left;">
        <input type="text" placeholder="제목" style="display: block;">
        <input type="file" id="input_file" style="display: none;">
        <label for="input_file">이미지 첨부</label>
        <div>
          <textarea id="textarea01">보내는 내용</textarea>
          <div>
            <span id="cntSPAN" >0</span>&nbsp;<span>bytes</span>
          </div>
        </div>
        <button>문자 발송</button>
      </div>
      <div class="sms_right" style="background-color: palevioletred; width: 50%; float: right;">
        <table>
          <tr>
            <td>발신 번호</td>
            <td>
              <v-select name="phone" :items="items">
                <option value="01">1234-1234</option>
                <option value="02">2234-2234</option>
                <option value="03">3334-3334</option>
              </v-select>
            </td>
          </tr>
          <tr>
            <td>파일</td>
            <td>
              <input type="file">
              <p>XLS파일을 선택하세요<br>
                샘플파일 형식에 맞게 SMS 정보를 작성해주세요</p>
              <a href="#" download>
                <p>샘플파일</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>치환</td>
            <td>
              <button>A치환</button>
              <button>B치환</button>
              <button>C치환</button>
              <button>D치환</button>
              <button>E치환</button>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <form method="post" action="upload" enctype="multipart/form-data">
      <div>
        file: <input type="file" name="file" accept="image/*">
      </div>
      <input type="submit">
    </form>

    <div>
      <v-file-input v-model="files" placeholder="Files" label="File input" multiple prepend-icon="mdi-paperclip">
        <template v-slot:selection="{ text }">
          {{ text }}<br>
        </template>
      </v-file-input>
    </div>

  </div>
</template>

<script>
export default {
  name: "SmsPopup",
  data: () => ({
    items: ['1234-1234', '2234-2234', '3334-3334'],
    files: [],
  }),
}
</script>

<style scoped>
  input {background-color: #ffffff; margin: 5px; width: 80%;}
  textarea {background-color: #ffffff; margin: 5px; width: 80%; height: 200px; overflow: scroll;}
  #input_file~label {background-color: white;}
  table {width: 100%;}
  table tr td {border-bottom: 1px solid #000; border-right: 1px solid red; background-color: white;}
  table tr td:first-child {text-align: center; width: 20%;}
  table tr td:last-child {width: 80%; padding: 5px 10px;}
  tr td button {display: block;}
</style>