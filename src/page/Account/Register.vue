<template lang="pug">
  #register
    .container
      .row
        .col-xs-12.col-sm-12.col-md-6.col-md-offset-3
          .panel
            img(src='/static/imgs/user.svg', alt='user-image')
            .section-header
              h1 會員註冊
            form(action='')
              .form-group
                i.fa.fa-id-card-o.fa-2x(aria-hidden='true')
                label.sr-only(for='name') 姓名
                input.form-control(type='text', placeholder='您的姓名')
              .form-group
                i.fa.fa-phone.fa-2x(aria-hidden='true')
                label.sr-only(for='phone') 行動電話
                input#phone.form-control(type='number', placeholder='行動電話')
              .form-group
                i.fa.fa-envelope.fa-2x(aria-hidden='true')
                label.sr-only(for='email') 電子郵件
                input.form-control(type='email', placeholder='電子郵件')
              .form-group
                i.fa.fa-key.fa-2x(aria-hidden='true')
                label.sr-only(for='password') 您的密碼
                input.form-control(type='password', placeholder='您的密碼')
              .form-group
                i.fa.fa-key.fa-2x(aria-hidden='true')
                label.sr-only(for='Confirm password') 密碼確認
                input.form-control(type='password', placeholder='密碼確認')
              router-link(:to="{ path: '/login' }")
                button.btn.btn-primary.btn-lg.btn-block(type='submit') 註冊
              router-link(:to="{ path: '/login' }")
                button.btn.btn-link.btn-block(type='button') 已經是會員
</template>

<script>
export default {
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'

</style>
