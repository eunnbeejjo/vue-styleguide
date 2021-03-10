<template>
  <div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front ui-draggable" tabindex="-1" role="dialog" aria-describedby="Confirm_Delete_Object" aria-labelledby="ui-id-1" style="height: auto; width: 440px; top: 188px; left: 594px; display: block;">
    <div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">
      <span id="ui-id-1" class="ui-dialog-title">주의 : 삭제된 정보는 롤백(복원) 할 수 없습니다</span>
      <button class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-dialog-titlebar-close" role="button" aria-disabled="false" title="close">
        <span class="ui-button-icon-primary ui-icon ui-icon-closethick"></span>
        <span class="ui-button-text">close</span>
      </button>
    </div>
    <div id="Confirm_Delete_Object" class="modal ui-dialog-content ui-widget-content" style="width: auto; min-height: 180px; max-height: 480px; height: auto;">
      <div class="modal_close"><i class="material-icons px20">close</i></div>
      <div class="modal_content">
        <i class="material-icons px48 left">warning</i>
        <div class="block">
          <p class="">이 메세지는 민감성 정보 취급 또는 시스템 설정 변경에 있어 인가된 사용자의 확인이 필요한 경우 표시됩니다.</p>
          <p class="">취급 권한 확인을 위해 패스워드를 입력해주십시오.</p>
        </div>
        <div class="block bar warning ">
          <!-- 아래 문단(Paragraph)(은)는 패스워드를 잘못 입력했을 경우 표시 -->
          <p class="t_red clear"><i class="material-icons">error_outline</i>인증 실패, 패스워드를 다시 입력해 주십시오.</p>
        </div>
        <div class="block bar">
          <div class="obj w80">
            <!-- 패스워드 입력(최대20자리) -->
            <label for="pwConfirmDelete" class="top">Password</label>
            <input type="password" name="pwConfirmDelete" id="pwConfirmDelete" value="" maxlength="20">
          </div>
          <div class="obj w20 padding_right_none">
            <label class="top_nbsp"></label>
            <button id="" class="red right" accesskey="" title="" onclick="location.href='#'"><i class="material-icons">done</i>확인</button>
          </div>
        </div>
      </div><!-- modal_content end -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DeletePopup"
}
</script>

<style scoped>

</style>