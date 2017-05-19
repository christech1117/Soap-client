<template lang="pug">
  #forget-pass
    .container
      .row
        .col-xs-12.col-sm-12.col-md-6.col-md-offset-3
          .panel
            img(src='/static/imgs/forget.svg', alt='')
            .section-header
              h1
                i.fa.fa-lock(aria-hidden='true')
                | 忘記密碼
            form(action='')
              .form-group
                i.fa.fa-envelope.fa-2x(aria-hidden='true')
                label.sr-only(for='email') 電子郵件
                input#email.form-control(type='email', placeholder='電子郵件')
              router-link(:to="{ path: '/login' }")
                button.btn.btn-primary.btn-lg.btn-block(type='submit') 送出
              router-link(:to="{ path: '/register' }")
                button.btn.btn-link.btn-block(type='button') 成為會員
</template>

<script>
export default {
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'

</style>
